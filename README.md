# Kursaha Node.js SDK

Welcome to the Kursaha Node.js SDK! This SDK provides a seamless way to integrate Kursaha's powerful event and customer data management capabilities into your Node.js application. With this SDK, you can easily send event signals, customer data, and more to the Kursaha platform.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Methods](#methods)
  - [Signal Start Event](#signal-start-event)
  - [Sending Customer Data](#sending-customer-data)
  - [Sending Events](#sending-events)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Support](#support)

## Installation

To get started, install the Kursaha SDK via npm:

```bash
<<<<<<< HEAD
npm install kursaha-sdk
=======
npm install kursaha-sdk --save
>>>>>>> e992545c47d2989a1fe71e03a46b90692d6fec97
```

## Getting Started

1. **Initialize the SDK**

   First, require and configure the Kursaha SDK in your application. You need to provide your API key to authenticate with the Kursaha platform.

   ```javascript
<<<<<<< HEAD
=======
   ...
   import KursahaClient from "kursaha-sdk";
   ...

>>>>>>> e992545c47d2989a1fe71e03a46b90692d6fec97
   const Kursaha = require('kursaha-sdk')

   // Initialize the SDK with your API key
   const kursahaClient = new Kursaha('<YOUR-API-KEY>')
   ```

2. **Start Using the SDK**

   You can now start sending event signals and customer data to Kursaha. See the methods section for details.

## Methods

### Signal Start Event

Send a signal to start an event flow. This method allows you to track various events within your application.

```javascript
const signal = {
<<<<<<< HEAD
  emitterId: 'unique-emitter-id',
  stepNodeId: 'step-node-id',
  data: {},
  eventflowIdentifier: 'uuid',
}

kursahaClient
  .sendSignal(signal)
  .then((response) => {
    console.log('Signal sent successfully:', response)
  })
  .catch((error) => {
    console.error('Error sending signal:', error)
  })
=======
  customerId: '<unique-customer-id>',
  eventType: '<event-type>',
  data: {},
  eventflowIdentifier: '<uuid>',
}

kursahaClient.signal(signal)
>>>>>>> e992545c47d2989a1fe71e03a46b90692d6fec97
```

### Sending Customer Data

Send customer data to Kursaha to keep your records up-to-date and enhance your customer engagement strategies.

```javascript
const customerData = {
<<<<<<< HEAD
  customerId: '<Unique-customer-id>',
=======
  customerId: '<unique-customer-id>',
>>>>>>> e992545c47d2989a1fe71e03a46b90692d6fec97
  customerData: {
    email: 'j.doe@swq.com',
    phoneNumber: '+911002220000',
    firstName: 'John',
    lastName: 'Doe',
    gender: '',
    dob: '',
    city: '',
    state: '',
    country: '',
    zip: '',
  },
}

<<<<<<< HEAD
kursahaClient
  .sendCustomerData(customerData)
  .then((response) => {
    console.log('Customer data sent successfully:', response)
  })
  .catch((error) => {
    console.error('Error sending customer data:', error)
  })
=======
kursahaClient.sendCustomerData(customerData)
>>>>>>> e992545c47d2989a1fe71e03a46b90692d6fec97
```

### Sending Events

<<<<<<< HEAD
Transmit events to Kursaha to track user actions and interactions within your application.

```javascript
const event = {
  customerId: '<Unique-customer-id>',
=======
Transmit events to Kursaha to track user actions and interactions within your application. These actions will be recoreded in cohort.

```javascript
const event = {
  customerId: '<unique-customer-id>',
>>>>>>> e992545c47d2989a1fe71e03a46b90692d6fec97
  eventType: '<event-type>',
  data: {
    price: 200,
    brand: 'something',
    productId: '',
    category: '',
    subCategory1: '',
    subCategory2: '',
    subCategory3: '',
  },
}

kursahaClient
  .sendEvent(event)
  .then((response) => {
    console.log('Event sent successfully:', response)
  })
  .catch((error) => {
    console.error('Error sending event:', error)
  })
```

## Configuration

Before using the SDK, make sure to replace `<YOUR-API-KEY>` with your actual Kursaha API key. Ensure that your API key is kept secure and not exposed in your codebase.

## API Documentation

For detailed API documentation and further information on using the Kursaha SDK, please visit our [API Documentation](https://docs.kursaha.com/developer).

## Support

If you encounter any issues or need assistance, feel free to reach out to our support team at [support@kursaha.com](mailto:support@kursaha.com).

---

Thank you for using the Kursaha Node.js SDK. We look forward to helping you enhance your application's event tracking and customer data management!
