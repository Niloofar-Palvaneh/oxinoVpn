"use client"

import Link from "next/link"
import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const closeMenu = () => {
        setShowMenu(false)
    }
    document.body.addEventListener("click", closeMenu);

    return (
        <>
            <div className="z-50 sticky top-0 w-full flex items-center justify-center py-6 sm:py-2 shadow z-10 bg-white
            md:bg-main md:text-white 
             sm:bg-main sm:text-white md:shadow-xl sm:shadow-xl ">
                <div className="flex w-[73%] items-center justify-between text-md md:w-[98%] sm:w-[95%] lg:w-[98%]">
                    <ul className="flex gap-4 md:hidden">
                        <li className="hover:text-white px-2 py-[6px] rounded-[8px] transition duration-300 ease-in-out
                         hover:bg-main">
                            <Link href={"/"}>
                                صفحه نخست
                            </Link>
                        </li>
                        <li className="hover:text-white px-2 py-[6px] rounded-[8px] transition duration-300 ease-in-out
                         hover:bg-main">
                            <Link href={"/AccountRenewal"}>
                                تمدید اکانت
                            </Link>
                        </li>
                        <li className="hover:text-white px-2 py-[6px] rounded-[8px] transition duration-300 ease-in-out
                         hover:bg-main">
                            <Link href={"/LearnAndDownload"}>آموزش و دانلود</Link>
                        </li>
                        <li className="hover:text-white px-2 py-[6px] rounded-[8px] transition duration-300 ease-in-out
                         hover:bg-main">
                            <Link href={"/AccountRecovery"}>
                                بازیابی اکانت
                            </Link>
                        </li>
                        <li className="hover:text-white px-2 py-[6px] rounded-[8px] transition duration-300 ease-in-out
                         hover:bg-main">
                            <Link href={"/Contact"}>تماس با ما</Link>
                        </li>
                    </ul>
                    <div>
                        <span className="hidden sm:block md:block"
                            onClick={() => setShowMenu(true)}
                        >مشاهده منو</span>
                        <div className={`absolute top-0 right-0 ${showMenu ? "flex" : "hidden"}
                         h-screen custom-bg flex-col gap-6  w-[40%]`}>
                            <div className="flex justify-end p-6">
                                <AiOutlineClose
                                    className="text-white text-2xl font-bold" />
                            </div>
                            <ul className="text-md flex flex-col gap-6 mr-4">
                                <li>
                                    <Link href={"/"}>
                                        صفحه نخست
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/AccountRenewal"}>
                                        تمدید اکانت
                                    </Link>
                                </li>
                                <li>
                                <Link href={"/LearnAndDownload"}>آموزش و دانلود</Link>
                                </li>
                                <li>
                                <Link href={"/AccountRecovery"}>
                                بازیابی اکانت
                            </Link>
                                </li>
                                <li>
                                <Link href={"/Contact"}>تماس با ما</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="bg-main text-white rounded-[8px] px-4 py-[8px]
                     duration-300 ease-in-out hover:text-main hover:bg-white transition">
                        <Link href={"/LoginUserPanel"}>پنل کاربری</Link>
                    </button>
                </div>
            </div>
        </>
    )
}
