import { EngageDataDriveClient } from './engagedatadrive/engage_data_drive_client'
import { MailkeetsClient } from './mailkeets/mailkeets_client'

export class KursahaClient {
  constructor(apiKey, eddUrl = 'https://edd.kursaha.com/api/', mailkeetsUrl = 'https://mailkeets.kursaha.com/api/') {
    this.edd = new EngageDataDriveClient(eddUrl, apiKey)
    this.mk = new MailkeetsClient(mailkeetsUrl, apiKey)
  }
}

export default KursahaClient
