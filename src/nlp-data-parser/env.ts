import "https://deno.land/x/dotenv@v3.0.0/load.ts";

const variables = ["PORT", "ANSWER_LIMIT"];

for (const variable of variables) {
  if (Deno.env.get(variable) === undefined) {
    throw new Error(`Missing ${variable} environment variable`);
  }
}
