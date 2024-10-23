import { FadeUp } from "@/components/FadeUp";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex md:gap-24 flex-col-reverse lg:flex-row gap-10">
            <div className="md:flex-1 flex flex-col md:gap-10 gap-8">
                <FadeUp delay={0.3} duration={0.7}>
                    <h1 className="lg:text-5xl text-3xl font-extrabold text-center lg:text-left dark:text-slate-200 tracking-wider">
                        Hi, I am Maaz!
                    </h1>
                </FadeUp>
                <FadeUp delay={0.5} duration={0.8}>
                    <p className="md:text-lg text-sm dark:text-slate-400 text-gray-500 text-center lg:text-left font-medium tracking-wider">
                        A passionate front-end web developer specializing in{" "}
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
                        {"."} I love turning ideas into visually appealing and
                        functionally robust websites. Beyond coding, I'm a tech
                        geek always exploring the latest industry trends. With a
                        keen eye for design and a commitment to seamless user
                        experiences, let's bring your digital vision to life!
                    </p>
                </FadeUp>
                <FadeUp delay={0.6} duration={0.9}>
                    <p className="md:text-lg dark:text-slate-400 text-gray-500 text-center lg:text-left font-medium tracking-wide">
                        When I'm not coding, you can find me exploring the
                        latest design trends, enjoying a cup of tea, or taking
                        nature walks.
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
