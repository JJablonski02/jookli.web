import { Link } from "@nextui-org/link"
import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

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
    pageUrl: "terms-of-service",
  })
  return {
    title: t("termsOfService.title"),
    description: t("termsOfService.description"),
    openGraph: {
      title: t("termsOfService.title"),
      description: t("termsOfService.description"),
    },
    twitter: {
      title: t("termsOfService.title"),
      description: t("termsOfService.description"),
    },
    alternates: alternateUrls,
  }
}

const TermsOfService = ({ params: { locale } }: Props) => {
  setRequestLocale(locale)

  return (
    <div className="w-full">
      <article id="post-1">
        <div className={styles.container}>
          <h2>Terms of service</h2>
          <p>
            <b>Effective Date:</b> 08.12.2024
          </p>
          <p>
            Welcome to JoyProfits (“JoyProfits,” “we,” “our,” or “us”). These
            Terms of Use (“Terms”) explain the rules for using the JoyProfits
            website (https://joyprofits.com), along with any related services,
            apps, or features (together referred to as the “Services”). By
            signing up for an account, using the Services, or engaging in
            activities provided by JoyProfits, you agree to follow these Terms.
            JoyProfits is a company based in Poland, with its registered office
            at 66-340 Przytoczna, Polna 6, Lubusz Voivodeship, Poland. These
            Terms create a legal agreement between you and JoyProfits. If you
            don’t agree with these Terms or don’t meet the eligibility
            requirements mentioned below, you must stop using our Services
            immediately.
          </p>
          <h3>
            <strong>1. Definitions</strong>
          </h3>
          <p>
            To clarify the scope of these Terms, the following definitions
            apply:
          </p>
          <ul>
            <li>
              <strong>Account:</strong> Your registered profile that lets you
              use JoyProfits, complete tasks, and track your earnings.
            </li>
            <li>
              <strong>Content:</strong> Anything like text, images, videos,
              software, or other materials shared by JoyProfits or uploaded by
              users.
            </li>
            <li>
              <strong>Earnings:</strong> Money you earn by doing tasks or taking
              part in JoyProfits activities.
            </li>
            <li>
              <strong>Services:</strong> Everything JoyProfits offers, like the
              platform for earning Worken, using resources, and checking your
              progress.
            </li>
            <li>
              <strong>User:</strong> Anyone who signs up for, uses, or interacts
              with JoyProfits.
            </li>
          </ul>
          <h3>
            <strong>2. Eligibility</strong>
          </h3>
          <h4>
            <strong>2.1 Age and Jurisdiction</strong>
          </h4>
          <p>
            You must be at least 18 years old (or the legal age of majority in
            your jurisdiction) to use the Services. However, individuals aged 13
            to 17 years may use the Services only with the consent and under the
            supervision of a parent or legal guardian.
          </p>
          <p>By creating an account, you confirm that:</p>
          <ul>
            <li>You are at least 18 years old or,</li>
            <li>
              You are between 13 and 17 years old, you have obtained permission
              from your parent or legal guardian, who agrees to these Terms on
              your behalf and assumes responsibility for your use of the
              Services.
            </li>
          </ul>
          <h4>
            <strong>2.2 Parental or Guardian Responsibility</strong>
          </h4>
          <p>
            If you permit a minor to use JoyProfits, you acknowledge and agree
            that:
          </p>
          <ul>
            <li>
              You are fully responsible for all activities on the platform.
            </li>
            <li>
              All earnings, withdrawals, and interactions are carried out with
              your consent and supervision.
            </li>
            <li>
              JoyProfits is not liable for any unauthorized actions taken by
              minors.
            </li>
          </ul>
          <p>
            JoyProfits reserves the right to ask for proof of parental or
            guardian consent at any time and may suspend or close accounts that
            do not provide this proof.
          </p>
          <h4>
            <strong>2.2 Compliance with Laws</strong>
          </h4>
          <p>
            You are fully responsible for making sure that your use of the
            Services follows all relevant local, state, national, and
            international laws, regulations, and rules. JoyProfits may, at its
            discretion, refuse to provide services, suspend your account, or
            deny access if it believes your actions are in violation of any laws
            or the terms outlined here.
          </p>
          <h3>
            <strong>3. Account Registration and Management</strong>
          </h3>
          <h4>
            <strong>3.1 Account Creation</strong>
          </h4>
          <p>
            To use JoyProfits&apos; features, you must create an account by
            providing accurate and up-to-date information, such as your email
            address and password. Your account is personal and cannot be
            transferred to others. Providing false or misleading information may
            lead to immediate suspension or termination of your account.
          </p>
          <h4>
            <strong>3.2 Account Responsibilities</strong>
          </h4>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials. All activities performed under your account are
            considered your responsibility. JoyProfits is not liable for any
            unauthorized access, loss, or damage resulting from your failure to
            secure your credentials.
          </p>
          <h3>
            <strong>4. Services Provider</strong>
          </h3>
          <h4>
            <strong>4.1 Overview</strong>
          </h4>
          <p>
            JoyProfits offers users the opportunity to earn money by
            participating in a variety of activities such as playing games,
            watching videos, completing surveys, and performing various tasks.
            Users can also engage with online content and participate in other
            incentivized activities. The types and availability of these tasks
            are flexible and can change based on JoyProfits&apos; discretion,
            the level of demand from users, and overall engagement with the
            platform. This allows JoyProfits to continuously adapt and provide a
            diverse range of earning opportunities to its users.
          </p>
          <h4>
            <strong>4.2 Earnings System</strong>
          </h4>
          <p>
            Earnings are determined by task completion rates, user performance,
            and specific metrics unique to the platform. These earnings are
            provisional until they are validated by JoyProfits’ internal
            systems. JoyProfits has the right to adjust earning structures,
            quotas, or requirements at any time without prior notice.
          </p>
          <h4>
            <strong>4.3 Withdrawals</strong>
          </h4>
          <p>
            Withdrawals from the JoyProfits platform are exclusively processed
            in two ways: by traditional bank transfer or to a PayPal account.
            For a bank transfer, users must provide a valid bank account number,
            first and last name, the BIC/Swift Code of the bank, and the bank’s
            name. For PayPal withdrawals, users must provide a valid PayPal
            email address and the full name associated with the PayPal account
            to complete the withdrawal process.
          </p>
          <ul>
            <li>
              Transactions are subject to transfer fees and processing times
              determined by interbank transfers or PayPal processing.
            </li>
            <li>
              Once a withdrawal is submitted, JoyProfits cannot reverse or
              modify the transaction.
            </li>
            <li>
              It is the user’s responsibility to ensure that the provided
              details are valid.
            </li>
          </ul>
          <h3>
            <strong>5. User Obligations and Acceptable Use</strong>
          </h3>
          <h4>
            <strong>5.1 Acceptable Use Policy</strong>
          </h4>
          <p>
            You agree to use the Services only for lawful purposes and in
            accordance with these Terms. Prohibited activities include, but are
            not limited to:
          </p>
          <ul>
            <li>
              Engaging in fraudulent activities, such as manipulating tasks or
              earnings.
            </li>
            <li>
              Using automated tools, bots, or scripts to interact with the
              platform.
            </li>
            <li>
              Uploading or sharing content that contains malware, viruses, or
              harmful code.
            </li>
            <li>
              Attempting to disrupt the normal functioning of the platform,
              including exploiting vulnerabilities or making unauthorized access
              attempts.
            </li>
          </ul>
          <h4>
            <strong>5.2 Compliance with Task Rules</strong>
          </h4>
          <p>
            Each task provided through the platform may have specific guidelines
            or instructions. Users must adhere to these requirements to qualify
            for earnings. JoyProfits reserves the right to disqualify tasks
            completed improperly or fraudulently.
          </p>
          <h3>
            <strong>6. Intellectual Property Rights</strong>
          </h3>
          <h4>
            <strong>6.1 Ownership</strong>
          </h4>
          <p>
            All materials provided by JoyProfits, including the website design,
            logos, graphics, software, and original content, are the
            intellectual property of JoyProfits or its licensors. These
            materials are protected by copyright, trademark, and other
            intellectual property laws.
          </p>
          <h4>
            <strong>6.2 Limited License</strong>
          </h4>
          <p>
            JoyProfits grants users a limited, non-exclusive, non-transferable
            license to access and use the Services for personal, non-commercial
            purposes. You may not copy, distribute, modify, or create derivative
            works based on JoyProfits&apos; intellectual property without prior
            written consent.
          </p>
          <h3>
            <strong>7. Limitation of Liability</strong>
          </h3>
          <p>To the fullest extent permitted by law:</p>
          <ul>
            <li>
              JoyProfits disclaims liability for any indirect, incidental, or
              consequential damages arising from your use of the Services.
            </li>
            <li>
              JoyProfits is not responsible for losses or damages resulting from
              PayPal or bank transfers, especially if incorrect transfer details
              are provided by the user.
            </li>
          </ul>
          <p>
            In no event shall JoyProfits&apos; liability exceed the total
            earnings accrued in your account over the three (3) months preceding
            the claim.
          </p>
          <h3>
            <strong>8. Termination of Services</strong>
          </h3>
          <p>
            These Terms are governed by the laws of the Republic of Poland,
            without regard to conflict of laws principles.
          </p>
          <h4>
            <strong>9.1 Arbitration</strong>
          </h4>
          <p>
            All disputes arising from or related to these Terms shall be
            resolved through binding arbitration under the rules of the Polish
            Arbitration Association (PAA). The arbitration will take place in
            Poznań, Poland, and the arbitrator’s decision will be final and
            binding.
          </p>
          <h3>
            <strong>10. Changes to Terms</strong>
          </h3>
          <p>
            JoyProfits reserves the right to update or modify these Terms at any
            time. Significant changes will be communicated via email or a notice
            on the website. Continued use of the Services constitutes acceptance
            of the updated Terms.
          </p>
          <h3>
            <strong>11. Contact Information</strong>
          </h3>
          <p>For questions or concerns, please contact us:</p>
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
      </article>
    </div>
  )
}

export default TermsOfService
