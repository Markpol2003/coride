export type JeepneyStatus = "at-terminal" | "in-transit" | "arriving";
export type Language = "en" | "tl"; // English or Tagalog
export type WeatherCondition = "clear" | "rainy" | "heavy-rain";
export type DataMode = "normal" | "saver"; // Data-saver mode

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface DriverRating {
  overall: number; // 0-5
  totalRides: number;
  accuracyScore: number; // 0-100
  isVerified: boolean;
}

export interface Jeepney {
  id: string;
  plateNumber: string;
  route: string;
  eta: number; // minutes
  totalSeats: number;
  occupiedSeats: number;
  isPwdFriendly: boolean;
  status: JeepneyStatus;
  currentLocation: Coordinates;
  routeProgress: number; // 0 to 1, position along route
  driverName?: string;
  driverRating?: DriverRating;
}

export interface RouteData {
  id: string;
  name: string;
  nameTl?: string; // Tagalog name
  origin: string;
  destination: string;
  coordinates: Coordinates[]; // Array of points forming the route path
}

export interface DecisionRecommendation {
  action: "board" | "wait";
  reason: string;
  reasonTl?: string;
  nextJeepneyEta?: number;
  confidence: number; // 0-100
}

export interface WeatherInfo {
  condition: WeatherCondition;
  delayMinutes: number;
  message: string;
  messageTl?: string;
}

export type UserMode = "commuter" | "driver";
