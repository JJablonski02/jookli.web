// import { useTranslations } from 'next-intl';

import { useTranslations } from "next-intl";
import React from "react";

const PaymentMethods = () => {

  //Przykład użycia
  //W pliku json budujemy strukturę tak by odseparować tłumaczenia dla każdego ekranu z osobna. Komponenty możesz 
  // odseparować wspólnie jako Components.
  //Jak chcesz sprawdzić działanie tego to w pomieniasz link : http://localhost:3000/payment-methods na http://localhost:3000/en lub http://localhost:3000/pl.
  //wtedy jak wejdziesz na tę stronę to zawartość strony będzie ładowana w innym języku. 
  //Więc teraz wszędzie gdzie będziesz używał translacji to zrób tłumaczenie tylko dla języka polskiego na ten moment, ale wszędzie w komponentach i ekranach
  //używaj przez translację.
  //Przykłady translacji: t('getTheApp') => wyświetla Get the app
  // t('earnWithUs') => Zarabiaj z nami
  // t('highTimeToStartEarnWithJoyProfitsDescription') => Czas najwyższy by zacząć zarabiać z JoyProfits. Dalsza część opisu... 
  //itd.
  const t = useTranslations('PaymentMethods')

  return <div>{t('title')}</div>;
};

export default PaymentMethods;
