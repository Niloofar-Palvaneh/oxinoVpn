

import Link from "next/link";
import Image from "next/image";

export default function LoginUserPanel() {
    let randomlyNumber = Math.random()
    return (
        <>
            <div className=" flex items-center justify-center bg-white z-10">
                <div className="w-[81%] border rounded mt-12 pb-6 relative sm:w-full">
                    <div className="bg-gray-100 border-b text-xl p-4">
                        <h4>ورود به ناحیه تمدید اکانت</h4>
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

                    <div className="w-full flex items-center justify-center">
                        <form className="w-[97%] flex flex-col  gap-4 sm:w-[92%] ">
                            <div className="w-full flex items-start gap-2 flex-col">
                                <label htmlFor="name">نام کاربری اکانت:</label>
                                <input type="text" className="focus:outline-none focus:ring focus:border-blue-100 rounded w-full border
                                py-2 transition ease-in-out delay-150
                                " />
                            </div>
                            <div className="w-full flex items-start gap-2 flex-col">
                                <label htmlFor="name">رمز عبور اکانت:</label>
                                <input type="text" className="focus:outline-none focus:ring focus:border-blue-100 rounded w-full border
                                py-2 transition ease-in-out delay-150
                                " />
                            </div>
                            <div className="w-full flex items-start gap-2 flex-col">
                                <div className="flex gap-4 items-center">
                                    <label htmlFor="name">کد تصادفی را در فیلد زیر وارد نمایید :</label>
                                    <span className="bg-blue-800 text-white rounded  px-2">{Math.floor(randomlyNumber * 10000)}</span>
                                </div>
                                <input type="text" className="focus:outline-none focus:ring focus:border-blue-100 rounded w-full border
                                py-2 transition ease-in-out delay-150
                                " />
                            </div>
                            <div className="w-full flex justify-start mt-4">
                                <button
                                    className="bg-main text-white hover:bg-red-600 transition ease-in-out delay-150 px-4 py-2 rounded"
                                    type="submit">ورود به ناحیه تمدید اکانت</button>
                            </div>
                        </form>
                    </div>
                    <Image src={"/imgs/bg-balb.png"} alt='bg' width={500} height={800}
                        className='absolute top-[200px] sm:top-[550px] right-[110px] z-[-2] sm:right-0 lg:w-[90%]' />
                </div>
            </div>
        </>
    )
}