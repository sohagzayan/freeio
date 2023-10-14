import { ReactNode } from "react"

interface ButtonType {
    children: ReactNode,
    handleButton: () => void,
    classList: string
}
const ButtonSecondary = ({ classList, handleButton, children }: ButtonType) => {
    return (
        <button className={`relative inline-flex items-center justify-start  overflow-hidden   text-[15px] group  transition-all ease-in-out duration-100 h-[45px]  font-primary font-[500] ${classList}`}>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-skin-green_shade opacity-100 group-hover:-translate-x-5"></span>
            <span className="relative w-full text-left  transition-colors duration-200 ease-in-out">{children}</span>
            <span><i className="ri-arrow-right-up-line relative z-50 group-hover:text-skin-white_shade transition-all ease duration-150 "></i></span>
        </button>
    )
}

export default ButtonSecondary