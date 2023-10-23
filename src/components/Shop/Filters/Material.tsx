import { setMaterial } from '@/redux/features/filterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import ControlFilterLayout from "../ControlFilterLayout";

const Material = () => {
    const initialMaterials = ["fiber", "leather", "metal", "resin", "slag"];
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
    const dispatch = useAppDispatch();

    const initialAvailability = useAppSelector((state) => state.filterSlice.material);

    useEffect(() => {
        if (initialAvailability) {
            setSelectedMaterials(initialAvailability);
        }
    }, [initialAvailability]);

    const handleMaterialSelection = (material: string) => {
        let updatedMaterials;
        if (selectedMaterials.includes(material)) {
            updatedMaterials = selectedMaterials.filter(m => m !== material);
        } else {
            updatedMaterials = [...selectedMaterials, material];
        }

        setSelectedMaterials(updatedMaterials); // Update the state first
        dispatch(setMaterial(updatedMaterials)); // Then dispatch the action
    };

    return (
        <ControlFilterLayout title="Material" icon={true}>
            <ul className="flex items-left gap-1 flex-col ">
                {initialMaterials.map((m) => (
                    <li key={m} className="flex items-center gap-4 mb-2 font-primary text-skin-dark_gray_shade">
                        <input
                            id={m}
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={() => handleMaterialSelection(m)}
                            checked={selectedMaterials.includes(m)}
                        />
                        <label htmlFor={m}>{m}</label>
                    </li>
                ))}
            </ul>
        </ControlFilterLayout>
    );
}

export default Material;
