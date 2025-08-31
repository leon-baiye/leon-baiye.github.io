import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Award, Users, Heart, Calendar } from "lucide-react";
import johnDoeHeadshot from "@/assets/john-doe-headshot.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/30 to-background">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                John Doe
              </h1>
              <h2 className="text-2xl lg:text-3xl text-primary mb-8 font-semibold">
                Community Leader & Change Maker
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Dedicated to building stronger communities through collaborative leadership, 
                innovative programs, and sustainable social impact initiatives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get In Touch
                </Button>
                <Button variant="outline">
                  View Impact Report
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-background shadow-2xl">
                  <img 
                    src={johnDoeHeadshot} 
                    alt="John Doe - Community Leader"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full p-4">
                  <Heart className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-6">About John</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 15 years of experience in community development and social advocacy, 
              John has dedicated his career to creating positive change at the grassroots level. 
              His collaborative approach and innovative thinking have transformed numerous communities 
              across the region.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Community Building</h4>
                <p className="text-muted-foreground">
                  Bringing people together to create lasting positive change through collaborative initiatives and programs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Leadership Development</h4>
                <p className="text-muted-foreground">
                  Mentoring emerging leaders and developing sustainable leadership structures within communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Social Impact</h4>
                <p className="text-muted-foreground">
                  Creating measurable social impact through strategic partnerships and evidence-based interventions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-foreground mb-16">Leadership Experience</h3>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Executive Director, Community Action Network
                </h4>
                <p className="text-primary font-medium mb-3">2018 - Present</p>
                <p className="text-muted-foreground leading-relaxed">
                  Leading a coalition of 50+ community organizations, overseeing $2M+ in community investment, 
                  and implementing programs that have directly impacted over 10,000 residents.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Program Manager, Regional Housing Initiative
                </h4>
                <p className="text-primary font-medium mb-3">2015 - 2018</p>
                <p className="text-muted-foreground leading-relaxed">
                  Managed affordable housing development projects, facilitated stakeholder engagement, 
                  and developed policy recommendations that influenced regional housing strategy.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Community Organizer, Neighborhood Development Corp
                </h4>
                <p className="text-primary font-medium mb-3">2012 - 2015</p>
                <p className="text-muted-foreground leading-relaxed">
                  Organized grassroots campaigns, facilitated community meetings, and coordinated 
                  volunteer programs that engaged over 500 community members annually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-foreground mb-16">Areas of Expertise</h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Strategic Planning</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Community Engagement</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Program Development</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Grant Writing</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Policy Advocacy</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Partnership Development</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Leadership Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent-foreground/10 text-accent-foreground hover:bg-accent-foreground/20">Team Building</Badge>
                  <Badge className="bg-accent-foreground/10 text-accent-foreground hover:bg-accent-foreground/20">Public Speaking</Badge>
                  <Badge className="bg-accent-foreground/10 text-accent-foreground hover:bg-accent-foreground/20">Conflict Resolution</Badge>
                  <Badge className="bg-accent-foreground/10 text-accent-foreground hover:bg-accent-foreground/20">Change Management</Badge>
                  <Badge className="bg-accent-foreground/10 text-accent-foreground hover:bg-accent-foreground/20">Stakeholder Relations</Badge>
                  <Badge className="bg-accent-foreground/10 text-accent-foreground hover:bg-accent-foreground/20">Crisis Leadership</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-8">Let's Work Together</h3>
            <p className="text-lg text-muted-foreground mb-12">
              Ready to create positive change in your community? Let's discuss how we can collaborate 
              to build stronger, more resilient communities together.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground">john.doe@community.org</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">Springfield, USA</span>
              </div>
            </div>
            
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
