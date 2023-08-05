"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Image from 'next/image';

export default function Slider() {
    return (
        <>
            <div className='mt-12'>
                <div className='relative' >
                    <h3 className='text-center text-main font-bold text-2xl '>آموزش و دانلود کانکشن ها</h3>
                <Image className='absolute z-0 sm:hidden -top-[75px] rotate-[455deg]' src={"/imgs/bg-barg-buttom.svg"} width={120} height={100} />
                </div>
                <Swiper spaceBetween={50} loop={true}
                    slidesPerView={5} navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className='shadow-[0px_0px_20px_5px_#00000024]'>
                        <div className='flex items-center justify-center flex-col gap-4'>
                            <Image src={"/imgs/mak.png"} width={150} height={200} />
                            <h4 className='text-xl'>مک</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-[0px_0px_20px_5px_#00000024]'>
                        <div className='flex items-center justify-center flex-col gap-4'>
                            <Image src={"/imgs/iphone.png"} width={150} height={200} />
                            <h4 className='text-xl'>آیفون</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-[0px_0px_20px_5px_#00000024]'>
                        <div className='flex items-center justify-center flex-col gap-4'>
                            <Image src={"/imgs/android.png"} width={150} height={200} />
                            <h4 className='text-xl'>اندروید</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-[0px_0px_20px_5px_#00000024]'>
                        <div className='flex items-center justify-center flex-col gap-4'>
                            <Image src={"/imgs/apple.png"} width={150} height={200} />
                            <h4 className='text-xl'>اپل</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-[0px_0px_20px_5px_#00000024]'>
                        <div className='flex items-center justify-center flex-col gap-4'>
                            <Image src={"/imgs/linux.png"} width={150} height={200} />
                            <h4 className='text-xl'>لینوکس</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-[0px_0px_20px_5px_#00000024]'>
                        <div className='flex items-center justify-center flex-col gap-4'>
                            <Image src={"/imgs/windows-phone.png"} width={150} height={200} />
                            <h4 className='text-xl'>ویندوز فون</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-[0px_0px_20px_5px_#00000024]'>
                        <div className='flex items-center justify-center flex-col gap-4'>
                            <Image src={"/imgs/windows.png"} width={150} height={200} />
                            <h4 className='text-xl'>ویندوز</h4>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    )
}