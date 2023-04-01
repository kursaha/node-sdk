import { EventflowDetails, EventflowResponse, PingResponse } from '../engagedatadrive/eventflow_request'
import KursahaClient from '../kursaha_client'

test('connection test', async () => {
  const apiKey = process.env.KURSAHA_KEY
  const kClient: KursahaClient = new KursahaClient(apiKey)
  const res: PingResponse = await kClient.edd.checkConnection()
  expect(res.response).toBe('pong')
})

test('event flow list test', async () => {
  const apiKey = process.env.KURSAHA_KEY
  const kClient: KursahaClient = new KursahaClient(apiKey)
  const res: [EventflowResponse] = await kClient.edd.getAllEventFlow()
  expect(res.length).toBeGreaterThan(0)
})

test('event flow details test', async () => {
  const apiKey = process.env.KURSAHA_KEY
  const kClient: KursahaClient = new KursahaClient(apiKey)
  const res: [EventflowDetails] = await kClient.edd.getEventFlowDetails(3)
  expect(res.length).toBeGreaterThan(0)
})
