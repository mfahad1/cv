import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, Shield, Plane, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Customer Service Platform",
      description: "Advanced AI integration for real-time customer support",
      icon: Brain,
      gradient: "from-accent to-primary",
      highlights: [
        "Integrated GPT APIs and on-device AI into React Native app",
        "Built automated RAG pipelines with recursive fine-tuning",
        "Used MCP to connect AI with existing app functionalities",
        "Triggered by database updates for continuous improvement"
      ],
      technologies: ["React Native", "GPT API", "RAG", "MCP"]
    },
    {
      title: "Social Media Monitoring Platform",
      description: "Real-time analytics for multiple social media accounts",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500",
      highlights: [
        "Built platform to track and analyze multiple social media accounts",
        "Implemented real-time sentiment analysis and trend detection",
        "Scalable architecture handling high-volume social data",
        "Advanced reporting and visualization dashboard"
      ],
      technologies: ["AWS", "Node.js", "React", "Elasticsearch"]
    },
    {
      title: "Jail Management System",
      description: "Large-scale microservices architecture for corrections",
      icon: Shield,
      gradient: "from-emerald-500 to-teal-500",
      highlights: [
        "Large-scale microservices architecture with Kubernetes",
        "Comprehensive inmate and facility management features",
        "Mobile app for staff with offline capabilities",
        "High security and compliance standards implementation"
      ],
      technologies: ["Ruby on Rails", "React", "React Native", "Kubernetes"]
    },
    {
      title: "Flight Management System",
      description: "Uber-like service for private jet scheduling",
      icon: Plane,
      gradient: "from-blue-500 to-indigo-500",
      highlights: [
        "Uber-like service for private jets with real-time scheduling",
        "Advanced booking system with availability management",
        "Integrated payment processing and customer management",
        "Mobile-responsive design for pilots and customers"
      ],
      technologies: ["AngularJS", "Python", "SASS", "Payment Gateway"]
    }
  ];

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
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing impactful solutions across AI/ML, enterprise systems, and scalable applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${project.gradient} p-6`}>
                  <IconComponent className="text-3xl text-white mb-4 w-8 h-8" />
                  <h3 className="text-xl font-bold text-white mb-2" data-testid={`text-project-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-white/80">{project.description}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="text-muted-foreground space-y-2 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>• {highlight}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="tech-tag">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={scrollToContact}
            className="px-8 py-3 font-semibold flex items-center gap-2"
            data-testid="button-view-more-projects"
          >
            <Eye className="w-4 h-4" />
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
