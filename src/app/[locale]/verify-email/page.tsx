'use client'

import { fetchConfirmAccountEmail } from "@/api/rest/emails";
import { JookliException } from "@/types/jookli";
import { Card, CardBody } from "@nextui-org/card"
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const verifyEmail : React.FC = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [response, setResponse] = useState<string | null>();

    const t = useTranslations();
    
    //TODO Rest
    useEffect(() => {
        const fetch = async () => {
            if (token) {
                fetchConfirmAccountEmail({ token: token }).then(
                    async (res) => {
                        if(res.ok){
                            
                        }else{
                            var result = await res.json() as JookliException;
                            setResponse(result.error_description);
                        }
                    }
                );
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
                <p>{response}</p>
            </CardBody>
        </Card>
    )
}

export default verifyEmail;