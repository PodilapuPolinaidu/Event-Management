import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const StatItem = ({ end, label, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

            // Handle floating point numbers for ratings
            if (Number.isInteger(end)) {
                setCount(Math.floor(easeOutQuart * end));
            } else {
                setCount((easeOutQuart * end).toFixed(1));
            }

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isVisible, end, duration]);

    return (
        <div ref={countRef} className="flex flex-col items-center justify-center p-4 text-center">
            <div className="text-4xl md:text-5xl font-normal text-foreground mb-2">
                {count}{suffix}
            </div>
            <div className="text-muted-foreground text-sm md:text-base font-light">
                {label}
            </div>
        </div>
    );
};

import Section from "@/components/Section";

const Statistics = ({ alternate = false }) => {
    const stats = [
        { value: 15, label: "Years of Experience", suffix: "+" },
        { value: 1700, label: "Events Covered", suffix: "+" },
        { value: 1500, label: "Satisfied Clients", suffix: "+" },
        { value: 4.8, label: "Customer Rating", suffix: "" },
    ];

    return (
        <Section alternate={alternate} className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <StatItem end={15} label="Years of Experience" suffix="+" />
                <StatItem end={1.7} label="Events Covered" suffix="K+" />
                <StatItem end={1.5} label="Satisfied Clients" suffix="K+" />
                <StatItem end={4.8} label="Customer Rating" />
            </div>
        </Section>
    );
};

export default Statistics;
