import type { Jeepney, RouteData, Coordinates } from "./types";

// Davao City coordinates for the routes
// Toril Market: 7.0353° N, 125.4917° E
// San Pedro: 7.0731° N, 125.6128° E

export const routes: RouteData[] = [
  {
    id: "route-1",
    name: "Toril Market – San Pedro",
    origin: "Toril Market",
    destination: "San Pedro",
    coordinates: [
      { lat: 7.0353, lng: 125.4917 }, // Toril Market (Start)
      { lat: 7.0385, lng: 125.5050 },
      { lat: 7.0420, lng: 125.5200 },
      { lat: 7.0480, lng: 125.5350 },
      { lat: 7.0550, lng: 125.5500 },
      { lat: 7.0600, lng: 125.5650 },
      { lat: 7.0650, lng: 125.5800 },
      { lat: 7.0700, lng: 125.5950 },
      { lat: 7.0731, lng: 125.6128 }, // San Pedro (End)
    ],
  },
  {
    id: "route-2",
    name: "Matina – Bankerohan",
    origin: "Matina",
    destination: "Bankerohan",
    coordinates: [
      { lat: 7.0550, lng: 125.5700 }, // Matina
      { lat: 7.0600, lng: 125.5750 },
      { lat: 7.0650, lng: 125.5850 },
      { lat: 7.0700, lng: 125.5900 },
      { lat: 7.0731, lng: 125.6000 }, // Bankerohan
    ],
  },
  {
    id: "route-3",
    name: "Buhangin – SM Lanang",
    origin: "Buhangin",
    destination: "SM Lanang",
    coordinates: [
      { lat: 7.1000, lng: 125.6200 }, // Buhangin
      { lat: 7.0950, lng: 125.6250 },
      { lat: 7.0900, lng: 125.6300 },
      { lat: 7.0850, lng: 125.6350 },
      { lat: 7.0800, lng: 125.6400 }, // SM Lanang
    ],
  },
];

// User's default location (simulated - near San Pedro for commuter view)
export const userLocation: Coordinates = {
  lat: 7.0700,
  lng: 125.5950,
};

// Helper to interpolate position along route
export function getPositionAlongRoute(
  routeCoords: Coordinates[],
  progress: number
): Coordinates {
  if (progress <= 0) return routeCoords[0];
  if (progress >= 1) return routeCoords[routeCoords.length - 1];

  const totalSegments = routeCoords.length - 1;
  const segmentProgress = progress * totalSegments;
  const segmentIndex = Math.floor(segmentProgress);
  const segmentFraction = segmentProgress - segmentIndex;

  const start = routeCoords[segmentIndex];
  const end = routeCoords[Math.min(segmentIndex + 1, routeCoords.length - 1)];

  return {
    lat: start.lat + (end.lat - start.lat) * segmentFraction,
    lng: start.lng + (end.lng - start.lng) * segmentFraction,
  };
}

// Calculate ETA based on route progress (higher progress = closer = lower ETA)
export function calculateETA(routeProgress: number): number {
  // Assuming full route takes ~20 minutes
  const remainingProgress = 1 - routeProgress;
  return Math.max(1, Math.round(remainingProgress * 20));
}

export const initialJeepneys: Jeepney[] = [
  {
    id: "jeep-1",
    plateNumber: "SEK 200",
    route: "Toril Market – San Pedro",
    eta: 2,
    totalSeats: 12,
    occupiedSeats: 8,
    isPwdFriendly: true,
    status: "arriving",
    currentLocation: { lat: 7.0680, lng: 125.5900 },
    routeProgress: 0.85, // Close to destination
    driverName: "Mang Tomas",
    driverRating: {
      overall: 4.8,
      totalRides: 1247,
      accuracyScore: 94,
      isVerified: true,
    },
  },
  {
    id: "jeep-2",
    plateNumber: "LWE 452",
    route: "Toril Market – San Pedro",
    eta: 8,
    totalSeats: 12,
    occupiedSeats: 11,
    isPwdFriendly: false,
    status: "in-transit",
    currentLocation: { lat: 7.0550, lng: 125.5500 },
    routeProgress: 0.5, // Midway
    driverName: "Kuya Ben",
    driverRating: {
      overall: 4.5,
      totalRides: 892,
      accuracyScore: 88,
      isVerified: true,
    },
  },
  {
    id: "jeep-3",
    plateNumber: "DVO 999",
    route: "Toril Market – San Pedro",
    eta: 15,
    totalSeats: 12,
    occupiedSeats: 12,
    isPwdFriendly: false,
    status: "at-terminal",
    currentLocation: { lat: 7.0385, lng: 125.5050 },
    routeProgress: 0.1, // Just started
    driverName: "Kuya Jose",
    driverRating: {
      overall: 4.2,
      totalRides: 654,
      accuracyScore: 82,
      isVerified: false,
    },
  },
  {
    id: "jeep-4",
    plateNumber: "ABC 123",
    route: "Matina – Bankerohan",
    eta: 5,
    totalSeats: 10,
    occupiedSeats: 3,
    isPwdFriendly: true,
    status: "in-transit",
    currentLocation: { lat: 7.0650, lng: 125.5850 },
    routeProgress: 0.6,
    driverName: "Ate Linda",
    driverRating: {
      overall: 4.9,
      totalRides: 1584,
      accuracyScore: 96,
      isVerified: true,
    },
  },
  {
    id: "jeep-5",
    plateNumber: "XYZ 789",
    route: "Buhangin – SM Lanang",
    eta: 3,
    totalSeats: 14,
    occupiedSeats: 6,
    isPwdFriendly: true,
    status: "arriving",
    currentLocation: { lat: 7.0850, lng: 125.6350 },
    routeProgress: 0.8,
    driverName: "Mang Pedro",
    driverRating: {
      overall: 4.7,
      totalRides: 1123,
      accuracyScore: 91,
      isVerified: true,
    },
  },
];

// Driver's assigned jeepney for the demo
export const driverJeepneyId = "jeep-1";
