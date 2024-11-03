import { createContext, use, useContext, useEffect, useState } from "react"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context

}


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string | null>(null)
    const [refreshToken, setRefreshToken] = useState<string | null>(null)

    useEffect(() => {
        const storedRefreshToken = localStorage.getItem("reftesh_token")
        if (storedRefreshToken) {
            setRefreshToken(storedRefreshToken)
        }
    }, [])

    useEffect(() => {
        if (refreshToken) {
            localStorage.setItem("refresh_token", refreshToken)
        } else {
            localStorage.removeItem("refresh_token")
        }

    }, [refreshToken])

    const value = {
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken
    }

    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider