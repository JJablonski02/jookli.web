import { CookiesLayout } from "@/components/layouts/cookies-layout"
import { ManagingUserDataPage } from "@/features/cookies-policy-feature/subpages/managing-user-data/managing-user-data-page"

const ManagingUsersData = () => {
  return (
    <CookiesLayout>
      <ManagingUserDataPage />
    </CookiesLayout>
  )
}

export default ManagingUsersData
