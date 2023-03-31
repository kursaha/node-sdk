export class EventflowRequest {
    requestIdentifier : string;
    signals: Array<SignalPayload>;
    constructor(requestIdentifier:string, signals:Array<SignalPayload>) {
        this.requestIdentifier = requestIdentifier;
        this.signals = signals;
    }

}


export class SignalPayload {
    emitterId: string;
    stepNodeId: string;
    data: any;
    eventflowIdentifier: string;

    constructor(emitterId: string, stepNodeId: string, data: any, eventflowIdentifier: string) {
        this.emitterId = emitterId;
        this.stepNodeId = stepNodeId;
        this.data = data;
        this.eventflowIdentifier = eventflowIdentifier;
    }

}