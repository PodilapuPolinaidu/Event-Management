import CategoryPageLayout from "@/components/CategoryPageLayout";
import partyEvent from "@/assets/party-event.jpg";

const PrivateParties = () => {
  const eventDetails = {
    title: "🎉✨ Private Party Celebrations - Unforgettable Moments ✨🎊",
    description: `Step into celebration mode with EventPro!

We bring you comprehensive private party management services packed with custom themes, personalized touches, and unforgettable memories for your special occasions! 🎈

Get ready for parties where every detail is perfect! ✨`,
    whatsInStore: [
      "Custom party themes tailored to your celebration",
      "Professional DJ and entertainment services",
      "Delicious party catering and bar service",
      "Stunning decorations and party setup",
      "Professional party photography",
      "Custom favors and special touches for guests"
    ],
    tip: "Check out the Gallery section to view our past party celebrations and theme options.",
    startDate: "Available Year Round",
    startTime: "Flexible",
    venue: "Custom Party Venues",
    location: "Multiple Locations Available",
    address: "Contact us for venue details and availability",
    organizer: "EventPro",
    organizerLocation: "EventPro, Party Planning Services"
  };

  const termsAndConditions = [
    {
      title: "Booking and Payment:",
      items: [
        "A deposit is required to secure your party date.",
        "Full payment must be completed 14 days before the event.",
        "Final guest count must be confirmed 7 days in advance."
      ]
    },
    {
      title: "Cancellation Policy:",
      items: [
        "Cancellations made 30+ days before: 50% refund of deposit.",
        "Cancellations made 14-30 days before: 25% refund of deposit.",
        "Cancellations made less than 14 days before: No refund."
      ]
    },
    {
      title: "Customization:",
      items: [
        "Theme customization must be finalized 21 days before the event.",
        "Menu changes must be confirmed 14 days before the event.",
        "Additional charges may apply for last-minute changes."
      ]
    },
    {
      title: "Entertainment:",
      items: [
        "DJ and entertainment services are included in the package.",
        "Additional entertainment can be arranged at extra cost.",
        "Sound levels must comply with venue regulations."
      ]
    }
  ];

  const artists = [
    {
      name: "Party Planning Team",
      bio: "Our experienced party planners ensure every celebration is memorable and fun.",
      genre: "Party Planning",
      image: partyEvent
    }
  ];

  const gallery = [
    partyEvent,
    partyEvent,
    partyEvent,
    partyEvent,
    partyEvent,
    partyEvent,
    partyEvent,
    partyEvent
  ];

  const otherEvents = [
    {
      name: "Birthday Celebration Party",
      location: "Custom Venues, Multiple Locations",
      date: "Available Year Round",
      price: "₹2,000",
      image: partyEvent,
      link: "/category/private-parties"
    },
    {
      name: "Anniversary Celebration",
      location: "Premium Party Venues",
      date: "Available Year Round",
      price: "₹5,000",
      image: partyEvent,
      link: "/category/private-parties"
    }
  ];

  const pricing = {
    amount: "2000"
  };

  return (
    <CategoryPageLayout
      categoryName="Private Parties"
      categoryDescription="Unforgettable private celebrations crafted with attention to detail and personalized service"
      heroImage={partyEvent}
      eventDetails={eventDetails}
      termsAndConditions={termsAndConditions}
      artists={artists}
      gallery={gallery}
      otherEvents={otherEvents}
      pricing={pricing}
    />
  );
};

export default PrivateParties;
