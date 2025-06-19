import {
  Anchor,
  Cloud,
  Code,
  CodeXml,
  Component,
  Database,
  Flame,
  GitBranch,
  Github,
  Globe,
  Monitor,
  Package,
  PenTool,
  Send,
  ShipWheel,
  Smartphone,
  Terminal,
  TestTube2,
  Triangle,
  Waypoints,
  Wind,
  Zap,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

const techStack = [
  {
    category: "Frontend",
    icon: <Monitor className="w-10 h-10 text-primary" />,
    technologies: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Code className="w-10 h-10 text-primary" />,
    technologies: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"],
  },
  {
    category: "Database",
    icon: <Database className="w-10 h-10 text-primary" />,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  {
    category: "DevOps",
    icon: <Globe className="w-10 h-10 text-primary" />,
    technologies: ["Docker", "AWS", "Vercel", "GitHub Actions", "Kubernetes"],
  },
  {
    category: "Tools",
    icon: <Code className="w-10 h-10 text-primary" />,
    technologies: ["Git", "VS Code", "Figma", "Postman", "Jest"],
  },
];

const techIcons: { [key: string]: React.ReactElement } = {
  React: <CodeXml className="h-3 w-3" />,
  "Vue.js": <CodeXml className="h-3 w-3" />,
  "Next.js": <CodeXml className="h-3 w-3" />,
  TypeScript: <CodeXml className="h-3 w-3" />,
  "Tailwind CSS": <Wind className="h-3 w-3" />,
  "Node.js": <Code className="h-3 w-3" />,
  Python: <Code className="h-3 w-3" />,
  Express: <Zap className="h-3 w-3" />,
  FastAPI: <Zap className="h-3 w-3" />,
  GraphQL: <Waypoints className="h-3 w-3" />,
  PostgreSQL: <Database className="h-3 w-3" />,
  MongoDB: <Database className="h-3 w-3" />,
  Redis: <Database className="h-3 w-3" />,
  Firebase: <Flame className="h-3 w-3" />,
  Supabase: <Anchor className="h-3 w-3" />,
  "React Native": <Smartphone className="h-3 w-3" />,
  Flutter: <Component className="h-3 w-3" />,
  Swift: <Code className="h-3 w-3" />,
  Kotlin: <Code className="h-3 w-3" />,
  Expo: <Zap className="h-3 w-3" />,
  Docker: <Package className="h-3 w-3" />,
  AWS: <Cloud className="h-3 w-3" />,
  Vercel: <Triangle className="h-3 w-3" />,
  "GitHub Actions": <Github className="h-3 w-3" />,
  Kubernetes: <ShipWheel className="h-3 w-3" />,
  Git: <GitBranch className="h-3 w-3" />,
  "VS Code": <Terminal className="h-3 w-3" />,
  Figma: <PenTool className="h-3 w-3" />,
  Postman: <Send className="h-3 w-3" />,
  Jest: <TestTube2 className="h-3 w-3" />,
};

const TechStack = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our <span className="text-primary">Tech Stack</span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground text-center">
        We use a modern and robust set of technologies to deliver high-quality
        digital solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStack.map(({ category, icon, technologies }) => (
          <Card
            key={category}
            className="flex flex-col items-center p-6 text-center"
          >
            {icon}
            <h3 className="mb-2 mt-4 text-lg font-semibold text-primary">
              {category}
            </h3>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="flex items-center gap-1.5 px-2.5 py-1"
                >
                  {techIcons[tech] || <Code className="h-3 w-3" />}
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
