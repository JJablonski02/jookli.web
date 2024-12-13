import PageWrapper from "../PageWrapper"

export const CookiesLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <PageWrapper className="mt-24 flex w-full justify-between px-20 md:px-5">
      <div className="w-full sm:mt-12">{children}</div>{" "}
    </PageWrapper>
  )
}
