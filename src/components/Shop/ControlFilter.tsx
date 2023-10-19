"use client"
import Availability from "./Filters/Availability"
import Brand from "./Filters/Brand"
import Color from "./Filters/Color"
import Level from "./Filters/Level"
import Material from "./Filters/Material"
import Price from "./Filters/Price"

const ControlFilter = () => {

    const availability = [
    ]
    return (
        <div className="">
            <div>
                {/* <AllFilterSideDrawer /> */}
                <Availability />
                <Price />
                <Brand />
                <Color />
                <Material />
                <Level />
            </div>
        </div>
    )
}

export default ControlFilter