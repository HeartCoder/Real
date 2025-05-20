
import { meghalayaDestinations } from './meghalaya';
import { arunachalDestinations } from './arunachal';
import { assamDestinations } from './assam';

export const destinationsData = {
  meghalaya: meghalayaDestinations,
  arunachal: arunachalDestinations,
  assam: assamDestinations,
};

export const getDestinationById = (stateKey, destinationId) => {
  if (destinationsData[stateKey]) {
    return destinationsData[stateKey].find(dest => dest.id === destinationId);
  }
  return null;
};

export const getDestinationsByState = (stateKey) => {
  return destinationsData[stateKey] || [];
};
