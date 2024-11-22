import { Link } from "@nextui-org/link"
import { useTranslations } from "next-intl"

import { JPSvgIcon } from "@/components/JPSvgIcon"
import { MotionDiv } from "@/components/motion-components/motion-div"
import { PhoneImage } from "@/components/phone-image"
import { Squares } from "@/components/Squares"

export const Benefits = () => {
  const t = useTranslations("HomePage.Benefits")
  return (
    <section>
      <Squares position="right">
        <div className="flex w-full items-center justify-end text-end lg:mx-0 lg:flex lg:flex-col lg:text-start">
          <MotionDiv className="flex h-2/3 w-3/4 justify-end lg:h-fit lg:w-full lg:justify-start lg:px-20 md:px-0">
            <div className="flex w-3/4 flex-col items-end space-y-6 pr-4 lg:w-full lg:items-start">
              <h2 className="text-4xl text-primary lg:text-3xl md:text-2xl">
                {t("headerDescription")}
              </h2>
              <div>
                <p className="text-xl md:text-medium">{t("description")}</p>
                <Link href="earn-methods">
                  <span className="flex items-center">
                    <p className="text-xl text-blue md:text-medium">
                      {t("seeMore")}
                    </p>
                    <JPSvgIcon
                      iconType="chevron-forward"
                      color="blue"
                      size={22}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </MotionDiv>
          <PhoneImage phoneType="earnings-history-phone" />
        </div>
      </Squares>
    </section>
  )
}
