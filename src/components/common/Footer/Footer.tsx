"use client"
import Logo from "@/assets/images/header-logo-white.svg"
import Image from "next/image"
import ButtonSecondary from "../Button/ButtonSecondary"

const Footer = () => {
    const handleButton = () => {

    }
    return (
        <div className="bg-skin-dark_gray_shade">
            <div className="container px-4 md:px-10 mx-auto py-10">
                <div className="grid grid-cols-12 gap-6 ">
                    <div className=" md:col-span-4  lg:col-span-4 col-span-12 sm:col-span-6">
                        <Image src={Logo} width="0" height="0" sizes="100vw" className="w-[100%] h-auto mb-4" alt="logo" />
                        <p className="text-skin-white_shade font-[400] mb-4 text-[14px] font-primary">Leo elementum iaculis quam massa vitae odio sed. Morbi tincidunt senectus.</p>
                        <div className="text-skin-green_shade flex items-center gap-3">
                            <span><i className="ri-twitter-fill text-3xl cursor-pointer hover:opacity-80 transition-all ease-in-out duration-200"></i></span>
                            <span><i className="ri-instagram-fill text-3xl cursor-pointer hover:opacity-80 transition-all ease-in-out duration-200"></i></span>
                            <span><i className="ri-facebook-circle-fill text-3xl cursor-pointer hover:opacity-80 transition-all ease-in-out duration-200"></i></span>
                        </div>
                    </div>
                    <div className="text-skin-white_shade font-[400] font-primary lg:col-span-2 md:col-span-4 col-span-12 sm:col-span-6">
                        <h3 className="font-[500] text-[20px]">Navigation</h3>
                        <ul className="mt-5 flex flex-col gap-4">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Our Services</li>
                            <li>Our Team</li>
                        </ul>
                    </div>
                    <div className="text-skin-white_shade font-[400] font-primary lg:col-span-2 md:col-span-4 col-span-12 sm:col-span-6">
                        <h3 className="font-[500] text-[20px]">Services</h3>
                        <ul className="mt-5 flex flex-col gap-4">
                            <li>Home Cleaning</li>
                            <li>Office Cleaning</li>
                            <li>Kitchen Cleaning</li>
                            <li>Vehicle Cleaning</li>
                        </ul>
                    </div>
                    <div className="text-skin-white_shade font-[400] font-primary lg:col-span-4 md:col-span-6 col-span-12 sm:col-span-6">
                        <h3 className="font-[500] text-[20px]">Subscribe to Newsletter
                        </h3>
                        <ul className="mt-5 flex  items-left flex-col">
                            <li>
                                <input
                                    className="h-14 w-full px-5 rounded-full outline-none text-skin-dark_gray_shade bg-skin-white_shade"
                                    type="text" placeholder="Enter your email" />
                            </li>
                            <li>
                                <ButtonSecondary
                                    handleButton={handleButton} classList="bg-skin-white_shade rounded-[6px] border border-dark_gray_shade text-skin-dark_gray_shade hover:text-skin-white_shade hover:border-green_shade px-[32px] py-[13px] border-transparent flex items-center gap-3 mt-6"
                                >Find Talent</ButtonSecondary>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="mt-10" />
                <div className="flex md:flex-row flex-col items-center justify-between py-4">
                    <div className="text-skin-white_shade flex items-center gap-2  text-[13px] font-primary">
                        <p className="border-r px-2">Copyrigt © 2023 Supaklin</p>
                        <p>Design by TokoTema</p>
                    </div>
                    <div className="text-skin-white_shade flex items-center gap-2  text-[13px] font-primary">
                        <p className="border-r px-2">Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer