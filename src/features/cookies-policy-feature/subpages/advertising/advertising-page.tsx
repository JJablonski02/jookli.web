import { AdvertisingContent } from "../../components/advertising-content/advertising-content"
import { CookiesCommonContainer } from "../../components/cookies-common-container"

export const AdvertisingPage = () => {
  return (
    <CookiesCommonContainer description="Advertising keeps JoyProfits and many of the websites and services you use free of charge. We work hard to make sure that ads are safe, unobtrusive, and as relevant as possible. For example, you won’t see pop-up ads on JoyProfits, and we terminate the accounts of hundreds of thousands of publishers and advertisers that violate our policies each year – including ads containing malware, ads for counterfeit goods, or ads that attempt to misuse your personal information.">
      <AdvertisingContent />
    </CookiesCommonContainer>
  )
}
