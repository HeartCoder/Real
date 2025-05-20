
export const assamDestinations = [
  {
    id: "kaziranga-national-park",
    name: "Kaziranga National Park",
    tagline: "Home of the One-Horned Rhinoceros",
    description: "A UNESCO World Heritage Site, Kaziranga is famous for its population of the Indian one-horned rhinoceros. It also harbors tigers, elephants, wild water buffalo, and diverse birdlife. Jeep and elephant safaris offer thrilling wildlife encounters.",
    duration: "2-3 days",
    bestTime: "November to April (Park closed during monsoon)",
    images: [
      { id: 1, alt: "One-horned rhinoceros in Kaziranga National Park", text: "A majestic one-horned rhinoceros grazing in the grasslands of Kaziranga." },
      { id: 2, alt: "Elephant safari in Kaziranga", text: "Tourists enjoying an elephant safari for close encounters with wildlife." },
      { id: 3, alt: "Wild water buffalo in Kaziranga", text: "A herd of wild water buffalo in their natural habitat within the park." },
      { id: 4, alt: "Diverse birdlife in Kaziranga", text: "Colorful migratory birds flocking to the wetlands of Kaziranga." },
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
    description: "Majuli, nestled in the Brahmaputra River, is the world's largest river island and a center of Assamese Vaishnavite culture. It's known for its Satras (monasteries), mask-making traditions, and serene rural landscapes.",
    duration: "2 days (excluding travel to Jorhat/Nimati Ghat)",
    bestTime: "October to March",
    images: [
      { id: 1, alt: "Sunset over the Brahmaputra River at Majuli Island", text: "A stunning sunset over the vast Brahmaputra River surrounding Majuli." },
      { id: 2, alt: "Traditional Satra (monastery) in Majuli", text: "A traditional Vaishnavite Satra with its unique architecture and serene atmosphere." },
      { id: 3, alt: "Mask-making artisan in Majuli", text: "An artisan crafting intricate traditional masks used in Bhaona performances." },
      { id: 4, alt: "Rural landscape with stilt houses in Majuli", text: "Typical rural scenery in Majuli with traditional stilt houses and lush greenery." },
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
    description: "Guwahati, the largest city in Assam, serves as the primary gateway to the North East. It's home to the sacred Kamakhya Temple, offers Brahmaputra river cruises, and has several museums and cultural centers.",
    duration: "1-2 days",
    bestTime: "Year-round (October to March is pleasant)",
    images: [
      { id: 1, alt: "Kamakhya Temple, Guwahati", text: "The revered Kamakhya Temple, a major Shakti Peetha, atop Nilachal Hill." },
      { id: 2, alt: "Brahmaputra River cruise in Guwahati", text: "Enjoying a scenic sunset cruise on the mighty Brahmaputra River." },
      { id: 3, alt: "Umananda Temple on Peacock Island, Guwahati", text: "The Umananda Temple, dedicated to Lord Shiva, located on Peacock Island in the Brahmaputra." },
      { id: 4, alt: "Assam State Museum, Guwahati", text: "The Assam State Museum, showcasing the rich history and culture of the region." },
    ],
    itinerary: {
      source: "Guwahati (Local)",
      days: [
        {
          day: 1,
          title: "Guwahati City Tour",
          activities: [
            "Arrive in Guwahati. Check into your hotel.",
            "Visit Kamakhya Temple (allow ample time due to queues).",
            "Explore Umananda Temple (Peacock Island) - accessible by ferry.",
            "Visit the Assam State Museum or Srimanta Sankardev Kalakshetra.",
            "Evening, enjoy a sunset cruise on the Brahmaputra River (optional).",
            "Overnight stay in Guwahati."
          ]
        },
        {
          day: 2,
          title: "Further Exploration / Departure",
          activities: [
            "Visit Basistha Ashram or Navagraha Temple (Temple of Nine Planets).",
            "Explore local markets like Fancy Bazar for shopping.",
            "Depending on your schedule, depart from Guwahati or proceed to other North East destinations."
          ]
        }
      ]
    }
  },
  {
    id: "sivasagar",
    name: "Sivasagar",
    tagline: "Historical Capital of the Ahom Kingdom",
    description: "Sivasagar (or Sibsagar) was the capital of the Ahom Kingdom for centuries. It's dotted with historical monuments like Rang Ghar (an amphitheater), Talatal Ghar (a palace with underground tunnels), and large man-made tanks (sagar) like Joysagar.",
    duration: "1-2 days",
    bestTime: "October to March",
    images: [
      { id: 1, alt: "Rang Ghar, Sivasagar", text: "The iconic Rang Ghar, an Ahom-era royal sports pavilion, often called the 'Colosseum of the East'." },
      { id: 2, alt: "Talatal Ghar, Sivasagar", text: "Talatal Ghar, an Ahom palace known for its unique architecture and secret tunnels." },
      { id: 3, alt: "Sivadol Temple on the banks of Sivasagar Tank", text: "The Sivadol Temple, one of the tallest Shiva temples in India, on the banks of the Sivasagar tank." },
      { id: 4, alt: "Joysagar Tank, Sivasagar", text: "The vast Joysagar Tank, one of the largest man-made tanks, with temples on its banks." },
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
