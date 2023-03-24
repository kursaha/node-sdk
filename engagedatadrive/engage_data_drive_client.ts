import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {EventflowRequest, SignalPayload} from "./eventflow_request";
import { v4 as uuidv4 } from 'uuid';


export class EngageDataDriveClient {
    private client: AxiosInstance;
    constructor(baseUrl, apiKey) {
        this.client = axios.create({
            baseURL: baseUrl,
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + apiKey}
        });
    }

    signal(identifier, stepNodeId, emitterId): void {
        const signalPayload: SignalPayload = new SignalPayload(emitterId, stepNodeId, null, identifier);
        this.sendEventFlow(new Array(signalPayload)).then(value => {
            // ignore
        });
    }

    sendEventFlow(signals: Array<SignalPayload>): Promise<AxiosResponse<any>> {
        const requestIdentifier = uuidv4();
        const requestDto: EventflowRequest = new EventflowRequest(requestIdentifier.toString(), signals);
        return this.client.post('event-flows/signal', requestDto);
    }

    checkConnection(): Promise<AxiosResponse<string>> {
        return this.client.get('shopify/ping');
    }

    getAllEventFlow(): Promise<AxiosResponse<any>> {
        return this.client.get('shopify/event-flows');
    }

    getEventFlowDetails(id: number): Promise<AxiosResponse<any>> {
        return this.client.get(`shopify/event-flows/${id}`);
    }

}