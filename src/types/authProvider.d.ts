interface AuthProviderProps {
  children: React.ReactNode
}

type User = {
  email: string
}

type AuthContextType = {
  accessToken: string | null
  onSignIn: (accessToken:string, refreshToken:string) => void
  onLogout: () => void
}
