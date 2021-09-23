
import { updateTrainingData } from "../chatbot-platform-connector/platforms/cai/connector.ts";
import { transform } from "../nlp-data-parser/transform/markdown.ts";
import { INLPDataStructure } from "../shared/interfaces.ts";

const markdownContent = Deno.args[0]
const botToken = Deno.args[1]

export class Transformer {

    public transform(data: any) {

        try {

            const transformationResult = transform(data, '')

            console.log(transformationResult)

            return transformationResult

        } catch (err) {

            console.log(err)

        }

    }

    public async updateTrainingData(transformationResult: INLPDataStructure[]) {

        try {

            const response = await updateTrainingData(transformationResult);

            console.log(response)

        } catch (err) {

            console.log(err)

        }
    }

}

const transformer = new Transformer()

const transformationResult = transformer.transform(markdownContent)

await transformer.updateTrainingData(transformationResult as INLPDataStructure[])

