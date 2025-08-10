import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="py-12 bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="text-footer-name">Muhammad Fahad Azhar</h3>
            <p className="text-slate-400 mb-4">
              Senior Full-Stack & AI Engineer with 8+ years of experience building scalable solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:mfahadaz1@gmail.com" 
                className="text-slate-400 hover:text-white transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors"
                data-testid="link-footer-github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection("about")} 
                className="block text-slate-400 hover:text-white transition-colors text-left"
                data-testid="link-footer-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("skills")} 
                className="block text-slate-400 hover:text-white transition-colors text-left"
                data-testid="link-footer-skills"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("experience")} 
                className="block text-slate-400 hover:text-white transition-colors text-left"
                data-testid="link-footer-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("projects")} 
                className="block text-slate-400 hover:text-white transition-colors text-left"
                data-testid="link-footer-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="block text-slate-400 hover:text-white transition-colors text-left"
                data-testid="link-footer-contact"
              >
                Contact
              </button>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Education</h4>
            <div className="text-slate-400">
              <div className="font-medium" data-testid="text-degree">BS in Computer Science</div>
              <div data-testid="text-university">University of Karachi, 2016</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p data-testid="text-copyright">&copy; 2024 Muhammad Fahad Azhar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
