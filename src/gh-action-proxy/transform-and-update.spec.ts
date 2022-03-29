import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { GHActionProxy } from "./transform-and-update.ts"


Deno.test("should transform markdown to json", async () => {

    // via API (and?) the method call itself (e.g. GHActionProxy.transform())
    assertEquals(1, 1)

})
