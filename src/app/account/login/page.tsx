import { Button } from "@/Matrial/Matrial"
import LoginForm from "@/components/accounts/LoginForm"
import AuthSocial from "@/components/common/AuthSocial/AuthSocial"
import Divider from "@/components/common/Divider/Divider"
import Footer from "@/components/common/Footer/Footer"
import Link from "next/link"




const Login = () => {
    return (
        <div className="bg-skin-peach_shade ">
            <div className="container mx-auto md:px-10 px-4 py-20 lg:w-[55%] md:w-[70%] w-[100%] xl:w-[650px]">
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
                        <LoginForm />
                        <Button>Button</Button>
                        <Divider />
                        <AuthSocial />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login