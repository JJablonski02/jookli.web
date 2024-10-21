import CryptoJS from "crypto-js"

/**
 * Klasa enkryptująca dane.
 * Udostępnia funkcje do enkrypcji, dekrypcji, zapisu i odczytu z localStorage.
 */
export class EncryptionManager {
  private static keyLength = 32
  private static ivLength = 16

  private static generateIv(): CryptoJS.lib.WordArray {
    return CryptoJS.lib.WordArray.random(this.ivLength)
  }
  private static generateKey(): CryptoJS.lib.WordArray {
    return CryptoJS.lib.WordArray.random(this.keyLength)
  }

  /**
   * Funkcja enkryptująca dane. Zwraca zaszyfrowane dane w postaci dane:klucz:wektor-inicjalizacyjny.
   * @param text Wprowadzony tekst do enkrypcji.
   */
  static encrypt(text: string): string {
    const key = this.generateKey()
    const iv = this.generateIv()
    

    const encrypted = CryptoJS.AES.encrypt(text, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })

    return `${encrypted}:${key.toString(CryptoJS.enc.Hex)}:${iv.toString(CryptoJS.enc.Hex)}`
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
    const key = CryptoJS.enc.Hex.parse(parts[1])
    const iv = CryptoJS.enc.Hex.parse(parts[2])

    const decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })

    return decrypted.toString(CryptoJS.enc.Utf8)
  }
  /**
   * Funkcja odwracająca dane.
   * @param data  dane do odwracania.
   * @returns odwrócone dane.
   */
  static reverseData(data: string): string {
    return data.split("").reverse().join("")
  }
  /**
   * Zapisuje enkryptowane dane do local storage.
   * @param encryptedData zaszyfrowane dane.
   * @param key nazwa klucza do zapisu.
   * @param encryptedDataReversed zaszyfrowane dane odwrócone.
   */
  static saveEncryptedItemToLocalStorage(encryptedData: string, key: string) {
    const encryptedDataReversed = this.reverseData(encryptedData)
    localStorage.setItem(key, encryptedDataReversed)
    return console.log(encryptedDataReversed, "oto one") 
  }

  /**
   * Odczytuje enkryptowane dane z local storage.
   * @param key Klucz jaki ma zostać odczytany.
   * @returns Zwraca odczytane dane z localStorage lub zwraca null, gdy dla szukanego klucza nie ma danych.
   */
  static readEncryptedDataFromLocalStorage(key: string): string | null {
    const reversedData = localStorage.getItem(key)
    if (reversedData) {
        const encryptedData = this.reverseData(reversedData)
        return encryptedData
    }
    return null
  }
}