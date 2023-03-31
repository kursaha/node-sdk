import { EngageDataDriveClient } from './engagedatadrive/engage_data_drive_client'
import { MailkeetsClient } from './mailkeets/mailkeets_client'

export class KursahaClient {
  MAILKEETS_BASE_URL = 'https://mailkeets.kursaha.com/api/'

  EDD_BASE_URL = 'https://edd.kursaha.com/api/'
  constructor(apiKey) {
    this.edd = new EngageDataDriveClient(this.EDD_BASE_URL, apiKey)
    this.mk = new MailkeetsClient(this.MAILKEETS_BASE_URL, apiKey)
  }
}

export default KursahaClient
