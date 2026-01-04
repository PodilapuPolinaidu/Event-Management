import CategoryPageLayout from "@/components/CategoryPageLayout";
import corporateEvent from "@/assets/corporate-event.jpg";

const CorporateEvents = () => {
  const eventDetails = {
    title: "💼✨ Professional Corporate Events - Excellence in Business Gatherings ✨📊",
    description: `Step into professional excellence with EventPro!

We bring you state-of-the-art corporate event management services packed with modern technology, expert coordination, and seamless execution for your business needs! 🚀

Get ready for events where professionalism meets perfection! 💼`,
    whatsInStore: [
      "Professional conference and meeting setups",
      "State-of-the-art AV equipment and tech support",
      "Premium catering services for business events",
      "Expert event coordinators and support staff",
      "Custom branding and marketing materials",
      "Recording and live streaming services"
    ],
    tip: "Check out the Gallery section to view our corporate event setups and venue options.",
    startDate: "Available Year Round",
    startTime: "Flexible",
    venue: "Corporate Venues",
    location: "Multiple Business Locations",
    address: "Contact us for venue details and availability",
    organizer: "EventPro Corporate",
    organizerLocation: "EventPro, Corporate Event Services"
  };

  const termsAndConditions = [
    {
      title: "Booking and Payment:",
      items: [
        "Corporate bookings require a signed agreement and deposit.",
        "Payment terms: 50% deposit, 50% 7 days before event.",
        "Corporate rates available for bulk bookings."
      ]
    },
    {
      title: "Cancellation Policy:",
      items: [
        "Cancellations made 30+ days before: Full refund minus 10% processing fee.",
        "Cancellations made 14-30 days before: 50% refund.",
        "Cancellations made less than 14 days before: No refund."
      ]
    },
    {
      title: "Equipment and Services:",
      items: [
        "All AV equipment is included in the package.",
        "Additional equipment can be rented at extra cost.",
        "Technical support is available throughout the event."
      ]
    },
    {
      title: "Catering:",
      items: [
        "Final guest count must be confirmed 3 days before the event.",
        "Dietary restrictions must be communicated 7 days in advance.",
        "Menu changes may incur additional charges."
      ]
    }
  ];

  const artists = [
    {
      name: "Corporate Event Team",
      bio: "Our professional event management team specializes in corporate gatherings, conferences, and business events.",
      genre: "Corporate Events",
      image: corporateEvent
    }
  ];

  const gallery = [
    corporateEvent,
    corporateEvent,
    corporateEvent,
    corporateEvent,
    corporateEvent,
    corporateEvent,
    corporateEvent,
    corporateEvent
  ];

  const otherEvents = [
    {
      name: "Annual Business Conference 2026",
      location: "Convention Center, Multiple Cities",
      date: "Available Year Round",
      price: "₹5,000",
      image: corporateEvent,
      link: "/category/corporate-events"
    },
    {
      name: "Executive Summit",
      location: "Premium Business Venues",
      date: "Available Year Round",
      price: "₹10,000",
      image: corporateEvent,
      link: "/category/corporate-events"
    }
  ];

  const pricing = {
    amount: "2500"
  };

  return (
    <CategoryPageLayout
      categoryName="Corporate Events"
      categoryDescription="Professional event management for conferences, seminars, and business meetings"
      heroImage={corporateEvent}
      eventDetails={eventDetails}
      termsAndConditions={termsAndConditions}
      artists={artists}
      gallery={gallery}
      otherEvents={otherEvents}
      pricing={pricing}
    />
  );
};

export default CorporateEvents;
