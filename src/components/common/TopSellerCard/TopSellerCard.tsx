"use client"
import Image from "next/image";
import LargeButton from "../LargeButton/LargeButton";

interface TopSellerCard {
    data: {
        id: number;
        image: string;
        name: string;
        username: string;
        totalProduct: number;
        totalAmountOfProduct: number;
        verified: boolean;
        rating: number;
        totalReviews: number;
        location: string;
        shopCategory: string[];
    }
}

const TopSellerCard = ({ data }: TopSellerCard) => {
    const handleButton = () => {

    }
    return (
        <div>
            <div>
                <div className="flex flex-col justify-center items-center">
                    <Image src={data?.image} width={100} height={100} alt="profile" className="rounded-full " />
                    <div className="py-5 text-center">
                        <h3 className="text-[17px] font-primary text-skin-dark_gray_shade font-[500] mb-1">{data?.name}</h3>
                        <span className="text-[14px] font-primary text-skin-medium_light_gray font-[500] mb-1 inline-block">{data?.username}</span>
                        <h4 className="flex  items-center font-[400] text-skin-dark_gray_shade justify-center gap-1"><i className="ri-star-s-fill text-[#e1c141] text-lg"></i>{data?.rating} <span className="text-skin-medium_light_gray ">({data?.totalReviews} reviews)</span></h4>
                        <div className="flex items-center  mt-3 border-b border-cool_gray_shade pb-3">
                            {data?.shopCategory.map((c, i) => <span className="mr-2 bg-skin-peach_shade px-4 py-1 rounded-md capitalize text-skin-dark_gray_shade font-[400] font-primary text-[14px]" key={i}>{c}</span>)}
                        </div>
                        <div>
                            <h3 className="flex items-center gap-10 py-2 font-[500] text-[15px] text-skin-dark_gray_shade font-primary">
                                <span>Location</span>
                                <span className=" font-[400] text-[13px] text-skin-dark_gray_shade"> {data?.location}</span>
                            </h3>
                        </div>
                        <LargeButton handleButton={handleButton} classList="bg-transparent  text-skin-white_shade hover:text-skin-dark_gray_shade w-full   ">Sign in </LargeButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSellerCard