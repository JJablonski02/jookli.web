import Image from "next/image"
import arrow from "../../../public/arrow.svg"

export const StepArrow = () => {
    
    return(
        <div>
            <Image src={arrow} alt="arrow" className="lg:rotate-90"/>
        </div>
    )
}