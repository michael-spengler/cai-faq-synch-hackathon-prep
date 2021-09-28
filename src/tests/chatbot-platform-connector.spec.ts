import { assertStrictEquals, fail } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import { GHActionProxy } from '../gh-action-proxy/transform-and-update.ts'
import { Persistence } from "https://deno.land/x/persistence@v1.4.1/mod.ts"
import { INLPDataStructure } from "../shared/interfaces.ts";


let markdownContent: any = Deno.args[0]
const userName = Deno.args[1]
const botName = Deno.args[2]
const botVersion = Deno.args[3]
const knowledgeSourceName = Deno.args[4]
const botToken = Deno.args[5]


if (markdownContent === 'seeLink') {

    console.log(`hey what's up`)
    // const pathToTestDataMarkdownFile = `${Deno.cwd()}/src/tests/test-data/`
    // const fileId = `${pathToTestDataMarkdownFile}test-transformer-can-handle-quotes.md`
    // console.log(`reading from file: ${fileId}`)
    // markdownContent = await Persistence.readFromLocalFile(fileId)

}



Deno.test("should update training data in CAI", async () => {

    // const urlOfPlatformConnectorMicroservice = ''

    // // call method under test
    // const response = await GHActionProxy.updateTrainingData(markdownContent, userName, botName, botVersion, knowledgeSourceName, botToken)

    // console.log(response)


    // assertStrictEquals(1, 1)

})