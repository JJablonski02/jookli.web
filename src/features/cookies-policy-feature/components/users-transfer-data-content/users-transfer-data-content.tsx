import { CardBody } from "@nextui-org/card"

import { CookiesCard } from "../cookies-card/cookies-card"
import styles from "./styles.module.css"

export const UsersTransferDataContent = () => {
  return (
    <CookiesCard>
      <CardBody className={styles.container}>
        <p>
          JoyProfits uses advanced encryption techniques to ensure the full
          security of user data. All information such as bank account numbers,
          PayPal account details, and other required transfer data are protected
          in an end-to-end encryption process, meaning they are encrypted both
          during transmission and storage. By utilizing state-of-the-art
          encryption algorithms like AES (Advanced Encryption Standard) and RSA
          (Rivest–Shamir–Adleman), JoyProfits secures data from unauthorized
          access.
        </p>
        <p>
          These data are also stored in secure servers equipped with advanced
          monitoring and access control systems. Encryption of this information
          ensures that even if data is intercepted by unauthorized parties, it
          would be useless without the proper decryption key, which is kept in a
          secure environment. This solution minimizes the risk of misuse and
          protects the privacy of JoyProfits users.
        </p>
      </CardBody>
    </CookiesCard>
  )
}
