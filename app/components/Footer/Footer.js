import Link from "next/link"

export default function Footer(){

    return(
        <>
        <div className="w-full flex items-center justify-center mt-12">
            <ul className="z-30 flex items-center justify-start w-[65%] gap-12 sm:w-full sm:gap-4 sm:mr-2 sm:text-[14px] sm:mb-8">
                <li >
                    <Link href={"/AccountRenewal"} className="cursor-pointer ">
                    تمدید اشتراک
                    </Link>
                </li>
                <li >
                    <Link href={"/LearnAndDownload"} className="cursor-pointer ">
                    آموزش ها
                    </Link>
                </li>
                <li >
                    <Link href={"/AccountRecovery"} className="cursor-pointer ">
                    بازیابی اکانت
                    </Link>
                </li>
                <li >
                    <Link href={"/Contact"} className="cursor-pointer">
                    تماس با ما
                    </Link>
                </li>
            </ul>
        </div>
        </>
    )
}