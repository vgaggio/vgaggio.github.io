"use client";
import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import {
    CardTitle,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "../../../components/ui/card";
import Image from "next/image";
import { useRouter } from "next/router";
import { Debt } from "../../../utils/interfaces";
import { useTranslation } from "react-i18next";
const posibleCuotes = ["p2", "p3", "p4", "p6", "p12", "p18"];

const formatAsArgentineCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-AR", {
        style: "decimal",
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    }).format(amount);
};


export default function Component() {
    const [isLoading, setIsLoading] = useState(false);
    const [debt, setDebt] = useState<Debt>();
    const [errorr, setErrorr] = useState("");
    const [activeCoutes, setActiveCuotes] = useState([""]);
    const { t } = useTranslation();
    const [empresa, setEmpresa] = useState("Bircle");



    return (
        <>
            {isLoading ? (
                <div className="lg:w-auto w-[95%] self-center  rounded-lg p-4 sm:p-8 shadow-2xl">
                    <div className=" bg-white h-screen ">
                        <div className="pt-20"></div>
                        <div className="shadow-2xl h-fit rounded-md w-[450px] p-8 mx-auto">
                            <div className="animate-pulse">
                                <div className="flex w-full gap-4">
                                    <div className=" h-10 w-3/4 bg-gray-200  rounded mb-4" />
                                    <div className="ml-auto mt-1">
                                        {" "}
                                        <Image
                                            src={
                                                "/gradient_logo.svg"
                                            }
                                            alt="bircle_small.png"
                                            width={120}
                                            height={10}
                                            className="self-center mb-8"
                                        />
                                    </div>
                                </div>

                                <div className="p-4 rounded-md justify-between items-center mb-6">
                                    <div className=" h-7 w-full bg-gray-200 rounded mb-4" />
                                    <div className=" h-2 w-3/4 bg-gray-200 rounded mb" />
                                </div>
                                <Card className="mb-4">
                                    <CardHeader>
                                        <div className=" h-10 w-3/4 bg-gray-200  rounded mb-4" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className=" h-2 w-3/4 bg-gray-200 rounded mb-4" />
                                        <div className=" h-2 w-1/2 bg-gray-200 rounded mb-4" />
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="bg-stone-200 hover:scale-105">
                                            <div className=" h-4 mt-4 w-20 bg-gray-200 rounded mb-4" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card className="mb-4">
                                    <CardHeader>
                                        <div className=" h-10 w-3/4 bg-gray-200 rounded mb-4" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className=" h-2 w-3/4 bg-gray-200  rounded mb-4" />
                                        <div className=" h-2 w-1/2 bg-gray-200  rounded mb-4" />
                                    </CardContent>
                                    <CardFooter>
                                        <Button className=" bg-stone-200">
                                            <div className=" h-4 mt-4 w-20 bg-gray-200 rounded mb-4" />
                                        </Button>
                                    </CardFooter>
                                </Card>

                                <div className="flex-1 space-y-6 py-1 mt-10">
                                    <div className="h-2 w-40 bg-gray-200 rounded"></div>
                                    <div className="space-y-3">
                                        <div className="h-2 bg-gray-200  rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-center w-[100%] bg-white self-center ">
                    <div className="mt-[5%]"></div>
                    <>
                        <div className="lg:w-auto self-center  rounded-lg p-4 sm:p-8 shadow-2xl ">
                            <div className="max-w-md mx-auto">
                                <div className="flex">
                                    <h1 className="text-2xl justify-start font-semibold mb-4">
                                        {t("saludo")}
                                    </h1>
                                    <a href="https://bircle.ai" target="_blank" className="ml-auto">
                                        <Image
                                            src="/gradient_logo.svg"
                                            alt="bircle_small.png"
                                            width={120}
                                            height={10}
                                            className="self-center mb-8"
                                        />
                                    </a>
                                </div>

                                <p className="mb-6">
                                    {t("cuentaPendiente")} {empresa}
                                </p>
                                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h2 className="text-xl font-semibold">
                                                {formatAsArgentineCurrency(Number("250000"))}</h2>
                                            <p className="text-sm text-gray-600">
                                                {t("saldoPendiente")}
                                            </p>
                                        </div>
                                        <a href="https://api.whatsapp.com/send?phone=5493516152680" target="_blank">
                                            <Button>
                                                {t("seeDetails")}
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                                <h2 className="text-lg font-semibold mb-4">
                                    {t("paymentOptionss")}
                                </h2>
                                <Card className="mb-4">
                                    <CardHeader>
                                        <CardTitle>{t("siglePayment")}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{t("payInFull")}</p>
                                        <p className="text-sm text-gray-600 f">
                                            {t("resolveYourAccountWithoOnePayment")}
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                    <a href="https://api.whatsapp.com/send?phone=5493516152680" target="_blank">
                                        <Button>
                                            {t("pay")} 
                                          {" "}
                                            {t("now")}
                                        </Button>
                                        </a>
                                    </CardFooter>
                                </Card>
                                <Card className="mb-4">
                                    <CardHeader>
                                        <CardTitle>
                                            {t("payIn")} {3} {t("cuotes")}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>
                                            {t("pay")} $
                                            {formatAsArgentineCurrency(Number("83333.33"))}{" "}
                                            {t("perCuote")}{" "}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {t("spreadYourPaymentOver")}{" "}
                                            {3} {t("months.")}
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                    <a href="https://api.whatsapp.com/send?phone=5493516152680" target="_blank">
                                        <Button>
                                            {t("pay")}{" "}
                                            {t("now")}
                                        </Button>
                                        </a>
                                    </CardFooter>
                                </Card>

                                <div className="flex items-center justify-center space-x-2 mb-4">
                                    <CreditCardIcon className="h-6 w-6 text-gray-600" />
                                    <HeartIcon className="h-6 w-6 text-yellow-500" />
                                </div>
                                <p className="text-center text-sm text-gray-600">
                                    {t("pleaseVisit")} {<a href="https://bircle.ai" className="underline" target="_blank">bircle.ai</a>} {t("websiteIfYouPrefer")}
                                </p>
                            </div>
                            <div className="fixed bottom-0 left-0 right-0 2xl:right-4 self-center ">
                                <div className="md:hidden flex justify-end">
                                </div>
                                <div className="bg-white pb-7 p-4 border-t border-gray-300  flex justify-between items-center md:max-w-md md:mx-auto md:rounded-lg md:border-r md:border-l md:shadow-md">
                                    <div >
                                        {debt ? (
                                            <h3 className="text-lg font-semibold">
                                                ${formatAsArgentineCurrency(Number(debt.amount))}
                                            </h3>
                                        ) : (
                                            <></>
                                        )}
                                        <p className="text-sm mb-6 text-gray-600">
                                            {t("saldoPendiente")}
                                        </p>
                                    </div>
                                    <a href="https://api.whatsapp.com/send?phone=5493516152680" target="_blank">
                                    <Button>
                                        {t("pay")} {t("now")}
                                    </Button>
                                    </a>
                                    <div className="absolute bottom-0 left-0 right-0 text-center text-sm text-gray-400 p-2">
                                        {t("poweredBy")} <a href="https://bircle.ai" className="underline" target="_blank">Bircle.ai</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center fixed bottom-0 scale-110">
                            {/*<DarkModeToggle /> */}
                        </div>
                    </>
                    <div className="mt-[120px]"></div>
                </div>
            )}
        </>
    );
}

function CreditCardIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    );
}

function HeartIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    );
}
