import { CardBody } from "@nextui-org/card"

import { CookiesCard } from "../cookies-card/cookies-card"
import styles from "./styles.module.css"

export const LocalizationTypesContent = () => {
  return (
    <CookiesCard>
      <CardBody className={styles.container}>
        <h3>What types of location do you use on JoyProfits?</h3>
        <p>
          We may collect and use a few types of location information – depending
          on the products and features you’re using – to provide you with a more
          useful experience on JoyProfits.
        </p>
        <p>
          Implicit location information is information that does not tell us
          where your device is located, but allows us to infer that you are
          either interested in the place or that you might be at the place. An
          example of implicit location information would be a manually typed
          search query for a particular place. Implicit location information is
          used in a variety of ways. For example, if you type in “Eiffel Tower”,
          we infer that you may like to see information for places near Paris,
          and we can then use that to provide recommendations about those local
          places to you.
        </p>
        <p>
          When you use or interact with a JoyProfits product, your device sends
          explicit location information to JoyProfits to enable us to provide
          the service. Explicit location information contains information about
          where you or your device is located, either based on device sensors,
          GPS, or WiFi. We also use IP address, which is sent as a normal part
          of internet traffic information. Every device connected to the
          Internet is assigned a number known as an Internet protocol (IP)
          address. These numbers are usually assigned in geographic blocks. An
          IP address can often be used to identify the geographic block from
          which a device is connecting to the Internet, and do things like
          provide you with the correct language for search queries. Some
          products, such as turn-by-turn navigation in JoyProfits Maps for
          mobile require precise location information. For these products, you
          typically have to choose to turn on device-based location services for
          your device, which are services that use information such as GPS
          signals, device sensors, Wi-Fi access points, and cell tower ids that
          can be used to derive or estimate precise location. You can choose to
          turn the device-based location services off at any point.
        </p>
        <h3>What is Location History?</h3>
        <p>
          Location History is a JoyProfits account-level setting that saves
          where you go with every device where your account is signed-in to give
          you personalized maps, recommendations based on places you’ve visited,
          help finding your phone, real-time traffic on your commute, and more.
          Location History is turned off by default for your JoyProfits account.
          You must opt-in to turn on Location History for your JoyProfits
          account and can disable it at any time in your JoyProfits account
          activity controls. You control what’s saved in your Location History,
          and you can delete all or part of your history at any time using
          Timeline.
        </p>
        <p>
          Location History will include location information JoyProfits receives
          from Location Reporting, which is a device-level setting that allows
          your device to send location data back to JoyProfits for use in
          Location History.
        </p>
        <p>
          If you have multiple devices with a signed-in JoyProfits account, you
          can choose to report location from specific devices, or all devices.
          If you do not want certain signed-in mobile devices to contribute to
          Location History, you can disable them from doing so via the Location
          Reporting settings on your device. Learn more
        </p>
        <h3>How is Location History used across JoyProfits?</h3>
        <p>
          Location History helps JoyProfits provide more personalized features
          to you across JoyProfits products and services. This personalization
          may take many different forms, depending on what you are doing and
          what JoyProfits product you use. For example, JoyProfits Photos can
          use your Location History to add context to photos that you have taken
          and make it easier for you to find pictures when you want to show
          friends and family. Location History also helps JoyProfits understand
          things like your commute and provide suggestions on when to head home
          for the day.
        </p>
        <h3>How is Location History used in ads?</h3>
        <p>
          Location History may be used to determine which ads to show you and to
          measure advertising effectiveness. For example, to make ads more
          relevant, if you have enabled Location History and regularly frequent
          ski resorts, you might later see an ad for ski equipment when watching
          a video on YouTube. JoyProfits also uses Location History in an
          anonymized and aggregated manner to help advertisers measure how often
          an online ad campaign helps drive traffic to their physical stores or
          properties. We do not share your Location History or any other
          identifying information with advertisers.
        </p>
        <h3>How do I manage my Location History?</h3>
        <p>
          You can view and manage your Location History information through the
          Timeline feature in JoyProfits Maps, which is available to both mobile
          and desktop users. Timeline users can edit specific entries on their
          Location History, delete information from ranges in time or delete all
          their Location History entries. Learn more
        </p>
        <p>
          You can also pause Location History at any time. When you pause
          Location History, the places you go are no longer saved to your
          JoyProfits account. This action will apply to all devices associated
          with your JoyProfits account that were previously reporting location
          to JoyProfits.
        </p>
        <p>
          If you want to export your Location History from JoyProfits, you can
          download your data here. If you want to fully delete your Location
          History, you can do so by following the steps here.
        </p>
        <h3>How do I know if my Location History is on?</h3>
        <p>
          Location History is an account level setting that you must opt-in to
          before the places you go are saved to your JoyProfits account. You can
          always review your settings to determine if you have enabled Location
          History.{" "}
          <a href="https://support.google.com/accounts/answer/3118687?hl=en">
            Learn more
          </a>
        </p>
      </CardBody>
    </CookiesCard>
  )
}
