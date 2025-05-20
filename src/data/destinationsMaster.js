
import { meghalayaDestinations } from './meghalayaData';
import { arunachalDestinations } from './arunachalData';
import { assamDestinations } from './assamData';

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

export const getStateKeyForDestination = (destinationId) => {
  for (const stateKey in destinationsData) {
    if (destinationsData[stateKey].some(dest => dest.id === destinationId)) {
      return stateKey;
    }
  }
  return null;
};

export const getFeaturedDestinations = () => {
   return [
    destinationsData.meghalaya.find(d => d.id === "cherrapunji"),
    destinationsData.arunachal.find(d => d.id === "tawang"),
    destinationsData.assam.find(d => d.id === "kaziranga-national-park"),
    destinationsData.meghalaya.find(d => d.id === "dawki")
  ].filter(Boolean); 
};
