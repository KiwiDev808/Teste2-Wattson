import dotenv from 'dotenv'
import { IamAuthenticator } from 'ibm-watson/auth'
dotenv.config()

export const credentials = {
  authenticator: new IamAuthenticator({
    apikey: String(process.env.API_KEY),
  }),
  serviceUrl: String(process.env.SERVICE_URL),
}
