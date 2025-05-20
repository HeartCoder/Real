
import { getNewPriceDetails } from '@/lib/priceUtils';

const baseAssamDestinations = [
  {
    id: "kaziranga-national-park",
    name: "Kaziranga National Park",
    tagline: "Home of the One-Horned Rhinoceros",
    description: "A UNESCO World Heritage Site, Kaziranga is famous for its population of the Indian one-horned rhinoceros. It also harbors tigers, elephants, wild water buffalo, and diverse birdlife. Jeep and elephant safaris offer thrilling wildlife encounters. Inclusions: Hotel/Resort, Transfers. Customizable.",
    duration: "3 Days / 2 Nights",
    bestTime: "November to April (Park closed during monsoon)",
    images: [
      { id: 1, url: "/images/kaziranga.jpg", alt: "One-horned rhinoceros in Kaziranga National Park", text: "" },
      { id: 2, url: "/images/kaziranga2.jpeg", alt: "Jeep safari in Kaziranga", text: "" },
    ],
    itinerary: {
      source: "Guwahati",
      days: [
        {
          day: 1,
          title: "Guwahati to Kaziranga National Park",
          activities: [
            "Pickup from Guwahati and drive to Kaziranga (approx. 4-5 hours).",
            "Check into your resort/lodge near the park.",
            "Afternoon, enjoy a jeep safari in one of the park's ranges (e.g., Western or Central Range).",
            "Evening, enjoy a cultural show (if available). Overnight stay."
          ]
        },
        {
          day: 2,
          title: "Kaziranga Wildlife Safaris",
          activities: [
            "Early morning, experience an elephant safari for close wildlife viewing (subject to availability).",
            "After breakfast, visit the Kaziranga Orchid and Biodiversity Park.",
            "Afternoon, take another jeep safari in a different range (e.g., Eastern Range, known for birdlife).",
            "Overnight stay in Kaziranga."
          ]
        },
        {
          day: 3,
          title: "Return to Guwahati",
          activities: [
            "Optional: Morning visit to a nearby tea garden.",
            "After breakfast, check out and drive back to Guwahati.",
            "Drop-off at Guwahati airport/railway station."
          ]
        }
      ]
    }
  },
  {
    id: "majuli-island",
    name: "Majuli Island",
    tagline: "World's Largest River Island & Cradle of Vaishnavite Culture",
    description: "Majuli, nestled in the Brahmaputra River, is the world's largest river island and a center of Assamese Vaishnavite culture. It's known for its Satras (monasteries), mask-making traditions, and serene rural landscapes. Inclusions: Homestay/Guesthouse, Ferry, Local Transport. Customizable.",
    duration: "3 Days / 2 Nights",
    bestTime: "October to March",
    images: [
      { id: 1, url: "/images/Majuli.jpeg", alt: "View of Majuli Island river bank", text: "" },
      { id: 2, url: "/images/Majuli2.jpg", alt: "Traditional Satra (monastery) in Majuli", text: "" },
    ],
    itinerary: {
      source: "Guwahati (to Jorhat)",
      days: [
        {
          day: 1,
          title: "Guwahati to Majuli Island",
          activities: [
            "Fly or take a train/bus from Guwahati to Jorhat (approx. 6-7 hours by road).",
            "From Jorhat, drive to Nimati Ghat (approx. 1 hour).",
            "Take a ferry from Nimati Ghat to Kamalabari Ghat in Majuli (approx. 1-1.5 hours).",
            "Transfer to your guesthouse/homestay in Majuli. Overnight stay."
          ]
        },
        {
          day: 2,
          title: "Majuli Exploration & Return Journey Start",
          activities: [
            "After breakfast, visit prominent Satras like Kamalabari Satra, Auniati Satra, and Samaguri Satra (famous for mask-making).",
            "Explore Mishing tribal villages and interact with locals.",
            "Witness traditional weaving and pottery (if available).",
            "Afternoon, take the ferry back to Nimati Ghat and proceed to Jorhat.",
            "Overnight stay in Jorhat or start return journey to Guwahati."
          ]
        },
        {
          day: 3,
          title: "Jorhat to Guwahati",
          activities: [
            "After breakfast, drive/fly/take train from Jorhat back to Guwahati.",
            "Drop-off at Guwahati airport/railway station."
          ]
        }
      ]
    }
  },
  {
    id: "guwahati",
    name: "Guwahati",
    tagline: "Gateway to North East India",
    description: "Guwahati, the largest city in Assam, serves as the primary gateway to the North East. It's home to the sacred Kamakhya Temple, offers Brahmaputra river cruises, and has several museums and cultural centers. Inclusions: Sightseeing, Transfers (local). Customizable.",
    duration: "1 Day / 0 Night",
    bestTime: "Year-round (October to March is pleasant)",
    images: [
      { id: 1, url: "/images/kamakhyatemple.jpg", alt: "Kamakhya Temple, Guwahati", text: "" },
      { id: 2, url: "/images/OurStory.jpg", alt: "Balaji Temple", text:"" },
      { id: 3, url: "/images/ropeway.jpeg", alt: "Rope way", text: "" },
    ],
    itinerary: {
      source: "Guwahati (Local)",
      days: [
        {
          title: "Guwahati Sightseeing Itinerary",
          activities: [
            "Kamakhya Temple: Start with one of the most iconic temples in India, located atop Nilachal Hill. Ideal for spiritual seekers and scenic views.",
            "Bhimashankar Dham Jyotirlinga Temple: A jyotirlinga shrine located outside the main city; offers peace and spiritual significance.",
            "Basistha Temple: Surrounded by hills and streams, this temple is associated with sage Basistha and is a calm spot for meditation.",
            "Balaji Temple: A clean and well-maintained temple built in South Indian architectural style.",
            "Rope Way from Fancy Bazaar ghat to North Guwahati.",
            "Guwahati Zoo (Assam State Zoo and Botanical Garden): Great place to explore Assam's biodiversity and enjoy nature.",
            "Guwahati Science Museum: Interactive displays and fun for kids and adults alike, good for an educational break.",
            "Guwahati Planetarium: Offers a short astronomy show and exhibits on space and planets.",
            "Dighalipukhuri: A peaceful lake ideal for relaxing, boating, and enjoying snacks.",
            "Srimanta Sankardev Kalakshetra: Cultural complex showcasing Assamese art, heritage, and traditional architecture.",
            "Bogola (Bogaleswar) Temple: A lesser-known but revered temple offering a serene experience.",
            "Cruise on Brahmaputra River: Enjoy a scenic ride on the mighty river, with options for sunset cruises or dinner cruises."
          ]
        }
      ]
    }
  },
  {
    id: "sivasagar",
    name: "Sivasagar",
    tagline: "Historical Capital of the Ahom Kingdom",
    description: "Sivasagar (or Sibsagar) was the capital of the Ahom Kingdom for centuries. It's dotted with historical monuments like Rang Ghar (an amphitheater), Talatal Ghar (a palace with underground tunnels), and large man-made tanks (sagar) like Joysagar. Inclusions: Hotel, Sightseeing, Transfers. Customizable.",
    duration: "2 Days / 1 Night",
    bestTime: "October to March",
    images: [
      { id: 1, url: "/images/karengghar.jpeg", alt: "Kareng Ghar, Sivasagar", text: "" },
      { id: 2, url: "/images/Sivasagar.jpeg", alt: "Ahom Monument, Sivasagar", text: "" },
    ],
    itinerary: {
      source: "Guwahati (to Sivasagar/Jorhat)",
      days: [
        {
          day: 1,
          title: "Guwahati to Sivasagar",
          activities: [
            "Fly or take a train/bus from Guwahati to Jorhat or Sivasagar Town.",
            "If arriving in Jorhat, drive to Sivasagar (approx. 1.5-2 hours).",
            "Check into your hotel in Sivasagar.",
            "Afternoon, visit Rang Ghar and Talatal Ghar.",
            "Overnight stay in Sivasagar."
          ]
        },
        {
          day: 2,
          title: "Sivasagar Sightseeing & Return",
          activities: [
            "After breakfast, visit Sivadol, Vishnudol, and Devidol on the banks of Sivasagar Tank.",
            "Explore Joysagar Tank and the temples around it.",
            "Visit Kareng Ghar (Gargaon Palace) if time permits.",
            "Afternoon, start your return journey to Jorhat/Guwahati.",
          ]
        }
      ]
    }
  }
];

export const assamDestinations = baseAssamDestinations.map(dest => {
  const priceDetails = getNewPriceDetails(dest.duration, dest.id, dest.priceData);
  return {
    ...dest,
    priceDisplay: priceDetails.discounted,
    originalPriceDisplay: priceDetails.original !== priceDetails.discounted ? priceDetails.original : null
  };
});
