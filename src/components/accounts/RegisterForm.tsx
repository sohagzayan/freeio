"use client"
import { registerSchema } from "@/FormValidationSchema/FormValidationSchema"
import ButtonLarge from "@/components/common/Button/ButtonLarge"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"


const RegisterForm = () => {
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
        resolver: yupResolver(registerSchema),
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
    )
}

export default RegisterForm