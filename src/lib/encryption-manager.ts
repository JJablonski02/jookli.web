import { createCipheriv, createDecipheriv, randomBytes } from "crypto"

/**
 * Klasa enkryptująca dane.
 * Udostępnia funkcje do enkrypcji, dekrypcji, zapisu i odczytu z localStorage.
 */
export class EncryptionManager {
  private static algorithm = "aes-256-cbc"

  private static keyLength = 32

  private static generateKey(): Buffer {
    return randomBytes(this.keyLength)
  }

  /**
   * Funkcja enkryptująca dane. Zwraca zaszyfrowane dane w postaci dane:klucz:wektor-inicjalizacyjny.
   * @param text Wprowadzony tekst do enkrypcji.
   */
  static encrypt(text: string): string {
    const key = this.generateKey()
    const iv = randomBytes(16)
    const cipher = createCipheriv(this.algorithm, key, iv)

    let encrypted = cipher.update(text, "utf8", "hex")
    encrypted += cipher.final("hex")

    return `${encrypted}:${key.toString("hex")}:${iv.toString("hex")}`
  }

  /**
   * Funkcja do dekrypcji danych.
   * @param encryptedData enkryptowane dane.
   */
  static decrypt(encryptedData: string): string {
    const parts = encryptedData.split(":")
    if (parts.length !== 3) {
      throw new Error("Invalid storage format")
    }

    const encryptedText = parts[0]
    const key = Buffer.from(parts[1], "hex")
    const iv = Buffer.from(parts[2], "hex")

    const decipher = createDecipheriv(this.algorithm, key, iv)
    let decrypted = decipher.update(encryptedText, "hex", "utf8")
    decrypted += decipher.final("utf8")

    return decrypted
  }

  /**
   * Zapisuje enkryptowane dane do local storage.
   * @param encryptedData zaszyfrowane dane.
   * @param key nazwa klucza do zapisu.
   */
  static saveEncryptedItemToLocalStorage(encryptedData: string, key: string) {
    localStorage.setItem(key, encryptedData)
  }

  /**
   * Odczytuje enkryptowane dane z local storage.
   * @param key Klucz jaki ma zostać odczytany.
   * @returns Zwraca odczytane dane z localStorage lub zwraca null, gdy dla szukanego klucza nie ma danych.
   */
  static readEncryptedDataFromLocalStorage(key: string): string | null {
    return localStorage.getItem(key)
  }
}
