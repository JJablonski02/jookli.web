export type VerifyToken = {
  token: string
}

export type VerifyAccountResult = {
  success: boolean
  error?: string
}

export type VerifyAccountState = VerifyAccountResult & {
  loading: boolean
}
