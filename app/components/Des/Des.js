import Image from 'next/image'
import Link from 'next/link'

export default function Des() {
    return (
        <>
            <div className='w-[90%] mt-8 sm:w-full'>
                <div className='flex items-start justify-between sm:flex-col-reverse md:flex-col-reverse'>
                    <div className='flex flex-col p-8 justify-center items-center relative gap-8'>
                        <h1 className='text-3xl text-main font-bold mt-8 sm:text-center'>با ٱکسینو آسوده خاطر معامله کنید.</h1>
                        <p className='w-[70%] leading-[50px] text-md sm:w-full sm:leading-[30px] md:w-full'>
                            تنها وب سایت ارائه دهنده سرویس آی پی ثابت واقعی از 35 کشور دنیا
                            بایننس , کوکوین , پنکیک سواپ , کوینکس و سایر صرافی ها , هم چنین سایت هایی که به آی پی ثابت نیاز دارند.
                            با بهترین و به روزترین سرویس ها برای انواع سیستم عامل ها در مسیر پیشرفت و موفقیت همراه شما خواهیم بود.
                        </p>
                        <div className='w-[70%] sm:w-full'>
                            <Link href={"#"}
                                className='bg-main text-white px-8 py-2 font-bold  rounded-md  shadow-md shadow-main 
                          transition duration-300 ease-in-out hover:text-main hover:bg-white '>
                                همین حالا با اطمینان به ما بپیوندید
                            </Link>
                        </div>
                        <Image src={"/imgs/bg-balb.png"} alt='bg' width={400} height={600} 
                        className='absolute top-0 right-[110px] z-0 sm:right-0 lg:w-[90%]' />
                    </div>
                    <Image className=''
                        src={"/imgs/img-1.png"} alt='img' width={450} height={450} />
                </div>
            </div>
        </>
    )
}
