import { FadeUp } from "@/components/FadeUp";
import Projects from "@/components/projects/Projects";

const ProjectsPage = () => {
    return (
        <div className="flex md:gap-24 flex-col lg:grid mt-6 lg:mt-0">
            <div className="md:flex-1 flex flex-col lg:gap-6 gap-4">
                <FadeUp delay={0.2} duration={0.8}>
                    <h1 className="lg:text-3xl text-xl font-extrabold text-center lg:text-left dark:text-slate-200 font-bricolage">
                        Projects
                    </h1>
                </FadeUp>
                <FadeUp delay={0.4} duration={0.9}>
                    <p className="md:text-lg text-sm dark:text-slate-400 text-gray-500 text-center lg:text-left font-medium ">
                        Explore some of my projects I worked on in the past.
                    </p>
                </FadeUp>
                <div className="flex flex-col lg:gap-20">
                    <FadeUp delay={0.6} duration={1}>
                        <Projects />
                    </FadeUp>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
