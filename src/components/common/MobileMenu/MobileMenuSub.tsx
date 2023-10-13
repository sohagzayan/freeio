"use client"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
interface SubMenu {
    name: string;
    path: string;
};

interface MenuItem {
    menu: {
        name: string,
        path: string,
        subMenu?: SubMenu[]
    }
};
const MobileMenuSub = ({ menu }: MenuItem) => {
    const { name, subMenu } = menu
    const [activeSub, setActiveSub] = useState<boolean>(false)

    const handleSub = () => {
        setActiveSub((prev) => !prev)
    }
    return (
        <div className="w-full">
            <div>
                <h3 onClick={handleSub} className='w-full  font-[500]'>
                    <div className='flex  items-center justify-between gap-1  cursor-pointer'>
                        <span className=''>{name}</span>
                        <span><i className="ri-arrow-down-s-line text-xl mt-1 inline-block"></i></span>
                    </div>
                    <AnimatePresence>
                        {activeSub && <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ type: "ease", duration: 0.2 }}
                            className='  font-[500]  top-6 left-0 flex  text-[14px] items-left flex-col     py-6 w-[200px]'>
                            {subMenu?.map((m, i) => <Link key={i + m.name} href="/" ><h3 className='border-l-2 border-transparent transition-all ease-linear delay-100 hover:border-green_shade hover:bg-skin-light_gray_color p-2'>{m.name}</h3></Link>)}
                        </motion.div>}
                    </AnimatePresence>
                </h3>
            </div>
        </div>
    )
}

export default MobileMenuSub