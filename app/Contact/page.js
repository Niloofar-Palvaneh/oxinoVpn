

import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    let randomlyNumber = Math.random()
    return (
        <>
            <div className=" flex items-center justify-center bg-white z-10">
                <div className="w-[81%] border rounded mt-12 pb-6 relative sm:w-full">
                    <div className="bg-gray-100 border-b text-xl p-4">
                        <h4>تماس با ما</h4>
                    </div>
                    <div className="text-pink-900 bg-pink-100 p-4 m-4 rounded border border-pink-200 flex items-center justify-center">
                        <p className="inline-flex sm:contents  xl:block ">
                        ✅قبل از ارسال پیام به پشتیبانی متن های زیر را با دقت مطالعه کنید ✅
                        </p>
                    </div>
                    <div className="text-indigo-900 bg-indigo-100 p-4 m-4 rounded border border-indigo-200">
                        <p className="inline-flex sm:contents xl:block">
                            برای رفع مشکل لطفا با پشتیبانی ایمیل در ارتباط باشید. ( لطفا بعد از ارسال ایمیل منتظر پاسخ باشید از ارسال ایمیل تکراری خودداری کنید)
                        </p>
                    </div>

                    <div className="text-green-900 bg-green-100 p-4 m-4 rounded border border-green-200">
                        <p className="inline-flex sm:contents xl:block">
                            ایمیل پشتیبانی : oxino@gmail.com
                        </p>
                    </div>

                    <div className="text-red-900 bg-red-100 p-4 m-4 rounded border border-red-200">
                        <p className="inline-flex sm:contents xl:block">
                            کانال تلگرامی سایت
                            <Link className="font-bold mx-[3px] " href={"#"}>( توجه کنید کانال بدون هیچ پسوند یا پیشوندی می باشد سایر کانال ها با این اسم جعلی هستند )</Link>
                            : oxinovpn@
                        </p>
                    </div>

                    <div className="text-yellow-900 bg-yellow-100 p-4 m-4 rounded border border-yellow-200">
                        <p className="inline-flex sm:contents  xl:block">
                            هیچ کانال تلگرامی دیگری نداریم , سایر کانال ها فیک و فاقد اعتبار می باشند.
                        </p>
                    </div>
                    <div className="text-teal-900 bg-teal-100 p-4 m-4 rounded border border-teal-200">
                        <p className="inline-flex sm:contents  xl:block">
                            برای رفع مشکل و دریافت پشتیبانی با ایمیل درج شده در ارتباط باشید
                        </p>
                    </div>
                    <Image src={"/imgs/bg-balb.png"} alt='bg' width={500} height={800}
                        className='absolute top-[100px] sm:top-[350px] right-[110px] z-[-2] sm:right-0 lg:w-[90%]' />
                </div>
            </div>
        </>
    )
}