import Image from "next/image";
import { TechStack } from "./TechStack";

interface projects {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
}

const projects = [
    {
        title: "Music School App",
        description:
            "Built a responsive website for a local music school using Next.js, showcasing the Courses offered, Featured Webinars and a Music Instructors section.",
        image: "/musicschool.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Aceternity UI",
        ],
        link: "https://musicschool-maaaz15.vercel.app/",
    },
    {
        title: "Relaxing Nature Sounds App",
        description:
            "Built a responsive Next.js web app that provides relaxing nature sounds, allowing users to choose and play multiple audios at once for a customizable and soothing experience.",
        image: "/relaxed.png",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://relaxed.vercel.app/",
    },
    {
        title: "Guess The Number Game",
        description:
            "Interactive web game built using vanilla JavaScript where players guess a randomly generated number within a specified range, with hints provided based on their guesses.",
        image: "/guessthenumber.png",
        technologies: ["JavaScript", "Tailwind CSS"],
        link: "https://guess-the-number-maaz.vercel.app/",
    },
    {
        title: "SuperShoe",
        description:
            "Built a responsive Next.js web app for an e-commerce shoe store that showcases a wide variety of shoes. The platform offers a clean, responsive and user-friendly interface with easy navigation, and product listings.",
        image: "/supershoe.png",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://supershoe.vercel.app/",
    },
];

const Projects = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-20">
            {projects.map((projects) => (
                <>
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-6 lg:mt-8 mt-8">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                            <h3>
                                <a
                                    className="inline-flex items-baseline font-semibold leading-tight dark:text-slate-200 text-black dark:hover:text-teal-300 hover:text-slate-200 focus-visible:text-teal-300  group/link text-base"
                                    href={projects.link}
                                    target="_blank"
                                >
                                    <span>{projects.title}</span>
                                    <span className="inline-block">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </a>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">
                                {projects.description}
                            </p>
                            <TechStack technologies={projects.technologies} />
                        </div>
                        <Image
                            width={200}
                            height={48}
                            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                            src={projects.image}
                            alt=""
                        />
                    </div>
                </>
            ))}
        </div>
    );
};

export default Projects;
