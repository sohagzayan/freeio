"use client"
import Home1 from "@/assets/images/h31.png";
import Home2 from "@/assets/images/h32.png";
import Home3 from "@/assets/images/h33.png";
import ButtonPrimary from "@/components/common/Button/ButtonPrimary";
import Image from "next/image";
import { useState } from "react";
import Select from "react-dropdown-select";






const Hero = () => {
    const [selectValue, setSelectValue] = useState<{ value: number; label: string; }[]>([])
    const options = [
        {
            value: 1,
            label: "Leanne Graham"
        },
        {
            value: 2,
            label: "Ervin Howell"
        }
    ];

    const handleButton = () => {

    }
    return (
        <div className="container mx-auto px-4 md:px-10 mt-[60px]">
            <div className="grid  lg:grid-cols-12 ">
                <div className="lg:col-span-7  lg:items-center lg:justify-center flex flex-col">
                    <div>
                        <h2 className="text-[55px] font-[700] font-primary leading-snug mb-6">Find the right <span className="inline-block relative after:rounded-t-2xl after:absolute after:w-full after:h-3 after:bg-skin-green_shade after:bottom-2 after:-z-10 after:left-0">products</span>
                            <span className="inline-block relative after:absolute after:w-full after:h-3 after:bg-skin-green_shade after:bottom-2 after:rounded-b-2xl after:-z-10 after:left-0">service</span>, right away.
                        </h2>
                        <p className="font-[400] font-primary text-skin-dark_gray_shade">Work with talented people at the most affordable price to get the most
                            out of your time and cost</p>
                    </div>
                    <div className="w-full my-6">
                        <form action="">
                            <div className="flex md:flex-row flex-col md:items-center rounded-md border-cool_gray_shade border p-3 font-primary gap-2">
                                <div className="flex w-full items-center border-b md:border-b-transparent md:border-cool_gray_shade py-2 md:py-0 md:border-r-2 ">
                                    <label htmlFor="search" className="mr-5"><i className="ri-search-line text-skin-cool_gray_shade text-xl"></i></label>
                                    <input className="w-full outline-none" type="text" placeholder="what you are looking for?" />
                                </div>

                                <div className="w-full border-b md:border-b-transparent md:border-cool_gray_shade py-2 md:py-0">
                                    <Select style={{ border: "2px solid transparent", outline: "none" }} multi={false} options={options} onChange={(selectValue) => setSelectValue(selectValue)} values={selectValue} placeholder="Choose Category" />
                                </div>
                                <div className="">
                                    <ButtonPrimary handleButton={handleButton} classList="bg-skin-dark_gray_shade border border-dark_gray_shade   text-skin-white_shade hover:text-skin-white_shade hover:border-green_shade">Search</ButtonPrimary>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="lg:col-span-5 lg:items-center justify-center flex">
                    <ul className="flex items-center gap-3">
                        <li>
                            <Image className="rounded-md" src={Home1} width={200} height={100} alt="about1" />
                        </li>
                        <div className="flex flex-col gap-3 ">
                            <li>
                                <Image src={Home2} width={200} height={100} alt="about1" />
                            </li>
                            <li>
                                <Image src={Home3} width={200} height={100} alt="about1" />
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero