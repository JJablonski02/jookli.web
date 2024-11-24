import Image from "next/image"
import { useTranslations } from "next-intl"

import analysis from "../../../public/analysis.svg"
import education from "../../../public/education.svg"
import payouts from "../../../public/payouts.svg"
import register from "../../../public/register.svg"
import strategy from "../../../public/strategy.svg"
import { MotionDiv } from "../motion-components/motion-div"

type StepOverViewType = "1" | "2" | "3" | "4" | "5"

interface IStepOverview {
  variant: StepOverViewType
}

export const StepOverview: React.FC<IStepOverview> = ({ variant }) => {
  const t = useTranslations("HowItWorksPage.StepOverview")

  const src = {
    "1": register,
    "2": strategy,
    "3": education,
    "4": analysis,
    "5": payouts,
  }[variant]

  const text = {
    "1": t("registrationAndConfig"),
    "2": t("strategySelection"),
    "3": t("educationAndSupport"),
    "4": t("analysis"),
    "5": t("payouts"),
  }[variant]

  const altText = {
    "1": "register_image",
    "2": "strategy_image",
    "3": "education_image",
    "4": "analysis_image",
    "5": "payouts_image",
  }[variant]

  return (
    <MotionDiv className="mx-auto flex flex-col items-center justify-center gap-4 text-center">
      <Image
        src={src}
        alt={altText}
        className="h-[40px] lg:h-[28px] md:h-[26px]"
      />
      <p className="line-clamp-2 whitespace-pre-wrap">{text}</p>
    </MotionDiv>
  )
}
