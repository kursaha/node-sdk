import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { EventflowRequest, PingResponse, SignalPayload } from './eventflow_request'
import { v4 as uuidv4 } from 'uuid'

export class EngageDataDriveClient {
  private client: AxiosInstance

  constructor(baseUrl: string, apiKey: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: 1000,
      headers: { Authorization: 'Bearer ' + apiKey, Accept: 'application/json', 'Access-Control-Allow-Origin': '*' },
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

  getAllEventFlow(): Promise<AxiosResponse<any>> {
    return this.client.get('sdk/event-flows')
  }

  getEventFlowDetails(id: number): Promise<AxiosResponse<any>> {
    return this.client.get(`sdk/event-flows/${id}`)
  }
}
