import { useState } from "react";
import { ExternalLink, Video, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  liveUrl: string;
  demoVideo: string;
  tags: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, payment integration, and admin dashboard.",
      liveUrl: "https://example.com/project1",
      demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      liveUrl: "https://example.com/project2",
      demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["React", "Firebase", "Tailwind"],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with forecasts and interactive maps.",
      liveUrl: "https://example.com/project3",
      demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["JavaScript", "API", "CSS"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-card border border-border 
                       hover:shadow-glow hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video className="w-16 h-16 text-white opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-primary">
                  <span className="text-sm font-semibold">View Details</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src={selectedProject?.demoVideo}
                className="w-full h-full"
                allowFullScreen
                title="Demo Video"
              ></iframe>
            </div>

            <p className="text-muted-foreground">{selectedProject?.description}</p>

            <div className="flex flex-wrap gap-2">
              {selectedProject?.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={selectedProject?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground 
                       rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              View Live Project
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
