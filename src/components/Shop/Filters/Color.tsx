import { setColor } from '@/redux/features/filterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import ControlFilterLayout from "../ControlFilterLayout";

const Color = () => {
    const initialColors = ["black", "blue", "cream", "gold", "gray", "green", "magenta", "maroon", "orange", "pink", "purple", "violet", "yellow"];
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const dispatch = useAppDispatch();


    const initialAvailability = useAppSelector((state) => state.filterSlice.color);

    useEffect(() => {
        if (initialAvailability) {
            setSelectedColors(initialAvailability);
        }
    }, [initialAvailability]);



    const handleColorSelection = (color: string) => {
        let updatedColors;
        if (selectedColors.includes(color)) {
            updatedColors = selectedColors.filter(c => c !== color);
        } else {
            updatedColors = [...selectedColors, color];
        }

        setSelectedColors(updatedColors); // Update the state first
        dispatch(setColor(updatedColors)); // Then dispatch the action
    };

    return (
        <ControlFilterLayout title="Color" icon={true}>
            <ul className="flex items-left gap-1 flex-col ">
                {initialColors.map((c) => (
                    <li key={c} className="flex items-center gap-4 mb-2 font-primary text-skin-dark_gray_shade">
                        <input
                            id={c}
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={() => handleColorSelection(c)}
                            checked={selectedColors.includes(c)}
                        />
                        <label htmlFor={c}>{c}</label>
                    </li>
                ))}
            </ul>

        </ControlFilterLayout>
    );
}

export default Color;
