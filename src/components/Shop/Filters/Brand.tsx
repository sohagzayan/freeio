import { setBrand } from '@/redux/features/filterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import ControlFilterLayout from "../ControlFilterLayout";

const Brand = () => {
    const initialBrands = ["new99", "Vendor A", "Vendor B", "Vendor C", "Vendor D", "Vendor E", "Vendor F", "Vendor G"];
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const dispatch = useAppDispatch();
    const initialAvailability = useAppSelector((state) => state.filterSlice.brand);

    useEffect(() => {
        if (initialAvailability) {
            setSelectedBrands(initialAvailability);
        }
    }, [initialAvailability]);


    const handleBrandSelection = (brand: string) => {
        let updatedBrands;
        if (selectedBrands.includes(brand)) {
            updatedBrands = selectedBrands.filter(b => b !== brand);
        } else {
            updatedBrands = [...selectedBrands, brand];
        }
        setSelectedBrands(updatedBrands); // Update the state first
        dispatch(setBrand(updatedBrands));
        dispatch(setBrand(updatedBrands)) // Then dispatch the action
    };

    return (
        <ControlFilterLayout title="Brand" icon={true}>
            <ul className="flex items-left gap-1 flex-col ">
                {initialBrands.map((b) => (
                    <li key={b} className="flex cursor-pointer   items-center gap-4 mb-2 font-primary text-skin-dark_gray_shade">
                        <input
                            id={b}
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={() => handleBrandSelection(b)}
                            checked={selectedBrands.includes(b)}
                        />
                        <label htmlFor={b}>{b}</label>
                    </li>
                ))}
            </ul>
        </ControlFilterLayout>
    );
}

export default Brand;
