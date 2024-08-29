export class EventflowRequest {
  requestIdentifier: string
  signals: Array<SignalPayload>
  constructor(requestIdentifier: string, signals: Array<SignalPayload>) {
    this.requestIdentifier = requestIdentifier
    this.signals = signals
  }
}

export class SignalPayload {
  emitterId?: string
  stepNodeId?: string
  data?: any
  eventflowIdentifier: string

  constructor(emitterId: string, stepNodeId: string, data: any, eventflowIdentifier: string) {
    this.emitterId = emitterId
    this.stepNodeId = stepNodeId
    this.data = data
    this.eventflowIdentifier = eventflowIdentifier
  }
}

export class PingResponse {
  response?: string
}

export class EventflowResponse {
  id?: number
  identifier?: string
  name?: string
}

export class EventflowDetails {
  stepNodeId?: string
  stepNodeName?: string
}

export class SendCustomerDataPayload {
  customerId: string
  customerData: CustomerDataPayload

  constructor(customerId: string, customerData: CustomerDataPayload) {
    this.customerId = customerId
    this.customerData = customerData
  }
}

export class CustomerDataPayload {
  email: string
  phoneNumber: string
  firstName: string
  lastName: string
  gender?: string
  dob?: string
  city?: string
  state?: string
  country?: string
  zip?: string

  constructor(
    email: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    gender: string,
    dob: string,
    city: string,
    state: string,
    country: string,
    zip: string,
  ) {
    this.email = email
    this.phoneNumber = phoneNumber
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.dob = dob
    this.city = city
    this.state = state
    this.country = country
    this.zip = zip
  }
}
