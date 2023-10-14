
interface AuthField {
    label: string,
    placeholder: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number,
    name: string
}

const AuthField = ({ label, placeholder, type, onChange, value, name, ...rest }: AuthField) => {
    return (
        <div className="flex flex-col py-3">
            <label className="font-[500] text-skin-dark_gray_shade font-primary mb-2 text-[14px]" htmlFor="id">{label}</label>
            <input {...rest} name="name" className="rounded-[8px] border border-cool_gray_shade focus:border-dark_gray_shade text-[15px] h-[55px] outline-none pl-[15px]" type={type} placeholder={placeholder} />
        </div>
    )
}

export default AuthField