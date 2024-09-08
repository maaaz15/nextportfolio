"use client";

import { ModeToggle } from "@/components/ui/ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Skills",
        path: "/skills",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

const Links = () => {
    const pathName = usePathname();
    return (
        <div className="">
            <div className="items-center hidden lg:flex lg:gap-6">
                {links.map((link) => (
                    <Link
                        href={link.path}
                        key={link.title}
                        className={`${"p-2.5 rounded-3xl md:max-lg:min-w-20 min-w-20 font-bold text-sm text-center"} ${
                            pathName === link.path &&
                            "dark:bg-white dark:text-black bg-black text-white hover:scale-110 hover:rounded duration-200 text-sm"
                        }`}
                    >
                        {link.title}
                    </Link>
                ))}
                {""}
                <ModeToggle />
            </div>
            <div className="flex lg:hidden gap-4">
                <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="cursor-pointer block relative w-6 h-10 scale-110"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem className="m-2 cursor-pointer">
                            <Link href="/">About</Link>{" "}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="m-2 cursor-pointer">
                            <Link href="/skills">Skills</Link>{" "}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="m-2 cursor-pointer">
                            <Link href="/projects">Projects</Link>{" "}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="m-2 cursor-pointer">
                            <Link href="/contact">Contact</Link>{" "}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Links;
