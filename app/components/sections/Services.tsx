import { Code, Globe, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const services = [
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Website Development",
    description:
      "We create visually stunning and highly functional websites that serve as the digital storefront for your brand. Our designs are intuitive, engaging, and optimized to convert visitors into customers.",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Custom Web Applications",
    description:
      "We build powerful and scalable web applications designed to solve your specific business challenges. From e-commerce platforms to complex enterprise software, we deliver solutions that streamline operations and drive growth.",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Mobile Application Development",
    description:
      "We design and develop native and cross-platform mobile apps that offer a seamless and intuitive user experience on both iOS and Android. Our applications are built to be engaging, high-performing, and reliable.",
    imageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our Comprehensive <span className="text-primary">Digital Services</span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground text-center">
        Beyond our popular packages, we offer a full suite of services to bring
        your most ambitious digital ideas to life.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title}>
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <CardHeader className="flex items-center text-center">
              {service.icon}
              <CardTitle className="mt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              {service.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
