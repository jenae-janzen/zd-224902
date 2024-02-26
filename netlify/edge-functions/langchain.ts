import {OpenAIEmbeddings} from '@langchain/openai'
export default async function() {
  const embeddings = new OpenAIEmbeddings({
    apiKey: process.env.OPENAI_API_KEY
  })
  return Response.json({
    msg: 'foo'
  })
}
