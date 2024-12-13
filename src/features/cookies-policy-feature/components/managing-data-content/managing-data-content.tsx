import { CardBody } from "@nextui-org/card"

import { CookiesCard } from "../cookies-card/cookies-card"
import styles from "./styles.module.css"

export const ManagingDataContent = () => {
  return (
    <CookiesCard>
      <CardBody className={styles.container}>
        <p>
          Some people prefer not to allow cookies, which is why most browsers
          give you the ability to manage cookies to suit you.
        </p>
        <p>
          Some browsers limit or delete cookies, so you may want to review your
          cookie settings and ads settings. In some browsers you can set up
          rules to manage cookies on a site-by-site basis, giving you more
          fine-grained control over your privacy. What this means is that you
          can disallow cookies from all sites except those that you trust.
        </p>
        <p>
          Another feature of Chrome is its incognito mode. You can browse in
          incognito mode when you don’t want your website visits or downloads to
          be recorded in your browsing and download histories. Any cookies
          created while in incognito mode are deleted after you close all
          incognito windows.
        </p>
      </CardBody>
    </CookiesCard>
  )
}
