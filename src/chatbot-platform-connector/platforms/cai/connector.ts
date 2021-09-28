import { getValidToken } from "./authorization-service.ts";
import { INLPDataStructure } from "../../../shared/interfaces.ts";

// const X_TOKEN = Deno.env.get("X_TOKEN")!;
// const USER_NAME = Deno.env.get("USER_NAME")!;
// const BOT_NAME = Deno.env.get("BOT_NAME")!;
// const BOT_VERSION = Deno.env.get("BOT_VERSION")!;
// const KNOWLEDGE_SOURCE_NAME = Deno.env.get("KNOWLEDGE_SOURCE_NAME")!;

export interface INLPDataCAI {
  value: string;
  disabled?: boolean;
  questions_attributes: {
    value: string;
  }[];
}

export const exampleCAIData: INLPDataCAI[] = [{
  "value": "My answer",
  "disabled": true,
  "questions_attributes": [
    {
      "value": "A question?",
    },
  ],
}];

export async function updateTrainingData(data: INLPDataStructure[], userName: string, botName: string, botVersion: string, knowledgeSourceName: string, botToken: string) {
  const CAIData = NLPDataToCAIData(data);

  const accessToken = await getValidToken();

  const url =
    `https://api.cai.tools.sap/train/v2/users/${userName}/bots/${botName}/versions/${botVersion}/qna/topic/knowledge_sources/${knowledgeSourceName}/answers`;
  for (const questionAnswerPair of CAIData) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
        "X-Token": `Token ${botToken}`,
      },
      body: JSON.stringify(questionAnswerPair),
    });
    if (!response.ok) {
      throw new Error(
        `Error while posting CAI data: ${response.status} ${response.statusText}`,
      );
    }
  }
}

function NLPDataToCAIData(data: INLPDataStructure[]): INLPDataCAI[] {
  return data.map((nlp) => ({
    value: nlp.answer,
    disabled: false,
    questions_attributes: [
      ...nlp.alternativeQuestions.map((question) => ({
        value: question,
      })),
      { value: nlp.mainQuestion },
    ],
  }));
}
