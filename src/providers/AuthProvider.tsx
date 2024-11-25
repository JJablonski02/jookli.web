import { createContext, useContext, useEffect, useState } from "react"
import { EncryptionManager } from "@/lib/encryption-manager"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

function parseToken(encryptedToken: string): EncryptedDataModel {
  const parts = encryptedToken.split(":")

  if (parts.length != 3) {
    throw new Error("Invalid token format.")
  }

  const [text, key, iv] = parts;
  return { text, key, iv }
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const refreshToken = "refresh_token"

  const initializeAuth = () => {


    try {

    } catch (error) {
      console.error(error)
    }
  }

  const onSignIn = (accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken)
    const encryptedRefreshToken = EncryptionManager.encrypt(refreshToken)
    const parsedEncryptedToken = parseToken(encryptedRefreshToken)
    EncryptionManager.saveEncryptedItemToLocalStorage(parsedEncryptedToken.text, parsedEncryptedToken.key)

  }

  const onLogout = () => {
    setAccessToken(null)
    localStorage.removeItem(refreshToken)
  }

  initializeAuth()

  const value = {
    accessToken,
    onSignIn,
    onLogout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
