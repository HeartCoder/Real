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

// Hardcoded price ranges for selected destinations
const HARDCODED_PRICES = {
  'Cherrapunji': { min: 10800, max: 14900 },
  'Tawang': { min: 23900, max: 29500 },
  'Dawki': { min: 8000, max: 10000 }
};

// Utility to compute price details, using hardcoded prices if available
export const getNewPriceDetails = (durationString, nameOrId, priceData) => {
  // Use hardcoded prices if the destination name matches
  if (HARDCODED_PRICES[nameOrId]) {
    const { min, max } = HARDCODED_PRICES[nameOrId];
    const originalMin = Math.round(min * 1.25);
    const originalMax = Math.round(max * 1.25);
    return {
      // Strikethrough/original price range (25% higher)
      original: formatPriceRange(originalMin, originalMax),
      // Current/discounted price range (actual)
      discounted: formatPriceRange(min, max)
    };
  }

  // --- Calculation for other destinations ---
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

  // Pricing logic (minPrice uses days * 3999, maxPrice formula unchanged)
  const carTravelCharge = days * 3999;
  const minPrice = carTravelCharge;
  const maxPrice = minPrice + (days * 2000);

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