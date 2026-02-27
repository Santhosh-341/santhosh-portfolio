import { Mail, Phone, Linkedin, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out for collaborations, projects, or just a friendly chat. 
                I'm always excited to connect with fellow developers and creators!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:sr7780497986@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border 
                         hover:scale-105 hover:shadow-glow transition-all group"
              >
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">sr7780497986@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917780497986"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border 
                         hover:scale-105 hover:shadow-glow transition-all group"
              >
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">+91 7780497986</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border 
                         hover:scale-105 hover:shadow-glow transition-all group"
              >
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-semibold">Connect with me</p>
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border 
                         hover:scale-105 hover:shadow-glow transition-all group"
              >
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p className="font-semibold">Follow me</p>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium cursor-pointer">
                Your Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium cursor-pointer">
                Your Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium cursor-pointer">
                Your Message
              </Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px] resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-primary text-primary-foreground font-semibold 
                       hover:scale-105 transition-transform shadow-glow"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
