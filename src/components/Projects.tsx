
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Verma Flour Mill",
      description: "A modern, responsive e-commerce platform for digitizing traditional flour mill business with secure online payment integration.",
      image: "/public/thumnail.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vue", "Supabase", "PostgreSQL", "Razorpay"],
      liveUrl: "https://verma-flour-mill-ux4e.onrender.com/",
      previewUrl: "https://verma-flour-mill-ux4e.onrender.com/",
      githubUrl: "#",
      date: "Jan 2025",
      status: "Live"
    },
    {
      title: "Khaata-Chakki",
      description: "Full-stack application for flour mill operations with customer management, real-time status tracking, and analytics dashboard.",
      image: "/public/thumnail1.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vue", "Supabase", "PostgreSQL", "Lucide React"],
      liveUrl: "https://khaata-chakki.onrender.com/",
      previewUrl: "https://khaata-chakki.onrender.com/",
      githubUrl: "#",
      date: "Mar 2025",
      status: "Live"
    },
    {
      title: "SanChef Restaurant Platform",
      description: "Full-stack restaurant discovery platform with advanced filtering, real-time cart updates, and seamless ordering experience.",
      image: "/public/thumnail3.png",
      technologies: ["React", "JavaScript", "React Router", "Tailwind CSS", "Daily UI", "React Contact API"],
      liveUrl: "#",
      previewUrl: "#",
      githubUrl: "#",
      date: "Nov 2024",
      status: "In Development"
    }
  ];

  const handlePreview = (url: string) => {
    if (url && url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="section-padding bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text-orange neon-glow">Projects</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Here are some of my recent <span className="gradient-text-blue font-bold">projects</span> that showcase my skills in <span className="gradient-text-purple font-bold">full-stack development</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group floating-card rainbow-border overflow-hidden animate-fade-in-up relative"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden z-10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-purple-500/40 to-transparent transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`} />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs font-bold transition-all duration-300 ${
                      project.status === 'Live' ? 'bg-lime-600 text-white' : 'bg-yellow-500/80 text-black'
                    }`}
                  >
                    {project.status}
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-800 text-white font-bold">
                    {project.date}
                  </Badge>
                </div>
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button 
                    size="sm" 
                    className="interactive-button bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 font-bold"
                    onClick={() => handlePreview(project.previewUrl)}
                    disabled={project.previewUrl === "#"}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl group-hover:text-yellow-400 transition-colors duration-300 gradient-text-green neon-glow">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-white/80 font-medium">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs hover:scale-105 transition-transform cursor-pointer bg-white/10 text-white border-white/30 hover:border-yellow-400/50 hover:text-yellow-400 font-medium"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs hover:scale-105 transition-transform bg-white/10 text-white border-white/30 font-medium">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 interactive-button bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 font-bold" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="interactive-button glass-card text-white hover:text-purple-400 border-white/30 hover:border-purple-400/50" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
