import About from "@/assets/images/about-13.png"
import ButtonSecondary from "@/components/common/Button/ButtonSecondary"
import Image from 'next/image'


const BestMarketplace = () => {
    const handleButton = () => {

    }
    return (
        <div className="px-4 md:px-10 bg-skin-dark_gray_shade py-[120px]">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div>
                        <Image src={About} alt='about_image' className="w-full h-full" />
                    </div>
                    <div>
                        <h3 className="text-[32px] text-skin-white_shade font-primary font-[700] leading-snug mb-8">Join World's Best Marketplace
                            for Workers</h3>
                        <p className="text-[14px] text-skin-white_shade font-primary font-[400] ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <ul className="flex flex-col gap-6 mt-10 ">
                            <li className="flex items-center gap-4  text-[14px] text-skin-white_shade font-primary font-[400]">
                                <i className="ri-check-line"></i>
                                <span>Connect to freelancers with proven business experience</span>
                            </li>
                            <li className="flex items-center gap-4  text-[14px] text-skin-white_shade font-primary font-[400]">
                                <i className="ri-check-line"></i>
                                <span>Connect to freelancers with proven business experience</span>
                            </li>
                            <li className="flex  gap-4 items-center text-[14px] text-skin-white_shade font-primary font-[400]">
                                <i className="ri-check-line"></i>
                                <span>Connect to freelancers with proven business experience</span>
                            </li>

                        </ul>
                        <ButtonSecondary
                            handleButton={handleButton} classList="bg-skin-white_shade rounded-[6px] border border-dark_gray_shade text-skin-dark_gray_shade hover:text-skin-white_shade hover:border-green_shade px-[32px] py-[13px] border-transparent flex items-center gap-3 mt-10"
                        >Find Talent</ButtonSecondary>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestMarketplace