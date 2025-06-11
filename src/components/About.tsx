
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Target, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Full Stack Expertise",
      description: "Proficient in both frontend and backend technologies with modern frameworks"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Problem Solver",
      description: "Creative approach to complex challenges with efficient solutions"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goal Oriented",
      description: "Focused on delivering high-quality results within deadlines"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Learner",
      description: "Adaptable to new technologies and industry best practices"
    }
  ];

  return (
<section id="about" className="section-padding  bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Passionate <span className="gradient-text-blue font-bold">developer</span> dedicated to creating <span className="gradient-text-purple font-bold">innovative</span> solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="glass-card border-white/30 h-full transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold gradient-text-green mb-6">My Journey</h3>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>
                      I'm a passionate <span className="text-yellow-400 font-semibold">Full Stack Developer</span> currently pursuing my MCA from Lovely Professional University. My journey in technology began with a curiosity about how digital solutions can solve real-world problems.
                    </p>
                    <p>
                      With expertise in <span className="text-cyan-400 font-semibold">React, TypeScript, Node.js, and modern web technologies</span>, I've successfully developed and deployed multiple projects including e-commerce platforms and business management systems.
                    </p>
                    <p>
                      I believe in writing <span className="text-pink-400 font-semibold">clean, maintainable code</span> and staying updated with the latest industry trends. My goal is to create applications that not only function flawlessly but also provide exceptional user experiences.
                    </p>
                    <p>
                      When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or learning about emerging frameworks that can enhance my development toolkit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="glass-card border-white/30 hover:border-yellow-400/50 transform hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg text-purple-400 group-hover:text-yellow-400 transition-colors duration-300">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-white/70">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
