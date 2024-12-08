import { endpoints } from "@/api/endpoints"
import { fetcher } from "@/api/fetcher"

import type { VerifyToken } from "../types"

/** Żądanie potwierdzenia konta za pośrednictwem przekazywanego tokena */
export const fetchConfirmAccount = async (verifyToken: VerifyToken) => {
  return fetcher(endpoints.emails["confirm-account"], {
    method: "POST",
    body: JSON.stringify(verifyToken),
  })
}
