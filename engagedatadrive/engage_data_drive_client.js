import axios from 'axios';
import {EventflowRequest, SignalPayload} from "./eventflow_request";
import { v4 as uuidv4 } from 'uuid';


export class EngageDataDriveClient {
    constructor(baseUrl, apiKey) {
        this.client = axios.create({
            baseURL: baseUrl,
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + apiKey}
        });
    }


    signal(identifier, stepNodeId, emitterId) {
        const signalPayload: SignalPayload =
            new SignalPayload(emitterId, stepNodeId, null, identifier);

        this.sendEventFlow(new Array(signalPayload));
    }

    sendEventFlow(signals: Array[SignalPayload]) {
        const requestIdentifier = uuidv4();
        const requestDto: EventflowRequest = new EventflowRequest(requestIdentifier.toString(), signals);
        this.client.post('event-flows/signal', requestDto).then((value) => {
            console.info('post signal response', value);
        });
    }

}