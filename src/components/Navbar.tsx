import Link from "next/link";
import WidthWrapper from "./WidthWrapper";
import Button from "./button";

const Navbar = () => {
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <WidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href='/' className='flex z-40 font-semibold'>
                        JOY<span className="text-green-600">PROFITS
                        </span>
                    </Link>
                    <div className="h-full flex items-center space-x-4">
                        <Button label="Zarejestruj" />
                        <Button label="Zaloguj" />
                    </div>
                </div>
            </WidthWrapper>
        </nav>
    )
}

export default Navbar;