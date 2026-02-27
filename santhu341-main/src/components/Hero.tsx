import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const texts = ["Web Developer", "Editor", "Freelancer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              {!imgLoaded && (
                <Skeleton className="relative w-80 h-80 rounded-full" />
              )}
              <img
                src="/lovable-uploads/santhosh.jpg"
                alt="Santhosh"
                onLoad={() => setImgLoaded(true)}
                className={`relative w-80 h-80 rounded-full object-cover shadow-glow border-4 border-primary/20 transition-all duration-700 ease-out
                  ${imgLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm absolute"}`}
              />
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-bold">
              Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">Santhosh</span>
            </h2>
            
            <div className="h-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                I am a{" "}
                <span
                  key={currentText}
                  className="inline-block bg-gradient-primary bg-clip-text text-transparent animate-text-cycle"
                >
                  {texts[currentText]}
                </span>
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about creating elegant solutions through code. Currently pursuing B.Tech in Computer Science Engineering, 
              specializing in web development and digital content creation. I love transforming ideas into beautiful, functional applications.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold 
                         hover:scale-105 transition-transform shadow-glow"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold 
                         hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
