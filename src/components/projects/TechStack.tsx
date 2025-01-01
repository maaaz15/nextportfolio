import { Badge } from "@/components/ui/badge";

interface TechStackProps {
    technologies: string[];
}

export function TechStack({ technologies }: TechStackProps) {
    return (
        <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="">
                    {tech}
                </Badge>
            ))}
        </div>
    );
}
