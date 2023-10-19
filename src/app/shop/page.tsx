import ControlFilter from "@/components/Shop/ControlFilter"
import ShopProducts from "@/components/Shop/ShopProducts"

const page = () => {
    return (
        <div className="container mx-auto  px-4">
            <div className="grid grid-cols-12 gap-2">
                <div className="lg:col-span-3">
                    <div className="lg:block hidden">
                        <ControlFilter />
                    </div>
                </div>
                <div className="lg:col-span-9 col-span-12">
                    <ShopProducts />
                </div>
            </div>
        </div>
    )
}

export default page