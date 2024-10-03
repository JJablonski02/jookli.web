'use client'

import { useEffect, useState } from "react";

interface IHorizontalLane {
    idBegin: string,
    idEnd: string,
}

export const HorizontalLane : React.FC<IHorizontalLane> = ({ idBegin, idEnd }) => {

    const [points, setPoints] = useState<string>('');

    const calculatePoints = () => {
        const element1 = document.getElementById(idBegin);
        const element2 = document.getElementById(idEnd);
        
        if (element1 && element2) {
            const rect1 = element1.getBoundingClientRect();
            const rect2 = element2.getBoundingClientRect();
            console.log(rect1);

            const x1 = rect1.left + rect1.width / 2;
            const y1 = rect1.bottom;
            const x2 = rect2.left + rect2.width / 2;
            const y2 = rect2.top;

            // Ustal punkty w polilinii
            setPoints(`${x1},${y1} ${x1},${y1 + 20} ${x2},${y1 + 20} ${x2},${y2}`);
        }
    };

    useEffect(() => {
        calculatePoints();
        window.addEventListener('resize', calculatePoints);
        return () => window.removeEventListener('resize', calculatePoints);
    }, [idBegin, idEnd]);

    return(
        <svg className="relative overflow-visible w-full" xmlns="http://www.w3.org/2000/svg">
            <polyline
                className="absolute"
                points={points} 
                stroke="white" 
                strokeWidth="2" 
                fill="none" 
            />
        </svg>
    )
}