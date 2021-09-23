import "https://deno.land/x/dotenv@v3.0.0/load.ts";

const variables = [
  "PORT",
  "CLIENT_ID",
  "CLIENT_SECRET",
  "AUTH_URL",
  "X_TOKEN",
  "USER_NAME",
  "BOT_NAME",
  "BOT_VERSION",
  "KNOWLEDGE_SOURCE_NAME",
];

for (const variable of variables) {
  if (Deno.env.get(variable) === undefined) {
    throw new Error(`Missing ${variable} environment variable`);
  }
}
