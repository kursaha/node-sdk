import axios from 'axios'

export class MailkeetsClient {
  constructor(baseUrl, apiKey) {
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: 60_000,
      headers: { Authorization: 'Bearer ' + apiKey },
    })
  }
}
