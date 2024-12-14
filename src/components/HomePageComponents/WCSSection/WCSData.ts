export type Country =
  | "USA"
  | "INDIA"
  | "ITALY"
  | "RUSSIA"
  | "SPAIN"
  | "GREECE"
  | "EGYPT"
  | "SAUDI_ARABIA"
  | "CHINA"

export type WCSDataType = {
  id: string
  country: string
  name: string
  content: string
}

const unicode: Record<Country, string> = {
  USA: "us",
  INDIA: "in",
  ITALY: "it",
  RUSSIA: "ru",
  SPAIN: "es",
  GREECE: "gr",
  EGYPT: "eg",
  SAUDI_ARABIA: "sa",
  CHINA: "cn",
}

export const WCSData: WCSDataType[] = [
  {
    id: "aiko-tanaka",
    country: unicode.CHINA,
    name: "Aiko Tanaka",
    content: "user1Description",
  },
  {
    id: "luca-rossi",
    country: unicode.ITALY,
    name: "Luca Rossi",
    content: "user2Description",
  },
  {
    id: "amina-al-farsi",
    country: unicode.SAUDI_ARABIA,
    name: "Amina Al-Farsi",
    content: "user3Description",
  },
  {
    id: "diego-garcia",
    country: unicode.SPAIN,
    name: "Diego García",
    content: "user4Description",
  },
  {
    id: "zara-patel",
    country: unicode.INDIA,
    name: "Zara Patel",
    content: "user5Description",
  },
  {
    id: "sofia-gazis",
    country: unicode.GREECE,
    name: "Sofia Gazis",
    content: "user6Description",
  },
  {
    id: "omar-el-sayed",
    country: unicode.EGYPT,
    name: "Omar El-Sayed",
    content: "user7Description",
  },
  {
    id: "nina-ivanova",
    country: unicode.RUSSIA,
    name: "Nina Ivanova",
    content: "user8Description",
  },
  {
    id: "rahul-nair",
    country: unicode.INDIA,
    name: "Rahul Nair",
    content: "user9Description",
  },
  {
    id: "olivia-brown",
    country: unicode.USA,
    name: "Olivia Brown",
    content: "user10Description",
  },
]
