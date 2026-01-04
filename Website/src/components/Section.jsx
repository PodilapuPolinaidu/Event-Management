
import { cn } from "@/lib/utils";

const Section = ({ children, className = "", id = "", alternate = false }) => {
    return (
        <section id={id} className={cn("py-16 md:py-20", alternate ? "bg-[#F3E8FF]" : "bg-background", className)}>
            <div className="container mx-auto px-4 md:px-12">
                {children}
            </div>
        </section>
    );
};

export default Section;
