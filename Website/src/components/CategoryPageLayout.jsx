import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  Image as ImageIcon,
  Phone,
  ArrowRight,
  Clock,
  User,
  Share2,
  Copy,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const CategoryPageLayout = ({
  categoryName,
  categoryDescription,
  heroImage,
  eventDetails = {},
  termsAndConditions = [],
  artists = [],
  gallery = [],
  otherEvents = [],
  pricing = {},
}) => {
  const [activeTab, setActiveTab] = useState("main");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: "main", label: "Event Details" },
    { id: "terms", label: "Terms & Conditions" },
    { id: "artist", label: "Artist" },
    { id: "gallery", label: "Gallery" },
    { id: "other", label: "Other Events" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with Parallax Effect */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <img
                src={heroImage}
                alt={categoryName}
                className="w-full h-full object-cover scale-110 animate-zoom-slow"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/90 animate-gradient-shift"></div>
            {/* Floating Particles Effect */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Hero Content */}
          <div
            className={`relative z-10 container mx-auto px-12 text-center text-white transform transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-4 animate-fade-in">
              <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
                <Sparkles className="h-3 w-3 mr-2 inline animate-spin-slow" />
                Premium Event Experience
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
              {categoryName}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto animate-fade-in-delay drop-shadow-lg">
              {categoryDescription}
            </p>
            {/* Decorative Line */}
            <div className="mt-8 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-expand"></div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-16 bg-gradient-to-b from-background via-muted/10 to-background relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Animated Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 border-b border-border/50 overflow-x-auto">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-6 py-4 font-semibold text-sm transition-all duration-300 border-b-2 ${
                        activeTab === tab.id
                          ? "border-primary text-primary scale-105"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:border-primary/30"
                      } transform hover:scale-105`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-expand"></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab Content with Fade Animation */}
                <div className="mt-8">
                  {/* Main/Event Details Tab */}
                  {activeTab === "main" && (
                    <div className={`space-y-8 animate-fade-in`}>
                      <div className="transform transition-all duration-500">
                        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                          {eventDetails.title || categoryName}
                        </h2>
                        <div className="prose max-w-none text-muted-foreground">
                          {eventDetails.description && (
                            <p className="text-lg md:text-xl mb-6 leading-relaxed">
                              {eventDetails.description}
                            </p>
                          )}

                          {eventDetails.whatsInStore && (
                            <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 rounded-xl border border-primary/20 shadow-lg">
                              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-3xl">💃</span>
                                <span>What's in store?</span>
                              </h3>
                              <ul className="space-y-3 list-none">
                                {eventDetails.whatsInStore.map(
                                  (item, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2"
                                      style={{
                                        animationDelay: `${index * 100}ms`,
                                      }}
                                    >
                                      <span className="text-2xl animate-bounce-subtle">
                                        ✨
                                      </span>
                                      <span className="text-base md:text-lg flex-1">
                                        {item}
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}

                          {eventDetails.tip && (
                            <div className="mt-8 p-5 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border border-accent/20 shadow-md animate-fade-in-delay">
                              <p className="text-sm md:text-base flex items-start gap-2">
                                <span className="text-xl">📂</span>
                                <span>
                                  <strong className="text-foreground">
                                    Tip:
                                  </strong>{" "}
                                  {eventDetails.tip}
                                </span>
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Terms & Conditions Tab */}
                  {activeTab === "terms" && (
                    <div className={`space-y-6 animate-fade-in`}>
                      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Terms and Conditions
                      </h2>
                      {termsAndConditions.map((section, index) => (
                        <Card
                          key={index}
                          className="mb-6 overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                              {section.title}
                            </h3>
                            <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                              {section.items.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="hover:text-foreground transition-colors duration-200"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                      {termsAndConditions.length === 0 && (
                        <p className="text-muted-foreground text-center py-12">
                          Terms and conditions will be available soon.
                        </p>
                      )}
                    </div>
                  )}

                  {/* Artist Tab */}
                  {activeTab === "artist" && (
                    <div className={`space-y-6 animate-fade-in`}>
                      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Artists Details
                      </h2>
                      {artists.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {artists.map((artist, index) => (
                            <Card
                              key={index}
                              className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                              style={{ animationDelay: `${index * 150}ms` }}
                            >
                              <div className="flex flex-col md:flex-row">
                                {artist.image && (
                                  <div className="w-full md:w-40 h-48 md:h-auto overflow-hidden">
                                    <img
                                      src={artist.image}
                                      alt={artist.name}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                )}
                                <CardContent className="p-6 flex-1 bg-gradient-to-br from-card to-card/50">
                                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {artist.name}
                                  </h3>
                                  {artist.bio && (
                                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                      {artist.bio}
                                    </p>
                                  )}
                                  {artist.genre && (
                                    <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                                      {artist.genre}
                                    </Badge>
                                  )}
                                </CardContent>
                              </div>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-center py-12">
                          Artist information will be available soon.
                        </p>
                      )}
                    </div>
                  )}

                  {/* Gallery Tab */}
                  {activeTab === "gallery" && (
                    <div className={`space-y-6 animate-fade-in`}>
                      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Gallery Details
                      </h2>
                      {gallery.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {gallery.map((image, index) => (
                            <div
                              key={index}
                              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group transform transition-all duration-500 hover:scale-105 hover:z-10"
                              onClick={() => setSelectedImage(image)}
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                  <ImageIcon className="h-6 w-6 text-white" />
                                </div>
                              </div>
                              <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xs font-medium">
                                  View Image
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-center py-12">
                          Gallery images will be available soon.
                        </p>
                      )}
                    </div>
                  )}

                  {/* Other Events Tab */}
                  {activeTab === "other" && (
                    <div className={`space-y-6 animate-fade-in`}>
                      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Other Events
                      </h2>
                      {otherEvents.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {otherEvents.map((event, index) => (
                            <Card
                              key={index}
                              className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className="flex flex-col md:flex-row">
                                {event.image && (
                                  <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden">
                                    <img
                                      src={event.image}
                                      alt={event.name}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                )}
                                <CardContent className="p-6 flex-1 bg-gradient-to-br from-card to-card/50">
                                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {event.name}
                                  </h3>
                                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                                    {event.location && (
                                      <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        <span>{event.location}</span>
                                      </div>
                                    )}
                                    {event.date && (
                                      <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-primary" />
                                        <span>{event.date}</span>
                                      </div>
                                    )}
                                  </div>
                                  {event.price && (
                                    <div className="flex items-center justify-between pt-4 border-t">
                                      <div>
                                        <span className="text-2xl font-bold text-primary">
                                          {event.price}
                                        </span>
                                        <span className="text-muted-foreground ml-1">
                                          Onwards
                                        </span>
                                      </div>
                                      <Button
                                        size="sm"
                                        asChild
                                        className="group/btn"
                                      >
                                        <Link to={event.link || "#"}>
                                          View Details
                                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                      </Button>
                                    </div>
                                  )}
                                </CardContent>
                              </div>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-center py-12">
                          Other events will be available soon.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar - Event Info Card with Animations */}
              <div className="lg:col-span-1">
                <Card className="sticky top-20 border-0 shadow-2xl bg-gradient-to-br from-card via-card to-card/95 overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>

                  <CardContent className="p-6 relative z-10">
                    <div className="space-y-6">
                      {/* Event Title */}
                      <div className="transform transition-all duration-500">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                          {eventDetails.title || categoryName}
                        </h3>
                      </div>

                      {/* Calendar */}
                      {eventDetails.startDate && (
                        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Calendar className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">
                              {eventDetails.startDate}
                            </p>
                            {eventDetails.startTime && (
                              <p className="text-sm text-muted-foreground">
                                {eventDetails.startTime} Onwards
                              </p>
                            )}
                            {eventDetails.endDate && (
                              <p className="text-sm text-muted-foreground">
                                Until {eventDetails.endDate}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Location */}
                      {eventDetails.location && (
                        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">
                              {eventDetails.venue}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {eventDetails.location}
                            </p>
                            {eventDetails.address && (
                              <p className="text-xs text-muted-foreground mt-1">
                                {eventDetails.address}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Artist */}
                      {artists.length > 0 && (
                        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <User className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">Artist</p>
                            <p className="text-sm text-muted-foreground">
                              {artists.map((a) => a.name).join(", ")}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Price */}
                      {pricing.amount && (
                        <div className="pt-6 border-t border-border/50">
                          <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-4xl font-bold text-primary">
                              ₹{pricing.amount}
                            </span>
                            <span className="text-muted-foreground">
                              Onwards
                            </span>
                          </div>
                          <Button
                            className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                            size="lg"
                          >
                            <span className="relative z-10">Book Now</span>
                            <div className="absolute inset-0 bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                          </Button>
                        </div>
                      )}

                      {/* Event Organizer */}
                      {eventDetails.organizer && (
                        <div className="pt-6 border-t border-border/50">
                          <p className="text-sm text-muted-foreground mb-1">
                            Event Organiser
                          </p>
                          <p className="font-semibold">
                            {eventDetails.organizer}
                          </p>
                          {eventDetails.organizerLocation && (
                            <p className="text-sm text-muted-foreground">
                              {eventDetails.organizerLocation}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Event Address */}
                      {eventDetails.address && (
                        <div className="pt-6 border-t border-border/50">
                          <p className="text-sm text-muted-foreground mb-1">
                            Event Address
                          </p>
                          <p className="text-sm mb-3">{eventDetails.address}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
                          >
                            <ExternalLink className="h-4 w-4 mr-2 transform group-hover:rotate-45 transition-transform" />
                            Get Directions
                          </Button>
                        </div>
                      )}

                      {/* Share */}
                      <div className="pt-6 border-t border-border/50">
                        <p className="text-sm text-muted-foreground mb-3 font-semibold">
                          Share
                        </p>
                        <div className="flex gap-2 mb-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 hover:bg-green-50 hover:border-green-300 transition-all duration-300 group"
                          >
                            <Share2 className="h-4 w-4 mr-2 transform group-hover:scale-110" />
                            WhatsApp
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group"
                          >
                            <Share2 className="h-4 w-4 mr-2 transform group-hover:scale-110" />
                            Facebook
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 hover:bg-sky-50 hover:border-sky-300 transition-all duration-300 group"
                          >
                            <Share2 className="h-4 w-4 mr-2 transform group-hover:scale-110" />
                            Twitter
                          </Button>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
                        >
                          <Copy className="h-4 w-4 mr-2 transform group-hover:scale-110" />
                          Copy Link
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-zoom-in"
            />
            <button
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors p-2 hover:scale-110 transform"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPageLayout;
