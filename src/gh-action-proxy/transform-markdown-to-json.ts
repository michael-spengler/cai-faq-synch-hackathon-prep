
import { transform } from "../nlp-data-parser/transform/markdown.ts";

const data = Deno.args[0]

try {

    const transformationResult = transform(data, '')

    console.log(transformationResult)

} catch (err) {

    console.log(err)

}