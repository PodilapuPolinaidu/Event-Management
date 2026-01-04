import CategoryPageLayout from "@/components/CategoryPageLayout";
import heroEvents from "@/assets/hero-events.jpg";

const BeachEvents = () => {
  const eventDetails = {
    title: "🏖️✨ Beach Event Celebrations - Serene Oceanfront Experiences ✨🌊",
    description: `Step into paradise with EventPro!

We bring you stunning beachfront event management services packed with ocean views, tropical vibes, and unforgettable memories by the sea! 🏝️

Get ready for celebrations where the waves meet elegance! ✨`,
    whatsInStore: [
      "Stunning beachfront venues with ocean views",
      "Tropical-themed decorations and setup",
      "Beachside catering with fresh seafood",
      "Professional beach photography",
      "Beach activities and water sports options",
      "Weather monitoring and backup plans"
    ],
    tip: "Check out the Gallery section to view our beautiful beachfront venues and past events.",
    startDate: "Available Year Round",
    startTime: "Flexible",
    venue: "Beachfront Venues",
    location: "Multiple Beach Locations",
    address: "Contact us for venue details and availability",
    organizer: "EventPro",
    organizerLocation: "EventPro, Beach Event Services"
  };

  const termsAndConditions = [
    {
      title: "Booking and Payment:",
      items: [
        "A deposit is required to secure your beach venue.",
        "Full payment must be completed 30 days before the event.",
        "Beach permits and permissions are included in the package."
      ]
    },
    {
      title: "Weather and Safety:",
      items: [
        "We monitor weather and sea conditions closely.",
        "Backup plans include covered areas or nearby indoor venues.",
        "Safety protocols must be followed for all beach activities."
      ]
    },
    {
      title: "Beach Regulations:",
      items: [
        "All beach permits and permissions are handled by us.",
        "Guests must follow beach regulations and environmental guidelines.",
        "Parking and access will be coordinated in advance."
      ]
    }
  ];

  const artists = [
    {
      name: "Beach Event Team",
      bio: "Our experienced team specializes in creating beautiful beachfront celebrations.",
      genre: "Beach Events",
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
      name: "Sunset Beach Wedding",
      location: "Beachfront Venue, Multiple Locations",
      date: "Available Year Round",
      price: "₹4,000",
      image: heroEvents,
      link: "/category/beach-events"
    },
    {
      name: "Tropical Beach Party",
      location: "Premium Beachfront Venues",
      date: "Available Year Round",
      price: "₹8,500",
      image: heroEvents,
      link: "/category/beach-events"
    }
  ];

  const pricing = {
    amount: "4000"
  };

  return (
    <CategoryPageLayout
      categoryName="Beach Events"
      categoryDescription="Serene beach celebrations with stunning ocean views and tropical ambiance"
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

export default BeachEvents;
