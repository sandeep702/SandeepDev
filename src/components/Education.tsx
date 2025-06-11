
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab", 
      duration: "2023 – 2025",
      cgpa: "6.57",
      type: "Master's Degree"
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "Chandigarh Group of Colleges",
      location: "Jhanjeri, Punjab",
      duration: "2020 – 2023", 
      percentage: "7.19%",
      type: "Bachelor's Degree"
    },
    {
      degree: "12th with Non-Medical",
      institution: "Apex Public School", 
      location: "",
      duration: "2019 – 2020",
      percentage: "67.8%",
      type: "Higher Secondary"
    }
  ];

  return (
    <section id="education" className="section-padding bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="gradient-text-purple">Journey</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
            My educational <span className="gradient-text-blue font-bold">background</span> in computer science and <span className="gradient-text-orange font-bold">technology</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="solid-card border-white/30 hover:border-yellow-400/50 simple-hover group floating-card">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg text-purple-400 group-hover:text-yellow-400 simple-hover">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2 group-hover:text-yellow-400 simple-hover gradient-text-green">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-lg font-medium text-white/90 mb-1">
                          {edu.institution}
                        </p>
                        {edu.location && (
                          <div className="flex items-center gap-1 text-white/70 mb-2">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2 bg-white/10 text-white border-white/30 font-medium">
                        {edu.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-white/70">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-white/70 font-medium">
                      Academic Performance
                    </div>
                    <div className="text-right">
                      {edu.cgpa && (
                        <p className="text-lg font-semibold gradient-text-orange">
                          CGPA: {edu.cgpa}
                        </p>
                      )}
                      {edu.percentage && (
                        <p className="text-lg font-semibold gradient-text-orange">
                          {edu.percentage}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
