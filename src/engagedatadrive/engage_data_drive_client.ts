import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { EventflowDetails, EventflowRequest, EventflowResponse, PingResponse, SignalPayload } from './eventflow_request'
import { v4 as uuidv4 } from 'uuid'
import axiosRetry from 'axios-retry'

export class EngageDataDriveClient {
  private readonly client: AxiosInstance

  constructor(baseUrl: string, apiKey: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: 60_000,
      headers: { Authorization: 'Bearer ' + apiKey, Accept: 'application/json' },
    })

    // Set up the axios-retry interceptor
    axiosRetry(this.client, {
      retries: 3,
      retryDelay: (retryCount) => retryCount * 1000,
      retryCondition: (error: AxiosError) =>
        error.code === 'ECONNABORTED' || error.code === 'ERR_NETWORK' || !error.response,
    })
  }

  signal(identifier: string, stepNodeId: string, emitterId: string): void {
    const signalPayload: SignalPayload = new SignalPayload(emitterId, stepNodeId, null, identifier)
    this.sendEventFlow(new Array(signalPayload)).then()
  }

  sendEventFlow(signals: Array<SignalPayload>): Promise<AxiosResponse<any>> {
    const requestIdentifier: string = uuidv4()
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
