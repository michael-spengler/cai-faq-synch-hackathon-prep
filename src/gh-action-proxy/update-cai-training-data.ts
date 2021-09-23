
import { updateTrainingData } from "../chatbot-platform-connector/platforms/cai/connector.ts";

const data = JSON.parse(Deno.args[0])

try {

    const response = await updateTrainingData(data);

    console.log(response)

} catch (err) {

    console.log(err)

}

