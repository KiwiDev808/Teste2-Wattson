export class APIError {
  code: number
  message: string

  constructor(theCode: number, theMessage: string) {
    this.code = theCode
    this.message = theMessage
  }

  static wrongParams(message: string) {
    return new APIError(406, message)
  }

  static badRequest(message: string) {
    return new APIError(400, message)
  }

  static notFound(message: string) {
    return new APIError(404, message)
  }
}
