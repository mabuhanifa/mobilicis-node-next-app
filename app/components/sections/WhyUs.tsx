import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const whyUsData = [
  {
    title: "Client-Centric Approach",
    description:
      "At AppZealand, we prioritize our clients' needs and goals. We work closely with you throughout the entire process, from initial concept to final delivery, ensuring that your vision is realized and your expectations are exceeded.",
  },
  {
    title: "Collaborative Process",
    description:
      "We believe in keeping you at every step of the project, fostering open communication and ensuring that the final product aligns perfectly with your objectives.",
  },
  {
    title: "Innovative Solutions",
    description:
      "Our team constantly seeks cutting-edge technical expertise to the table, developing innovative solutions that address your unique challenges and drive success.",
  },
  {
    title: "Timely Delivery",
    description:
      "We are committed to delivering projects on time and within budget, ensuring that you can launch your digital solution according to your schedule.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees. We believe in clear, upfront pricing so you know exactly what to expect. Our goal is to provide value without surprises.",
  },
  {
    title: "Post-Launch Support",
    description:
      "Our relationship doesn't end at launch. We offer ongoing support and maintenance to ensure your digital product remains secure, updated, and effective.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Why <span className="text-primary">AppZealand</span>?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {whyUsData.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
