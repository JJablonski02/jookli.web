'use client';

import { useState } from "react";
import styles from './button.module.css'

interface ButtonProps {
    label?: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
     const [buttonStyle, setButtonStyle] = useState()
     const handleOnClick = () => {
        console.log('click')
     }

        return (
                <button
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-2 rounded"
                onClick={handleOnClick}
                        >
                    {label}
                </button> 
    )
}


export default Button;