import { endpoints } from "../endpoints"
import { fetcher } from "../fetcher"

/** Żądanie potwierdzenia konta za pośrednictwem przekazywanego tokena */
export const fetchConfirmAccountEmail = async (data: { token: string }) => {
  return fetcher(endpoints.emails["confirm-account"], {
    method: "POST",
    body: data,
  })
}
