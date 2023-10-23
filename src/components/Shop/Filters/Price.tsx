import { setPrice } from '@/redux/features/filterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ChangeEvent, useEffect, useState } from 'react';
import ControlFilterLayout from "../ControlFilterLayout";

const Price = () => {
    const [priceRange, setPriceRange] = useState<string[]>(['', '']); // State for price range
    const dispatch = useAppDispatch()


    const initialAvailability = useAppSelector((state) => state.filterSlice.price);

    useEffect(() => {
        if (initialAvailability) {
            setPriceRange(initialAvailability);
        }
    }, [initialAvailability]);


    // Function to restrict input to numeric values and update price range
    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const numericValue = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        const newPriceRange = [...priceRange];
        newPriceRange[index] = numericValue;
        setPriceRange(newPriceRange);
        dispatch(setPrice(newPriceRange))
    };

    return (
        <ControlFilterLayout title="Price" icon={true}>
            <div className="grid grid-cols-2 items-center gap-2 font-primary text-skin-dark_gray_shade">
                <div>
                    <label htmlFor="min-price" className="block text-sm font-medium text-gray-700">Min Price:</label>
                    <input
                        id="min-price"
                        placeholder='0'
                        type="number"
                        value={priceRange[0]}
                        onChange={(event) => handlePriceChange(event, 0)}
                        className="w-full bg-gray-100 p-2 rounded-lg"
                    />
                </div>
                <div>
                    <label htmlFor="max-price" className="block text-sm font-medium text-gray-700">Max Price:</label>
                    <input
                        id="max-price"
                        type="number"
                        placeholder='0'
                        value={priceRange[1]}
                        onChange={(event) => handlePriceChange(event, 1)}
                        className="w-full bg-gray-100 p-2 rounded-lg"
                    />
                </div>
            </div>
            <p className='mt-1'>
                Price Range: {priceRange[0] !== '' ? `$${priceRange[0]}` : ''} - {priceRange[1] !== '' ? `$${priceRange[1]}` : ''}
            </p>
        </ControlFilterLayout>
    )
}

export default Price;
