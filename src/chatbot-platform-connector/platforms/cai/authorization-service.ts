const CLIENT_ID = Deno.env.get("CLIENT_ID")!;
const CLIENT_SECRET = Deno.env.get("CLIENT_SECRET")!;
const AUTH_URL = Deno.env.get("AUTH_URL")!;

const authParams = new URLSearchParams({
  grant_type: "client_credentials",
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
}).toString();

let expiresIn = 0;
let accessToken = "";

export async function getValidToken() {
  if (expiresIn < Date.now() / 1000) {
    const data = await post(AUTH_URL, authParams);
    if (!data.ok) {
      throw new Error(
        `Error while fetching OAuth token: ${data.status} ${data.statusText}`,
      );
    }
    const json = await data.json();
    accessToken = json.access_token;
    expiresIn = (Date.now() / 1000) + 43200;
  }
  return accessToken;
}

async function post(url: string, body: BodyInit | null): Promise<Response> {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
}
