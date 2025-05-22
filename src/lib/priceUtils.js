// src/lib/priceUtils.js

// Utility to format a price range, e.g., "₹12,000 - ₹18,000"
export const formatPriceRange = (min, max) => {
  const roundedMin = Math.round(min);
  const roundedMax = max ? Math.round(max) : null;
  if (roundedMax && roundedMin !== roundedMax) {
    return `₹${roundedMin.toLocaleString()} - ₹${roundedMax.toLocaleString()}`;
  }
  return `₹${roundedMin.toLocaleString()}`;
};

// Utility to compute price details with 25% "original" markup
export const getNewPriceDetails = (durationString, id, priceData) => {
  let days = 0, nights = 0;
  if (durationString) {
    const dayMatch = durationString.match(/(\d+)\s*days?/i);
    const nightMatch = durationString.match(/(\d+)\s*nights?/i);
    days = dayMatch ? parseInt(dayMatch[1], 10) : 0;
    nights = nightMatch ? parseInt(nightMatch[1], 10) : 0;
    // If only nights are mentioned, assume days = nights + 1
    if (!days && nights) days = nights + 1;
    // If only days are mentioned and nights not, assume nights = days - 1
    if (days && !nights) nights = Math.max(0, days - 1);
  }

  // Pricing logic
  const carTravelCharge = days * 4000;
  const itineraryCost = days * 500;
  const accommodationCharge = nights * 3500;

  const minPrice = carTravelCharge + itineraryCost;
  const maxPrice = carTravelCharge + itineraryCost + accommodationCharge;

  // Calculate original (25% higher) prices for both min & max
  const originalMin = Math.round(minPrice * 1.25);
  const originalMax = Math.round(maxPrice * 1.25);

  return {
    // Strikethrough/original price range (25% higher)
    original: formatPriceRange(originalMin, originalMax),
    // Current/discounted price range (actual)
    discounted: formatPriceRange(minPrice, maxPrice)
  };
};