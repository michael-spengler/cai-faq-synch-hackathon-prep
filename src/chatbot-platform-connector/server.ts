import "./env.ts";
import { json, opine } from "https://deno.land/x/opine@1.7.2/mod.ts";
import { updateTrainingData as updateCAITrainingData } from "./platforms/cai/connector.ts";

const port = parseInt(Deno.env.get("PORT")!);
const app = opine();
const chatbotApp = opine();

app.use(json());
app.use("/chatbot-platform",chatbotApp);

chatbotApp.post("/cai", async function (req, res) {
  try {
    await updateCAITrainingData(req.body);
  } catch (err) {
    res.setStatus(400).send(`${err}`);
  }

  res.sendStatus(200);
});

app.listen(
  port,
  () => console.log(`server has started on http://localhost:${port} 🚀`),
);
