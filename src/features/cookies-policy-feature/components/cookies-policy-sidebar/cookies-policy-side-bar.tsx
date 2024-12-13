import { Card, CardBody } from "@nextui-org/card"
import { Link } from "@nextui-org/link"

import {
  toAdvertising,
  toCookiePolicy,
  toLocationData,
  toManagingUsersData,
  toTypesOfCookies,
  toUsersTransferData,
} from "@/lib/routes"

import styles from "./styles.module.css"

export const CookiesPolicySidebar = () => {
  return (
    <Card className={styles.container}>
      <CardBody>
        <ul className={styles.body}>
          <li>
            <Link href={toAdvertising}>Advertising</Link>
          </li>
          <li>
            <Link href={toCookiePolicy}>How JoyProfits uses cookies</Link>
          </li>
          <li>
            <Link href={toLocationData}>
              Types of location data used by JoyProfits
            </Link>
          </li>
          <li>
            <Link href={toManagingUsersData}>
              How JoyProfits managing user data
            </Link>
          </li>
          <li>
            <Link href={toUsersTransferData}>
              How JoyProfits uses transfer data
            </Link>
          </li>
          <li>
            <Link href={toTypesOfCookies}>
              Types of cookies used by JoyProfits
            </Link>
          </li>
        </ul>
      </CardBody>
    </Card>
  )
}
