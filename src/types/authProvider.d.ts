interface AuthProviderProps {
    children: React.ReactNode
}

type User = {
    email: string
}

type AuthContextType = {
    accessToken: string | null
    refreshToken: string | null
    setAccessToken: (token: string | null) => void
    setRefreshToken: (token: string | null) => void
}