import achievmentsIcon from "../../../public/achievmentsIcon.svg"
import filmIcon from "../../../public/filmIcon.svg"
import formIcon from "../../../public/formIcon.svg"
import gamepadIcon from "../../../public/gamepadIcon.svg"
import microTasksIcon from "../../../public/microTasksIcon.svg"
import onlineShoppingIcon from "../../../public/onlineShoppingIcon.svg"

export type SectionDataType = {
  header: string
  label: string
  icon: string
}

export const SectionData: SectionDataType[] = [
  {
    header: "Tile1Header",
    label: "Tile1Description",
    icon: gamepadIcon,
  },
  {
    header: "Tile2Header",
    label: "Tile2Description",
    icon: filmIcon,
  },
  {
    header: "Tile3Header",
    label: "Tile3Description",
    icon: formIcon,
  },
  {
    header: "Tile4Header",
    label: "Tile4Description",
    icon: onlineShoppingIcon,
  },
  {
    header: "Tile5Header",
    label: "Tile5Description",
    icon: microTasksIcon,
  },
  {
    header: "Tile6Header",
    label: "Tile6Description",
    icon: achievmentsIcon,
  },
]
