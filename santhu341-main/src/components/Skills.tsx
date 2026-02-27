import { useState, useEffect, useRef } from "react";

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: "HTML", percentage: 90, color: "from-orange-500 to-red-500" },
    { name: "CSS", percentage: 70, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", percentage: 50, color: "from-yellow-500 to-amber-500" },
    { name: "Python", percentage: 50, color: "from-green-500 to-emerald-500" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {skill.percentage}%
                </span>
              </div>

              <div className="h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                  style={{
                    width: inView ? `${skill.percentage}%` : "0%",
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={`circle-${skill.name}`}
              className="flex flex-col items-center p-6 bg-card rounded-xl shadow-card border border-border 
                       hover:scale-105 hover:shadow-glow transition-all animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-32 h-32 mb-4">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={inView ? `${2 * Math.PI * 56 * (1 - skill.percentage / 100)}` : `${2 * Math.PI * 56}`}
                    className="transition-all duration-1000 ease-out"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" className="text-primary" stopColor="currentColor" />
                      <stop offset="100%" className="text-secondary" stopColor="currentColor" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">{skill.percentage}%</span>
                </div>
              </div>
              <h4 className="text-lg font-semibold">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
