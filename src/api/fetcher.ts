type FetchOptions = {
  method?: string
  body?: any
  headers?: Record<string, string>
}

// Temporary uri
const serverUri = "https://xnvx3hxz-7133.euw.devtunnels.ms/"

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
    logResponse(response)
  }

  return response
}

const logRequest = (url: string, options: FetchOptions) => {
  console.log(
    "%c[REQUEST]",
    "color: orange; font-weight: bold;",
    `Endpoint: ${serverUri + url}`,
    "Body:",
    options.body ? JSON.stringify(options.body) : "Empty"
  )
}

const logResponse = (response: Response) => {
  console.log(
    "%c[RESPONSE]",
    "color: blue; font-weight: bold;",
    `Status: ${response.status}`,
    "Response Data:",
    response
  )
}
