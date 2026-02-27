import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      year: "2023 - 2027",
      degree: "B.Tech in Computer Science Engineering",
      institution: "Current",
      grade: "CGPA: 8.0",
    },
    {
      year: "2020 - 2022",
      degree: "12th Grade (MPC)",
      institution: "Completed",
      grade: "Marks: 756",
    },
    {
      year: "2020",
      degree: "10th Grade",
      institution: "Completed",
      grade: "Marks: 576",
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Education <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-1 w-6 h-6 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>

                  <div className="bg-card p-6 rounded-xl shadow-card border border-border hover:scale-[1.02] transition-transform">
                    <span className="text-sm text-primary font-semibold">{edu.year}</span>
                    <h3 className="text-2xl font-bold mt-2">{edu.degree}</h3>
                    <p className="text-muted-foreground mt-1">{edu.institution}</p>
                    <p className="text-lg font-semibold text-secondary mt-2">{edu.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
