
import Link from "next/link"
import { FaCheck } from "react-icons/fa"

export default function PlanBox() {
    return (
        <>
            <div className="shadow-[0px_0px_31px_9px_#00000024] rounded-xl relative w-[80%] duration-300 ease-in-out bg-white
                hover:shadow-[0px_0px_31px_0px_#718096] transition">
                <div className="bg-main rounded-t-md rounded-bl-md text-xl font-bold text-white absolute -top-4 py-2 px-4">
                    69 هزار تومان
                </div>
                <div>
                    <h3 className="w-full mt-12 text-center text-main text-2xl font-bold">یک ماهه</h3>
                    <ul className="p-4 flex flex-col gap-4">
                        <li className="flex gap-4 hover:font-bold transition delay-150 transform hover:-translate-x-1
                             motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <FaCheck className="text-main text-xl" />
                            <h3 className="w-[80%] text-gray-700"> آی پی ثابت اختصاصی</h3>
                        </li>

                        <li className="flex gap-4 hover:font-bold transition delay-150 transform hover:-translate-x-1 items-start
                             motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <FaCheck className="text-main text-xl" />
                            <h3 className="w-[80%] text-gray-700">
                                کشور های فنلاند، ترکیه, لهستان , سنگاپور , روسیه , کانادا , هند , آمریکا ,مکزیک , سوئیس , سوئد , فرانسه , استرالیا , مالزی</h3>
                        </li>

                        <li className="flex gap-4 hover:font-bold transition delay-150 transform hover:-translate-x-1
                             motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <FaCheck className="text-main text-xl" />
                            <h3 className="w-[80%] text-gray-700"> آی پی ثابت اختصاصی</h3>
                        </li>

                    </ul>
                </div>
                <div className="w-full justify-end flex mt-6">
                    <Link href={"#"} className="duration-300 ease-in-out hover:text-main hover:bg-white
                 transition bg-main text-white rounded-[8px] px-8 py-[8px] hover:shadow-[0px_0px_20px_2px_#cbd5e0]">
                        خرید
                    </Link>
                </div>
            </div>
        </>
    )
}
