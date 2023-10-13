import { ReactNode } from "react"


interface ButtonType {
    children: ReactNode,
    handleButton: () => void,
    classList: string
}
const LargeButton = ({ classList, handleButton, children }: ButtonType) => {
    return (
        <button className={`relative inline-flex items-center justify-start   py-3 overflow-hidden  rounded-[12px] text-[15px] group  transition-all ease-in-out duration-100 h-[40px] px-[30px] font-primary font-[500] ${classList}`}>
            <span className="absolute top-0 left-0 w-48 h-[460px]  -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-skin-green_shade opacity-100 group-hover:translate-x-5"></span>
            <span className="relative w-full text-left  transition-colors duration-200 ease-in-out flex justify-between">{children} <i className="ri-arrow-right-up-line group-hover:text-skin-white_shade transition-all  ease-in-out duration-200 text-skin-dark_gray_shade text-lg"></i></span>
        </button>
    )
}

export default LargeButton