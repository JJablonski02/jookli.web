import { Link } from "@nextui-org/link"
import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

import PageWrapper from "@/components/PageWrapper"
import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"
import { toSupport } from "@/lib/routes"

import styles from "./styles.module.css"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "privacy-policy",
  })
  return {
    title: t("privacyPolicy.title"),
    description: t("privacyPolicy.description"),
    openGraph: {
      title: t("privacyPolicy.title"),
      description: t("privacyPolicy.description"),
    },
    twitter: {
      title: t("privacyPolicy.title"),
      description: t("privacyPolicy.description"),
    },
    alternates: alternateUrls,
  }
}

const PrivacyPolicy = ({ params: { locale } }: Props) => {
  setRequestLocale(locale)

  return (
    <PageWrapper>
      <div className="w-full">
        <article id="post-1">
          <div className={styles.container}>
            <div>
              <h2>Privacy Policy</h2>
              <p>
                <b>Effective Date:</b> 08.12.2024
              </p>
              <p>
                JoyProfits (“we,” “our,” or “us”) values your privacy and is
                dedicated to protecting it. This Privacy Policy outlines the
                types of information we collect from users of our website,
                joyprofits.com, and associated services (collectively referred
                to as the “Services”). It also details how we use, share, and
                protect your information, as well as your rights under relevant
                laws such as General Data Protection Regulation (GDPR). By
                accessing or using our Services, you agree to the data practices
                described in this policy.
              </p>
              <h3>1. Informations We collect</h3>
              <p>
                To provide and improve our Services, we collect various types of
                information. This information is gathered from you directly,
                automatically through your use of our platform, or from
                third-party sources.
              </p>
              <h4>1.1 Information You Provide to Us</h4>
              <p>
                When you create an account or use our platform, we collect
                personal information that you willingly provide, such as your
                name, email address, and password. If you contact customer
                support, participate in surveys, or provide feedback, we may
                collect additional details such as your name, email, and the
                context of your communication. This information is crucial for
                the platform’s functionality, your email helps us send updates
                about your account. We may also gather information if you share
                content, engage in forums, or use other interactive features on
                the platform.
              </p>
              <h4>1.2 Information We Collect Automatically</h4>
              <p>
                When you use our Services, we automatically gather information
                about your device, how you interact with our platform, and your
                usage behavior. This may include technical details such as your
                IP address, browser type, operating system, device model, and
                unique device identifiers. Usage data covers the pages you
                visit, features you engage with, and the time spent on specific
                sections of our website. We also use cookies, pixels, and other
                tracking technologies to enhance your experience, personalize
                content, and optimize our platform. These technologies collect
                data about your preferences, interactions, and how you navigate
                our Services, helping us understand user engagement better. For
                more details on cookies and how to control them, please refer to
                our Cookie Policy.
              </p>
              <h4>1.3 Information from Third Parties</h4>
              <p>
                In some instances, we may receive information about you from
                third parties. For example, analytics providers like Google
                Analytics help us gain insights into user behavior, allowing us
                to optimize our Services and improve the user experience.
                Additionally, this information helps us track how users interact
                with our platform, identify trends, and make data-driven
                decisions to enhance the functionality and performance of our
                Services.
              </p>
              <h3>2. How We Use Your Information</h3>
              <p>
                We use the information we collect to provide, enhance, and
                secure our Services. This involves using your data to manage
                your account, authenticate your identity, and process
                transactions like withdrawals. By analyzing how you interact
                with our platform, we can identify trends, fix technical issues,
                and improve the user experience across different devices and
                browsers. We use your email address to send important updates,
                such as account notifications, system alerts, and changes to our
                policies. When allowed by law, we may also send promotional
                content tailored to your interests. Data collected through
                cookies and analytics helps us personalize your experience by
                recommending relevant content, services, or updates based on
                your behavior and preferences. In addition to personalization,
                we use monitoring to ensure the security of our platform. This
                allows us to detect, investigate, and prevent fraudulent
                transactions, unauthorized access, and other malicious
                activities. Blockchain technology provides an additional layer
                of security by recording transactions transparently. Finally,
                your data may be used to meet regulatory and tax obligations,
                respond to lawful requests from public authorities, and comply
                with applicable laws.
              </p>
              <h3>3. Sharing Your Information</h3>
              <p>
                Your information may be shared with trusted third parties under
                specific circumstances to help operate and improve our Services.
                This includes working with service providers like hosting
                companies, data analytics firms, and customer support platforms
                that process data on our behalf. These partners are
                contractually required to keep your data confidential and
                secure. We may also share your information to comply with legal
                requirements, such as subpoenas or court orders, or to cooperate
                with government authorities and law enforcement when legally
                necessary. In the event of a merger, acquisition, or sale, your
                data may be transferred to the new entity, with the transfer
                governed by the terms of this Privacy Policy. For research,
                analysis, or marketing, we might share aggregated or
                de-identified data that cannot be traced back to you. This
                approach helps us better understand trends and improve our
                Services while safeguarding your privacy.
              </p>
              <h3>4. Your Privacy Rights</h3>
              <p>
                We respect your rights regarding your personal information and
                provide mechanisms for you to exercise those rights under
                applicable laws:
              </p>
              <h4>4.1 Rights Under the RODO (Polish Residents)</h4>
              <p>
                As a resident of Poland, you have the right to view the personal
                information we collect about you, including information on the
                categories of data, its purposes for use, and the third parties
                with whom it is shared. You can request that your personal
                information be deleted, although this may be subject to certain
                legal and operational limitations. While JoyProfits does not
                engage in traditional data selling practices, you also have the
                option to opt-out of any data-sharing practices that could be
                considered a “sale” of personal information. To exercise these
                rights, please reach out to us at privacy@joyprofits.com.
              </p>
              <h4>4.2 Rights Under the GDPR (EU/EEA Residents)</h4>
              <p>
                If you are in the EU or EEA, you have the right to access,
                amend, delete, or limit how your data is used. You can also
                oppose the processing of your data for marketing purposes. To
                make a request, please contact us at privacy@joyprofits.com.
              </p>
              <h3>5. Data Retention</h3>
              <p>
                We keep personal information only for as long as necessary to
                fulfill the purposes described in this Privacy Policy. For other
                personal data, we use secure deletion or anonymization processes
                once the retention periods have ended, unless retention is
                required by law.
              </p>
              <h3>6. Security Measures</h3>
              <p>
                JoyProfits employs strong security measures, such as encryption,
                firewalls, and secure data storage, to protect your information.
                Although we take extensive precautions to safeguard your data,
                it is important to note that no system can provide absolute
                security. We recommend using strong passwords to further protect
                your account.
              </p>
              <h3>7. Changes to This Privacy Policy</h3>
              <p>
                This Privacy Policy may be updated periodically to reflect
                changes in our practices or legal requirements. Any significant
                updates will be communicated via email or a prominent notice on
                our website. The “Effective Date” date above indicates the most
                recent revisions.
              </p>
              <h3>8. Contact Us</h3>
              <p>
                If you have questions about this Privacy Policy or your personal
                information, you can contact us at:
              </p>
              <p>
                <b>JoyProfits</b>
                <br />
                66-340 Przytoczna
                <br />
                st. Polna 6, Lubuskie, Poland
              </p>
              <p>Contact customer service: </p>
              <ul>
                <li>support@joyprofits.com</li>
                <li>
                  <Link
                    href={toSupport}
                    className="text-medium text-blue underline"
                  >
                    <b>Contact us page</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </PageWrapper>
  )
}

export default PrivacyPolicy
