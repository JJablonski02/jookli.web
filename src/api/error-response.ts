export class ErrorResponse {
  type: string

  title: string

  status: number

  detail: string

  instance: string | null

  errorCode: number

  errorDescription: string

  errorSeverity: string

  traceId: string

  constructor(
    type: string,
    title: string,
    status: number,
    detail: string,
    instance: string | null,
    errorCode: number,
    errorDescription: string,
    errorSeverity: string,
    traceId: string
  ) {
    this.type = type
    this.title = title
    this.status = status
    this.detail = detail
    this.instance = instance
    this.errorCode = errorCode
    this.errorDescription = errorDescription
    this.errorSeverity = errorSeverity
    this.traceId = traceId
  }
}
