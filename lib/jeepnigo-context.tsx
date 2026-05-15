"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import type { Jeepney, JeepneyStatus, UserMode, Language, DataMode, WeatherCondition } from "./types";
import {
  initialJeepneys,
  driverJeepneyId,
  routes,
  getPositionAlongRoute,
  calculateETA,
} from "./mock-data";

interface JeepniGoContextType {
  jeepneys: Jeepney[];
  userMode: UserMode;
  setUserMode: (mode: UserMode) => void;
  driverJeepney: Jeepney | null;
  updateSeatCount: (delta: number) => void;
  updateDriverStatus: (status: JeepneyStatus) => void;
  toggleDriverOnDuty: () => void;
  isDriverOnDuty: boolean;
  tripsCompleted: number;
  incrementTrips: () => void;
  isLocationSharing: boolean;
  toggleLocationSharing: () => void;
  selectedJeepneyId: string | null;
  setSelectedJeepneyId: (id: string | null) => void;
  language: Language;
  toggleLanguage: () => void;
  dataMode: DataMode;
  toggleDataMode: () => void;
  weather: WeatherCondition;
  setWeather: (condition: WeatherCondition) => void;
}

const JeepniGoContext = createContext<JeepniGoContextType | null>(null);

export function JeepniGoProvider({ children }: { children: ReactNode }) {
  const [jeepneys, setJeepneys] = useState<Jeepney[]>(initialJeepneys);
  const [userMode, setUserMode] = useState<UserMode>("commuter");
  const [isDriverOnDuty, setIsDriverOnDuty] = useState(true);
  const [tripsCompleted, setTripsCompleted] = useState(3);
  const [isLocationSharing, setIsLocationSharing] = useState(true);
  const [selectedJeepneyId, setSelectedJeepneyId] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>("en");
  const [dataMode, setDataMode] = useState<DataMode>("normal");
  const [weather, setWeather] = useState<WeatherCondition>("clear");

  const driverJeepney = jeepneys.find((j) => j.id === driverJeepneyId) || null;

  // Animate jeepneys moving along routes
  useEffect(() => {
    const interval = setInterval(() => {
      setJeepneys((prev) =>
        prev.map((jeepney) => {
          // Only move jeepneys that are in-transit or arriving
          if (jeepney.status === "at-terminal") return jeepney;

          // Find the route for this jeepney
          const route = routes.find((r) => r.name === jeepney.route);
          if (!route) return jeepney;

          // Increment progress (speed varies based on status)
          const speed = jeepney.status === "arriving" ? 0.008 : 0.005;
          let newProgress = jeepney.routeProgress + speed;

          // Reset to start if reached end
          if (newProgress >= 1) {
            newProgress = 0;
          }

          // Calculate new position
          const newLocation = getPositionAlongRoute(route.coordinates, newProgress);
          const newETA = calculateETA(newProgress);

          return {
            ...jeepney,
            routeProgress: newProgress,
            currentLocation: newLocation,
            eta: newETA,
          };
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const updateSeatCount = useCallback((delta: number) => {
    setJeepneys((prev) =>
      prev.map((j) => {
        if (j.id === driverJeepneyId) {
          const newOccupied = Math.max(
            0,
            Math.min(j.totalSeats, j.occupiedSeats + delta)
          );
          return { ...j, occupiedSeats: newOccupied };
        }
        return j;
      })
    );
  }, []);

  const updateDriverStatus = useCallback((status: JeepneyStatus) => {
    setJeepneys((prev) =>
      prev.map((j) => {
        if (j.id === driverJeepneyId) {
          return { ...j, status };
        }
        return j;
      })
    );
  }, []);

  const toggleDriverOnDuty = useCallback(() => {
    setIsDriverOnDuty((prev) => !prev);
  }, []);

  const incrementTrips = useCallback(() => {
    setTripsCompleted((prev) => prev + 1);
  }, []);

  const toggleLocationSharing = useCallback(() => {
    setIsLocationSharing((prev) => !prev);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "tl" : "en"));
  }, []);

  const toggleDataMode = useCallback(() => {
    setDataMode((prev) => (prev === "normal" ? "saver" : "normal"));
  }, []);

  return (
    <JeepniGoContext.Provider
      value={{
        jeepneys,
        userMode,
        setUserMode,
        driverJeepney,
        updateSeatCount,
        updateDriverStatus,
        toggleDriverOnDuty,
        isDriverOnDuty,
        tripsCompleted,
        incrementTrips,
        isLocationSharing,
        toggleLocationSharing,
        selectedJeepneyId,
        setSelectedJeepneyId,
        language,
        toggleLanguage,
        dataMode,
        toggleDataMode,
        weather,
        setWeather,
      }}
    >
      {children}
    </JeepniGoContext.Provider>
  );
}

export function useJeepniGo() {
  const context = useContext(JeepniGoContext);
  if (!context) {
    throw new Error("useJeepniGo must be used within a JeepniGoProvider");
  }
  return context;
}
