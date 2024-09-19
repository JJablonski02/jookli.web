import { Card } from "@nextui-org/card";

interface ISquares {
    children: React.ReactNode,
    position: 'left' | 'right'
}

export const Squares: React.FC<ISquares> = ({
  children,
  position
}) => {
    const commonClasses = 'lg:hidden absolute h-2/3 aspect-square border-5 border-blue transform rotate-45 top-1/2 ';

    const positionFirstClasses = position === 'left' ? 
    'left-0 -translate-y-1/2 translate-x-[-3.75rem] z-0 rounded-square' : 
    'right-0 -translate-y-1/2 translate-x-[6.25rem] z-0 rounded-square';

    const positionSecondClasses = position === 'left' ? 
    'left-0 -translate-y-1/2 translate-x-[4.375rem] z-0 rounded-square' : 
    'right-0 -translate-y-1/2 translate-x-[-1.875rem] z-0 rounded-square';

  return (
    <Card className="overflow-visible">
      <div className={`${commonClasses + positionFirstClasses}`}/>
      <div className={`${commonClasses + positionSecondClasses}`} />
      <div className="relative z-10">{children}</div>
    </Card>
  );
};
