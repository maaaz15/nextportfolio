import { FadeUp } from "@/components/FadeUp";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex md:gap-24 flex-col-reverse lg:flex-row gap-10">
            <div className="md:flex-1 flex flex-col md:gap-10 gap-8">
                <div>
                    <FadeUp delay={0.3} duration={0.7}>
                        <h1 className="lg:text-5xl text-3xl font-extrabold text-center lg:text-left dark:text-slate-200 tracking-wider font-bricolage">
                            Hi, I am Maaz!
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.4} duration={0.7}>
                        <p className="md:text-lg text-sm dark:text-slate-400 text-gray-500 text-center lg:text-left font-medium tracking-wider flex items-center justify-center lg:justify-start md:gap-2 gap-2 mt-2">
                            <MapPin size={18} /> Hyderabad, India.
                        </p>
                    </FadeUp>
                </div>
                <FadeUp delay={0.5} duration={0.8}>
                    <p className="md:text-lg text-sm dark:text-slate-400 text-gray-500 text-center lg:text-left font-medium tracking-wider">
                        I’m a front-end developer skilled in{" "}
                        <span className="dark:text-slate-200 text-black dark:hover:text-teal-300 cursor-pointer">
                            JavaScript
                        </span>
                        ,{" "}
                        <Link
                            href="https://react.dev/"
                            target="_blank"
                            className="dark:text-slate-200 text-black dark:hover:text-teal-300 cursor-pointer"
                        >
                            React.js
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="https://nextjs.org/"
                            target="_blank"
                            className="dark:text-slate-200 text-black dark:hover:text-teal-300 cursor-pointer"
                        >
                            Next.js
                        </Link>
                        {"."} I build websites that are functional and easy to
                        use while keeping the design simple.
                    </p>
                </FadeUp>
                <FadeUp delay={0.6} duration={0.9}>
                    <p className="md:text-lg dark:text-slate-400 text-gray-500 text-center lg:text-left font-medium tracking-wide">
                        Outside of coding, I enjoy exploring design, having tea,
                        and spending time outdoors.
                    </p>
                </FadeUp>
            </div>
            <div className="relative flex-1 flex justify-center lg:ml-10 lg:mt-10">
                <FadeUp delay={0.8} duration={1}>
                    <Image
                        src="/picture.jpg"
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="lg:max-w-[300px] lg:max-h-[300px] max-w-[200px] max-h-[200px] w-[100%] h-[100%] rounded-[50%] border-4 dark:border-white border-black  hover:scale-110 duration-500 "
                    />
                </FadeUp>
            </div>
        </div>
    );
}
