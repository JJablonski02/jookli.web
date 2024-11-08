export interface ErrorData {
  type: string
  title: string
  detail: string
  instance: string | null
  error_code: number
  error_description: string
  error_severity: string
  traceId: string
  error: string
}
