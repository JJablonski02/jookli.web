export type RecoverPassword = {
  token: string
  password: string
  confirmPassword: string
}

export type RecoverPasswordResult = {
  success: boolean
  error?: string
}
