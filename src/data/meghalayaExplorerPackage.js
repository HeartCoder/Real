import { getNewPriceDetails } from '@/lib/priceUtils';

const basePackage = {
  id: "meghalaya-kaziranga-explorer",
  name: "Meghalaya Kaziranga Guwahati Explorer",
  tagline: "Clouds, Culture, Caves & Wildlife Expedition",
  description: "Embark on an epic 7-day adventure starting from Guwahati. Witness Shillong's colonial charm and Umiam Lake's serenity. Delve into Cherrapunji's misty landscapes, marvel at Elephant Falls, and explore mysterious caves. Continue to Kaziranga for thrilling safaris to see rhinos and rich wildlife. End with a spiritual visit to Kamakhya Temple in Guwahati.",
  duration: "7 Days / 6 Nights",
  bestTime: "October to April",
  priceData: {
    originalPrice: 32000, 
  },
  images: [
    { id: 1, url: "/images/Shillong.jpeg", alt: "Shillong City View", text: "" },
    { id: 2, url: "/images/doubledecker.jpg", alt: "Double Decker Living Root Bridge, Cherrapunji", text: "" },
    { id: 3, url: "/images/kaziranga.jpg", alt: "One-horned Rhinoceros in Kaziranga National Park", text: "" },
    { id: 4, url: "/images/umiamlake.jpg", alt: "Umiam Lake (Barapani)", text: "" },
  ],
  itinerary: {
    source: "Guwahati",
    days: [
      {
        day: 1,
        title: "Guwahati to Shillong – A Journey Through the Clouds",
        activities: [
          "Begin from Guwahati and travel to Shillong. En route, stop at Umiam Lake (Barapani) for scenic views.",
          "Visit the Don Bosco Museum for a cultural experience.",
          "Reach Shillong by evening—“Scotland of the East.” Check into hotel. Overnight in Shillong."
        ]
      },
      {
        day: 2,
        title: "Shillong to Cherrapunji – Into the Heart of the Rainclouds",
        activities: [
          "Drive through misty hills and lush waterfalls. Visit Elephant Falls and other scenic viewpoints.",
          "Arrive at Cherrapunji, famous as the wettest place on Earth, experiencing its unique interplay of rain, sun, and landscape.",
          "Check into hotel. Overnight in Cherrapunji."
        ]
      },
      {
        day: 3,
        title: "Cherrapunji Exploration - Waterfalls & Caves",
        activities: [
          "Visit Nohkalikai Falls, Seven Sisters Falls, and Mawsmai Cave.",
          "Optional: Trek to the Double Decker Living Root Bridge (requires fitness).",
          "Explore Eco Park. Overnight in Cherrapunji."
        ]
      },
      {
        day: 4,
        title: "Cherrapunji to Kaziranga National Park",
        activities: [
          "After breakfast, drive to Kaziranga National Park (approx. 7-8 hours).",
          "The journey offers glimpses of Assam's countryside and tea gardens.",
          "Check into your wildlife resort upon arrival. Evening free for leisure.",
          "Overnight in Kaziranga."
        ]
      },
      {
        day: 5,
        title: "Kaziranga National Park - Wildlife Safari",
        activities: [
          "Early morning, embark on an exciting Elephant Safari (subject to availability) for close encounters with rhinos and other wildlife.",
          "After breakfast, visit the Kaziranga Orchid and Biodiversity Park.",
          "Afternoon, enjoy a thrilling Jeep Safari in one of the park's ranges (Central/Western/Eastern).",
          "Overnight in Kaziranga."
        ]
      },
      {
        day: 6,
        title: "Kaziranga to Guwahati",
        activities: [
          "After breakfast, you can opt for another Jeep Safari in a different range (optional, extra cost).",
          "Later, drive back to Guwahati (approx. 4-5 hours).",
          "Check into your hotel in Guwahati. Evening free for shopping or exploring the local market.",
          "Overnight in Guwahati."
        ]
      },
      {
        day: 7,
        title: "Guwahati Departure",
        activities: [
          "After breakfast, visit the Kamakhya Temple (optional, if time permits).",
          "Transfer to Guwahati Airport/Railway Station for your onward journey.",
          "Tour ends with cherished memories of Meghalaya and Assam."
        ]
      }
    ]
  }
};

const priceDetails = getNewPriceDetails(basePackage.duration, basePackage.id, basePackage.priceData);

export const meghalayaKazirangaExplorerPackage = {
  ...basePackage,
  priceDisplay: priceDetails.discounted,
  originalPriceDisplay: priceDetails.original
};