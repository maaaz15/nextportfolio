import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/FadeUp";

const Footer = () => {
    return (
        <main className="container my-8 flex space-y-2 items-center flex-col justify-center dark:text-slate-200">
            <FadeUp delay={0.8} duration={1}>
                <div className="flex items-center space-x-8 my-2">
                    <Link
                        href="https://github.com/maazts"
                        target="_blank"
                        className="block"
                    >
                        <span className="sr-only">GitHub</span>
                        <Github className="h-6 w-6 dark:text-slate-400 dark:hover:text-slate-200 text-gray-500 hover:text-black duration-200" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/maazts/"
                        target="_blank"
                        className="block"
                    >
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-6 w-6 dark:text-slate-400 dark:hover:text-slate-200 text-gray-500 hover:text-black duration-200" />
                    </Link>
                    <Link
                        href="https://x.com/informalmaaz"
                        target="_blank"
                        className="block"
                    >
                        <span className="sr-only">X</span>
                        <Twitter className="h-6 w-6 dark:text-slate-400 dark:hover:text-slate-200 text-gray-500 hover:text-black duration-200" />
                    </Link>
                    <Link
                        href="https://instagram.com/maazcodes"
                        target="_blank"
                        className="block"
                    >
                        <span className="sr-only">Instagram</span>
                        <Instagram className="h-6 w-6 dark:text-slate-400 dark:hover:text-slate-200 text-gray-500 hover:text-black duration-200" />
                    </Link>
                </div>
                <div className="flex items-center space-x-2 justify-center text-base dark:text-slate-400 text-gray-500">
                    <span>©</span>
                    <span> {new Date().getFullYear()} MAAZ ZAMA.</span>
                </div>
            </FadeUp>
        </main>
    );
};

export default Footer;
