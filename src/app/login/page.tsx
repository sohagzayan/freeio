"use client"
import AuthSocial from "@/components/common/AuthSocial/AuthSocial"
import ButtonLarge from "@/components/common/Button/ButtonLarge"
import Divider from "@/components/common/Divider/Divider"
import Footer from "@/components/common/Footer/Footer"
import AuthField from "@/components/common/InputField/AuthField"
import { Checkbox } from "@material-tailwind/react"
import Link from "next/link"

const page = () => {
    const inputHandle = () => {

    }
    const handleButton = () => {

    }
    return (
        <div className="bg-skin-peach_shade">
            <div className="container mx-auto md:px-10 px-4 py-20 lg:w-[55%] md:w-[70%] w-[100%]">
                <div className="">
                    <div className="text-center mb-10">
                        <h3 className="text-[32px] font-[700] text-skin-dark_gray_shade font-primary mb-2">Log In</h3>
                        <p className="text-[14px] font-[400] text-skin-dark_gray_shade font-primary">Give your visitor a smooth online experience with a solid UX design</p>
                    </div>
                    <div className="bg-skin-white_shade rounded-lg p-8">
                        <div>
                            <h3 className="text-[20px] font-[500] text-skin-dark_gray_shade font-primary mb-2">We're glad to see you again!
                            </h3>
                            <p className="text-[14px] font-[500] text-skin-dark_gray_shade font-primary">Don't have an account? <Link className="text-skin-green_shade" href="/account/register">Sign Up!</Link></p>
                        </div>
                        <form action="" className="mt-4 block">
                            <AuthField onChange={inputHandle} name="display-name" value="df" type="email" label="Email" placeholder="alitf58@gmail.com" />
                            <AuthField onChange={inputHandle} name="display-name" value="df" type="password" label="Password" placeholder="*******" />
                            <div className="flex items-center justify-between pb-2">
                                <div>
                                    <Checkbox label="Remember Me" crossOrigin={undefined} />
                                </div>
                                <div>
                                    <Link className="text-[14px] font-primary text-skin-dark_gray_shade hover:text-skin-green_shade transition-all ease-in-out duration-150" href="/">Lost your password?</Link>
                                </div>
                            </div>
                            <ButtonLarge handleButton={handleButton} classList="bg-skin-green_shade border border-dark_gray_shade text-skin-white_shade w-full  hover:text-skin-white_shade hover:border-green_shade">Sign in</ButtonLarge>
                        </form>
                        <Divider />
                        <AuthSocial />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page