
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Settings, Award, Star } from "lucide-react";

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      skills: [
        { name: "React", level: 90, color: "text-blue-400" },
        { name: "TypeScript", level: 85, color: "text-blue-300" },
        { name: "JavaScript", level: 90, color: "text-yellow-400" },
        { name: "HTML5", level: 95, color: "text-orange-400" },
        { name: "CSS3", level: 88, color: "text-blue-500" },
        { name: "Tailwind CSS", level: 92, color: "text-cyan-400" },
        { name: "Vue.js", level: 75, color: "text-green-400" },
        { name: "Responsive Design", level: 90, color: "text-purple-400" }
      ]
    },
    {
      title: "Backend Development", 
      icon: <Server className="h-6 w-6" />,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 85, color: "text-green-400" },
        { name: "Express.js", level: 88, color: "text-gray-300" },
        { name: "RESTful APIs", level: 90, color: "text-blue-400" },
        { name: "Authentication", level: 80, color: "text-red-400" },
        { name: "Real-time Systems", level: 75, color: "text-purple-400" },
        { name: "Microservices", level: 70, color: "text-orange-400" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="h-6 w-6" />,
      gradient: "from-purple-500 via-pink-500 to-red-500",
      skills: [
        { name: "PostgreSQL", level: 80, color: "text-blue-500" },
        { name: "MongoDB", level: 75, color: "text-green-500" },
        { name: "Supabase", level: 85, color: "text-emerald-400" },
        { name: "Database Design", level: 82, color: "text-indigo-400" },
        { name: "Cloud Architecture", level: 70, color: "text-cyan-400" },
        { name: "Data Analytics", level: 65, color: "text-pink-400" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="h-6 w-6" />,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      skills: [
        { name: "Git", level: 90, color: "text-orange-400" },
        { name: "VS Code", level: 95, color: "text-blue-400" },
        { name: "Vite", level: 85, color: "text-purple-400" },
        { name: "React Query", level: 80, color: "text-red-400" },
        { name: "Lucide React", level: 88, color: "text-gray-300" },
        { name: "Payment Integration", level: 75, color: "text-green-400" },
        { name: "Problem Solving", level: 92, color: "text-yellow-400" }
      ]
    }
  ];

  const certifications = [
    {
      title: "Introduction to Object-Oriented Programming with Java",
      provider: "Coursera",
      icon: "☕",
      gradient: "from-amber-500 to-orange-500",
      year: "2023"
    },
    {
      title: "Mobile Development and JavaScript",
      provider: "Coursera", 
      icon: "📱",
      gradient: "from-blue-500 to-indigo-500",
      year: "2023"
    },
    {
      title: "Core Java",
      provider: "Jspiders",
      icon: "⚡",
      gradient: "from-red-500 to-pink-500",
      year: "2022"
    },
    {
      title: "Data Warehouse Concepts, Design, and Data Integration",
      provider: "Coursera",
      icon: "🗄️",
      gradient: "from-green-500 to-teal-500",
      year: "2023"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSkills(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = skillsRef.current?.querySelectorAll('.skill-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding relative bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
            A comprehensive <span className="gradient-text-blue font-bold">toolkit</span> for building <span className="gradient-text-purple font-bold">modern</span> web applications
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              data-index={categoryIndex}
              className={`skill-card glass-card border-white/30 hover:border-white/60 transition-all duration-500 relative overflow-hidden group ${
                visibleSkills.includes(categoryIndex) ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-xl text-white group-hover:text-white transition-colors duration-300">
                  <div className={`p-3 bg-gradient-to-r ${category.gradient} bg-opacity-20 rounded-lg text-white`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2 group/skill cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center">
                      <Badge 
                        variant="secondary" 
                        className={`text-sm bg-black/30 text-white border-white/30 font-medium transition-all duration-300 ${
                          hoveredSkill === skill.name ? 'scale-110 border-white/60' : ''
                        }`}
                      >
                        <span className={skill.color}>{skill.name}</span>
                      </Badge>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-yellow-400 font-bold">{skill.level}%</span>
                        {skill.level >= 85 && <Star className="h-3 w-3 text-yellow-400 fill-current" />}
                      </div>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out ${
                          hoveredSkill === skill.name ? 'shadow-lg' : ''
                        }`}
                        style={{ 
                          width: visibleSkills.includes(categoryIndex) ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-card border-white/30 hover:border-white/60 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10"></div>
          <CardHeader className="relative z-10 text-center">
            <CardTitle className="text-3xl gradient-text-green flex items-center justify-center gap-3">
              <Award className="h-8 w-8" />
              Professional Certifications
            </CardTitle>
            <p className="text-white/70 mt-2">Industry-recognized credentials and achievements</p>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl p-6 bg-black/20 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">{cert.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-2 text-lg">
                          {cert.title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <Badge className={`bg-gradient-to-r ${cert.gradient} text-black text-[16px] border-none font-bold`}>
                            {cert.provider}
                          </Badge>
                          <span className="text-xs text-white/60 font-medium">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
