"use client"
import { useState } from 'react';
// import ReactStars from "react-rating-stars-component";

interface ProductsType {
    data: {
        id: number;
        name: string;
        author: string;
        price: number;
        details: string;
        inStoke: number;
        images: string[];
        reviews: number;
        rating: number;
    }

}


const ProductCart = ({ data }: ProductsType) => {
    const [isClickTrue, setClickTrue] = useState(false);
    const [showExtraCardInfo, setShowExtraCardInfo] = useState(false);
    const handleHoverShow = () => {
        setShowExtraCardInfo((prev) => !prev)
    }
    return (
        <div
            onMouseEnter={handleHoverShow}
            onMouseLeave={handleHoverShow}
            className="relative border border-transparent hover:border-cool_gray_shade p-1 hover:shadow transition-all ease duration-200  hover:transition-all hover:ease-out hover:duration-200 flex items-center justify-center cursor-pointer rounded-md after:rounded-md after:w-full after:h-full after:bg-skin-white_shade after:bg-opacity-0 hover:after:bg-opacity-60  after:transition-all after:ease-in-out after:duration-200 after:absolute after:top-0 after:left-0">
            <div className="">
                <div className="flex relative  justify-center p-3">
                    <div
                        className=''
                    >
                        <img src={data?.images[1]} alt="product image" className="w-[130px]" />
                    </div>
                    <ul className={`absolute top-[-20%] left-[90%] transform translate-x-[-50%]  flex items-center  z-50 bg-skin-white_shade  shadow justify-between py-2 px-4 flex-col rounded-md transition-all ease-in-out duration-300  ${showExtraCardInfo ? "opacity-100 translate-y-12" : "translate-y-56 opacity-0"}`}>
                        <li className="mb-3">
                            <i className="ri-shopping-cart-2-line text-lg"></i>
                        </li>
                        <li className="mb-3">
                            <i className="ri-bookmark-line"></i>
                        </li>
                        <li >
                            <i className="ri-repeat-line"></i>
                        </li>

                    </ul>
                </div>
                <div className="px-1 font-primary  text-center ">
                    <span className="text-skin-red_crimson_shade text-[10px]">Hardcover</span>
                    <h3 className="font-[500] text-skin-dark_gray_shade">{data?.name}</h3>
                    <h5 className="flex items-center justify-center font-primary text-skin-dark_gray_shade  gap-1">
                        {/* <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            value={data.reviews}
                            size={24}
                            isHalf={true}
                            edit={false}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        /> */}
                        (2)
                    </h5>

                </div>
                <div className="p-1 flex items-center justify-center font-primary text-skin-dark_gray_shade ">
                    <h4 className="">
                        <span className="text-[18px] font-[500] text-skin-dark_gray_shade">$. {data?.price}</span>
                    </h4>
                </div>
            </div>
            <div className="absolute top-[-30px] right-[-30px] scale-75">
            </div>
        </div>
    )
}

export default ProductCart