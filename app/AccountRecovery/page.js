

import Link from "next/link";
import Image from "next/image";

export default function AccountRecovery() {
    let randomlyNumber = Math.random()
    return (
        <>
            <div className=" flex items-center justify-center bg-white z-10">
                <div className="w-[81%] border rounded mt-12 pb-6 relative sm:w-full">
                    <div className="bg-gray-100 border-b text-xl p-4">
                        <h4>بازیابی اکانت</h4>
                    </div>
                    <div className="w-full flex items-center justify-center mb-6 mt-4 ">
                        <div className="w-[96%] flex flex-col gap-2 text-gray-800">
                            <p>از طریق این بخش می توانید اشتراک های خریداری شده خود را بازیابی کنید.</p>
                            <p>برای بازیابی کافی است که آدرس ایمیل خود را وارد کنید و پس از آن ایمیلی حاوی تمامی اشتراک های خریداری شده تان را دریافت خواهید کرد.</p>
                            <p>از درخواست تکراری خود داری کنید , در صورت عدم دریافت با پشتیبانی در ارتباط باشید</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <form className="w-[97%] flex flex-col  gap-4 sm:w-[92%] ">
                            <div className="w-full flex items-start gap-2 flex-col">
                                <label htmlFor="name">آدرس ایمیل خود را وارد کنید:</label>
                                <input type="email" className="focus:outline-none focus:ring focus:border-blue-100 rounded w-full border
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
                                    type="submit">بازیابی و دریافت ایمیل اشتراک</button>
                            </div>
                        </form>
                    </div>
                    <Image src={"/imgs/bg-balb.png"} alt='bg' width={500} height={800}
                        className='absolute top-[0px]  right-[110px] z-[-2] sm:right-0 lg:w-[90%]' />
                </div>
            </div>
        </>
    )
}