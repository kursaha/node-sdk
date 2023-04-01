import { EventflowDetails } from '../engagedatadrive/eventflow_request'
import KursahaClient from '../kursaha_client'

test('connection test', async () => {
  const apiKey = process.env.KURSAHA_KEY
  console.log('got key as', apiKey)
  const kClient: KursahaClient = new KursahaClient(apiKey)
  const res: [EventflowDetails] = await kClient.edd.getEventFlowDetails(2)
  console.log(res)
  // expect(res.response).toBe('pong')
})
