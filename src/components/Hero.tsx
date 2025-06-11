
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown, Download } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Full Stack Developer", "React Specialist", "Problem Solver", "Code Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/Sandeep_cv_latest.pdf'; // Must match EXACT filename in public folder
  link.download = 'Sandeep_Kmbz_CV.pdf'; // Name you want the downloaded file to have
  link.target = '_blank'; // Open in new tab as fallback
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    document.body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
  }, 100);
};
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-gray-900 text-white">
      {/* Floating colorful elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-500/30 to-orange-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-float-slow"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-orange-500/30 to-orange-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-float-slow delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/30 to-pink-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-float delay-2000"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-orange-500/30 to-500/30 rounded-full mix-blend-screen filter blur-2xl opacity-40 animate-float delay-3000"></div>

      <div className="container  mx-auto text-center relative mt-28 z-10 ">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-yellow-400  text-xl font-bold animate-slide-in-leFt">Hello 👋  ,   I'm</p>
            
            <h1 className="text-5xl md:text-7xl font-bold animate-zoom-in">
              <span className="gradient-text font-serif">Sandeep Kumar</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl font-mono md:text-3xl gradient-text-blue font-light transition-all duration-500 animate-fade-in">
                {roles[currentRole]}
              </h2>
            </div>
          </div>

          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300 font-medium">
            Passionate about creating <span className="gradient-text-orange font-bold">modern</span>, <span className="gradient-text-green font-bold">responsive</span> web applications with <span className="gradient-text-purple font-bold">cutting-edge</span> technologies. 
            Specializing in React, tailwind Css , TypeScript .
          </p>

          <div className="flex flex-col font sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="interactive-button bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white px-8 font-bold"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="interactive-button solid-card text-white hover:text-yellow-400 border-white/30 hover:border-yellow-400/50"
              onClick={handleDownloadCV}
            >
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-2 justify-center  animate-slide-in-right delay-700">
            <Button variant="outline" size="icon" className="interactive-button solid-card mx-4 text-white hover:text-cyan-400 border-white/30 hover:border-cyan-400/50" asChild>
              <a href="https://github.com/sandeep-kumar-kmtb" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="interactive-button solid-card  text-white hover:text-blue-400 border-white/30 hover:border-blue-400/50" asChild>
              <a href="https://www.linkedin.com/in/sandeep-kumar-kmtb" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>

          <div className="absolute mt-8  font-bold left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-6 font-semibold  text-yellow-400 cursor-pointer hover:scale-125 transition-transform" onClick={scrollToProjects} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
