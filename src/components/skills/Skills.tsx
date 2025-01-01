"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
    name: string;
    imageUrl: string;
    gridArea: string;
}

const skills: Skill[] = [
    {
        name: "TypeScript",
        imageUrl: "/logos/typescript.svg",
        gridArea: "a",
    },
    {
        name: "TailwindCSS",
        imageUrl: "/logos/tailwind.svg",
        gridArea: "b",
    },
    {
        name: "Python",
        imageUrl: "/logos/python.svg",
        gridArea: "c",
    },
    {
        name: "React",
        imageUrl: "/logos/react.svg",
        gridArea: "d",
    },
    {
        name: "Next.js",
        imageUrl: "/logos/nextjs.svg",
        gridArea: "e",
    },
    {
        name: "Git",
        imageUrl: "/logos/git.svg",
        gridArea: "f",
    },
    {
        name: "Figma",
        imageUrl: "/logos/figma-logo.svg",
        gridArea: "g",
    },
    {
        name: "Appwrite",
        imageUrl: "/logos/appwrite.svg",
        gridArea: "h",
    },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
    return (
        <Card className="h-full transition-shadow duration-300 hover:shadow-lg dark:hover:scale-105 dark:transition-all dark:duration-300 dark:bg-gray-800">
            <CardContent className="flex flex-col items-center justify-center h-full p-4">
                <Image
                    src={skill.imageUrl}
                    width={512}
                    height={512}
                    className={`md:w-7 md:h-7 w-5 h-5 md:mb-2 mb-1 ${
                        skill.name === "Next.js" ? "dark:invert " : ""
                    }`}
                    alt={`${skill.name} logo`}
                />
                <h3 className="text-xs md:text-md font-semibold dark:text-slate-200 text-center">
                    {skill.name}
                </h3>
            </CardContent>
        </Card>
    );
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Skills = () => {
    return (
        <motion.div
            className="grid grid-cols-4 grid-rows-4 gap-4 md:h-[430px] h-[350px]"
            style={{
                gridTemplateAreas: `
          "a a b c"
          "d d b c"
          "e f g g"
          "e f h h"
        `,
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {skills.map((skill) => (
                <motion.div
                    key={skill.name}
                    style={{ gridArea: skill.gridArea }}
                    variants={itemVariants}
                    transition={{ duration: 0.7 }}
                >
                    <SkillCard skill={skill} />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Skills;
