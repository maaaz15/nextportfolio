import Projects from "@/components/projects/Projects";

const ProjectsPage = () => {
    return (
        <div className="flex md:gap-24 flex-col lg:grid mt-6 lg:mt-0">
            <div className="md:flex-1 flex flex-col lg:gap-6 gap-4">
                <h1 className="lg:text-3xl text-xl font-extrabold text-center lg:text-left dark:text-slate-200">
                    Projects
                </h1>
                <p className="md:text-lg text-sm dark:text-slate-400 text-gray-500 text-center lg:text-left font-medium ">
                    Explore some of my projects I worked on in the past.
                </p>
                <div className="flex flex-col lg:gap-20">
                    <Projects />
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
