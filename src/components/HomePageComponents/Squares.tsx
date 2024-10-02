
interface ISquares {
    children: React.ReactElement,
    position: 'left' | 'right'
}

export const Squares: React.FC<ISquares> = ({
  children,
  position
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
        <div className={`${commonClasses + positionFirstClasses}`}/>
        <div className={`${commonClasses + positionSecondClasses}`} />
        <div className={childrenClasses}>{children}</div> 
    </div>
  );
};
