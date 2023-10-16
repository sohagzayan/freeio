"use client"
import AuthSocial from "@/components/common/AuthSocial/AuthSocial"
import ButtonLarge from "@/components/common/Button/ButtonLarge"
import Divider from "@/components/common/Divider/Divider"
import Footer from "@/components/common/Footer/Footer"
import { yupResolver } from "@hookform/resolvers/yup"
import { Checkbox } from "@material-tailwind/react"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as yup from "yup"

const schema = yup
    .object({
        email: yup.string().required('Email is required').matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Invalid email address'
        ),
        password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
    })
    .required()

const page = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    type Inputs = {
        email: string
        password: string,
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>({
        //@ts-ignore
        resolver: yupResolver(schema),
    })
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoading(true);
        try {
            setLoading(true);
            const res = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password,
                callbackUrl,
            });
            setLoading(false);
            console.log("res", res);
            if (!res?.error) {
                router.push(callbackUrl);
            } else {
                setError("invalid email or password");
                toast.error("invalid email or password", {
                    duration: 10000
                })
            }
        } catch (error: any) {
            setLoading(false);
            setError(error);
        }
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
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 block">
                            <div className="flex flex-col py-3">
                                <label className="font-[500] text-skin-dark_gray_shade font-primary mb-2 text-[14px]" htmlFor="id">Email</label>
                                <input  {...register("email")} name="email" className="rounded-[8px] border border-cool_gray_shade focus:border-dark_gray_shade text-[15px] h-[55px] outline-none pl-[15px]" type="email" placeholder="example@example.com" />
                                <p className="font-[400] text-skin-red_crimson_shade text-[14px] font-primary py-1">{errors.email?.message}</p>
                            </div>
                            <div className="flex flex-col py-3">
                                <label className="font-[500] text-skin-dark_gray_shade font-primary mb-2 text-[14px]" htmlFor="id">password</label>
                                <input  {...register("password")} name="password" className="rounded-[8px] border border-cool_gray_shade focus:border-dark_gray_shade text-[15px] h-[55px] outline-none pl-[15px]" type="password" placeholder="****" />
                                <p className="font-[400] text-skin-red_crimson_shade text-[14px] font-primary py-1">{errors.password?.message}</p>

                            </div>
                            <div className="flex items-center justify-between pb-2">
                                <div>
                                    <Checkbox label="Remember Me" crossOrigin={undefined} />
                                </div>
                                <div>
                                    <Link className="text-[14px] font-primary text-skin-dark_gray_shade hover:text-skin-green_shade transition-all ease-in-out duration-150" href="/">Lost your password?</Link>
                                </div>
                            </div>
                            <ButtonLarge
                                handleButton={handleButton} classList="bg-skin-green_shade border border-dark_gray_shade text-skin-white_shade w-full  hover:text-skin-white_shade hover:border-green_shade">Sign in</ButtonLarge>
                            {/* <button type="submit">submit</button> */}
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