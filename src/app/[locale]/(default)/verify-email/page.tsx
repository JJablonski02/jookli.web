'use client'

import { fetchConfirmAccountEmail } from "@/api/rest/emails";
import { JookliException } from "@/types/jookli";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card"
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const verifyEmail : React.FC = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [name, setName] = useState<string | null>();

    const t = useTranslations();
    
    //TODO Rest
    useEffect(() => {
        const fetch = async () => {
            if (token) {
                fetchConfirmAccountEmail({ token: token }).then(
                    async (res) => {
                        if(res.ok){
                            const result = await res.json();
                            setName(result);
                        }else{
                            const result = await res.json() as JookliException;
                            //TODO - obsługa błędów
                            setName(result.error_description);
                        }
                    }
                );
            }
        }
       
        fetch();
    }, [token]);


    return(
        <div className="flex justify-center items-center h-full">
        <Card className="w-96 shadow-lg">
            <CardBody className="text-center p-6">
                <h2 className="text-2xl font-bold mb-4">{t('VerifyEmail.accountActivated')}</h2>
                <p className="text-lg mb-2">{t('VerifyEmail.hello')}, {name}</p>
                <p className="text-gray-600 mb-4">
                    {t('VerifyEmail.thankYouNote')}
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    {t('VerifyEmail.returnToApp')}
                </Button>
            </CardBody>
        </Card>
    </div>
    )
}

export default verifyEmail;