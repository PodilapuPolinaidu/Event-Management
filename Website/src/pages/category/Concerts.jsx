import CategoryPageLayout from "@/components/CategoryPageLayout";
import concertEvent from "@/assets/concert-event.jpg";

const Concerts = () => {
  const eventDetails = {
    title: "🎉✨ Music Concert Events - Professional Sound & Production ✨🎶",
    description: `Step into the world of electrifying music events with EventPro!

TOCA Brigade brings you nights packed with unstoppable music, premium vibes, and unforgettable memories as top DJs and artists light up the stage! 🔥

Get ready for nights where the beats never drop and the energy never slows down! 💫`,
    whatsInStore: [
      "Electrifying DJ sets and live performances",
      "Premium sound systems and professional audio engineering",
      "A dance floor buzzing with pure energy",
      "Stunning lighting and visual effects",
      "Capture-worthy moments all around",
      "Professional stage setup and production"
    ],
    tip: "Check out the Gallery section to view venue photos and past event highlights.",
    startDate: "31st December",
    startTime: "8:00 PM",
    endDate: "1st January 2026",
    endTime: "12:30 AM",
    venue: "TOCA Brigade",
    location: "Ashok Nagar, Bengaluru",
    address: "TOCA Brigade and Terrace, Brigade Road, above Levi's showroom, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka, India",
    organizer: "TOCA",
    organizerLocation: "TOCA, Bengaluru"
  };

  const termsAndConditions = [
    {
      title: "Ticket Purchase and Entry:",
      items: [
        "All attendees must purchase a valid entry ticket.",
        "Tickets are non-transferable and non-refundable.",
        "Entry will be permitted only to individuals with a valid government-issued ID matching the name on the ticket."
      ]
    },
    {
      title: "Age Restriction:",
      items: [
        "This event is open to individuals aged 21 and above.",
        "Valid ID must be presented at the entry."
      ]
    },
    {
      title: "Event Timings:",
      items: [
        "The event will begin at 8:00 PM and conclude at 12:30 AM.",
        "Late entry may be subject to availability."
      ]
    },
    {
      title: "Alcohol Policy:",
      items: [
        "Only individuals aged 21 and above with a valid ID will be served alcohol.",
        "Management reserves the right to refuse service to anyone visibly intoxicated."
      ]
    },
    {
      title: "Security and Bag Check:",
      items: [
        "All attendees are subject to security checks upon entry.",
        "Large bags, backpacks, or prohibited items may not be allowed inside the venue."
      ]
    },
    {
      title: "Behavior and Conduct:",
      items: [
        "Attendees are expected to behave responsibly and respectfully towards fellow attendees, staff, and the venue property.",
        "Any disruptive behaviour may result in eviction from the event without a refund."
      ]
    },
    {
      title: "Photography and Videography:",
      items: [
        "Attendees may capture personal moments during the event.",
        "Professional photography and videography are prohibited without prior authorization from the management."
      ]
    },
    {
      title: "Lost or Stolen Items:",
      items: [
        "The management is not responsible for lost, stolen, or damaged personal belongings."
      ]
    },
    {
      title: "Force Majeure:",
      items: [
        "The organizer reserves the right to alter or cancel the event due to unforeseen circumstances beyond their control."
      ]
    },
    {
      title: "Cancellation Policy:",
      items: [
        "No cancellations are permitted after ticket purchase.",
        "Refunds will not be processed for canceled attendance under any circumstances.",
        "Once tickets are purchased, attendees are committed to attending the event."
      ]
    }
  ];

  const artists = [
    {
      name: "DJ SAM RANA",
      bio: "Renowned DJ and music producer known for electrifying performances and mixing skills that keep the crowd moving all night long.",
      genre: "Electronic Dance Music",
      image: concertEvent
    }
  ];

  const gallery = [
    concertEvent,
    concertEvent,
    concertEvent,
    concertEvent,
    concertEvent,
    concertEvent,
    concertEvent,
    concertEvent,
    concertEvent,
    concertEvent,
    concertEvent,
    concertEvent
  ];

  const otherEvents = [
    {
      name: "New Year Bash at TOCA Terrace Ft. Boomika & DJ Firex",
      location: "TOCA Terrace, Bengaluru",
      date: "31 Dec, 8:00 PM",
      price: "₹2499",
      image: concertEvent,
      link: "/category/concerts"
    },
    {
      name: "Summer Music Festival 2026",
      location: "Convention Center, Bengaluru",
      date: "15 Jan, 6:00 PM",
      price: "₹1999",
      image: concertEvent,
      link: "/category/concerts"
    },
    {
      name: "Electronic Night with Top DJs",
      location: "Premium Club, Bengaluru",
      date: "22 Jan, 9:00 PM",
      price: "₹2999",
      image: concertEvent,
      link: "/category/concerts"
    }
  ];

  const pricing = {
    amount: "2999"
  };

  return (
    <CategoryPageLayout
      categoryName="Concerts"
      categoryDescription="Music events & entertainment shows with professional production and sound"
      heroImage={concertEvent}
      eventDetails={eventDetails}
      termsAndConditions={termsAndConditions}
      artists={artists}
      gallery={gallery}
      otherEvents={otherEvents}
      pricing={pricing}
    />
  );
};

export default Concerts;
