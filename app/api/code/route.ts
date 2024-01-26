import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import  {ChatCompletionRequestMessage, Configuration, OpenAIApi} from "openai"
import { increaseApiFreeUsage, checkApiFreeTrial } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const instructionMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator. You must answer in markdown code snippets. Use only code comments for explanations. If a question was made and is not related to coding or a associated technology, you must answer exactly this: I am code generator, ask me a code related question"
}

export async function POST(
    req: Request
) {
    try {
        const {userId} = auth()
        const body = await req.json()
        const {messages} = body

        if(!userId) { return new NextResponse("Unauthorized", {status: 401}) }
        
        if(!configuration.apiKey) { return new NextResponse("API key not configurated", {status: 500}) }

        if(!messages)  { return new NextResponse("Messages are required", {status: 400}) }
        
        const freeTrial = await checkApiFreeTrial()
        const isPro = await checkSubscription()

        if(!freeTrial && !isPro)  { return new NextResponse("Free trial expired", {status: 403}) }

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        })

        if(!isPro) {
            await increaseApiFreeUsage()
        }
        return NextResponse.json(response.data.choices[0].message)

    } catch(error) {
        console.log("[CODE-ERROR]", error)
        return new NextResponse("Internal error", {status: 500})
    }
}