import ControlFilterLayout from '../ControlFilterLayout'

const Availability = () => {
    return (
        <ControlFilterLayout title="Availability">
            <ul className="flex items-left gap-1 flex-col ">
                <li className="flex items-center gap-3">
                    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    In stock(28)
                </li>
                <li className="flex items-center gap-3">
                    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    Out Of stock(28)</li>
            </ul>
        </ControlFilterLayout>
    )
}

export default Availability