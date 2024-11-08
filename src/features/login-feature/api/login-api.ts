import { fetcher } from "@/api/fetcher"

import type { LoginCommand } from "../types/types"

type LoginResponse = {
  access_token: string
  refresh_token: string
}
export const loginApi = async (
  command: LoginCommand
): Promise<LoginResponse> => {
  const body = new URLSearchParams()
  body.append("username", command.email)
  body.append("password", command.password)
  body.append("grant_type", "password")
  body.append("scope", "jookliApi.read jookliApi.write offline_access")
  body.append("client_secret", process.env.CLIENT_SECRET || "missing")
  body.append("client_id", process.env.CLIENT_ID || "missing")

  const response = await fetcher("connect/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  })

  if (!response.ok) {
    throw new Error("Logowanie nieudane")
  }

  return response.json()
}
