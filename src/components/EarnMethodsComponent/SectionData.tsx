import achievmentsIcon from "../../../public/achievmentsIcon.svg"
import filmIcon from "../../../public/filmIcon.svg"
import formIcon from "../../../public/formIcon.svg"
import gamepadIcon from "../../../public/gamepadIcon.svg"
import microTasksIcon from "../../../public/microTasksIcon.svg"
import onlineShoppingIcon from "../../../public/onlineShoppingIcon.svg"

export type SectionDataType = {
  id: string
  header: string
  label: string
  icon: string
}

export const SectionData: SectionDataType[] = [
  {
    id: "gamepad",
    header: "Tile1Header",
    label: "Tile1Description",
    icon: gamepadIcon,
  },
  {
    id: "film-icon",
    header: "Tile2Header",
    label: "Tile2Description",
    icon: filmIcon,
  },
  {
    id: "form-icon",
    header: "Tile3Header",
    label: "Tile3Description",
    icon: formIcon,
  },
  {
    id: "online-shopping-icon",
    header: "Tile4Header",
    label: "Tile4Description",
    icon: onlineShoppingIcon,
  },
  {
    id: "microtasks-icon",
    header: "Tile5Header",
    label: "Tile5Description",
    icon: microTasksIcon,
  },
  {
    id: "achievements-icon",
    header: "Tile6Header",
    label: "Tile6Description",
    icon: achievmentsIcon,
  },
]
