

import Link from "next/link";
import Image from "next/image";

import { AiFillAndroid, AiFillMobile, AiFillWindows, AiFillApple } from "react-icons/ai"
import { DiLinux } from "react-icons/di"

export default function LearnAndDownload() {
    let randomlyNumber = Math.random()
    return (
        <>
            <div className=" flex items-center justify-center bg-white z-10">
                <div className="w-[81%] border rounded mt-12 pb-6 relative sm:w-full">
                    <div className="bg-gray-100 border-b text-xl p-4">
                        <h4>آموزش استفاده از سرویس ها</h4>
                    </div>
                    <div className="text-indigo-900 bg-indigo-100 p-4 m-4 rounded border border-indigo-200">
                        <p className="inline-flex sm:contents xl:block">روش های مختلف اتصال به سرور های اکسینو برای انواع کانکشن ها
                            <Link className="font-bold mx-[3px] " href={"#"}>بصورت تصویری</Link> فراهم شده است.</p>
                    </div>

                    <div className="text-green-900 bg-green-100 p-4 m-4 rounded border border-green-200">
                        <p className="inline-flex sm:contents xl:block">
                            نام کاربری و رمز عبور جهت ورود به پنل کاربری
                            <Link className="font-bold mx-[3px] " href={"#"}>پس از خرید</Link>
                            اشتراک برای شما ارسال می گردد.
                        </p>
                    </div>

                    <div className="text-red-900 bg-red-100 p-4 m-4 rounded border border-red-200">
                        <p className="inline-flex sm:contents xl:block">
                            برای دریافت جزئیات و آدرس سرور های اکسینو وارد
                            <Link className="font-bold mx-[3px] " href={"#"}>پنل کاربری </Link>
                            خود شوید.
                        </p>
                    </div>

                    <div className="text-yellow-900 bg-yellow-100 p-4 m-4 rounded border border-yellow-200">
                        <p className="inline-flex sm:contents  xl:block">
                            در هنگام وارد کردن اطلاعات خود شامل نام کاربری و رمز عبور حتما به
                            <Link className="font-bold mx-[3px] " href={"#"}> کوچک و بزرگ بودن حروف</Link>
                            دقت کنید.
                        </p>
                    </div>


                    <div className=" w-full flex items-center justify-center">
                        <div className="w-[97%] border rounded mt-12 flex-col p-2 sm:w-full flex items-center justify-center border">
                            <Link href={"/LearnAndroid"} className="w-full hover:bg-gray-100 items-center justify-center flex gap-2 border-b py-[10px] text-[18px] text-gray-600 ">
                                <AiFillAndroid className="text-3xl text-gray-700" />
                                <p className="display-fit">
                                    برای مشاهده آموزش های
                                    <span className="font-bold mx-[3px]" >اندروید</span>
                                    اینجا کلیک کنید
                                </p>
                            </Link>
                            <Link href={"/LearnIphone"} className="w-full hover:bg-gray-100 items-center justify-center flex gap-2 border-b py-[10px] text-[18px] text-gray-600">
                                <AiFillMobile className="text-3xl text-gray-700" />
                                <p className="display-fit">
                                    برای مشاهده آموزش های
                                    <span className="font-bold mx-[3px] " >آیفون</span>
                                    اینجا کلیک کنید
                                </p>
                            </Link>
                            <Link href={"/LearnWindows"} className="w-full hover:bg-gray-100 items-center justify-center flex gap-2 border-b py-[10px] text-[18px] text-gray-600">
                                <AiFillWindows className="text-3xl text-gray-700" />
                                <p className="display-fit">برای مشاهده آموزش های
                                    <span className="font-bold mx-[3px]">ویندوز</span>اینجا کلیک کنید
                                </p>
                            </Link> 
                             <Link href={"/LearnMacintash"} className="w-full hover:bg-gray-100 items-center justify-center flex gap-2 border-b py-[10px] text-[18px] text-gray-600">
                                <AiFillApple className="text-3xl text-gray-700" />
                                <p className="display-fit">برای مشاهده آموزش های
                                    <span className="font-bold mx-[3px]">مکینتاش</span>کلیک کنید
                                </p>
                            </Link>  
                            <Link href={"/LearnLinux"} className="w-full hover:bg-gray-100 items-center justify-center flex gap-2  py-[10px] text-[18px] text-gray-600">
                                <DiLinux className="text-3xl text-gray-700" />
                                <p className="display-fit">
                                    برای مشاهده آموزش های
                                    <span className="font-bold mx-[3px] " >لینوکس</span>
                                    اینجا کلیک کنید
                                </p>
                            </Link>
                        </div>
                    </div>
                    <Image src={"/imgs/bg-balb.png"} alt='bg' width={500} height={800}
                        className='absolute top-[200px] sm:top-[550px] right-[110px] z-[-2] sm:right-0 lg:w-[90%]' />
                </div>
            </div>
        </>
    )
}