import { products } from "@/utility/products"
import ProductCart from "../common/ProductCart/ProductCart"

const ShopProducts = () => {
    return (
        <div>
            <div>
                <div className="flex items-center justify-between   font-primary text-skin-dark_gray_shade">
                    <h3 className="text-[14px]">5,512 product available</h3>
                    <div className="flex items-baseline  gap-2 ">
                        <h4 className="block  text-[14px] text-skin-medium_light_gray">Sort_by</h4>
                        <select id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a sorting</option>
                            <option value="US">Best Selling</option>
                            <option value="CA">Recommended</option>
                            <option value="FR">New Arrivals</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                    {products.map((p, i) => <ProductCart key={p.price + 1} data={p} />)}
                </div>
            </div>
        </div>
    )
}

export default ShopProducts