"use client"

interface RememberMeType {
    checkBox: boolean,
    setCheckBox: React.Dispatch<React.SetStateAction<boolean>>;
}

const RememberMe = ({ checkBox, setCheckBox }: RememberMeType) => {

    return (
        <div className="cursor-pointer  flex items-center text-skin-dark_gray_shade font-[400] font-primary text-[14px] gap-2">
            <input checked={checkBox} onChange={(e) => setCheckBox((prev) => !prev)} id="RememberMe" type="checkbox" className="w-4 h-4 cursor-pointer" />
            <label htmlFor="RememberMe">Remember Me</label>
        </div>
    )
}

export default RememberMe