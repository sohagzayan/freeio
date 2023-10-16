"use client"
import FacebookIcon from "@/assets/images/facebook-line.svg"
import GoogleIcon from "@/assets/images/google.svg"
import { signIn } from "next-auth/react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"


const AuthSocial = () => {
    const searchParams = useSearchParams();

    const callbackUrl = searchParams.get("callbackUrl") || "/";

    return (
        <div className="mt-5">
            <div className="grid grid-cols-2 gap-4  ">
                <button
                    onClick={() => signIn("google", { callbackUrl })}
                    className="flex items-center gap-3"
                >
                    <Image src={GoogleIcon} alt="metamask" className="h-6 w-6" />
                    Sign in with Google

                </button>


                <button
                    onClick={() => signIn("github", { callbackUrl })}

                    className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
                >
                    Sign in with Github
                    <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                        <Image src={FacebookIcon} alt="metamask" className="h-6 w-6" />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default AuthSocial