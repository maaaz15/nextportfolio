"use client";

import { useEffect, useRef, useState } from "react";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface LinkItem {
    title: string;
    path: string;
}

const links: LinkItem[] = [
    { title: "Home", path: "/" },
    { title: "Skills", path: "/skills" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
];

const Links = () => {
    const pathName = usePathname();
    const [pillStyle, setPillStyle] = useState({ x: 0, width: 0 });
    const linkRefs = useRef<HTMLAnchorElement[]>([]);

    useEffect(() => {
        const activeIndex = links.findIndex((link) => link.path === pathName);

        if (activeIndex !== -1 && linkRefs.current[activeIndex]) {
            const activeLink = linkRefs.current[activeIndex];
            const { offsetLeft, offsetWidth } = activeLink;

            setPillStyle({ x: offsetLeft, width: offsetWidth });
        }
    }, [pathName]);

    return (
        <div>
            <div className="lg:relative items-center hidden lg:flex lg:gap-6">
                <motion.div
                    className="absolute h-10 bg-black dark:bg-white rounded-2xl z-10"
                    animate={pillStyle}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                    }}
                />
                {links.map((link, index) => (
                    <Link
                        href={link.path}
                        key={link.title}
                        ref={(el) => {
                            linkRefs.current[index] = el!;
                        }}
                        className={`z-10 px-6 rounded-3xl font-bold text-sm text-center  ${
                            pathName === link.path
                                ? "text-white dark:text-black"
                                : ""
                        }`}
                    >
                        {link.title}
                    </Link>
                ))}
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {links.map((link) => (
                            <DropdownMenuItem
                                key={link.title}
                                className="m-2 cursor-pointer"
                            >
                                <Link href={link.path}>{link.title}</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Links;
