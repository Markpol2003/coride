import type { Language } from "./types";

export const translations = {
  en: {
    // Header
    appName: "JeepniGo",
    commuter: "Commuter",
    driver: "Driver",

    // Commuter View
    findRide: "Find your ride in Davao City",
    realTimeTracking: "Real-time jeepney tracking at your fingertips",
    whereGoing: "Where are you going?",
    selectRoute: "Select Route",
    arrivingSoon: "Arriving Soon",
    live: "Live",
    noJeepneys: "No jeepneys available on this route right now.",
    seatAvailability: "Seat Availability",
    seatsLeft: "seats",
    full: "Full",

    // Decision Helper
    sakayAntay: "Sakay o Antay?",
    recommendation: "Recommendation",
    nextJeepney: "Next jeepney",

    // Driver View
    onDuty: "On Duty",
    offDuty: "Off Duty",
    shareLiveLocation: "Share Live Location",
    seatManagement: "Seat Management",
    seatsAvailable: "seats available",
    occupied: "occupied",
    vehicleFull: "Vehicle Full - No More Passengers",
    locationStatus: "Location Status",
    atTerminal: "At Terminal",
    inTransit: "In Transit",
    arriving: "Arriving at Stop",
    departing: "Departing",
    arrived: "Arrived",
    todaySummary: "Today's Summary",
    currentPassengers: "Current Passengers",
    tripsCompleted: "Trips Completed",
    safetyNotice: "For safety, only update status when vehicle is stopped.",

    // Weather
    weatherClear: "Clear skies, normal travel time",
    weatherRainy: "Raining - expect 5-10 min delays",
    weatherHeavyRain: "Heavy rain - expect 10-20 min delays",

    // Data Mode
    dataSaverMode: "Data Saver Mode",
    normalMode: "Normal Mode",

    // QR Code
    scanQR: "Scan QR Code",
    quickAccess: "Quick access to route status",

    // Rating
    driverRating: "Driver Rating",
    verified: "Verified",
    accuracy: "Accuracy",
  },
  tl: {
    // Header (Tagalog)
    appName: "JeepniGo",
    commuter: "Pasahero",
    driver: "Drayber",

    // Commuter View
    findRide: "Hanap ng sakayan sa Davao City",
    realTimeTracking: "Real-time na pagsubaybay sa jeepney",
    whereGoing: "Saan ka pupunta?",
    selectRoute: "Pumili ng Linya",
    arrivingSoon: "Malapit Na",
    live: "Live",
    noJeepneys: "Walang jeepney sa linyang ito ngayon.",
    seatAvailability: "Upuan Available",
    seatsLeft: "upuan",
    full: "Puno",

    // Decision Helper
    sakayAntay: "Sakay o Antay?",
    recommendation: "Rekomendasyon",
    nextJeepney: "Susunod na jeep",

    // Driver View
    onDuty: "On Duty",
    offDuty: "Off Duty",
    shareLiveLocation: "I-share ang Live Location",
    seatManagement: "Pamamahala ng Upuan",
    seatsAvailable: "upuan available",
    occupied: "sakay",
    vehicleFull: "Puno na - Walang Masasakyan Pa",
    locationStatus: "Status ng Lokasyon",
    atTerminal: "Sa Terminal",
    inTransit: "Byaheng",
    arriving: "Papara na",
    departing: "Aalis Na",
    arrived: "Nandito Na",
    todaySummary: "Buod Ngayong Araw",
    currentPassengers: "Kasalukuyang Pasahero",
    tripsCompleted: "Natapos na Biyahe",
    safetyNotice: "Para sa kaligtasan, i-update lang kapag nakatigil ang sasakyan.",

    // Weather
    weatherClear: "Malinaw, normal na oras ng biyahe",
    weatherRainy: "Umuulan - mag-expect ng 5-10 min delay",
    weatherHeavyRain: "Malakas na ulan - 10-20 min delay",

    // Data Mode
    dataSaverMode: "Data Saver Mode",
    normalMode: "Normal Mode",

    // QR Code
    scanQR: "I-scan ang QR Code",
    quickAccess: "Mabilis na access sa status ng ruta",

    // Rating
    driverRating: "Rating ng Drayber",
    verified: "Verified",
    accuracy: "Katumpakan",
  },
};

export function t(key: keyof typeof translations.en, lang: Language = "en"): string {
  return translations[lang][key] || translations.en[key];
}

export function getRouteNameLocalized(routeName: string, lang: Language): string {
  if (lang === "en") return routeName;
  
  // Common route translations
  const routeTranslations: Record<string, string> = {
    "Toril Market – San Pedro": "Palengke ng Toril – San Pedro",
    "Matina – Bankerohan": "Matina – Bankerohan",
    "Buhangin – SM Lanang": "Buhangin – SM Lanang",
  };

  return routeTranslations[routeName] || routeName;
}
