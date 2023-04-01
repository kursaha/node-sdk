import { PingResponse } from '../engagedatadrive/eventflow_request'
import KursahaClient from '../kursaha_client'

test('connection test', async () => {
  const apiKey = process.env.KURSAHA_KEY
  console.log('got key as', apiKey)
  const kClient: KursahaClient = new KursahaClient(apiKey)
  const res: PingResponse = await kClient.edd.checkConnection()
  expect(res.response).toBe('pong')
})
