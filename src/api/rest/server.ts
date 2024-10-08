import { endpoints } from "../endpoints"
import { fetcher } from "../fetcher"

export const fetchServerStatus = async () => {
  return fetcher(endpoints.server["server-status"], {
    method: "GET",
  })
}
