"use client"
import { makeFalseIsOpen } from "@/redux/features/mobileSideBarSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { nav_menu } from "@/utility/menu"
import Link from "next/link"
import MobileMenuSub from "./MobileMenuSub"

const MobileMenu = () => {
    const isOpen = useAppSelector((state) => state.mobileSideBarSlice.isOpen);
    const dispatch = useAppDispatch();
    return (
        <div>
            {isOpen && <div
                onClick={() => dispatch(makeFalseIsOpen())}
                className="w-full h-screen bg-skin-dark_gray_shade z-50 fixed top-0 left-0 bg-opacity-20"></div>
            }

            <div className={`fixed top-0 left-0 bottom-0 bg-skin-white_shade  shadow-primary_shadow w-[350px] transform translate-x-[-100%] ${isOpen ? "translate-x-[0%]" : " translate-x-[-100%]"} z-50 transition-all ease-in-out duration-200`}>
                <div className="bg-skin-green_shade text-center h-[60px] flex items-center justify-center bg-opacity-10 text-[20px] font-[500] font-primary border-b-2 border-cool_gray_shade">
                    <h3>Menu</h3>
                </div>
                <div>
                    <div className='flex items-start flex-col gap-5  px-8 py-5'>
                        {nav_menu.map((m, i) => {
                            if (m.subMenu) {
                                return <MobileMenuSub key={i + m.name} menu={m} />
                            } else {
                                return <Link key={i + m.name} href="/" ><h3 className='font-[500]'>{m.name}</h3></Link>
                            }
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu