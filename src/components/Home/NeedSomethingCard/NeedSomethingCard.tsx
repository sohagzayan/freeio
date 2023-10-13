interface NeedType {
    id: number,
    title: string,
    details: string,
    icon: string
}


interface NeedSomethingCardType {
    data: NeedType
}

const NeedSomethingCard = ({ data }: NeedSomethingCardType) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="bg-skin-peach_shade w-[110px] h-[110px] rounded-full flex items-center justify-center mb-6"><i className={`${data?.icon} text-[40px]`}></i></div>
                <div className="text-center">
                    <h2 className="text-[20px] mb-5 font-primary font-[500]">{data?.title}</h2>
                    <p>{data?.details}</p>
                </div>
            </div>
        </div>
    )
}

export default NeedSomethingCard