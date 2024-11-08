import { ErrorResponseModel } from "./error-response-model"

export class ResponseModel<T = any> {
  status: number

  statusText: string

  headers: Headers

  ok: boolean

  url: string

  data: T | null

  error: ErrorResponseModel | null = null

  constructor(response: Response, data: T | null = null) {
    this.status = response.status
    this.statusText = response.statusText
    this.ok = response.ok
    this.headers = response.headers
    this.url = response.url
    this.data = data

    if (!this.ok) {
      this.error = new ErrorResponseModel(response, data)
    }
  }

  static async fromResponseAsync(response: Response): Promise<ResponseModel> {
    let data: any = null
    try {
      // Próbujemy sparsować odpowiedź jako JSON
      data = await response.json()
    } catch {
      try {
        // Jeśli JSON nie jest dostępny, próbujemy odczytać jako tekst
        data = await response.text()
      } catch {
        // Jeśli text nie jest dostępny, przypisujemy null
        data = null
      }
    }

    // Zwracamy instancję modelu z przetworzoną odpowiedzią
    return new ResponseModel(response, data)
  }
}
