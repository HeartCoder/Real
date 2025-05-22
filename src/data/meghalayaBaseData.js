import { getNewPriceDetails } from '@/lib/priceUtils';

const baseDestinations = [
  {
    id: "cherrapunji",
    name: "Cherrapunji (Sohra)",
    tagline: "The Land of Living Root Bridges and Waterfalls",
    description: "Cherrapunji, locally known as Sohra, is famed for its double-decker living root bridges, breathtaking waterfalls like Nohkalikai and Seven Sisters Falls, and mysterious caves such as Mawsmai. Ideal for nature lovers and adventure seekers.",
    duration: "3 Days / 2 Nights",
    bestTime: "October to May",
    images: [
      { id: 1, url: "/images/doubledecker.jpg", alt: "Double Decker Living Root Bridge in Cherrapunji", text: "" },
      { id: 2, url: "/images/nohkolikai.jpeg", alt: "Nohkalikai Falls, Cherrapunji", text: "" },
      { id: 3, url: "/images/mawsmaicave.jpg", alt: "Mawsmai Cave, Cherrapunji", text: "" },
      { id: 4, url: "/images/sevensisters.jpeg", alt: "Seven Sisters Falls, Cherrapunji", text: "" },
    ],
    itinerary: {
      source: "Guwahati",
      days: [
        {
          day: 1,
          title: "Guwahati to Cherrapunji & Local Sightseeing",
          activities: [
            "Early morning pickup from Guwahati and drive to Cherrapunji (approx. 5-6 hours).",
            "En route, visit Umiam Lake (Barapani) for a scenic view.",
            "Check into your hotel in Cherrapunji.",
            "After lunch, visit Mawsmai Cave and Seven Sisters Falls.",
            "Evening at leisure. Overnight stay in Cherrapunji."
          ]
        },
        {
          day: 2,
          title: "Living Root Bridges & Nohkalikai Falls",
          activities: [
            "After breakfast, trek to the Double Decker Living Root Bridge in Nongriat village (requires moderate fitness, approx. 3-4 hours round trip).",
            "Explore the unique bio-engineered bridges and natural pools.",
            "Later, visit Nohkalikai Falls and Eco Park.",
            "Optional: Visit Dainthlen Falls and Wei Sawdong Falls if time permits.",
            "Overnight stay in Cherrapunji."
          ]
        },
        {
          day: 3,
          title: "Return to Guwahati",
          activities: [
            "After breakfast, check out from the hotel.",
            "Drive back to Guwahati.",
            "Optional: Visit Shillong Peak and Elephant Falls on the way if not covered earlier.",
            "Drop-off at Guwahati airport/railway station for your onward journey."
          ]
        }
      ]
    }
  },
  {
    id: "shillong",
    name: "Shillong",
    tagline: "Scotland of the East",
    description: "Shillong, the capital of Meghalaya, is a charming hill station known for its colonial-era architecture, picturesque lakes like Ward's Lake, and vibrant culture. Don Bosco Museum and Shillong Peak are must-see attractions.",
    duration: "3 Days / 2 Nights",
    bestTime: "Year-round",
    images: [
      { id: 1, url: "/images/iloveshillong.jpg", alt: "I Love Shillong Sign", text: "" },
      { id: 2, url: "/images/donboscoshillong.jpeg", alt: "Don Bosco Museum, Shillong", text: "" },
      { id: 3, url: "/images/golfshillong.jpeg", alt: "Shillong Golf Course", text: "" },
      { id: 4, url: "/images/Shillong.jpeg", text: "" },
    ],
    itinerary: {
      source: "Guwahati",
      days: [
        {
          day: 1,
          title: "Guwahati to Shillong & Local Sightseeing",
          activities: [
            "Pickup from Guwahati and drive to Shillong (approx. 3-4 hours).",
            "Visit Umiam Lake (Barapani) for boating and scenic views.",
            "Check into your hotel in Shillong.",
            "Afternoon, visit Ward's Lake and Lady Hydari Park.",
            "Evening stroll at Police Bazar. Overnight stay in Shillong."
          ]
        },
        {
          day: 2,
          title: "Shillong Exploration",
          activities: [
            "After breakfast, visit Don Bosco Museum.",
            "Explore Shillong Peak for panoramic views of the city.",
            "Visit Elephant Falls, a three-tiered waterfall.",
            "Optional: Visit the Shillong Golf Course and the Cathedral of Mary Help of Christians.",
            "Overnight stay in Shillong."
          ]
        },
        {
          day: 3,
          title: "Day Trip to Mawlynnong & Dawki (Optional) or Return",
          activities: [
            "Option 1: Full day excursion to Mawlynnong (Asia's cleanest village) and Dawki (Umngot River).",
            "Option 2: After breakfast, check out and drive back to Guwahati for your onward journey."
          ]
        }
      ]
    }
  },
  {
    id: "dawki",
    name: "Dawki",
    tagline: "The Crystal Clear River Town",
    description: "Dawki is renowned for the Umngot River, whose waters are so clear they appear transparent. Boating on the river is a surreal experience, offering views of the riverbed. It's also a gateway to Bangladesh and offers adventure sports.",
    duration: "2 Days / 1 Night",
    bestTime: "October to March",
    images: [
      { id: 1, url: "/images/dawkiriver.jpeg", alt: "Boats on the crystal clear Umngot River, Dawki", text: "" },
      { id: 2, url: "/images/dawki3.jpeg", alt: "Suspension bridge over Umngot River, Dawki", text: "" },
      { id: 3, url: "/images/dawki.jpeg", alt: "View of the riverbed through clear water in Dawki", text: "" },
      { id: 4, url: "/images/dawki2.jpeg", alt: "Local life near Dawki river", text: "" },
    ],
    itinerary: {
      source: "Guwahati",
      days: [
        {
          day: 1,
          title: "Guwahati to Dawki via Shillong",
          activities: [
            "Early morning pickup from Guwahati, drive to Dawki (approx. 6-7 hours).",
            "En route, brief stop at Shillong if desired.",
            "Check into your guesthouse/campsite near Dawki/Shnongpdeng.",
            "Afternoon, enjoy boating on the Umngot River.",
            "Visit the India-Bangladesh border. Overnight stay."
          ]
        },
        {
          day: 2,
          title: "Dawki Activities & Return to Guwahati",
          activities: [
            "Morning, explore Shnongpdeng village, try activities like kayaking, snorkeling (seasonal).",
            "Visit the nearby Krang Suri Falls (optional, requires a short trek).",
            "After lunch, drive back to Guwahati.",
            "Drop-off at Guwahati airport/railway station."
          ]
        }
      ]
    }
  },
  {
    id: "mawlynnong",
    name: "Mawlynnong",
    tagline: "Asia's Cleanest Village",
    description: "Mawlynnong is a picturesque village acclaimed for its cleanliness. It offers a glimpse into sustainable Khasi lifestyle, with beautiful gardens, bamboo dustbins, and a nearby living root bridge and Sky Walk.",
    duration: "2 Days/ 1 Night",
    bestTime: "Year-round",
    images: [
      { id: 1, url: "/images/welcomemaw.jpeg", alt: "Welcome to Mawlynnong sign", text: "" },
      { id: 2, url: "/images/livingrootbridge.jpg", alt: "Living Root Bridge near Mawlynnong", text: "" },
      { id: 3, url: "/images/scenemaw.jpeg", alt: "Sky Walk (bamboo watchtower) in Mawlynnong", text: "" },
      { id: 4, url: "/images/khasimaw.jpeg", alt: "Traditional Khasi house in Mawlynnong", text: "" },
    ],
    itinerary: {
      source: "Guwahati",
      days: [
        {
          day: 1,
          title: "Guwahati to Mawlynnong",
          activities: [
            "Morning pickup from Guwahati (around 6 AM).",
            "Drive to Mawlynnong (approx. 5-6 hours).",
            "Explore Mawlynnong village, visit the living root bridge and Sky Walk.",
            "Overnight stay in Mawlynnong or nearby guesthouse."
          ]
        },
        {
          day: 2,
          title: "Mawlynnong to Dawki & Return",
          activities: [
            "Breakfast in Mawlynnong.",
            "Proceed to Dawki (approx. 1 hour from Mawlynnong).",
            "Enjoy boating on the Umngot River.",
            "Optional: Visit Shnongpdeng or nearby attractions.",
            "After lunch, drive back to Guwahati (approx. 6-7 hours).",
            "Evening drop-off in Guwahati."
          ]
        }
      ]
    }
  }
];

export const meghalayaBaseDestinations = baseDestinations.map(dest => {
  const priceDetails = getNewPriceDetails(dest.duration, dest.id, dest.priceData);
  return {
    ...dest,
    priceDisplay: priceDetails.discounted,
    originalPriceDisplay: priceDetails.original
  };
});