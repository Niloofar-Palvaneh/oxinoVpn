
export default function Title(props) {
    return (
        <>
            <div className="w-full flex items-center justify-center flex-col gap-2 mt-24">
                <h2 className="text-3xl font-bold text-main">{props.title}</h2>
                <div className="w-[48%] text-gray-500 sm:w-[85%] text-center sm:mb-4">
                    <p>
                        {props.des}
                    </p>
                </div>
            </div>
        </>
    )
}
