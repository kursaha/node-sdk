import axios from "axios";


export class MailkeetsClient {
    constructor(baseUrl, apiKey) {
        this.client = axios.create({
            baseURL: baseUrl,
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + apiKey}
        });
    }


}