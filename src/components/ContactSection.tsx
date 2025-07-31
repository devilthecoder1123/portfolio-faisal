import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from "@formspree/react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mgvzzlve");

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  }, [state.succeeded, toast]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    await handleSubmit(e as React.FormEvent<HTMLFormElement>);

    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      form.reset();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "faisalkhantech1123@gmail.com",
      href: "mailto:faisalkhantech1123@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+916204001240",
      href: "tel:+916204001240",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/devilthecoder1123",
      color: "hover:text-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/khanfaisal23/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary/40"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder="What's this about?"
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary/40"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell me about your project or just say hi!"
                  rows={5}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary/40 resize-none"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <Button
                type="submit"
                variant="magnetic"
                size="lg"
                disabled={state.submitting}
                className="w-full group"
              >
                {state.submitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a conversation about web development
                and technology.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="glass p-4 rounded-xl hover:border-primary/40 transition-all duration-300 group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-4 group-hover:text-primary transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-muted-foreground text-sm">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-muted-foreground text-sm">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="glass"
                    size="icon"
                    className={`w-12 h-12 rounded-xl transition-all duration-300 ${social.color}`}
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass p-4 rounded-xl border border-accent/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-green-400">
                  Available for new projects
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Currently accepting freelance and full-time opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-accent opacity-5 blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-primary opacity-10 blur-2xl animate-float"
        style={{ animationDelay: "-4s" }}
      />
    </section>
  );
}
