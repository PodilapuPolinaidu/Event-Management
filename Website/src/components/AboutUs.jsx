import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroEvents from "@/assets/about1.jpg";
import partyEvent from "@/assets/about2.jpeg";

const AboutUs = ({ alternate = false }) => {
    const benefits = [
        "Experienced Event Planners",
        "Customized Event Themes",
        "Reliable Vendor Network",
        "Budget-Friendly Packages",
        "24/7 Support",
        "Post-Event Analysis"
    ];

    return (
        <Section alternate={alternate} id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Text Content */}
                <div className="order-2 lg:order-1">
                    <SectionHeader
                        badge="About Us"
                        title="We Create Memories That Last a Lifetime"
                        subtitle="With years of experience in the event industry, we specialize in crafting unique and unforgettable experiences tailored to your vision."
                        align="left"
                        className="mb-8"
                    />

                    <div className="space-y-6 mb-8">
                        {/* <p className="text-muted-foreground text-lg leading-relaxed">
                            At EventPro, we believe that every event tells a story. Whether it's a corporate gala, a dream wedding, or an intimate gathering, our dedicated team works tirelessly to bring your ideas to life. We handle every detail so you can focus on celebrating.
                        </p> */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="font-medium text-foreground/80">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button size="lg" className="group">
                        Learn More About Us
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>

                {/* Image/Visual Content */}
                <div className="order-1 lg:order-2 relative mt-16 lg:mt-0 h-full min-h-[500px]">
                    {/* Main Image (Top Right) */}
                    <div className="relative z-10 w-4/5 ml-auto border-4 border-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                        <img
                            src={heroEvents}
                            alt="Elegant event setup"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Overlapping Image (Bottom Left) */}
                    <div className="absolute top-[200px] -left-4 z-20 w-3/5 border-4 border-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                        <img
                            src={partyEvent}
                            alt="Happy celebration"
                            className="w-full h-[350px] object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
                </div>
            </div>
        </Section>
    );
};

export default AboutUs;
