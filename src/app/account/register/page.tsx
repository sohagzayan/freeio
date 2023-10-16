"use client"
import AuthSocial from "@/components/common/AuthSocial/AuthSocial"
import ButtonLarge from "@/components/common/Button/ButtonLarge"
import Divider from "@/components/common/Divider/Divider"
import Footer from "@/components/common/Footer/Footer"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as yup from "yup"


const schema = yup
    .object({
        name: yup.string().required('Name is required'),
        email: yup.string().required('Email is required').matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Invalid email address'
        ),
        password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
    })
    .required()


const Register = () => {
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();

    const [error, setError] = useState("");

    const callbackUrl = searchParams.get("callbackUrl") || "/profile";
    type Inputs = {
        name: string,
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
            const res = await axios.post("/api/register", data);
            setLoading(false);
            if (res?.data?.error) {
                setError(res.data.message);
                toast.error(res.data.message)
                return;
            }
            signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password,
                callbackUrl,
            });
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
                        <h3 className="text-[32px] font-[700] text-skin-dark_gray_shade font-primary mb-2">Register</h3>
                        <p className="text-[14px] font-[400] text-skin-dark_gray_shade font-primary">Give your visitor a smooth online experience with a solid UX design</p>
                    </div>
                    <div className="bg-skin-white_shade rounded-lg p-8">
                        <div>
                            <h3 className="text-[20px] font-[500] text-skin-dark_gray_shade font-primary mb-2">Let's create your account!
                            </h3>
                            <p className="text-[14px] font-[500] text-skin-dark_gray_shade font-primary">Already have an account? <Link className="text-skin-green_shade" href="/account/login">Log In!</Link></p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} action="" className="mt-4 block">

                            <div className="flex flex-col py-3">
                                <label className="font-[500] text-skin-dark_gray_shade font-primary mb-2 text-[14px]" htmlFor="name">Display Name</label>
                                <input id="name" {...register("name")} name="name" className="rounded-[8px] border border-cool_gray_shade focus:border-dark_gray_shade text-[15px] h-[55px] outline-none pl-[15px]" type="text" placeholder="ali" />
                                <p className="font-[400] text-skin-red_crimson_shade text-[14px] font-primary py-1">{errors.name?.message}</p>
                            </div>

                            <div className="flex flex-col py-3">
                                <label className="font-[500] text-skin-dark_gray_shade font-primary mb-2 text-[14px]" htmlFor="email">Email</label>
                                <input id="email" {...register("email")} name="email" className="rounded-[8px] border border-cool_gray_shade focus:border-dark_gray_shade text-[15px] h-[55px] outline-none pl-[15px]" type="email" placeholder="your@gmail.com" />
                                <p className="font-[400] text-skin-red_crimson_shade text-[14px] font-primary py-1">{errors.email?.message}</p>
                            </div>
                            <div className="flex flex-col py-3 relative">
                                <label className="font-[500] text-skin-dark_gray_shade font-primary mb-2 text-[14px]" htmlFor="password">Password</label>
                                <input  {...register("password")} name="password" className="rounded-[8px] border border-cool_gray_shade focus:border-dark_gray_shade text-[15px] h-[55px] outline-none pl-[15px]" type="password" placeholder="********" />
                                <p className="font-[400] text-skin-red_crimson_shade text-[14px] font-primary py-1">
                                    {errors.password?.message}</p>

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

export default Register