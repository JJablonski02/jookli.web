import { endpoints } from "@/api/endpoints"
import { fetcher } from "@/api/fetcher"
import type { SupportSchema } from "@/lib/zod/support"

/** Wysyła zgłoszenie do serwera */
export const fetchReport = async (report: SupportSchema) => {
  return fetcher(endpoints.administration.report, {
    method: "POST",
    body: JSON.stringify(report),
  })
}
