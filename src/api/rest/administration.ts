import type { SupportSchema } from "@/lib/zod/support"

import { endpoints } from "../endpoints"
import { fetcher } from "../fetcher"

/** Wysyła zgłoszenie do serwera */
export const fetchReport = async (report: SupportSchema) => {
  return fetcher(endpoints.administration.report, {
    method: "POST",
    body: report,
  })
}
