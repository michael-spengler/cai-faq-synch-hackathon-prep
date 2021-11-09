import marked from "https://esm.sh/marked@2.1.3";
import GithubSlugger from "https://esm.sh/github-slugger@1.3.0";
import type { INLPDataStructure } from "../../shared/interfaces.ts";

const slugger = new GithubSlugger();
// const dataAnswerLimit = parseInt(Deno.env.get("ANSWER_LIMIT")!)

/** Comment Regex for alternative questions
 * Case insensitive match
 * Questions are separated by a newline
 */
export const alternativeQuestionsRegex =
/<!--*((.|\n)*)-->/;

/** NLP Markdown data to universal NLP data
 * @param markdown markdown content in text form
 * @param url The link where the document can be found (ideally GitHub)
 */
export function transform(markdown: string, url: string, dataAnswerLimit: number = 50000): INLPDataStructure[] {

  const groups = splitHorizontalLines(marked.lexer(markdown));

  const result: INLPDataStructure[] = [];

  for (const group of groups) {
    const data: INLPDataStructure = {
      mainQuestion: "",
      alternativeQuestions: [],
      answer: "",
    };

    // Question parsing
    for (const token of group) {
      switch (token.type) {
        case "heading":
          if (token.depth === 3) {
            data.mainQuestion = token.text;
          } else if (token.depth > 3) {
            data.alternativeQuestions.push(token.text);
          }
          break;
        case "html":
          const text = token.raw.trim();
          const alternative = text.match(alternativeQuestionsRegex);
          if (alternative !== null) {
            data.alternativeQuestions.push(
              ...alternative[1].split("\n")
                .filter((question: any) => !question.match(/^\s*$/)),
            );
          }
          break;
      }
    }

    const headerLink = `${url}#${slugger.slug(data.mainQuestion)}`;
    data.answer = parseBody(group, headerLink).trim();

    data.mainQuestion ||= "⚠ Error: no question provided ⚠";
    data.answer ||= "⚠ Error: no answer provided ⚠";

    if (data.answer.length > dataAnswerLimit) {
      data.answer =
        `Please visit the [FAQ](${headerLink}) for a detailed answer to your question.`;
    }

    result.push(data);
  }

  slugger.reset();
  return result;
}

/** Markdown Body parser. Ignores headers & html content
 * Transforms incompatible content for the bot into links to the faq
 * @param tokens marked tokens
 * @param url The link to the corresponding header of the FAQ
 */
function parseBody(tokens: marked.Token[], url: string): string {
  let body = "";
  for (const token of tokens) {
    switch (token.type) {
      case "image":
        body += `[View ${token.text || "image"}](${url})`;
        break;
      case "paragraph":
        // @ts-ignore
        body += parseBody(token.tokens, url);
        break;
      case "heading":
      case "html":
        break;
      default:
        body += token.raw;
        break;
    }
  }
  return body;
}

/** Splits marked tokens by horizontal rules
 * @param tokens marked tokens
 */
function splitHorizontalLines(tokens: marked.TokensList): marked.Token[][] {
  const result: marked.Token[][] = [[]];

  for (const token of tokens) {
    if (token.type === "hr") {
      result.push([]);
    } else {
      result.at(-1)!.push(token);
    }
  }
  if (result.at(-1)!.length === 0) {
    result.pop();
  }

  return result;
}
