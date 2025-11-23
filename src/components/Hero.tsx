import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, CheckCircle2, FileText, Search, Home, Building2 } from "lucide-react";
import heroVideo from "@/assets/videos/3199978-hd_1920_1080_30fps.mp4";
import { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("search");

  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 w-full h-full" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex-1 flex flex-col min-h-screen">
        {/* Text Content Section - Left Aligned */}
        <div className="flex items-start w-full pt-20 pb-10">
          <div className="container mx-auto px-12 w-full">
            <div className="max-w-2xl text-white">
              <h1 
                className="font-bold block mb-2"
                style={{
                  fontSize: '36px',
                  lineHeight: '48px',
                  color: '#ffffff',
                  textShadow: '0 1px 3px rgba(0, 0, 0, .75)'
                }}
              >
                Make your event unforgettable!
              </h1>
              <p className="text-lg md:text-xl mb-10 text-white font-normal">
                We are offering the best <span className="font-semibold">Event Management</span> Services
              </p>

              {/* Stats List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                  <p className="text-base md:text-lg text-white font-normal">
                    We organize an event <span className="font-bold">every 20 minutes</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <p className="text-base md:text-lg text-white font-normal">
                    We abide by the <span className="font-bold">highest standards</span> of excellence
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-accent flex-shrink-0" />
                  <p className="text-base md:text-lg text-white font-normal">
                    <span className="font-bold">25,000+ clients</span> trust us each month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section - Constrained Width at Bottom */}
        <div className="w-full mt-12 mb-8">
          <div className="container mx-auto px-12">
            {/* Tabs */}
            <div className="flex w-full">
              <button
                onClick={() => setActiveTab("search")}
                className={`px-8 py-3.5 font-semibold text-sm uppercase transition-colors rounded-tl-lg ${
                  activeTab === "search"
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/75 text-primary-foreground/80 hover:bg-primary/85"
                }`}
              >
                Search Best Event
              </button>
              <button
                onClick={() => setActiveTab("advance")}
                className={`px-8 py-3.5 font-semibold text-sm uppercase transition-colors rounded-tr-lg ${
                  activeTab === "advance"
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/75 text-primary-foreground/80 hover:bg-primary/85"
                }`}
              >
                Advance
              </button>
            </div>

            {/* Search Form - Dark Purple Background */}
            <div className="bg-primary w-full py-6">
              <div className="flex flex-col md:flex-row gap-4 items-end w-full px-6">
                {/* What are you looking for - with search icon */}
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
                  <Input
                    placeholder="What are you looking for?"
                    className="bg-background border-border pl-11 h-12 text-base w-full"
                  />
                </div>

                {/* Event Type - with house icon */}
                <div className="relative w-full md:w-[200px]">
                  <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10 pointer-events-none" />
                  <Select>
                    <SelectTrigger className="bg-background h-12 text-base pl-11 w-full">
                      <SelectValue placeholder="Event Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                      <SelectItem value="party">Party</SelectItem>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="concert">Concert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* All Locations - with map pin icon */}
                <div className="relative w-full md:w-[200px]">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10 pointer-events-none" />
                  <Select>
                    <SelectTrigger className="bg-background h-12 text-base pl-11 w-full">
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newyork">New York</SelectItem>
                      <SelectItem value="losangeles">Los Angeles</SelectItem>
                      <SelectItem value="chicago">Chicago</SelectItem>
                      <SelectItem value="miami">Miami</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Categories - with building icon */}
                <div className="relative w-full md:w-[200px]">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10 pointer-events-none" />
                  <Select>
                    <SelectTrigger className="bg-background h-12 text-base pl-11 w-full">
                      <SelectValue placeholder="Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="budget">Budget</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Search Button with "What's this" link */}
                <div className="flex flex-col items-end gap-1 w-full md:w-auto">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8 text-base font-semibold uppercase whitespace-nowrap w-full md:w-auto">
                    SEARCH
                  </Button>
                  {/* <a href="#" className="text-primary-foreground/80 text-xs hover:text-primary-foreground transition-colors">
                    What's this
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
