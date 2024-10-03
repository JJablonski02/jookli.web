import { HTMLAttributes } from 'react'

interface ISquares extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactElement,
    position: 'left' | 'right',
    square1Id?: string,
    square2Id?: string,
}

export const Squares: React.FC<ISquares> = ({
  children,
  position,
  className,
  square1Id,
  square2Id
}) => {

    const commonClasses = 'lg:hidden absolute h-2/3 aspect-square border-5 border-blue transform rotate-45 top-1/2 z-0 rounded-square ';

    const positionFirstClasses = position === 'left' ? 
    'left-0 -translate-y-1/2 translate-x-[-3.75rem]' : 
    'right-0 -translate-y-1/2 translate-x-[-2rem]';

    const positionSecondClasses = position === 'left' ? 
    'left-0 -translate-y-1/2 translate-x-[4.375rem]' : 
    'right-0 -translate-y-1/2 translate-x-[5.5rem]';

    const commonChildrenClasses = "relative z-1 w-[80%] max-h-[680px] lg:w-full";

    const childrenClasses = position === 'left' ? `${commonChildrenClasses} ml-auto` : `${commonChildrenClasses}`; {/**Ustalona max-h jako stała na 680px */}

  return (
    <div className="relative w-full max-h">
        <div id={square1Id} className={`${commonClasses + positionFirstClasses}`}/>
        <div id={square2Id} className={`${commonClasses + positionSecondClasses}`} />
        <div className={`${childrenClasses} + " " + ${className}`}>{children}</div> 
    </div>
  );
};
