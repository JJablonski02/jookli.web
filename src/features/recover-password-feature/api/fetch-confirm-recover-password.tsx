import { endpoints } from "@/api/endpoints"
import { fetcher } from "@/api/fetcher"

import type { RecoverPassword } from "../types"

export const fetchConfirmRecoverPassword = (
  recoverPassword: RecoverPassword
) => {
  return fetcher(endpoints.user["confirm-recover-password"], {
    body: JSON.stringify(recoverPassword),
    method: "PATCH",
  })
}
