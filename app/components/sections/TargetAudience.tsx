
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code, Users, Globe } from "lucide-react";

const audienceData = [
  {
    icon: <Users className="w-8 h-8 text-primary mb-2" />,
    title: "Anyone Building an Online Presence",
    description: "Whether you're an individual launching a portfolio or a visionary with a new online venture, we help bring your ideas to life.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary mb-2" />,
    title: "Small & Medium Businesses",
    description: "Establish or enhance your digital presence with websites and applications that drive growth and customer engagement.",
  },
  {
    icon: <Code className="w-8 h-8 text-primary mb-2" />,
    title: "Startups",
    description: "Build MVPs or full-scale digital products that help you validate ideas, attract investors, and scale rapidly.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary mb-2" />,
    title: "Enterprises",
    description: "Modernize legacy systems or develop new digital solutions that improve efficiency and drive innovation.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary mb-2" />,
    title: "Entrepreneurs",
    description: "Launch new ideas with digital products that stand out in the market and resonate with your target audience.",
  },
  {
    icon: <Globe className="w-8 h-8 text-primary mb-2" />,
    title: "E-commerce Businesses",
    description: "Create compelling online shopping experiences that convert visitors into customers and drive sales.",
  },
];

const TargetAudience = () => {
  return (
    <section id="target-audience" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our <span className="text-primary">Target Audience</span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground text-center">
        We work with a diverse range of clients, from startups to established
        businesses, all looking to make their mark in the digital landscape.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {audienceData.map(({ icon, title, description }) => (
          <Card key={title}>
            <CardHeader>
              {icon}
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TargetAudience;
