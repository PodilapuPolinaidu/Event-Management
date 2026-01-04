import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { useEffect } from "react";

const BusinessPlatform = ({ alternate = false }) => {
    const steps = [
        {
            id: 1,
            title: "Gain a competitive advantage that lasts",
            description: "Since 2014, our intuitive, innovative tools have kept thousands of venues and event organizations ahead of the curve.",
        },
        {
            id: 2,
            title: "Boost growth with automations and insights",
            description: "Automated features help you to close more leads, get paid faster, draft documents instantly, and improve communication.",
        },
        {
            id: 3,
            title: "Streamline operations for maximum efficiency",
            description: "Centralize your entire workflow from inquiry to invoice, ensuring no detail is missed and every event runs flawlessly.",
        }
    ];

    return (
        <Section alternate={alternate} className="relative overflow-hidden py-24">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionHeader
                    title="Business Solutions"
                    subtitle="What can our venue and event business platform do for you?"
                    badge="Business Platform"
                />

                <div className="relative max-w-6xl mx-auto">
                    {/* Vertical Dashed Line - Centered */}
                    <div className="absolute left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-primary/50 hidden lg:block transform -translate-x-1/2"></div>

                    <div className="space-y-12 lg:space-y-16 relative">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`flex flex-col lg:flex-row items-center w-full relative ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Empty Half */}
                                <div className="hidden lg:block w-1/2"></div>

                                {/* Center Node (NUMBER BADGE) */}
                                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-primary text-3xl font-bold shadow-lg border-4 border-white transform transition-transform duration-500 hover:scale-110 hover:rotate-6">
                                        {step.id}
                                    </div>
                                </div>

                                {/* Content Half */}
                                <div className={`w-full lg:w-1/2 flex ${index % 2 === 0 ? "justify-start lg:pl-16" : "justify-end lg:pr-16"} mt-20 lg:mt-0`}>
                                    <div className={`
                        relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 max-w-xl w-full min-h-[220px] flex flex-col justify-center
                        ${index % 2 === 1 ? "text-right" : "text-left"}
                    `}>
                                        <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>

                                        {/* Decorative Blur */}
                                        <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none`}></div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Connector End Circle */}
                    <div className="absolute left-1/2 bottom-0 w-4 h-4 bg-primary rounded-full hidden lg:block transform -translate-x-1/2 translate-y-1/2 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                </div>
            </div>
        </Section>
    );
};

export default BusinessPlatform;
