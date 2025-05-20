
import { getNewPriceDetails } from '@/lib/priceUtils';

const baseArunachalDestinations = [
  {
    id: "tawang",
    name: "Tawang",
    tagline: "The Land of Monasteries and Majestic Mountains",
    description: "Tawang is famous for the Tawang Monastery, the largest in India and second largest in the world. It offers stunning views of snow-capped peaks, high-altitude lakes like Sela Pass and Madhuri Lake, and significant historical sites. Inclusions: Hotel, Sightseeing, Transfers. Customizable.",
    duration: "6 Days / 5 Nights",
    bestTime: "September to October, March to June",
    images: [
      { id: 1, url: "/images/Tawang.jpeg", alt: "Tawang Monastery overlooking the valley", text: "" },
      { id: 2, url: "/images/selapass.jpeg", alt: "Sela Pass ", text: "" },
      { id: 3, url: "/images/warmemorial.jpeg", alt: "Tawang War Memorial", text: "The Tawang War Memorial, commemorating the soldiers of the 1962 Sino-Indian War." },
    ],
    itinerary: {
      source: "Guwahati/Tezpur",
      days: [
        {
          day: 1,
          title: "Guwahati/Tezpur to Dirang",
          activities: [
            "From Guwahati, drive to Dirang (approx. 10-12 hours) or from Tezpur (approx. 5-6 hours).",
            "Check into your hotel in Dirang.",
            "Visit Dirang Dzong and the hot water springs if time permits.",
            "Overnight stay in Dirang."
          ]
        },
        {
          day: 2,
          title: "Dirang to Tawang via Sela Pass",
          activities: [
            "After breakfast, drive to Tawang (approx. 6-7 hours).",
            "Cross Sela Pass (13,700 ft), visit Sela Lake and Jaswant Garh War Memorial.",
            "Check into your hotel in Tawang. Overnight stay."
          ]
        },
        {
          day: 3,
          title: "Tawang Local Sightseeing",
          activities: [
            "Visit Tawang Monastery, Urgelling Gompa (birthplace of the 6th Dalai Lama), and Ani Gompa (Nunnery).",
            "Explore the Tawang War Memorial and Craft Centre.",
            "Evening at leisure. Overnight stay in Tawang."
          ]
        },
        {
          day: 4,
          title: "Excursion to Bum La Pass & Madhuri Lake (Optional)",
          activities: [
            "Full day excursion to Bum La Pass (Indo-China border, requires special permit) and Shonga-tser Lake (Madhuri Lake).",
            "This trip is subject to weather conditions and permit availability.",
            "Alternatively, explore more local sights or relax.",
            "Overnight stay in Tawang."
          ]
        },
        {
          day: 5,
          title: "Tawang to Bomdila",
          activities: [
            "After breakfast, drive to Bomdila (approx. 7-8 hours).",
            "Check into your hotel in Bomdila.",
            "Visit Bomdila Monastery. Evening at leisure.",
            "Overnight stay in Bomdila."
          ]
        },
        {
          day: 6,
          title: "Bomdila to Guwahati/Tezpur",
          activities: [
            "After breakfast, drive back to Guwahati (approx. 8-9 hours) or Tezpur (approx. 3-4 hours).",
            "Drop-off at airport/railway station for onward journey."
          ]
        }
      ]
    }
  },
  {
    id: "ziro-valley",
    name: "Ziro Valley",
    tagline: "Home of the Apatani Tribe & Lush Paddy Fields",
    description: "Ziro Valley, a UNESCO World Heritage tentative site, is known for its stunning landscapes of rice paddy fields and the unique culture of the Apatani tribe. It hosts the famous Ziro Music Festival. Inclusions: Hotel, Sightseeing, Transfers. Customizable.",
    duration: "4 Days / 3 Nights",
    bestTime: "March to October (Music festival in September)",
    images: [
      { id: 1, url: "/images/ziro.jpeg", alt: "Paddy fields in Ziro Valley with Apatani village", text: "Expansive green paddy fields with traditional Apatani villages in the background." },
    ],
    itinerary: {
      source: "Guwahati (to North Lakhimpur/Naharlagun)",
      days: [
        {
          day: 1,
          title: "Guwahati to Ziro Valley",
          activities: [
            "Fly from Guwahati to Lilabari (North Lakhimpur) or take a train to Naharlagun.",
            "From North Lakhimpur/Naharlagun, drive to Ziro (approx. 3-4 hours).",
            "Check into your homestay/hotel in Ziro. Evening at leisure.",
            "Overnight stay in Ziro."
          ]
        },
        {
          day: 2,
          title: "Ziro Valley Exploration",
          activities: [
            "Visit Apatani villages like Hong, Hari, and Hija.",
            "Explore the unique paddy-cum-fish cultivation system.",
            "Visit the District Museum and Craft Centre.",
            "Trek to Tarin Fish Farm or Kile Pakho ridge for panoramic views.",
            "Overnight stay in Ziro."
          ]
        },
        {
          day: 3,
          title: "Excursion to Talley Valley (Optional)",
          activities: [
            "Full day excursion to Talley Valley Wildlife Sanctuary (requires permit and guide).",
            "Enjoy trekking and nature walks in the pristine forest.",
            "Alternatively, explore more local Apatani culture and traditions.",
            "Overnight stay in Ziro."
          ]
        },
        {
          day: 4,
          title: "Ziro to Guwahati",
          activities: [
            "After breakfast, drive back to North Lakhimpur/Naharlagun.",
            "Fly/take a train back to Guwahati.",
            "Drop-off at airport/railway station."
          ]
        }
      ]
    }
  },
  {
    id: "bomdila",
    name: "Bomdila",
    tagline: "Gateway to Tawang with Scenic Views",
    description: "Bomdila is a charming town offering panoramic views of the Himalayan landscape, including the Kangto and Gorichen Peaks. It's known for its monasteries, apple orchards, and as a stopover en route to Tawang. Inclusions: Hotel, Sightseeing, Transfers. Customizable.",
    duration: "2 Days / 1 Night",
    bestTime: "September to October, March to June",
    images: [
      { id: 1, url: "/images/bomdila.jpeg", alt: "Bomdila", text:"" },
      { id: 2, url: "/images/bomdila2.jpg", alt: "Panoramic view from Bomdila viewpoint", text: "" },
    ],
    itinerary: {
      source: "Guwahati/Tezpur",
      days: [
        {
          day: 1,
          title: "Guwahati/Tezpur to Bomdila",
          activities: [
            "From Guwahati, drive to Bomdila (approx. 8-9 hours) or from Tezpur (approx. 3-4 hours).",
            "Check into your hotel in Bomdila.",
            "Visit Bomdila Monastery (Gentse Gaden Rabgyel Ling Monastery).",
            "Explore the Craft Centre and local market.",
            "Overnight stay in Bomdila."
          ]
        },
        {
          day: 2,
          title: "Bomdila Sightseeing & Onward Journey/Return",
          activities: [
            "Visit Bomdila View Point for panoramic Himalayan views.",
            "Explore apple orchards (seasonal).",
            "Visit the RR Hill (for views and a temple).",
            "Depending on your itinerary, proceed towards Tawang or return to Tezpur/Guwahati."
          ]
        }
      ]
    }
  },
  {
    id: "namdapha-national-park",
    name: "Namdapha National Park",
    tagline: "Biodiversity Hotspot with Unique Wildlife",
    description: "Namdapha National Park, a vast expanse of pristine wilderness, is one of India's largest protected areas. It's unique for harboring all four big cat species and the Hoolock Gibbon. Inclusions: Hotel/Camping, Safaris, Guide, Transfers. Customizable.",
    duration: "5 Days / 4 Nights",
    bestTime: "October to April",
    images: [
      { id: 1, url: "/images/namdhapa.jpg", alt: "Dense forest canopy in Namdapha National Park", text: "Namdapha National Park." },
    ],
    itinerary: {
      source: "Guwahati (to Dibrugarh)",
      days: [
        {
          day: 1,
          title: "Guwahati to Miao (Namdapha)",
          activities: [
            "Fly from Guwahati to Dibrugarh (nearest airport).",
            "Drive from Dibrugarh to Miao (approx. 4-5 hours), the entry point to Namdapha.",
            "Obtain necessary permits in Miao. Check into your guesthouse/lodge.",
            "Overnight stay in Miao."
          ]
        },
        {
          day: 2,
          title: "Miao to Deban (Inside Namdapha)",
          activities: [
            "After breakfast, drive from Miao to Deban (approx. 1-2 hours), located inside the park.",
            "Check into the Forest Rest House or campsite in Deban.",
            "Short nature walk around Deban. Birdwatching opportunities.",
            "Overnight stay in Deban."
          ]
        },
        {
          day: 3,
          title: "Trekking and Exploration in Namdapha",
          activities: [
            "Full day of trekking and exploration in Namdapha (e.g., towards Hornbill Camp, Haldibari, or other designated trails).",
            "Wildlife spotting and birdwatching with a local guide.",
            "Packed lunch will be provided for full-day treks.",
            "Return to Deban in the evening. Overnight stay."
          ]
        },
        {
          day: 4,
          title: "Further Exploration / Return to Miao",
          activities: [
            "Morning, another short trek or birdwatching session near Deban.",
            "After lunch, drive back to Miao.",
            "Optional: Visit the local market in Miao.",
            "Overnight stay in Miao."
          ]
        },
        {
          day: 5,
          title: "Miao to Dibrugarh/Guwahati",
          activities: [
            "After breakfast, drive from Miao to Dibrugarh airport.",
            "Fly back to Guwahati or your next destination."
          ]
        }
      ]
    }
  }
];

export const arunachalDestinations = baseArunachalDestinations.map(dest => {
  const priceDetails = getNewPriceDetails(dest.duration, dest.id, dest.priceData);
  return {
    ...dest,
    priceDisplay: priceDetails.discounted,
    originalPriceDisplay: priceDetails.original !== priceDetails.discounted ? priceDetails.original : null
  };
});
