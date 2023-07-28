import Image from 'next/image'
import Des from './components/Des/Des'
import Title from './components/Title/Title'
import OrderBoxGray from './components/OrderBoxs/OrderBoxGray/OrderBoxGray'
import OrderBoxWhite from './components/OrderBoxs/OrderBoxWhite/OrderBoxWhite'
import PlanSection from './components/PlanSection/PlanSection'

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
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}
