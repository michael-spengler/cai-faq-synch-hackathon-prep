import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import { transform } from "../nlp-data-parser/transform/markdown.ts";
import { Persistence } from "https://deno.land/x/persistence@v1.4.1/mod.ts"


Deno.test("should transform markdown to json", async () => {

    const urlOfTransformerMicroservice = ''
    const urlToMarkdown = 'not needed atm'

    const pathToTestDataFile = `${Deno.cwd()}/src/tests/test-data/`

    const testDataFileName = "test-transformer-can-handle-quotes.md";
    const testDataTransformedFileName = "test-transformer-can-handle-quotes-expected.json";

    const data = await Persistence.readFromLocalFile(`${pathToTestDataFile}${testDataFileName}`)
    const dataExpectedResult = JSON.parse(await Persistence.readFromLocalFile(`${pathToTestDataFile}${testDataTransformedFileName}`))

    const transformationResult = transform(data, urlToMarkdown)

    await Persistence.saveToLocalFile(pathToTestDataFile + "transformationresult.json", JSON.stringify(transformationResult));

    // assertStrictEquals(1, 1)
    assertEquals(transformationResult.length, dataExpectedResult.length)

})