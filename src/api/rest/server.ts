import { endpoints } from "../endpoints"
import { fetcher } from "../fetcher"

/** Sprawdza status serwera */
export const fetchServerStatus = async () => {
  return fetcher(endpoints.server["server-status"], {
    method: "GET",
  })
}
