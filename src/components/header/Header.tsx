import Link from "next/link";
import Links from "./links/Links";
import { FadeUp } from "@/components/FadeUp";

const Header = () => {
    return (
        <FadeUp delay={0.2} duration={1}>
            <div className="flex justify-between h-16 md:h-28 items-center px-2 py-10 lg:px-0 lg:py-0">
                <Link href="/" className="font-bold text-lg">
                    maaz
                </Link>
                <div>
                    <Links />
                </div>
            </div>
        </FadeUp>
    );
};

export default Header;
