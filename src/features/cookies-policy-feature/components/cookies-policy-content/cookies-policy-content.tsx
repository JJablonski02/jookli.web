import { CardBody } from "@nextui-org/card"

import { CookiesCard } from "../cookies-card/cookies-card"
import styles from "./styles.module.css"

export const CookiesPolicyContent = () => {
  return (
    <CookiesCard>
      <CardBody className={styles.container}>
        <p>
          A cookie is a small data file that a website sends to your browser
          during a visit. It allows the site to retain details about your
          preferences, such as your chosen language and other custom settings.
          This helps improve your experience by making future visits more
          seamless and the website more tailored to your needs. Cookies are
          essential for smooth web navigation, as their absence would make
          browsing far less convenient.
        </p>
        <p>
          We rely on cookies for a wide range of purposes to enhance your
          experience and improve our services. For example, cookies help us
          remember your safe search preferences, ensuring that your browsing is
          tailored to your needs. They also enable us to show ads that are more
          relevant to you, track and analyze the number of visitors to our
          pages, and streamline the process of signing up for our services.
          Additionally, cookies play a crucial role in protecting your personal
          data and securely storing your ad preferences, allowing us to offer a
          more personalized and secure online experience.
        </p>
        <p>
          You can view a detailed list of the types of cookies that JoyProfits
          uses and learn more about how both JoyProfits and its partners utilize
          cookies for advertising purposes. Additionally, our privacy policy
          outlines the measures we take to safeguard your privacy when using
          cookies and handling other types of information.
        </p>
      </CardBody>
    </CookiesCard>
  )
}
