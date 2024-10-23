"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import {
    Code2,
    FileJson,
    Palette,
    Figma as FigmaIcon,
    Github,
    Globe,
    Laptop,
    Server,
} from "lucide-react";
import { motion } from "framer-motion";

interface Skill {
    name: string;
    icon: LucideIcon;
    color: string;
    gridArea: string;
}

const skills: Skill[] = [
    { name: "HTML", icon: Globe, color: "text-orange-500", gridArea: "a" },
    { name: "CSS", icon: Palette, color: "text-blue-500", gridArea: "b" },
    {
        name: "JavaScript",
        icon: FileJson,
        color: "text-yellow-500",
        gridArea: "c",
    },
    { name: "React", icon: Code2, color: "text-cyan-500", gridArea: "d" },
    {
        name: "Next.js",
        icon: Server,
        color: "text-fuchsia-500",
        gridArea: "e",
    },
    { name: "Git", icon: Github, color: "text-red-500", gridArea: "f" },
    { name: "Figma", icon: FigmaIcon, color: "text-purple-500", gridArea: "g" },
    {
        name: "Responsive Design",
        icon: Laptop,
        color: "text-green-500",
        gridArea: "h",
    },
];

const SkillCard = ({ skill }: { skill: Skill }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300 dark:hover:scale-105 dark:transition-all dark:duration-300 dark:bg-gray-800 h-full">
        <CardContent className="flex flex-col items-center justify-center p-4 h-full">
            <skill.icon
                className={`md:w-8 md:h-8 w-6 h-6 ${skill.color} md:mb-2 mb-1`}
            />
            <h3 className="text-xs md:text-md font-semibold dark:text-slate-200 text-center">
                {skill.name}
            </h3>
        </CardContent>
    </Card>
);

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
