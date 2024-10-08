export type Country =
  | "USA"
  | "INDIA"
  | "ITALY"
  | "RUSSIA"
  | "SPAIN"
  | "GREECE"
  | "EGYPT"
  | "SAUDI_ARABIA"
  | "JAPAN"

export type WCSDataType = {
  country: string
  name: string
  content: string
}

const unicode: Record<Country, string> = {
  USA: "🇺🇸",
  INDIA: "🇮🇳",
  ITALY: "🇮🇹",
  RUSSIA: "🇷🇺",
  SPAIN: "🇪🇸",
  GREECE: "🇬🇷",
  EGYPT: "🇪🇬",
  SAUDI_ARABIA: "🇸🇦",
  JAPAN: "🇯🇵",
}

export const WCSData: WCSDataType[] = [
  {
    country: unicode.JAPAN,
    name: "Aiko Tanaka",
    content: "user1Description",
  },
  {
    country: unicode.ITALY,
    name: "Luca Rossi",
    content: "user2Description",
  },
  {
    country: unicode.SAUDI_ARABIA,
    name: "Amina Al-Farsi",
    content: "user3Description",
  },
  {
    country: unicode.SPAIN,
    name: "Diego García",
    content: "user4Description",
  },
  {
    country: unicode.INDIA,
    name: "Zara Patel",
    content: "user5Description",
  },
  {
    country: unicode.GREECE,
    name: "Sofia Gazis",
    content: "user6Description",
  },
  {
    country: unicode.EGYPT,
    name: "Omar El-Sayed",
    content: "user7Description",
  },
  {
    country: unicode.RUSSIA,
    name: "Nina Ivanova",
    content: "user8Description",
  },
  {
    country: unicode.INDIA,
    name: "Rahul Nair",
    content: "user9Description",
  },
  {
    country: unicode.USA,
    name: "Olivia Brown",
    content: "user10Description",
  },
]
