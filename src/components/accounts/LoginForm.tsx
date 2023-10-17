"use client"
import { LoginSchema } from "@/FormValidationSchema/FormValidationSchema"
import ButtonLarge from "@/components/common/Button/ButtonLarge"
import { yupResolver } from "@hookform/resolvers/yup"
import { Checkbox } from "@material-tailwind/react"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"

const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
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
        resolver: yupResolver(LoginSchema),
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
        </form>
    )
}

export default LoginForm