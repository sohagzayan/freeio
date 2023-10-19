import ControlFilterLayout from "../ControlFilterLayout"

const Color = () => {
    const brands = ["black", "blue", "cream", "gold", "gray", "green", "magenta", "maroon", "orange", "pink", "purple", "violet", "yellow",]
    return (
        <ControlFilterLayout title="Color">
            <ul className="flex items-left gap-1 flex-col ">
                {brands.map((b) => <li className="flex items-center gap-4 mb-2 font-primary text-skin-dark_gray_shade">
                    <input id={b} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor={b}>{b}</label>
                </li>)}

            </ul>
        </ControlFilterLayout>
    )
}

export default Color