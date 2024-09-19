import React from 'react'
import Header from '../Header'
import { useTranslations } from 'next-intl'

const AboutUsHeader = () => {
    const t = useTranslations('AboutUs.Header')
    return (
        <Header
            header={t("headerTitle")}
            headerParagraph={t('headerParagraph')}
            firstButtonLabel={t('downloadIos').toUpperCase()}
            secondButtonLabel={t('downloadAndroid').toUpperCase()}
        />
    )
}

export default AboutUsHeader