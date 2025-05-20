
export const formatPriceRange = (min, max) => {
  const roundedMin = Math.round(min);
  const roundedMax = max ? Math.round(max) : null;
  
  if (roundedMax && roundedMin !== roundedMax) {
    return `₹${roundedMin.toLocaleString()} - ₹${roundedMax.toLocaleString()}`;
  }
  return `₹${roundedMin.toLocaleString()}`;
};

export const getNewPriceDetails = (durationString, id, priceData) => {
  let days = 0;
  if (durationString) {
    const match = durationString.match(/(\d+)-?(\d*)\s*days?/i);
    if (match) {
      days = parseInt(match[1], 10);
      if (match[2]) {
        days = (parseInt(match[1], 10) + parseInt(match[2], 10)) / 2;
      }
    } else {
      const nightsMatch = durationString.match(/(\d+)\s*Nights/i);
      if (nightsMatch) {
        days = parseInt(nightsMatch[1], 10) + 1;
      }
    }
  }

  let baseMin = 0, baseMax = 0;

  if (id === "meghalaya-kaziranga-explorer") {
    baseMin = priceData?.originalPrice || 32000; 
    baseMax = priceData?.originalPrice || 32000;
  } else if (days <= 3) {
    baseMin = 4000; baseMax = 7000;
  } else if (days <= 5) {
    baseMin = 7000; baseMax = 15000;
  } else if (days <= 7) {
    baseMin = 15000; baseMax = 30000;
  } else if (days <= 10) {
    baseMin = 30000; baseMax = 60000;
  } else {
    baseMin = 30000; baseMax = 60000; 
  }
  
  const previousDiscountedMin = baseMin * 0.75;
  const previousDiscountedMax = baseMax * 0.75;

  const newMinPrice = previousDiscountedMin * 1.20;
  const newMaxPrice = previousDiscountedMax * 1.20;
  
  const originalMinForDisplay = baseMin;
  const originalMaxForDisplay = baseMax;


  return {
    original: formatPriceRange(originalMinForDisplay, originalMaxForDisplay),
    discounted: formatPriceRange(newMinPrice, newMaxPrice),
  };
};
