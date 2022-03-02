
// option 1 starting the microservice for each bot with individual credentials 

const url = process.argv[2]
const clientSecret = process.argv[3]

startInterval(url, clientSecret)

function startInterval(url: string, clientSecret: string) {

    setInterval(() => {


        console.log(`checking for updates in ${url}`)
        const contentFromMDFile = ""
        const transformedContent = "" // https://github.com/michael-spengler/cai-faq-synch-hackathon-prep/blob/main/src/nlp-data-parser/transform/markdown.ts


        // post transformed content to CAI --> https://github.com/michael-spengler/cai-faq-synch-hackathon-prep/tree/main/src/chatbot-platform-connector/platforms/cai

    }, 1 * 1000)
}

