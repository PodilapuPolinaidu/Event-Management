import CategoryPageLayout from "@/components/CategoryPageLayout";
import weddingEvent from "@/assets/wedding-event.jpg";

const Weddings = () => {
  const eventDetails = {
    title: "💒✨ Elegant Wedding Celebrations - Make Your Special Day Truly Memorable ✨💐",
    description: `Step into your dream wedding with EventPro!

We bring you comprehensive wedding planning services packed with attention to detail, romantic ambiance, and unforgettable memories that will last a lifetime! 💕

Get ready for a day where every moment is perfect and every detail is flawless! ✨`,
    whatsInStore: [
      "Romantic wedding ceremony and reception setup",
      "Professional photography and videography",
      "Gourmet catering with customizable menus",
      "Beautiful floral arrangements and decorations",
      "Live entertainment and DJ services",
      "Dedicated wedding coordinator"
    ],
    tip: "Check out the Gallery section to view our past wedding celebrations and venue options.",
    startDate: "Available Year Round",
    startTime: "Flexible",
    venue: "Premium Wedding Venues",
    location: "Multiple Locations Available",
    address: "Contact us for venue details and availability",
    organizer: "EventPro",
    organizerLocation: "EventPro, Event Management Services"
  };

  const termsAndConditions = [
    {
      title: "Booking and Payment:",
      items: [
        "A deposit is required to secure your wedding date.",
        "Full payment must be completed 30 days before the event.",
        "All prices are subject to change based on final guest count and selections."
      ]
    },
    {
      title: "Cancellation Policy:",
      items: [
        "Cancellations made 90+ days before the event: 50% refund of deposit.",
        "Cancellations made 30-90 days before: 25% refund of deposit.",
        "Cancellations made less than 30 days before: No refund."
      ]
    },
    {
      title: "Changes and Modifications:",
      items: [
        "Changes to guest count must be finalized 7 days before the event.",
        "Menu changes must be confirmed 14 days before the event.",
        "Additional charges may apply for last-minute changes."
      ]
    },
    {
      title: "Vendor Coordination:",
      items: [
        "We coordinate with all vendors on your behalf.",
        "Final vendor payments are due as per individual vendor agreements."
      ]
    }
  ];

  const artists = [
    {
      name: "Wedding Planning Team",
      bio: "Our experienced wedding planners ensure every detail of your special day is perfect.",
      genre: "Event Planning",
      image: weddingEvent
    }
  ];

  const gallery = [
    weddingEvent,
    weddingEvent,
    weddingEvent,
    weddingEvent,
    weddingEvent,
    weddingEvent,
    weddingEvent,
    weddingEvent
  ];

  const otherEvents = [
    {
      name: "Intimate Garden Wedding",
      location: "Garden Venue, Multiple Locations",
      date: "Available Year Round",
      price: "₹8,000",
      image: weddingEvent,
      link: "/category/weddings"
    },
    {
      name: "Luxury Ballroom Wedding",
      location: "Premium Ballroom, Multiple Locations",
      date: "Available Year Round",
      price: "₹30,000",
      image: weddingEvent,
      link: "/category/weddings"
    }
  ];

  const pricing = {
    amount: "8000"
  };

  return (
    <CategoryPageLayout
      categoryName="Weddings"
      categoryDescription="Make your special day truly unforgettable with our comprehensive wedding planning services"
      heroImage={weddingEvent}
      eventDetails={eventDetails}
      termsAndConditions={termsAndConditions}
      artists={artists}
      gallery={gallery}
      otherEvents={otherEvents}
      pricing={pricing}
    />
  );
};

export default Weddings;
