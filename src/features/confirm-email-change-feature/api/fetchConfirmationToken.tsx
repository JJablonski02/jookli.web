import { endpoints } from "@/api/endpoints"
import { fetcher } from "@/api/fetcher"

import type { ConfirmEmailChange } from "../types"

/** Wysyła zgłoszenie do serwera */
export const fetchConfirmEmailChangeToken = async (
  confirmEmailChange: ConfirmEmailChange
) => {
  return fetcher(endpoints.emails["confirm-email-change"], {
    method: "POST",
    body: JSON.stringify(confirmEmailChange),
  })
}
