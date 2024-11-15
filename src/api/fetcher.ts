/* eslint-disable no-console */
import { ResponseModel } from "./models/response-model"

type FetchOptions = {
  method?: string
  body?: any
  headers?: Record<string, string>
}

const serverUri = process.env.NEXT_PUBLIC_JOOKLI_API_URL

/** Fetcher */
export const fetcher = async (
  url: string,
  options: FetchOptions = {}
): Promise<ResponseModel<any>> => {
  if (process.env.NODE_ENV !== "production") {
    logRequest(url, options)
  }

  const response = await fetch(serverUri + url, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: options.body,
  })
  const responseModel = await ResponseModel.fromResponseAsync(response)

  if (process.env.NODE_ENV !== "production") {
    await logResponse(responseModel)
  }

  return responseModel
}

const logRequest = (url: string, options: FetchOptions) => {
  console.log(
    "%c[REQUEST]",
    "color: orange; font-weight: bold;",
    `Endpoint: ${serverUri + url}`,
    "Body:",
    options.body || "Empty"
  )
}

const logResponse = async (response: ResponseModel) => {
  if (response.ok) {
    console.log(
      "%c[RESPONSE]",
      "color: green; font-weight: bold;",
      `Status: ${response.status}`,
      "Response:",
      response,
      "Response Data:",
      response.data
    )
  } else {
    const errorResponse = {
      type: response.error?.type || "Unknown Error",
      title: response.error?.title || "Unknown Title",
      status: response.error?.status || 999,
      details: response.error?.detail || "Unknown Details",
      instance: response.error?.instance || "Unknown Instance",
      errorCode: response.error?.errorCode || 0,
      errorDescription:
        response.error?.errorDescription || "Unknown Error Description",
      errorSeverity: response.error?.errorSeverity || "Unknown Severity",
      traceId: response.error?.traceId || "Unknown Trace ID",
      error: response.error?.error || "Unknown error",
    }

    console.log(
      "%c[RESPONSE]",
      "color: red; font-weight: bold;",
      `Status: ${response.status}`,
      "Response Data:",
      errorResponse
    )
  }
}
