"use client"
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
interface ControlFilterLayoutType {
    children: ReactNode,
    title: string;
    icon?: boolean
}

const ControlFilterLayout = ({ title, icon, children }: ControlFilterLayoutType) => {
    const [showFilterList, setShowFilterList] = useState(true)

    return (
        <div className="border-b py-1">
            <div className="relative">
                {icon && <button onClick={() => setShowFilterList((prev) => !prev)} className="flex  items-center justify-between w-full gap-2 font-primary text-skin-dark_gray_shade font-[500] cursor-pointer  px-[20px] py-[7px] rounded-[4px]" type="button">{title}
                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>}
                <AnimatePresence initial={false}>
                    {showFilterList &&
                        <motion.div
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 }
                            }}
                            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}

                            className={`z-10 showHideAnimation ${showFilterList ? "active" : ""} w-full dark:bg-gray-700 dark:divide-gray-600`}>
                            <div className="px-6 font-primary text-[14px] py-3">
                                {children}
                            </div>
                        </motion.div>}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default ControlFilterLayout