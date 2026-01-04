import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const SectionHeader = ({ title, subtitle, badge, align = "center", className = "" }) => {
    return (
        <div className={cn("mb-16", align === "center" ? "text-center" : "text-left", className)}>
            {badge && (
                <div className={cn("inline-block mb-4", align === "center" ? "mx-auto" : "")}>
                    <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm font-semibold animate-fade-in">
                        <Sparkles className="h-3 w-3 mr-2 inline" />
                        {badge}
                    </Badge>
                </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary animate-slide-up">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-muted-foreground font-normal max-w-2xl mx-auto mb-6 animate-fade-in-delay">
                    {subtitle}
                </p>
            )}
            <div className={cn("w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-expand", align === "center" ? "mx-auto" : "")}></div>
        </div>
    );
};

export default SectionHeader;
