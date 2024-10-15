import { ErrorResponse } from "./error-response"

type FetchOptions = {
  method?: string
  body?: any
  headers?: Record<string, string>
}

interface ErrorData {
  type: string
  title: string
  status: number
  detail: string
  instance: string | null
  error_code: number
  error_description: string
  error_severity: string
  traceId: string
}

// Temporary uri
const serverUri = "https://jookli-api.azurewebsites.net/"

/** Fetcher */
export const fetcher = async (url: string, options: FetchOptions = {}) => {
  if (process.env.NODE_ENV !== "production") {
    logRequest(url, options)
  }

  const response = await fetch(serverUri + url, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  })

  if (process.env.NODE_ENV !== "production") {
    await logResponse(response)
  }

  return response
}

const logRequest = (url: string, options: FetchOptions) => {
  // eslint-disable-next-line no-console
  console.log(
    "%c[REQUEST]",
    "color: orange; font-weight: bold;",
    `Endpoint: ${serverUri + url}`,
    "Body:",
    options.body ? JSON.stringify(options.body) : "Empty"
  )
}

const logResponse = async (response: Response) => {
  if (!response.ok) {
    try {
      const errorData: ErrorData = await response.json()

      const errorResponse = new ErrorResponse(
        errorData.type || "Unknown Error",
        errorData.title || "Error Occurred",
        errorData.status || 500,
        errorData.detail || "No details available",
        errorData.instance,
        errorData.error_code,
        errorData.error_description || "No description available",
        errorData.error_severity || "Unknown Severity",
        errorData.traceId || "No Trace ID"
      )

      // eslint-disable-next-line no-console
      console.log(
        "%c[RESPONSE]",
        "color: red; font-weight: bold;",
        `Status: ${response.status}`,
        "Response Data:",
        errorResponse
      )
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Failed to parse error response:", err)
    }
  } else {
    try {
      const responseData = await response.text()

      // eslint-disable-next-line no-console
      console.log(
        "%c[RESPONSE]",
        "color: green; font-weight: bold;",
        `Status: ${response.status}`,
        "Response:",
        response,
        "Response Data:",
        responseData
      )
    } catch {
      // eslint-disable-next-line no-console
      console.log(
        "%c[RESPONSE]",
        "color: green; font-weight: bold;",
        `Status: ${response.status}`,
        "Response:",
        response
      )
    }
  }
}
