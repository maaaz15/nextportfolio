import { FadeUp } from "@/components/FadeUp";
import Skills from "@/components/skills/Skills";

const SkillsPage = () => {
    return (
        <div className="flex md:gap-24 flex-col lg:grid lg:grid-cols-2 gap-10">
            <div className="md:flex-1 flex flex-col lg:gap-10 gap-4 lg:mt-12">
                <FadeUp delay={0.2} duration={0.7}>
                    <h1 className="lg:text-3xl text-xl font-extrabold text-center lg:text-left dark:text-slate-200 tracking-wider font-bricolage">
                        Skills
                    </h1>
                </FadeUp>
                <FadeUp delay={0.3} duration={0.8}>
                    <p className="md:text-lg text-sm dark:text-slate-400 text-gray-500 text-center lg:text-left font-medium">
                        I started learning web development in college and got
                        into building responsive websites with{" "}
                        <a className="dark:text-slate-200 text-black dark:hover:text-teal-300 cursor-pointer">
                            HTML
                        </a>
                        ,{" "}
                        <a className="dark:text-slate-200 text-black dark:hover:text-teal-300 cursor-pointer">
                            CSS
                        </a>
                        ,{" "}
                        <a className="dark:text-slate-200 text-black dark:hover:text-teal-300 cursor-pointer">
                            JavaScript
                        </a>
                        , and{" "}
                        <a
                            href="https://nodejs.org/"
                            target="_blank"
                            className="dark:text-slate-200 text-black dark:hover:text-teal-300 cursor-pointer"
                        >
                            Node.js{" "}
                        </a>
                    </p>
                </FadeUp>
                <FadeUp delay={0.4} duration={0.9}>
                    <p className="md:text-lg text-sm dark:text-slate-400 text-gray-500 text-center lg:text-left font-medium tracking-wider">
                        I focus on usability and have experience with tools like{" "}
                        <a
                            href="https://figma.com/"
                            target="_blank"
                            className="dark:text-slate-200 text-black dark:hover:text-teal-300 cursor-pointer"
                        >
                            Figma{" "}
                        </a>
                        and{" "}
                        <a
                            href="https://git-scm.com/"
                            target="_blank"
                            className="dark:text-slate-200 text-black dark:hover:text-teal-300 cursor-pointer"
                        >
                            Git{" "}
                        </a>
                        to create simple, functional sites.
                    </p>
                </FadeUp>
            </div>
            <div className="relative flex-1 flex justify-center lg:mt-10 flex-col mx-2">
                <FadeUp delay={0.5} duration={1}>
                    <Skills />
                </FadeUp>
            </div>
        </div>
    );
};

export default SkillsPage;
