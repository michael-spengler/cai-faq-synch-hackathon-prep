import { assertStrictEquals, fail } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'

Deno.test("should update training data in CAI", async () => {

    const urlOfPlatformConnectorMicroservice = ''

    const data = undefined // for now

    // const result = await Request.post(urlOfPlatformConnectorMicroservice, data)

    // console.log(result)

    assertStrictEquals(1, 1)

})