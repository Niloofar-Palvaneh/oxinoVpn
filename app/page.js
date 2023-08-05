import Image from 'next/image'
import Des from './components/Des/Des'
import Title from './components/Title/Title'
import OrderBoxGray from './components/OrderBoxs/OrderBoxGray/OrderBoxGray'
import OrderBoxWhite from './components/OrderBoxs/OrderBoxWhite/OrderBoxWhite'
import PlanSection from './components/PlanSection/PlanSection'
import Slider from './components/Slider/Slider'
import Link from 'next/link'
import PapularQuestion from './components/PapularQuestion/PapularQuestion'


export default function Home() {
  return (
    <>
      <Des />
      <Title title="مراحل سفارش" des="ثبت سفارش در سایت ما بسیار ساده است همچنین در صورت نیاز می توانید با ما مشاوره رایگان بگیرید.
( نیازی به ثبت نام نمی باشد , اطلاعات پنل کاربری بعد از خرید ایمیل خواهد شد)"/>
      <div className='w-full flex items-center justify-center flex-col gap-8 mt-24'>
        <div className='flex justify-end gap-12 w-[70%] relative md:w-full sm:grid sm:grid-cols-1 sm:w-[98%]'>
          <Image className='absolute z-0 -top-[110px] right-[100px] rotate-[100deg]' src={"/imgs/bg-barg-top.svg"} width={120} height={100} />
          <OrderBoxGray
            num="1" title="سرویس خود را انتخاب کنید" des="از بین سرویس های موجود در سایت , با توجه به نوع مصرفی که دارید , یکی از پلن ها را بر گزینید." />
          <OrderBoxWhite
            num="2" title="سرویس خود را انتخاب کنید" des="از بین سرویس های موجود در سایت , با توجه به نوع مصرفی که دارید , یکی از پلن ها را بر گزینید." />
        </div>
        <div className='flex justify-start gap-12 w-[70%] relative md:w-full  sm:grid sm:grid-cols-1 sm:w-[98%]'>
          <Image className='absolute z-0 top-[140px] sm:top-[180px] md:left-0 -left-[45px] rotate-[360deg]' src={"/imgs/bg-barg-buttom.svg"} width={120} height={100} />
          <OrderBoxWhite
            num="3" title="سرویس خود را انتخاب کنید" des="از بین سرویس های موجود در سایت , با توجه به نوع مصرفی که دارید , یکی از پلن ها را بر گزینید." />
          <OrderBoxGray
            num="4" title="سرویس خود را انتخاب کنید" des="از بین سرویس های موجود در سایت , با توجه به نوع مصرفی که دارید , یکی از پلن ها را بر گزینید." />
        </div>
      </div>
      <PlanSection />
      <div className='mt-[250px] w-full flex items-center justify-center sm:mt-24 md:mt-12 '>
        <div className='w-[85%] flex justify-start gap-[90px] sm:flex-col md:flex-col'>
          <div>
            <div className='flex flex-col gap-8'>
              <h2 className='text-3xl text-main font-bold'>اَپ اندروید , با امکانات متفاوت :)</h2>
              <ul className='flex flex-col gap-4'>
                <li>رابط بسیار زیبا و User Friendly</li>
                <li>قابلیت اتصال به تمام سرویس ها</li>
                <li>قابل استفاده بر روی انواع گوشی و تبلت اندرویدی</li>
                <li>قابلیت کیل سوئیچ</li>
                <li>امکان مشاهده و تمدید اشتراک</li>
                <li>دریافت آخرین اخبار و اطلاعیه های سایت</li>
                <li>امکان اشتراک گذاری برنامه برای دوستان :)</li>
              </ul>
            </div>
            <Link href={"#"}>
              <button className="bg-white text-main rounded-[8px] px-4 py-[8px] mt-6
                     duration-300 ease-in-out hover:text-white hover:bg-main shadow-[0px_0px_15px_3px_#00000024] transition">
                مشاهده آموزش</button>
            </Link>
          </div>
          <Image src={"/imgs/smart-md.png"} width={350} height={50} className='w-[450px] h-[550px] md:w-[350px]' />
        </div>
      </div>

      <div className='mt-[250px] w-full flex items-center justify-center  sm:mt-24 md:mt-12 '>
        <div className='w-[85%] flex justify-start gap-[90px] sm:flex-col md:flex-col items-center'>
          <Image src={"/imgs/apple.png"} width={350} height={50} className='w-[450px] h-[450px] md:w-[350px]' />
          <div>
            <div className='flex flex-col gap-12'>
              <h2 className='text-3xl text-main font-bold'>آموزش آیفون و سایر سیستم عامل ها</h2>
              <p>برای مشاهده آموزش آیفون و سایر سیستم عامل ها کلیک کنید</p>
            </div>
            <Link href={"#"}>
              <button className="bg-white text-main rounded-[8px] px-4 py-[8px] mt-6
                     duration-300 ease-in-out hover:text-white hover:bg-main shadow-[0px_0px_15px_3px_#00000024] transition">
                مشاهده آموزش</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='mt-[250px] w-full flex items-center justify-center sm:mt-24 md:mt-12 '>
        <div className='w-[85%] flex justify-start gap-[90px] sm:flex-col md:flex-col'>
          <div>
            <div className='flex flex-col gap-8'>
              <h2 className='text-3xl text-main font-bold'>پشتیبانی</h2>
              <div className='flex flex-col gap-4'>
                <p>لطفا برای ارتباط با ما به لینک زیر مراجعه کنید. به صورت 24/7 آنلاین هستیم تا پاسخگوی مشکلات و سوالات شما باشیم.</p>
                <p>می توانید در لایو چت سایت نیز از پشتیبانی آنلاین ما نیز بهره مند شوید.:)</p>
              </div>
            </div>
            <div className=' flex justify-end'>
              <Link href={"#"}>
                <button className="bg-white text-main rounded-[8px] px-6 py-[8px] mt-6 
                     duration-300 ease-in-out hover:text-white hover:bg-main shadow-[0px_0px_15px_3px_#00000024] transition">
                  تماس با ما</button>
              </Link>
            </div>
          </div>
          <Image src={"/imgs/support.png"} width={350} height={50} className='w-[550px] h-[350px] md:w-[350px]' />
        </div>
      </div>
      <Slider />
      <PapularQuestion />
    </>
  )
}
