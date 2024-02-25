import { OpenAIEmbeddings } from "@langchain/openai"
export default async function() {
  const model = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    modelName: "gpt-4-1106-preview",
  })
  return Response.json({
    msg: 'foo'
  })
}
