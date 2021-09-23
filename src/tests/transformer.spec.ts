import { assertStrictEquals, fail } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'
import { transform } from "../nlp-data-parser/transform/markdown.ts";
import { Persistence } from "https://deno.land/x/persistence@v1.4.1/mod.ts"


Deno.test("should transform markdown to json", async () => {

    const urlOfTransformerMicroservice = ''
    const urlToMarkdown = 'not needed atm'

    const pathToTestDataFile = `${Deno.cwd()}/src/tests/test-data/`

    const data = await Persistence.readFromLocalFile(`${pathToTestDataFile}test-transformer-can-handle-quotes.md`)

    // console.log(data)

    // integration test
    // const result = await Request.post(urlOfTransformerMicroservice, data)
    // console.log(result)

    // local unit test 
    const transformationResult = transform(data, urlToMarkdown)

    console.log(transformationResult)

    assertStrictEquals(1, 1)

})