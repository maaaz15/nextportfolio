import { Progress } from "../ui/progress";

const skills = [
  {
    name: "HTML",
    value: 95,
  },
  {
    name: "CSS",
    value: 85,
  },
  {
    name: "JavaScript",
    value: 90,
  },
  {
    name: "ReactJS",
    value: 75,
  },
  {
    name: "NextJS",
    value: 70,
  },
  {
    name: "Git",
    value: 75,
  },
  {
    name: "Figma",
    value: 85,
  },
];

const Skills = () => {
  return (
    <>
      {skills.map((skills) => (
        <div
          className="relative flex-1 flex justify-between items-center mb-3 lg:mb-4"
          key={skills.name}
        >
          <span className="lg:text-lg text-sm font-semibold mx-3 items-center dark:text-slate-400 text-gray-500">
            {skills.name}
          </span>
          <Progress
            value={skills.value}
            className="w-[70%] xl:w-3/4 hover:scale-105 duration-300"
          />
        </div>
      ))}
    </>
  );
};

export default Skills;
