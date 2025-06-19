import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1>
            Professional Websites & Custom Software Solutions That{" "}
            <span className="text-primary">Drive Growth.</span>
          </h1>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          At AppZealand, we build stunning, high-performance digital products at
          prices you can afford. Get your business online starting from just
          $49.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>
          <Button variant="outline" className="w-full md:w-1/3">
            Learn More
          </Button>
        </div>
      </div>
      <div className="z-10">
        <div className="relative w-full max-w-lg">
          <div className="relative shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop"
              alt="Hero Image"
              className="rounded-lg w-full border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
