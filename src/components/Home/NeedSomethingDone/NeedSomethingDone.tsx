import { need_something_done } from "@/utility/categories"
import NeedSomethingCard from "../NeedSomethingCard/NeedSomethingCard"

const NeedSomethingDone = () => {
    return (
        <div className="container mx-auto md:px-10 px-4 py-14">
            <div className="text-center">
                <h3 className="font-primary text-[32px]  font-[700] text-skin-dark_gray_shade">Need something done?</h3>
                <p className="text-skin-dark_gray_shade font-primary font-[400] text-[15px]">Most viewed and all-time top-selling services</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
                {need_something_done?.map((need, i) => <NeedSomethingCard key={need.title + i} data={need} />)}
            </div>
        </div>
    )
}

export default NeedSomethingDone