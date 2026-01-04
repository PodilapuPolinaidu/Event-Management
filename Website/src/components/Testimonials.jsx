import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Corporate Event Planner",
        content: "The platform completely transformed how we manage our large-scale conferences. The automation tools are a lifesaver!",
        avatar: "SJ",
        color: "bg-blue-100 text-blue-600"
    },
    {
        name: "Michael Chen",
        role: "Venue Owner",
        content: "Since listing our venue here, our bookings have increased by 40%. The dashboard provided is incredibly intuitive.",
        avatar: "MC",
        color: "bg-green-100 text-green-600"
    },
    {
        name: "Emily Davis",
        role: "Bride",
        content: "Planning my wedding was stress-free thanks to the easy vendor coordination. I found exactly what I needed!",
        avatar: "ED",
        color: "bg-pink-100 text-pink-600"
    },
    {
        name: "David Wilson",
        role: "Concert Organizer",
        content: "A game-changer for ticket management and crowd flow planning. Highly recommended for any event professional.",
        avatar: "DW",
        color: "bg-purple-100 text-purple-600"
    },
    {
        name: "Jessica Brown",
        role: "Marketing Director",
        content: "The analytics features gave us deep insights into attendee behavior. We improved our ROI significantly.",
        avatar: "JB",
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        name: "Robert Taylor",
        role: "Festival Coordinator",
        content: "Managing multiple vendors and schedules was seamless. The best event management tool I've used.",
        avatar: "RT",
        color: "bg-red-100 text-red-600"
    },
];

const Testimonials = ({ alternate = false }) => {
    return (
        <Section alternate={alternate} className="overflow-hidden py-24 bg-gradient-to-b from-transparent to-primary/5">
            <div className="container mx-auto px-4 mb-16">
                <SectionHeader
                    title="Loved by Professionals"
                    subtitle="See what event planners, venue owners, and couples are saying about their experience."
                    badge="Testimonials"
                />
            </div>

            <div className="relative w-full mask-linear-fade">
                {/* Row 1 - Moving Left */}
                <div className="flex gap-8 w-max animate-marquee hover:pause mb-8">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <TestimonialCard key={`row1-${index}`} data={testimonial} />
                    ))}
                </div>

                {/* Row 2 - Moving Right */}
                <div className="flex gap-8 w-max animate-marquee-reverse hover:pause">
                    {[...testimonials, ...testimonials].reverse().map((testimonial, index) => (
                        <TestimonialCard key={`row2-${index}`} data={testimonial} />
                    ))}
                </div>

                {/* Side Fades */}
                {/* Side Fades Removed */}
            </div>
        </Section>
    );
};

const TestimonialCard = ({ data }) => (
    <Card className="w-[350px] md:w-[450px] shrink-0 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group">
        <CardContent className="p-8 relative">
            <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

            <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic relative z-10">
                "{data.content}"
            </p>

            <div className="flex items-center gap-4">
                <Avatar className={`h-12 w-12 border-2 border-white shadow-sm ${data.color}`}>
                    <AvatarFallback className={data.color}>{data.avatar}</AvatarFallback>
                </Avatar>
                <div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{data.name}</h4>
                    <p className="text-sm text-muted-foreground font-medium">{data.role}</p>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default Testimonials;
