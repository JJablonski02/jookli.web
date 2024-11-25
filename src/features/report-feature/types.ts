import type { SupportSchema } from "@/lib/zod/support"

export interface SendReport extends SupportSchema {
  language: string
}
