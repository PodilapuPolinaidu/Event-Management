import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Menu, Phone, Twitter, Linkedin, Facebook } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/events" },
    { name: "SERVICES", path: "/services" },
    { name: "VENUES", path: "/venues" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar - White Background */}
      <div className="bg-white w-full border-b border-gray-200">
        <div className="container mx-auto px-12 py-5">
          <div className="flex items-center justify-between w-full gap-12">
            {/* Logo on Left */}
            <Link to="/" className="flex flex-col items-start gap-1.5 flex-shrink-0 mr-8">
              <div className="flex items-end gap-0.5">
                <Home className="h-3 w-3 text-primary fill-primary" />
                <Home className="h-4 w-4 text-primary fill-primary" />
                <Home className="h-3 w-3 text-primary fill-primary" />
              </div>
              <span className="font-bold text-xl text-black leading-none">EventPro</span>
            </Link>

            {/* Right Section - Call for Enquiry and Create Event Button */}
            <div className="flex items-center gap-6 flex-shrink-0">
              {/* Call for Enquiry */}
              <div className="flex flex-col items-end gap-1">
                <span className="text-sm text-gray-600">Call for Enquiry</span>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-bold text-gray-800">202-555-0182</span>
                </div>
              </div>

              {/* Create Event Button */}
              <Button 
                variant="outline" 
                size="sm" 
                className="border-accent text-accent bg-white hover:bg-accent hover:text-accent-foreground text-sm font-semibold px-8 py-3"
              >
                CREATE EVENT
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Dark Purple Background */}
      <div className="bg-primary text-primary-foreground w-full">
        <div className="container mx-auto px-12">
          <div className="flex items-center justify-between h-16 w-full gap-12">
            {/* Desktop Navigation - Left Aligned */}
            <nav className="hidden md:flex items-center">
              {navLinks.map((link, index) => (
                <div key={link.name} className="flex items-center">
                  <Link
                    to={link.path}
                    className="px-4 text-xs font-medium uppercase tracking-wide hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <span className="text-primary-foreground/60 text-xs mx-2">|</span>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section - Social Icons and Auth */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <div className="flex items-center gap-3">
                <Twitter className="h-4 w-4 cursor-pointer hover:text-accent transition-colors" />
                <Linkedin className="h-4 w-4 cursor-pointer hover:text-accent transition-colors" />
                <div className="h-4 w-4 flex items-center justify-center cursor-pointer hover:text-accent transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.011 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.182 3.674 1.929 3.674.502 0 1.256-.796 2.265-2.385.999-1.578 1.54-2.797 1.621-3.656.142-1.392-.403-2.091-1.635-2.091-.582 0-1.256.134-2.02.402l-1.44-3.342c.789-.347 1.566-.519 2.33-.519 2.3 0 3.953 1.135 4.953 3.405.99 2.25.746 4.313-.732 6.186z"/>
                  </svg>
                </div>
                <Facebook className="h-4 w-4 cursor-pointer hover:text-accent transition-colors" />
              </div>
              <span className="text-primary-foreground/60 text-xs mx-2">|</span>
              <Link to="/login" className="text-xs font-medium uppercase tracking-wide hover:text-accent transition-colors whitespace-nowrap">
                SIGN IN / REGISTER
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-2 mt-4">
                    <Button variant="outline">SIGN IN</Button>
                    <Button>REGISTER</Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
