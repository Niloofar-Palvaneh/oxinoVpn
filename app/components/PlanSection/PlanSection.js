import Image from "next/image"
import Title from "../Title/Title"
import PlanBox from "../PlanBox/PlanBox"


export default function PlanSection() {
    return (
        <>
            <div>
                <Title title="لیست پلن های موجود"
                    des="تمامی پلن های آی پی ثابت و معمولی دو دستگاه همزمان می باشد و در صورت اتصال بیشتر اشتراک مسدود خواهد شد" />
            </div>
            <div className="flex w-full items-center justify-center mt-4 ">
                <div className="shadow-[inset_0px_0px_15px_0px_#e2e8f0] flex text-md py-2 px-4 rounded-xl ">
                    اشتراک آی پی ثابت اختصاصی
                </div>
            </div>
            <div className="flex w-full items-center justify-center mt-12 relative">
                <div className="grid grid-cols-4 gap-8 w-[90%] place-items-center z-20">
                    <PlanBox />
                    <PlanBox />
                    <PlanBox />
                    <PlanBox />
                </div>
                <Image
                className="absolute z-10 top-[150px]"
                src={"/imgs/bg-group.svg"} width={1000} height={100}/>
            </div>
        </>
    )
}
