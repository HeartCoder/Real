
import { meghalayaBaseDestinations } from './meghalayaBaseData';
import { meghalayaKazirangaExplorerPackage } from './meghalayaExplorerPackage';
import { getNewPriceDetails } from '@/lib/priceUtils';

const applyNewPrices = (destinations) => {
  return destinations.map(dest => {
    const priceDetails = getNewPriceDetails(dest.duration, dest.id, dest.priceData);
    return {
      ...dest,
      priceDisplay: priceDetails.discounted, 
      originalPriceDisplay: priceDetails.original !== priceDetails.discounted ? priceDetails.original : null
    };
  });
};

export const meghalayaDestinations = applyNewPrices([
  meghalayaKazirangaExplorerPackage,
  ...meghalayaBaseDestinations,
]);
