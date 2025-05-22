import { meghalayaBaseDestinations } from './meghalayaBaseData';
import { meghalayaKazirangaExplorerPackage } from './meghalayaExplorerPackage';
import { getNewPriceDetails } from '@/lib/priceUtils';

// Helper to attach new price fields to each destination
const applyNewPrices = (destinations) => {
  return destinations.map(dest => {
    const priceDetails = getNewPriceDetails(dest.duration, dest.id, dest.priceData);
    return {
      ...dest,
      priceDisplay: priceDetails.discounted,
      originalPriceDisplay: priceDetails.original
    };
  });
};

export const meghalayaDestinations = applyNewPrices([
  meghalayaKazirangaExplorerPackage,
  ...meghalayaBaseDestinations,
]);