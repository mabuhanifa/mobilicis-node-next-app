import { Zap } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

const Footer = () => {
  return (
    <footer className="container py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <a href="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">AppZealand</span>
          </a>
          <p className="text-muted-foreground mt-4">
            Transforming ideas into impactful digital realities. We specialize
            in creating bespoke websites, web applications, and mobile
            experiences that drive success.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Website Design
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Web Applications
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Mobile Apps
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                SEO Optimization
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
        <p className="text-center sm:text-left">
          &copy; 2025 AppZealand. All rights reserved. |{" "}
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-primary">
            Terms of Service
          </a>
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
};

export default Footer;
