import { IPricing, IPricingFeatures } from "../interface/pricing.interface";

export const pricingFeaturesData: IPricingFeatures[] = [
  {
    id: 0,
    text: "Access Wool & DoCheck",
  },
  {
    id: 1,
    text: "Smart Journaling",
  },
  {
    id: 2,
    text: "Chat Support",
  },
  {
    id: 3,
    text: "Full Summary Enneagram Test",
  },
  {
    id: 4,
    text: "Premium Webinar",
  },
  {
    id: 5,
    text: "Premium Workshop",
  },
];

export const yearlyPriceData: IPricing[] = [
  {
    id: 0,
    name: "Fibra",
    user_count: {
      lowest: 1000,
      highest: 5000,
      operator: "-",
    },
    price: 79000,
    denomination: "year/user",
    isPopular: false,
    active_features_id: [0, 1, 2],
  },
  {
    id: 1,
    name: "Cento",
    user_count: {
      lowest: 500,
      highest: 1000,
      operator: "<",
    },
    price: 71000,
    denomination: "year/user",
    isPopular: true,
    active_features_id: [0, 1, 2, 3],
  },
  {
    id: 2,
    name: "Mille",
    user_count: {
      lowest: 1000,
      highest: 5000,
      operator: "-",
    },
    price: 60000,
    denomination: "year/user",
    isPopular: false,
    active_features_id: [0, 1, 2, 3, 4, 5],
  },
];

export const monthlyPriceData: IPricing[] = [
  {
    id: 0,
    name: "Fibra",
    user_count: {
      lowest: 1000,
      highest: 5000,
      operator: "-",
    },
    price: 99000,
    denomination: "month/user",
    isPopular: false,
    active_features_id: [0, 1, 2],
  },
  {
    id: 1,
    name: "Cento",
    user_count: {
      lowest: 500,
      highest: 1000,
      operator: "<",
    },
    price: 89000,
    denomination: "month/user",
    isPopular: true,
    active_features_id: [0, 1, 2, 3],
  },
  {
    id: 2,
    name: "Mille",
    user_count: {
      lowest: 1000,
      highest: 5000,
      operator: "-",
    },
    price: 75000,
    denomination: "month/user",
    isPopular: false,
    active_features_id: [0, 1, 2, 3, 4, 5],
  },
];
