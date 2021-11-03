
import { updateTrainingData } from "../chatbot-platform-connector/platforms/cai/connector.ts";
import { transform } from "../nlp-data-parser/transform/markdown.ts";
import { INLPDataStructure } from "../shared/interfaces.ts";

export class GHActionProxy {

    public static transform(data: any) {

        try {

            const transformationResult = transform(data, '')

            console.log(transformationResult)

            return transformationResult

        } catch (err) {

            console.log(err)

        }

    }

    public static async updateTrainingData(transformationResult: INLPDataStructure[], userName: string, botName: string, botVersion: string, knowledgeSourceName: string, botToken: string, authUrl: string, client_id:string, client_secret:string) {

        try {

            const response = await updateTrainingData(transformationResult, userName, botName, botVersion, knowledgeSourceName, botToken, authUrl, client_id, client_secret);

            console.log(response)

        } catch (err) {

            console.log(err)

        }
    }

}

const markdownContent: any = Deno.args[0]
const userName = Deno.args[1]
const botName = Deno.args[2]
const botVersion = Deno.args[3]
const knowledgeSourceName = Deno.args[4]
const botToken = Deno.args[5]
const authURL = Deno.args[6]
const clientId = Deno.args[7]
const clientSecret = Deno.args[8]

console.log("THE MARKDOWN", markdownContent);

const transformedData = GHActionProxy.transform(markdownContent) as INLPDataStructure[]

console.log(transformedData);

GHActionProxy.updateTrainingData(transformedData, userName, botName, botVersion, knowledgeSourceName, botToken, authURL, clientId, clientSecret)