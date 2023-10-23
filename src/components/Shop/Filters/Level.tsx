import { setLevel } from '@/redux/features/filterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import ControlFilterLayout from "../ControlFilterLayout";

const Level = () => {
    const initialLevels = ["Top Rated Seller", "Level Two", "Level One", "New Seller"];
    const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
    const dispatch = useAppDispatch();
    const initialAvailability = useAppSelector((state) => state.filterSlice.level);

    useEffect(() => {
        if (initialAvailability) {
            setSelectedLevels(initialAvailability);
        }
    }, [initialAvailability]);


    const handleLevelSelection = (level: string) => {
        let updatedLevels;
        if (selectedLevels.includes(level)) {
            updatedLevels = selectedLevels.filter(l => l !== level);
        } else {
            updatedLevels = [...selectedLevels, level];
        }

        setSelectedLevels(updatedLevels); // Update the state first
        dispatch(setLevel(updatedLevels)); // Then dispatch the action
    };

    return (
        <ControlFilterLayout title="Level" icon={true}>
            <ul className="flex items-left gap-1 flex-col ">
                {initialLevels.map((l) => (
                    <li key={l} className="flex items-center gap-4 mb-2 font-primary text-skin-dark_gray_shade">
                        <input
                            id={l}
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={() => handleLevelSelection(l)}
                            checked={selectedLevels.includes(l)}
                        />
                        <label htmlFor={l}>{l}</label>
                    </li>
                ))}
            </ul>

        </ControlFilterLayout>
    );
}

export default Level;
