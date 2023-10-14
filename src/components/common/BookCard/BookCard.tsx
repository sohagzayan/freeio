"use client"
import Image from "next/image";
import { useState } from 'react';

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


const BookCard = ({ data }: ProductsType) => {
    const [isClickTrue, setClickTrue] = useState(false);
    const [showExtraCardInfo, setShowExtraCardInfo] = useState(false);
    const handleHoverShow = () => {
        setShowExtraCardInfo((prev) => !prev)
    }
    return (
        <div
            onMouseEnter={handleHoverShow}
            onMouseLeave={handleHoverShow}
            className="relative  flex items-center justify-center cursor-pointer">
            <div className="">
                <div className="flex relative  justify-center border border-b-cool_gray_shade p-3">
                    <Image src={data?.images[1]} width={120} height={180} alt="product image" />
                    <ul className={`absolute top-[50%] left-[50%] transform translate-x-[-50%]  flex items-center z-50 bg-skin-white_shade w-[80%] shadow justify-between py-2 px-4 rounded-md transition-all ease-in-out duration-300  ${showExtraCardInfo ? "opacity-100 translate-y-12" : "translate-y-56 opacity-0"}`}>
                        <li>
                            <i className="ri-shopping-cart-2-line text-lg"></i>
                        </li>
                        <li>
                            <i className="ri-bookmark-line"></i>
                        </li>
                        <li>
                            <i className="ri-repeat-line"></i>
                        </li>

                    </ul>
                </div>
                <div className="px-1 font-primary border-b border-cool_gray_shade ">
                    <span className="text-skin-red_crimson_shade text-[10px]">Hardcover</span>
                    <h3 className="font-[500] text-skin-dark_gray_shade">{data?.name}</h3>
                    <h5 className="text-skin-medium_light_gray text-[14px] flex items-center">
                        <i className="ri-star-s-fill text-[#E1C141] text-lg"></i> {data.rating} {data.reviews} reviews
                    </h5>

                </div>
                <div className="p-1 flex items-center justify-between bg-skin-dark_gray_shade bg-opacity-5">
                    <h4 className="font-primary text-skin-dark_gray_shade font-[500] text-[15px] "><span className="font-[400] text-[14px]">{data.author}</span></h4>
                    <h4>
                        <span className="text-[18px] font-[500] text-skin-dark_gray_shade">${data?.price}</span>
                    </h4>
                </div>
            </div>
            <div className="absolute top-[-30px] right-[-30px] scale-75">
                {/* <Heart isClick={isClickTrue} onClick={() => setClickTrue(!isClickTrue)} /> */}
            </div>
        </div>
    )
}

export default BookCard