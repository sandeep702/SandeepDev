
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Github, Linkedin, Send, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Ajeet Nagar, Haryana 125051",
      link: null
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "kamboz629@gmail.com",
      link: "mailto:kamboz629@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 8295059554",
      link: "tel:+918295059554"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="floating-card glow-effect bg-card border-border hover:border-primary/30"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 bg-primary/20 rounded-lg text-primary animate-pulse-glow">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-primary hover:underline transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-4 animate-slide-in-left delay-500">
              <Button variant="outline" size="icon" className="interactive-button glow-effect" asChild>
                <a href="https://github.com/sandeep-kumar-kmtb" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="interactive-button glow-effect" asChild>
                <a href="https://www.linkedin.com/in/sandeep-kumar-kmtb" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="floating-card glow-effect bg-card border-border animate-fade-in-right">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                  />
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                  />
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full interactive-button bg-primary hover:bg-primary/90 animate-fade-in-up"
                  style={{ animationDelay: '500ms' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
