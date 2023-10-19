import ControlFilterLayout from "../ControlFilterLayout"

const Price = () => {
    return (
        <ControlFilterLayout title="Price">
            <ul className="grid grid-cols-2 items-center gap-2 font-primary text-skin-dark_gray_shade ">
                <li className="flex flex-col">
                    <label htmlFor="">Form $</label>
                    <input type="number" className="border border-cool_gray_shade outline-none py-3 px-3 " />
                </li>
                <li className="flex flex-col">
                    <label htmlFor="">To $</label>
                    <input type="number" className="border border-cool_gray_shade outline-none py-3 px-3" />
                </li>
            </ul>
        </ControlFilterLayout>
    )
}

export default Price