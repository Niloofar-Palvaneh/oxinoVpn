


export default function OrderBoxGray(props) {
    return (
        <>
            <div className="flex z-10 bg-gray-50 flex-col gap-4 shadow-[inset_0px_0px_15px_0px_#e2e8f0]
            sm:w-[96%]
            border w-[45%] rounded-2xl p-8 ">
                <div className="flex gap-2">
                    <div className="border-2 border-main rounded-2xl leading-3 text-xl px-2 flex items-center justify-center text-gray-500 ">
                        {props.num}
                    </div>
                    <div className="font-bold text-md">
                        <h2>{props.title}</h2>
                    </div>
                </div>
                <p className="text-gray-500">
                    {props.des}
                </p>
            </div>
        </>
    )
}
