"use client"

import { CardBody } from "@nextui-org/card"
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react"

import { CookiesCard } from "../cookies-card/cookies-card"
import styles from "./styles.module.css"

export const HowWeUseCookiesContent = () => {
  return (
    <CookiesCard>
      <CardBody>
        <Table
          aria-label="Types of cookies used by JoyProfits"
          removeWrapper
          selectionMode="none"
          className={styles.tableContainer}
        >
          <TableHeader>
            <TableColumn width={70} className="bg-secondary-light">
              <p>Category of use</p>
            </TableColumn>
            <TableColumn className="bg-secondary-light">
              <p>Example</p>
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>
                <p>Preferences</p>
              </TableCell>
              <TableCell>
                <p>
                  These cookies allow our websites to remember information that
                  changes the way the site behaves or looks, such as your
                  preferred language or the region you are in. For instance, by
                  remembering your region, a website may be able to provide you
                  with local weather reports or traffic news. These cookies can
                  also assist you in changing text size, font, and other parts
                  of web pages that you can personalize.
                </p>
                <p>
                  Loss of the information stored in a preference cookie may make
                  the website experience less functional but should not prevent
                  it from working.
                </p>
                <p>
                  Most JoyProfits users will have a preferences cookie called
                  ‘NID’ in their browsers. A browser sends this cookie with
                  requests to JoyProfits’ sites. The NID cookie contains a
                  unique ID JoyProfits uses to remember your preferences and
                  other information, such as your preferred language (e.g.
                  English), how many search results you wish to have shown per
                  page (e.g. 10 or 20), and whether or not you wish to have
                  JoyProfits’ SafeSearch filter turned on.
                </p>
              </TableCell>
            </TableRow>
            <TableRow key="2" className={styles.darkRow}>
              <TableCell>
                <p>Security</p>
              </TableCell>
              <TableCell>
                <p>
                  We use security cookies to authenticate users, prevent
                  fraudulent use of login credentials, and protect user data
                  from unauthorized parties.
                </p>
                <p>
                  For example, we use cookies called ‘SID’ and ‘HSID’ which
                  contain digitally signed and encrypted records of a user’s
                  JoyProfits account ID and most recent sign-in time. The
                  combination of these two cookies allows us to block many types
                  of attack, such as attempts to steal the content of forms that
                  you complete on web pages.
                </p>
              </TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>
                <p>Processes</p>
              </TableCell>
              <TableCell>
                <p>
                  Process cookies help make the website work and deliver
                  services that the website visitor expects, like navigating
                  around web pages or accessing secure areas of the website.
                  Without these cookies, the website cannot function properly.
                </p>
                <p>
                  For example, we use a cookie called ‘lbcs’ which makes it
                  possible for JoyProfits Docs to open many Docs in one browser.
                  Blocking this cookie would prevent JoyProfits Docs from
                  operating correctly.
                </p>
              </TableCell>
            </TableRow>
            <TableRow key="4" className={styles.darkRow}>
              <TableCell>
                <p>Advertising</p>
              </TableCell>
              <TableCell>
                <p>
                  We use cookies to make advertising more engaging to users and
                  more valuable to publishers and advertisers. Some common
                  applications of cookies are to select advertising based on
                  what’s relevant to a user; to improve reporting on campaign
                  performance; and to avoid showing ads the user has already
                  seen.
                </p>
                <p>
                  JoyProfits uses cookies like NID and SID to help customize ads
                  on JoyProfits properties, like JoyProfits Search. For example,
                  we use such cookies to remember your most recent searches,
                  your previous interactions with an advertiser’s ads or search
                  results, and your visits to an advertiser’s website. This
                  helps us to show you customized ads on JoyProfits.
                </p>
                <p>
                  We also use one or more cookies for advertising we serve
                  across the web. One of the main advertising cookies on
                  non-JoyProfits sites is named ‘IDE‘ and is stored in browsers
                  under the domain doubleclick.net. Another is stored in
                  google.com and is called ANID. We use other cookies with names
                  such as DSID, FLC, AID, TAID, and exchange_uid. Other
                  JoyProfits properties, like YouTube, may also use these
                  cookies to show you more relevant ads.
                </p>
                <p>
                  Sometimes advertising cookies may be set on the domain of the
                  site you’re visiting. In the case of advertising we serve
                  across the web, cookies named ‘__gads’ or ‘__gac’ may be set
                  on the domain of the site you’re visiting. Unlike cookies that
                  are set on JoyProfits’ own domains, these cookies can’t be
                  read by JoyProfits when you’re on a site other than the one on
                  which they were set. They serve purposes such as measuring
                  interactions with the ads on that domain and preventing the
                  same ads from being shown to you too many times.
                </p>
                <p>
                  JoyProfits also uses conversion cookies, whose main purpose is
                  to help advertisers determine how many times people who click
                  on their ads end up purchasing their products. These cookies
                  allow JoyProfits and the advertiser to determine that you
                  clicked the ad and later visited the advertiser’s site.
                  Conversion cookies are not used by JoyProfits for personalized
                  ad targeting and persist for a limited time only. A cookie
                  named ‘Conversion‘ is dedicated to this purpose. It’s
                  generally set in the googleadservices.com domain or the
                  google.com domain (you can find a list of domains we use for
                  advertising cookies at the foot of this page). Some of our
                  other cookies may be used to measure conversion events as
                  well. For example, DoubleClick and JoyProfits Analytics
                  cookies may also be used for this purpose.
                </p>
                <p>
                  We also use cookies named ‘AID,‘ ‘DSID,’ and ‘TAID‘, which are
                  used to link your activity across devices if you’ve previously
                  signed in to your JoyProfits Account on another device. We do
                  this to coordinate the ads you see across devices and measure
                  conversion events. These cookies may be set on the domains
                  google.com/ads, google.com/ads/measurement, or
                  googleadservices.com. If you don’t want the ads you see to be
                  coordinated across your devices, you can opt out of Ads
                  Personalization using Ads Settings.
                </p>
              </TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>
                <p>Session State</p>
              </TableCell>
              <TableCell>
                <p>
                  Websites often collect information about how users interact
                  with a website. This may include the pages users visit most
                  often and whether users get error messages from certain pages.
                  We use these so-called ‘session state cookies’ to help us
                  improve our services, in order to improve our users’ browsing
                  experience. Blocking or deleting these cookies will not render
                  the website unusable.
                </p>
                <p>
                  These cookies may also be used to anonymously measure the
                  effectiveness of PPC (pay per click) and affiliate
                  advertising.
                </p>
                <p>
                  For example, we use a cookie called
                  ‘recently_watched_video_id_list’ so that YouTube can record
                  the videos most recently watched by a particular browser.
                </p>
              </TableCell>
            </TableRow>
            <TableRow key="6" className={styles.darkRow}>
              <TableCell>
                <p>Session State</p>
              </TableCell>
              <TableCell>
                <p>
                  JoyProfits Analytics is JoyProfits’ analytics tool that helps
                  website and app owners to understand how their visitors engage
                  with their properties. It may use a set of cookies to collect
                  information and report website usage statistics without
                  personally identifying individual visitors to JoyProfits. The
                  main cookie used by JoyProfits Analytics is the ‘__ga’ cookie.
                </p>
                <p>
                  These cookies may also be used to anonymously measure the
                  effectiveness of PPC (pay per click) and affiliate
                  advertising.
                </p>
                <p>
                  For example, we use a cookie called
                  ‘recently_watched_video_id_list’ so that YouTube can record
                  the videos most recently watched by a particular browser.
                </p>
                <p>
                  In addition to reporting website usage statistics, JoyProfits
                  Analytics can also be used, together with some of the
                  advertising cookies described above, to help show more
                  relevant ads on JoyProfits properties (like JoyProfits Search)
                  and across the web and to measure interactions with the ads we
                  show.
                </p>
                <Link
                  href="https://developers.google.com/tag-platform/security/concepts/cookies?hl=en-US"
                  target="_blank"
                >
                  <p>
                    Learn more about Analytics cookies and privacy information.
                  </p>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
    </CookiesCard>
  )
}
