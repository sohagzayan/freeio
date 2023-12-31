import { ReactNode } from "react"

interface ButtonType {
    children: ReactNode,
    handleButton: () => void,
    classList: string
}

const AuthButton = ({ classList, handleButton, children }: ButtonType) => {
    return (
        <button className={`relative inline-flex items-center   overflow-hidden   text-[15px] group  transition-all rounded-lg ease-in-out duration-100 h-[45px]  font-primary font-[500] ${classList}`}>
            <span className="absolute bottom-0 left-0 w-[100%] h-[3rem] -mt-1 transition-all duration-500 ease-in-out  -translate-x-[100%] bg-skin-dark_gray_shade opacity-100 group-hover:-translate-x-[0%]"></span>
            <span className="relative w-full   transition-colors duration-200 ease-in-out flex items-center justify-between">{children}
            </span>

        </button>
    )
}

export default AuthButton