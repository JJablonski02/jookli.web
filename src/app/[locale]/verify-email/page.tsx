'use client'

import { fetchConfirmAccountEmail } from "@/api/rest/emails";
import { Card, CardBody } from "@nextui-org/card"
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const verifyEmail : React.FC = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const t = useTranslations();
    
    //TODO Rest
    useEffect(() => {
        const fetch = async () => {
            if (token) {
                const res = await fetchConfirmAccountEmail({ token: token });
                console.log(res);
            }
        }
       
        fetch();
    }, [token]);


    return(
        <Card className="flex">
            <CardBody>
                <p>{t('VerifyEmail.accountActivated')}</p>
                <p>{t('VerifyEmail.hello')}, </p>
                <p>{t('VerifyEmail.thankYouNote')}</p>
            </CardBody>
        </Card>
    )
}

export default verifyEmail;