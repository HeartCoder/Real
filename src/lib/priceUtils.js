export const formatPriceRange = (min, max) => {
  const roundedMin = Math.round(min);
  const roundedMax = max ? Math.round(max) : null;
  if (roundedMax && roundedMin !== roundedMax) {
    return `₹${roundedMin.toLocaleString()} - ₹${roundedMax.toLocaleString()}`;
  }
  return `₹${roundedMin.toLocaleString()}`;
};

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

  // New logic: min = car + itinerary, max = car + itinerary + accommodation
  const carTravelCharge = days * 3000;
  const itineraryCost = days * 500;
  const accommodationCharge = nights * 2500;

  const minPrice = carTravelCharge + itineraryCost;
  const maxPrice = carTravelCharge + itineraryCost + accommodationCharge;

  // Return in the old format for compatibility
  return {
    original: formatPriceRange(minPrice, maxPrice),
    discounted: formatPriceRange(minPrice, maxPrice)
  };
};