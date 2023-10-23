"use client"
import { useState } from "react"
import ControlFilter from "./ControlFilter"

const AllFilterSideDrawer = () => {
    const [showAllFilter, setShowAllFilter] = useState(false)

    return (
        <div className="relative">
            <button onClick={() => setShowAllFilter((prev) => !prev)} className="flex items-center gap-2 font-primary text-skin-dark_gray_shade font-[500] cursor-pointer border border-cool_gray_shade px-[20px] py-[7px] rounded-[4px]" type="button" >
                <i className="ri-filter-line"></i>
                All Filter
            </button>
            {showAllFilter && <div onClick={() => setShowAllFilter(false)} className="h-screen w-full fixed top-0 cursor-pointer left-0 bg-skin-dark_gray_shade opacity-20"></div>}

            <div className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${showAllFilter ? 'translate-x-0' : '-translate-x-full'}  bg-white w-80 dark:bg-gray-800`} >

                <h5 id="drawer-left-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>Left drawer</h5>
                <button onClick={() => setShowAllFilter(false)} type="button" data-drawer-hide="drawer-left-example" aria-controls="drawer-left-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <div>
                    <ControlFilter />
                </div>
            </div>
        </div>

    )
}

export default AllFilterSideDrawer