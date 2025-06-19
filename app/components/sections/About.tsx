import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Lightbulb, Target, Users } from "lucide-react";

const features = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Goal-Oriented",
    description:
      "We start by understanding your business goals to deliver solutions that provide real value.",
    imageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Collaborative Partnership",
    description:
      "We work closely with you at every stage, ensuring transparency and alignment.",
    imageUrl:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Innovative Thinking",
    description:
      "We leverage the latest technologies to create creative solutions that set you apart.",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Commitment to Excellence",
    description:
      "We are dedicated to delivering outstanding results that exceed your expectations.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
  },
];

const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-primary">AppZealand</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-4">
            AppZealand is a digital innovation partner dedicated to transforming
            your ideas into impactful realities. With a sharp focus on client
            satisfaction and cutting-edge technology, we deliver exceptional web
            and software solutions that produce tangible results.
          </p>
          <h3 className="text-2xl font-bold mt-8">Why Choose Us?</h3>
          <p className="text-xl text-muted-foreground mt-4">
            At AppZealand, we put your goals first. We believe that a limited
            budget shouldn't limit your potential. Our mission is to provide
            high-quality, innovative digital solutions at an affordable price.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map(({ icon, title, description, imageUrl }) => (
            <Card key={title}>
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <CardHeader className="flex items-center text-center">
                {icon}
                <CardTitle className="mt-4">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
