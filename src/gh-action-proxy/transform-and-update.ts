
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

    public static async updateTrainingData(transformationResult: INLPDataStructure[], userName: string, botName: string, botVersion: string, knowledgeSourceName: string, botToken: string) {

        try {

            const response = await updateTrainingData(transformationResult, userName, botName, botVersion, knowledgeSourceName, botToken);

            console.log(response)

        } catch (err) {

            console.log(err)

        }
    }

}


