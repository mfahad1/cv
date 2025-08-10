import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "EventMobi",
      role: "Senior Software Engineer",
      period: "Nov 2020 – Present",
      highlights: [
        "Lead frontend development for large-scale event management platforms using ReactJS and Ionic",
        "Integrated real-time features and optimized performance for high-traffic events",
        "Collaborated directly with clients to refine requirements and deliver tailored solutions",
        "Implemented AI-driven features for event personalization and analytics"
      ],
      isLeft: true
    },
    {
      company: "10Pearls",
      role: "Senior Software Engineer",
      period: "Oct 2017 – Nov 2020",
      highlights: [
        "Migrated legacy systems to ReactJS, improving performance by 2x",
        "Designed microservice-based architectures for social media monitoring and jail management systems",
        "Led a cross-border team of 3 developers, ensuring timely delivery of mission-critical features",
        "Integrated AI-powered analytics for social media sentiment tracking"
      ],
      isLeft: false
    },
    {
      company: "VentureDive",
      role: "Software Engineer",
      period: "Feb 2017 – Oct 2017",
      highlights: [
        "Introduced unit/integration testing strategies, reducing recurring bugs by 15%",
        "Guided developers on modern JavaScript trends and best practices",
        "Collaborated with clients to design optimal technical solutions"
      ],
      isLeft: true
    },
    {
      company: "Codenvoi",
      role: "Software Engineer / Co-Founder",
      period: "Sep 2014 – Dec 2016",
      highlights: [
        "Managed client projects end-to-end, from requirements to deployment",
        "Trained interns in JavaScript and modern web development",
        "Delivered multiple React and Node.js-based applications for international clients"
      ],
      isLeft: false
    }
  ];

  return (
    <section id="experience" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            8+ years of progressive experience across multiple industries and technologies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center md:justify-between">
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                {exp.isLeft ? (
                  <>
                    <div className="ml-12 md:ml-0 md:w-5/12 md:text-right md:pr-8">
                      <div className="bg-muted/50 rounded-lg p-6">
                        <Badge variant="secondary" className="bg-black text-white font-semibold mb-1 border border-accent/30 dark:bg-accent/30 dark:text-accent-foreground">{exp.period}</Badge>
                        <h3 className="text-xl font-bold mb-2" data-testid={`text-role-${exp.company.toLowerCase()}`}>{exp.role}</h3>
                        <div className="text-primary font-semibold mb-4" data-testid={`text-company-${exp.company.toLowerCase()}`}>{exp.company}</div>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx}>• {highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block md:w-5/12"></div>
                    <div className="ml-12 md:ml-0 md:w-5/12 md:pl-8">
                      <div className="bg-muted/50 rounded-lg p-6">
                        <Badge variant="secondary" className="bg-black text-white font-semibold mb-1 border border-accent/30 dark:bg-accent/30 dark:text-accent-foreground">{exp.period}</Badge>
                        <h3 className="text-xl font-bold mb-2" data-testid={`text-role-${exp.company.toLowerCase()}`}>{exp.role}</h3>
                        <div className="text-primary font-semibold mb-4" data-testid={`text-company-${exp.company.toLowerCase()}`}>{exp.company}</div>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx}>• {highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
