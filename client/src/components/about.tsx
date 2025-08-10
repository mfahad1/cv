import { Code, Brain, Cloud, Smartphone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Senior Full-Stack & AI Engineer with expertise in building scalable applications and integrating cutting-edge AI technologies. My experience spans across multiple domains including event management, social media analytics, and enterprise solutions.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Expert in LLM integration (LLaMA, DeepSeek, GPT APIs), RAG pipelines, fine-tuning models, and cloud-native architectures. Adept at collaborating with cross-functional teams, leading development efforts, and delivering mission-critical solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary" data-testid="text-years-experience">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary" data-testid="text-mau-apps">50K+</div>
                <div className="text-sm text-muted-foreground">MAU Applications</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary" data-testid="text-major-projects">15+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary" data-testid="text-countries-served">4</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <h3 className="text-2xl font-semibold mb-6">Core Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Code className="text-primary w-4 h-4" />
                </div>
                <span className="font-medium">Full-Stack Development (React, Node.js, Python)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <Brain className="text-accent w-4 h-4" />
                </div>
                <span className="font-medium">AI/ML Integration & LLM Implementation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                  <Cloud className="text-emerald-600 w-4 h-4" />
                </div>
                <span className="font-medium">Cloud Architecture (AWS, Docker, Kubernetes)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <Smartphone className="text-orange-600 w-4 h-4" />
                </div>
                <span className="font-medium">Mobile Development (React Native, Ionic)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
