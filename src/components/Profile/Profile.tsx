"use client"
import { user_profile } from "@/utility/profile"
import { motion } from "framer-motion"
import { signOut, useSession } from 'next-auth/react'
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-hot-toast"

const variants = {
    open: { opacity: 1, scale: 1, y: 0, x: 0, skew: "0deg" },
    closed: { opacity: 0, scale: .2, y: -100, x: 100, skew: "30deg" },
}

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { data: session } = useSession();
    console.log("session", session?.user)
    const handleLogOut = async () => {
        await signOut({ callbackUrl: "/", })
        toast.success("Successfully LogOut!")
    }
    return (
        <div className="relative">
            <button className="relative cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
                <img className="rounded-full w-10 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxPGkV7NnStC1E3xibJXXhsgwWjbCw3Kb4oyJ9TJKR7Wbw21gtyCAdtstEnMQe9dR828&usqp=CAU" alt="" />
            </button>
            <motion.nav
                className="absolute w-[300px] top-10 right-10 bg-skin-white_shade shadow shadow-primary_shadow border rounded-lg p-5"
                initial={{ opacity: 0, scale: .2, y: -100, x: 100, skew: "30deg" }}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >
                <div className="flex items-center gap-5">
                    <div>
                        <img className="rounded-full w-10 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxPGkV7NnStC1E3xibJXXhsgwWjbCw3Kb4oyJ9TJKR7Wbw21gtyCAdtstEnMQe9dR828&usqp=CAU" alt="" />
                    </div>
                    <div className="font-primary text-left text-skin-dark_gray_shade">
                        <h3 className="font-[500] text-[17px] -mb-2">John Wilson</h3>
                        <span className="text-[13px] text-skin-medium_light_gray">Wilson@gmail.com</span>
                    </div>
                </div>
                <hr className="mt-3" />

                <div className="flex flex-col text-left">
                    {user_profile.map((m, i) => <Link key={m.label + i} href="">
                        <li className="list-none p-2 flex items-center gap-4 font-primary text-skin-dark_gray_shade cursor-pointer"> <span><i className={`${m.icon} text-lg`}></i></span> {m.label}</li>
                    </Link>)}
                </div>
                <hr className="mt-3" />
                <li className="list-none p-2 flex items-center gap-4 font-primary text-skin-dark_gray_shade cursor-pointer ">

                    <div className="flex items-center justify-between w-full">
                        <h5 className="flex items-center gap-4">
                            <i className={`ri-moon-line text-lg`}></i>
                            Dark Mode
                        </h5>

                        <label className="relative inline-flex items-center  cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                        </label>

                    </div>
                </li>

                <li className="list-none p-2 flex items-center gap-4 font-primary text-skin-dark_gray_shade cursor-pointer ">

                    <div className=" w-full">
                        <h5 className="flex items-center gap-4">
                            <i className={`ri-settings-5-line text-lg`}></i>
                            Settings
                        </h5>
                    </div>
                </li>
                <li className="list-none p-2 flex items-center gap-4 font-primary text-skin-dark_gray_shade cursor-pointer ">

                    <div className=" w-full">
                        <h5 className="flex items-center gap-4">
                            <i className={`ri-information-line text-lg`}></i>
                            Support
                        </h5>
                    </div>
                </li>

                <hr className="mt-3" />
                <li className="list-none p-2 flex items-center gap-4 font-primary text-skin-dark_gray_shade cursor-pointer ">

                    <div onClick={handleLogOut} className=" w-full">
                        <h5 className="flex items-center gap-4">
                            <i className={`ri-logout-circle-r-line text-lg`}></i>
                            Log Out
                        </h5>
                    </div>
                </li>

            </motion.nav>
        </div>
    )
}

export default Profile