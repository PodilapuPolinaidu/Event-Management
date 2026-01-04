import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const Events = lazy(() => import("./pages/Events"));
const Services = lazy(() => import("./pages/Services"));
const Venues = lazy(() => import("./pages/Venues"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load category pages
const CorporateEvents = lazy(() => import("./pages/category/CorporateEvents"));
const Weddings = lazy(() => import("./pages/category/Weddings"));
const OutdoorCeremonies = lazy(() => import("./pages/category/OutdoorCeremonies"));
const BeachEvents = lazy(() => import("./pages/category/BeachEvents"));
const Concerts = lazy(() => import("./pages/category/Concerts"));
const PrivateParties = lazy(() => import("./pages/category/PrivateParties"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <ScrollToTopButton />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/services" element={<Services />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Category Routes */}
            <Route path="/category/corporate-events" element={<CorporateEvents />} />
            <Route path="/category/weddings" element={<Weddings />} />
            <Route path="/category/outdoor-ceremonies" element={<OutdoorCeremonies />} />
            <Route path="/category/beach-events" element={<BeachEvents />} />
            <Route path="/category/concerts" element={<Concerts />} />
            <Route path="/category/private-parties" element={<PrivateParties />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

