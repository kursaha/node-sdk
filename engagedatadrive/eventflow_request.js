export class EventflowRequest {
    requestIdentifier : string;
    signals: Array[SignalPayload];
    constructor(requestIdentifier, signals) {
        this.requestIdentifier = requestIdentifier;
        this.signals = signals;
    }

}


export class SignalPayload {
    emitterId: string;
    stepNodeId: string;
    data: any;
    eventflowIdentifier: string;

    constructor(emitterId, stepNodeId, data, eventflowIdentifier) {
        this.emitterId = emitterId;
        this.stepNodeId = stepNodeId;
        this.data = data;
        this.eventflowIdentifier = eventflowIdentifier;
    }

}