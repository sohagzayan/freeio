"use client"
import { categories } from '@/utility/categories';
import Link from 'next/link';

const CategoriesList = () => {



    return (
        <div className='container mx-auto px-4 md:px-10 border-t border-cool_gray_shade border-b py-2'>
            <div

                className='flex items-center gap-5 gap-y-3 overflow-scroll lg:overflow-hidden '
            >
                {categories.map((category, index) => (
                    <Link href="#" key={category + index} className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-skin-dark_gray_shade text-[14px] font-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        {category}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoriesList;
