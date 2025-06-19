
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const pricingPackages = [
  {
    title: "Starter Site Package",
    price: 49,
    description: "Perfect for individuals and new businesses looking to establish a professional online presence quickly.",
    features: [
      "Single-Page Static Website",
      "Free Hosting Included (1st year)",
      "Optimized for Performance",
      "Mobile-Responsive Design"
    ],
    cta: "Choose Starter",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Business Website Package",
    price: 99,
    description: "Ideal for growing businesses that need more space to detail their services and engage with customers.",
    features: [
      "Multi-Page Website (Up to 5 Pages)",
      "Dynamic Content & Blog",
      "User-Friendly CMS",
      "SEO-Ready"
    ],
    cta: "Choose Business",
    popular: true,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Full-Stack Application",
    price: 199,
    description: "The ultimate solution for startups ready to launch a powerful, data-driven web application.",
    features: [
      "Full-Stack Web App (Up to 10 Pages)",
      "Database & API Integration",
      "Scalable Architecture",
      "Secure & Reliable"
    ],
    cta: "Choose Full-Stack",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  }
];

interface PricingProps {
  onChoosePackage: (pkg: typeof pricingPackages[0]) => void;
}

const Pricing = ({ onChoosePackage }: PricingProps) => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our Most Popular &{" "}
        <span className="text-primary">Affordable Services</span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground text-center">
        We believe every great idea deserves a great website. Start your digital journey with our transparent and budget-friendly packages.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPackages.map((pkg) => (
          <Card key={pkg.title} className={`flex flex-col justify-between overflow-hidden shadow-sm ${pkg.popular ? "border-primary" : ""}`}>
            <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{pkg.title}</CardTitle>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">${pkg.price}</span>
                <span className="text-muted-foreground">From</span>
              </div>
              <CardDescription>{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => onChoosePackage(pkg)}>{pkg.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
