"use client"
import BookCard from "@/components/common/BookCard/BookCard";
import { products } from "@/utility/products";
import { useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TrendingServices = () => {
    const [activeFilter, setActiveFilter] = useState("Trending Books")
    const filtering = [
        "Trending Books",
        "Top Products",
        "Digital Tec",
        "Top Books",
        "Recent",
    ]
    return (
        <div className="container mx-auto md:px-10 px-4 py-20">
            <div>
                <div className="grid grid-cols-1 xl:grid-cols-12  lg:gap-6">
                    <div className="xl:col-span-3 xl:mb-0 mb-4">
                        <div >
                            <h3 className="text-[32px] font-primary font-[700] text-skin-dark_gray_shade leading-snug">Trending <br /> Products</h3>
                            <p className="font-primary text-[15px] text-skin-dark_gray_shade">Most viewed and all-time top-selling services</p>
                        </div>
                    </div>
                    <div className="xl:col-span-9 flex flex-col justify-end">
                        <ul className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                            {filtering.map((f, i) => <li key={f + i}><button className={`border   rounded-[15px] px-[17px] py-[7px] font-[500] text-[15px] antialiased text-skin-dark_gray_shade ${f === activeFilter ? "text-skin-green_shade border-cool_gray_shade shadow-sm" : "border-transparent"}`}>{f}</button></li>)}                        </ul>
                    </div>
                </div>
                <div className="mt-14">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation={true}
                        modules={[Navigation]}

                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        className="mySwiper"

                    >
                        {products.slice(0, 5).map((p, i) => <SwiperSlide key={p.id + i}><BookCard data={p} /></SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default TrendingServices