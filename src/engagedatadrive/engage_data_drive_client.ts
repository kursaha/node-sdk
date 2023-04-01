import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { EventflowDetails, EventflowRequest, EventflowResponse, PingResponse, SignalPayload } from './eventflow_request'
import { v4 as uuidv4 } from 'uuid'

export class EngageDataDriveClient {
  private client: AxiosInstance

  constructor(baseUrl: string, apiKey: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: 60_000,
      headers: { Authorization: 'Bearer ' + apiKey, Accept: 'application/json' },
    })
  }

  signal(identifier: string, stepNodeId: string, emitterId: string): void {
    const signalPayload: SignalPayload = new SignalPayload(emitterId, stepNodeId, null, identifier)
    this.sendEventFlow(new Array(signalPayload)).then()
  }

  sendEventFlow(signals: Array<SignalPayload>): Promise<AxiosResponse<any>> {
    const requestIdentifier = uuidv4()
    const requestDto: EventflowRequest = new EventflowRequest(requestIdentifier.toString(), signals)
    return this.client.post('event-flows/signal', requestDto)
  }

  async checkConnection(): Promise<PingResponse> {
    const response = await this.client.get<PingResponse>('sdk/ping')
    return response.data
  }

  async getAllEventFlow(): Promise<[EventflowResponse]> {
    const response = await this.client.get<[EventflowResponse]>('sdk/event-flows')
    return response.data
  }

  async getEventFlowDetails(eventFlowId: number): Promise<[EventflowDetails]> {
    const response = await this.client.get<[EventflowDetails]>(`sdk/event-flows/${eventFlowId}`)
    return response.data
  }
}
