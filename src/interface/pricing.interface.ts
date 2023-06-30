export interface IPricingFeatures {
  id: number;
  text: string;
}

export interface IPricingUserCount {
  lowest: number;
  highest: number;
  operator: "<" | "-" | ">";
}

export interface IPricing {
  id: number;
  name: string;
  user_count: IPricingUserCount;
  price: number;
  denomination: "year/user" | "month/user";
  isPopular: boolean;
  active_features_id: number[];
}
