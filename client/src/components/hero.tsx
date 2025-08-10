import { Button } from "@/components/ui/button";
import { Mail, Download, Phone, Linkedin, Github } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            {/* Professional Avatar */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <img src={"/cv/resources/LinkedInProfilePicture.png"} alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-primary">Muhammad Fahad Azhar</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-secondary dark:text-muted-foreground mb-8">
            Senior Full-Stack
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Senior Software Engineer with 8+ years of experience delivering scalable, secure, and high-performance web and mobile applications for clients across the USA, Australia, Germany, and beyond. Specialized in React, React Native, Node.js, Python, AWS, and AI/ML integrations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={scrollToContact}
              className="px-8 py-3 font-semibold flex items-center gap-2"
              data-testid="button-contact"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-semibold flex items-center gap-2"
              data-testid="button-download-cv"
              asChild
            >
              <a href="/cv/resources/CV+%20Fahad.pdf" download>
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="mailto:mfahadaz1@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:+14376604498"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-github"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
