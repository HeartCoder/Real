
import { getNewPriceDetails } from '@/lib/priceUtils';

const basePackage = {
  id: "meghalaya-kaziranga-explorer",
  name: "Meghalaya Kaziranga Guwahati Explorer",
  tagline: "Clouds, Culture, Caves & Wildlife Expedition",
  description: "Embark on an epic 7-day adventure starting from Guwahati. Witness Shillong's colonial charm and Umiam Lake's serenity. Delve into Cherrapunji's misty landscapes, marvel at Elephant Falls, living root bridges, and stunning waterfalls. Experience the thrill of a Kaziranga National Park safari, spotting rhinos and diverse wildlife. This package offers a perfect blend of Meghalaya's natural wonders and Assam's wild heart. Inclusions: Hotel, Breakfast, Sightseeing, Kaziranga Safari, All Transfers. Customizable.",
  duration: "7 Days / 6 Nights",
  bestTime: "October to April",
  priceData: {
    originalPrice: 32000, 
  },
  images: [
    { id: 1, url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/0f07c0bc-e59f-42de-aec6-76edee202496/9bf271e7da63c6c8f4200539d26d4396.jpg", alt: "Shillong City View", text: "Panoramic view of Shillong city." },
    { id: 2, url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/0f07c0bc-e59f-42de-aec6-76edee202496/d4a4a3828aa2214cba3aea1001eb7ed5.jpg", alt: "Double Decker Living Root Bridge, Cherrapunji", text: "Iconic Double Decker Living Root Bridge in Cherrapunji." },
    { id: 3, url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/0f07c0bc-e59f-42de-aec6-76edee202496/c507eeac7beace3abaa4c7767275caf7.jpg", alt: "One-horned Rhinoceros in Kaziranga National Park", text: "Majestic One-horned Rhinoceros in Kaziranga." },
    { id: 4, url: "https://images.unsplash.com/photo-1605763239300-d52733805167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9saWNlJTIwYmF6YXIlMjBzaGlsbG9uZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "Umiam Lake (Barapani)", text: "Serene Umiam Lake near Shillong." },
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
  originalPriceDisplay: priceDetails.original !== priceDetails.discounted ? priceDetails.original : null
};
