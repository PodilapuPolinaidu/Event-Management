import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Users, Target, Heart } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="About EventPro"
          description="Creating memorable experiences since 2010"
        />

        <Section>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground text-lg mb-4">
              EventPro was founded with a simple mission: to make every event extraordinary. With over a decade of experience in event management, we've helped thousands of clients bring their vision to life.
            </p>
            <p className="text-muted-foreground text-lg">
              From intimate gatherings to large-scale corporate events, we pride ourselves on attention to detail, creative solutions, and flawless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-elegant transition-all">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-2xl mb-2">15+ Years</h3>
              <p className="text-muted-foreground">Industry Experience</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-elegant transition-all">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-2xl mb-2">5000+</h3>
              <p className="text-muted-foreground">Events Organized</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-elegant transition-all">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-2xl mb-2">98%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-elegant transition-all">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-2xl mb-2">25K+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

