
// option 1 starting the microservice for each bot with individual credentials 

export class UpdateService {

    public startListening(port: number) {
        const express = require('express')
        const app = express()

        app.get('/registeredBots', function (req, res) {
            res.send("https://cai.tools.sap/tools-team/tobi-sapjira")
        })

        // app.post('/addBot', function (req, res) {
        //     res.send('Hello World')
        // })

        // app.post('/removeBot', function (req, res) {
        //     // res.send('Hello World')
        // })

        console.log(`update service is listening at http://localhost:${port}`)
        app.listen(port)

    }

    public startInterval(url: string, clientSecret: string) {

        setInterval(() => {


            console.log(`checking for updates in ${url}`)
            const contentFromMDFile = ""
            const transformedContent = "" // https://github.com/michael-spengler/cai-faq-synch-hackathon-prep/blob/main/src/nlp-data-parser/transform/markdown.ts


            // post transformed content to CAI --> https://github.com/michael-spengler/cai-faq-synch-hackathon-prep/tree/main/src/chatbot-platform-connector/platforms/cai

        }, 1 * 1000)
    }

}

const url = process.argv[2]
const clientSecret = process.argv[3]
const updateService = new UpdateService()

updateService.startListening(3000)
updateService.startInterval(url, clientSecret)


