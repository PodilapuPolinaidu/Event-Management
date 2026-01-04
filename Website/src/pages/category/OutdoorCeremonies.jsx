import CategoryPageLayout from "@/components/CategoryPageLayout";
import heroEvents from "@/assets/hero-events.jpg";

const OutdoorCeremonies = () => {
  const eventDetails = {
    title: "🌳✨ Outdoor Ceremony Events - Beautiful Natural Celebrations ✨🌿",
    description: `Step into nature's embrace with EventPro!

We bring you stunning outdoor ceremony management services packed with natural beauty, perfect settings, and unforgettable memories in the great outdoors! 🌲

Get ready for celebrations where nature meets elegance! ✨`,
    whatsInStore: [
      "Beautiful outdoor venues in natural settings",
      "Professional outdoor setup and decoration",
      "Weather contingency plans and backup options",
      "Outdoor photography with natural lighting",
      "Specialized outdoor catering services",
      "Professional sound systems for open spaces"
    ],
    tip: "Check out the Gallery section to view our beautiful outdoor venues and past ceremonies.",
    startDate: "Available Year Round",
    startTime: "Flexible",
    venue: "Garden & Outdoor Venues",
    location: "Multiple Natural Locations",
    address: "Contact us for venue details and availability",
    organizer: "EventPro",
    organizerLocation: "EventPro, Outdoor Event Services"
  };

  const termsAndConditions = [
    {
      title: "Booking and Payment:",
      items: [
        "A deposit is required to secure your outdoor venue.",
        "Full payment must be completed 30 days before the event.",
        "Weather contingency fees may apply for backup arrangements."
      ]
    },
    {
      title: "Weather Policy:",
      items: [
        "We monitor weather closely and have backup plans ready.",
        "Covered areas or indoor backup venues are available.",
        "No refunds for weather-related changes, but alternatives will be provided."
      ]
    },
    {
      title: "Venue Access:",
      items: [
        "Outdoor venues may have specific access requirements.",
        "Parking arrangements will be coordinated in advance.",
        "Guests should follow venue guidelines and respect the natural environment."
      ]
    }
  ];

  const artists = [
    {
      name: "Outdoor Event Team",
      bio: "Our experienced team specializes in creating beautiful outdoor ceremonies in natural settings.",
      genre: "Outdoor Events",
      image: heroEvents
    }
  ];

  const gallery = [
    heroEvents,
    heroEvents,
    heroEvents,
    heroEvents,
    heroEvents,
    heroEvents,
    heroEvents,
    heroEvents
  ];

  const otherEvents = [
    {
      name: "Garden Wedding Ceremony",
      location: "Garden Venue, Multiple Locations",
      date: "Available Year Round",
      price: "₹3,500",
      image: heroEvents,
      link: "/category/outdoor-ceremonies"
    },
    {
      name: "Premium Outdoor Celebration",
      location: "Premium Outdoor Venues",
      date: "Available Year Round",
      price: "₹7,500",
      image: heroEvents,
      link: "/category/outdoor-ceremonies"
    }
  ];

  const pricing = {
    amount: "3500"
  };

  return (
    <CategoryPageLayout
      categoryName="Outdoor Ceremonies"
      categoryDescription="Beautiful outdoor celebrations in stunning natural settings"
      heroImage={heroEvents}
      eventDetails={eventDetails}
      termsAndConditions={termsAndConditions}
      artists={artists}
      gallery={gallery}
      otherEvents={otherEvents}
      pricing={pricing}
    />
  );
};

export default OutdoorCeremonies;
