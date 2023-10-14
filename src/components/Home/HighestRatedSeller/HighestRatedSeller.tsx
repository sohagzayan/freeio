"use client"
import TopSellerCard from "@/components/common/TopSellerCard/TopSellerCard";
import { users } from "@/utility/user";
import { useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HighestRatedSeller = () => {
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
                    <div className="xl:col-span-8 xl:mb-0 mb-4">
                        <div >
                            <h3 className="text-[32px] font-primary font-[700] text-skin-dark_gray_shade leading-snug">Highest Rated Seller</h3>
                            <p className="font-primary text-[15px] text-skin-dark_gray_shade">Most viewed and all-time top-selling services</p>
                        </div>
                    </div>
                    <div className="xl:col-span-4 flex flex-col items-end justify-end">
                        <button>All Seller <i className="ri-arrow-right-line"></i></button>
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
                        {users.slice(0, 5).map((p, i) => <SwiperSlide key={p.id + i}><TopSellerCard data={p} /></SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default HighestRatedSeller