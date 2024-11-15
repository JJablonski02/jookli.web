import type { ErrorData } from "../types"

export class ErrorResponseModel<T = any> {
  type: string | null = null

  title: string | null = null

  status: number = 999

  detail: string | null = null

  instance: string | null = null

  errorCode: number = 0

  errorDescription: string | null = null

  errorSeverity: string | null = null

  traceId: string | null = null

  error: string | null = null

  errorMessage: string | null = null

  constructor(response: Response, data: T | null) {
    if (data) {
      const tempData = data as unknown as ErrorData
      this.type = tempData.type
      this.title = tempData.title
      this.detail = tempData.detail
      this.instance = tempData.instance
      this.errorCode = tempData.error_code
      this.errorDescription = tempData.error_description
      this.errorSeverity = tempData.error_severity
      this.traceId = tempData.traceId
      this.error = tempData.error
    }

    this.status = response.status
  }
}
