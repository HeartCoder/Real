
import { getNewPriceDetails } from '@/lib/priceUtils';

const baseDestinations = [
  {
    id: "cherrapunji",
    name: "Cherrapunji (Sohra)",
    tagline: "The Land of Living Root Bridges and Waterfalls",
    description: "Cherrapunji, locally known as Sohra, is famed for its double-decker living root bridges, breathtaking waterfalls like Nohkalikai and Seven Sisters Falls, and mysterious caves such as Mawsmai Cave. It's a paradise for nature lovers and adventure seekers. Inclusions: Hotel, Sightseeing, Transfers. Customizable.",
    duration: "3 Days / 2 Nights",
    bestTime: "October to May",
    images: [
      { id: 1, url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/0f07c0bc-e59f-42de-aec6-76edee202496/d4a4a3828aa2214cba3aea1001eb7ed5.jpg", alt: "Double Decker Living Root Bridge in Cherrapunji", text: "The iconic Double Decker Living Root Bridge, a marvel of bio-engineering by the Khasi tribes." },
      { id: 2, url: "https://images.unsplash.com/photo-1581326002021-ba3f4abd127e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9oa2FsaWthaSUyMGZhbGxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", alt: "Nohkalikai Falls, Cherrapunji", text: "Nohkalikai Falls, one of the tallest plunge waterfalls in India, cascading down into a turquoise pool." },
      { id: 3, url: "https://images.unsplash.com/photo-1605287789001-c9866c373918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWF3c21haSUyMGNhdmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", alt: "Mawsmai Cave, Cherrapunji", text: "Exploring the illuminated Mawsmai Cave, known for its stalactites and stalagmites." },
      { id: 4, url: "https://images.unsplash.com/photo-1621675099011-ea333900e8e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2V2ZW4lMjBzaXN0ZXJzJTIwZmFsbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", alt: "Seven Sisters Falls, Cherrapunji", text: "The majestic Seven Sisters Falls, a seven-segmented waterfall plunging over limestone cliffs." },
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
    description: "Shillong, the capital of Meghalaya, is a charming hill station known for its colonial-era architecture, picturesque lakes like Ward's Lake, and vibrant culture. Don Bosco Museum offers deep insights into the local heritage. Inclusions: Hotel, Sightseeing, Transfers. Customizable.",
    duration: "3 Days / 2 Nights",
    bestTime: "Year-round",
    images: [
      { id: 1, url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/0f07c0bc-e59f-42de-aec6-76edee202496/9bf271e7da63c6c8f4200539d26d4396.jpg", alt: "I Love Shillong Sign", text: "A popular 'I Love Shillong' sign in the city center." },
      { id: 2, url: "https://images.unsplash.com/photo-1594008074989-3560390f0509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uJTIwYm9zY28lMjBtdXNldW0lMjBzaGlsbG9uZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "Don Bosco Museum, Shillong", text: "The impressive Don Bosco Centre for Indigenous Cultures, showcasing the rich heritage of North East India." },
      { id: 3, url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpbGxvbmclMjBnb2xmJTIwY291cnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", alt: "Shillong Golf Course", text: "The lush green Shillong Golf Course, one of the oldest and largest natural golf courses in Asia." },
      { id: 4, url: "https://images.unsplash.com/photo-1605763239300-d52733805167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9saWNlJTIwYmF6YXIlMjBzaGlsbG9uZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "Police Bazar, Shillong", text: "A bustling street scene from Police Bazar, the commercial hub of Shillong." },
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
    description: "Dawki is renowned for the Umngot River, whose waters are so clear they appear transparent. Boating onthe river is a surreal experience, offering views of the riverbed. It's also a border town with Bangladesh. Inclusions: Guesthouse/Campsite, Boating, Local Transfers. Customizable.",
    duration: "2 Days / 1 Night",
    bestTime: "October to March",
    images: [
      { id: 1, url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/0f07c0bc-e59f-42de-aec6-76edee202496/4bd73408677d8142fb0f79f4257cfafd.jpg", alt: "Boats on the crystal clear Umngot River, Dawki", text: "Boats appearing to float in mid-air on the transparent waters of the Umngot River." },
      { id: 2, url: "https://images.unsplash.com/photo-1620570624050-968005859398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF3a2klMjBicmlkZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", alt: "Suspension bridge over Umngot River, Dawki", text: "The suspension bridge connecting India and Bangladesh near Dawki." },
      { id: 3, url: "https://images.unsplash.com/photo-1605664042008-9f891009091e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhd2tpJTIwcml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", alt: "View of the riverbed through clear water in Dawki", text: "A mesmerizing view of the riverbed visible through the crystal clear waters." },
      { id: 4, url: "https://images.unsplash.com/photo-1619785607991-675494f80148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRhd2tpJTIwbG9jYWwlMjBsaWZlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", alt: "Local life near Dawki river", text: "Locals engaging in daily activities along the banks of the Umngot River." },
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
    description: "Mawlynnong is a picturesque village acclaimed for its cleanliness. It offers a glimpse into sustainable Khasi lifestyle, with beautiful gardens, bamboo dustbins, and a nearby living root bridge. Inclusions: Local Guide, Village Walk, Transfers (if part of a larger tour). Customizable.",
    duration: "1 Day (often combined with Dawki)",
    bestTime: "Year-round",
    images: [
      { id: 1, url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/0f07c0bc-e59f-42de-aec6-76edee202496/d63a95f696e4b875a8c1514ae90c5979.jpg", alt: "Welcome to Mawlynnong sign", text: "The welcome sign to Mawlynnong, Asia's Cleanest Village." },
      { id: 2, url: "https://images.unsplash.com/photo-1581326002021-ba3f4abd127e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vdCUyMGJyaWRnZSUyMG1hd2x5bm5vbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", alt: "Living Root Bridge near Mawlynnong", text: "A single living root bridge near Mawlynnong, showcasing Khasi ingenuity." },
      { id: 3, url: "https://images.unsplash.com/photo-1605287789001-c9866c373918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5JTIwd2FsayUyMG1hd2x5bm5vbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", alt: "Sky Walk (bamboo watchtower) in Mawlynnong", text: "The Sky Walk, a bamboo watchtower offering panoramic views of the village and Bangladesh plains." },
      { id: 4, url: "https://images.unsplash.com/photo-1581326002021-ba3f4abd127e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2hhc2klMjBob3VzZSUyMG1hd2x5bm5vbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", alt: "Traditional Khasi house in Mawlynnong", text: "A beautifully maintained traditional Khasi house with a blooming garden." },
    ],
    itinerary: {
      source: "Guwahati",
      days: [
        {
          day: 1,
          title: "Guwahati to Mawlynnong & Dawki Day Trip",
          activities: [
            "Very early morning pickup from Guwahati (around 6 AM).",
            "Drive to Mawlynnong (approx. 5-6 hours).",
            "Explore Mawlynnong village, visit the living root bridge and Sky Walk.",
            "Proceed to Dawki (approx. 1 hour from Mawlynnong).",
            "Enjoy boating on the Umngot River.",
            "Late afternoon, start your return journey to Guwahati (approx. 6-7 hours).",
            "Late evening drop-off in Guwahati."
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
    originalPriceDisplay: priceDetails.original !== priceDetails.discounted ? priceDetails.original : null
  };
});
