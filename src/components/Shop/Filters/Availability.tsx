import { setAvailability } from '@/redux/features/filterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks'; // Import useAppSelector
import { ChangeEvent, useEffect, useState } from 'react';
import ControlFilterLayout from '../ControlFilterLayout';

const Availability = () => {
    const [selectedValue, setSelectedValue] = useState(''); // Initialize state for selected value
    const dispatch = useAppDispatch();
    const initialAvailability = useAppSelector((state) => state.filterSlice.availability); // Replace 'filter.availability' with your Redux state path

    useEffect(() => {
        if (initialAvailability) {
            setSelectedValue(initialAvailability);
        }
    }, [initialAvailability]);


    // Handle select change
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        dispatch(setAvailability(newValue));
    };

    return (
        <ControlFilterLayout title="Availability" icon={false}>
            <select
                id="availability"
                value={selectedValue}
                onChange={handleSelectChange}
                className="bg-gray-50 border text-skin-dark_gray_shade text-sm rounded-lg focus:ring-blue-500 focus:border-green_shade outline-none block  p-2.5 dark:bg-gray-700 w-full "
            >
                <option value="all">Availability</option>
                <option value="in-stock">In Stock (23)</option>
                <option value="out-of-stock">Out of Stock (232)</option>
            </select>
        </ControlFilterLayout>
    );
};

export default Availability;
