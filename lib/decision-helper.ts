import type { Jeepney, DecisionRecommendation } from "./types";

/**
 * Decision helper - "Sakay o Antay?"
 * Recommends whether to board or wait based on seat availability and ETA
 */
export function getDecisionRecommendation(
  currentJeepney: Jeepney,
  nextJeepney?: Jeepney
): DecisionRecommendation {
  const availableSeats = currentJeepney.totalSeats - currentJeepney.occupiedSeats;
  const eta = currentJeepney.eta;

  // If jeepney is full, always recommend waiting
  if (availableSeats === 0) {
    return {
      action: "wait",
      reason: "This jeepney is full. Wait for the next one.",
      reasonTl: "Puno na ang jeep. Antayin ang susunod.",
      nextJeepneyEta: nextJeepney?.eta,
      confidence: 100,
    };
  }

  // If arriving very soon (< 3 mins) and has seats, board
  if (eta <= 3 && availableSeats > 0) {
    return {
      action: "board",
      reason: `Board now - arrives in ${eta} min${eta !== 1 ? 's' : ''}, ${availableSeats} seat${availableSeats !== 1 ? 's' : ''} available`,
      reasonTl: `Sumakay na - darating sa ${eta} minuto, may ${availableSeats} upuan`,
      confidence: 95,
    };
  }

  // If only 1-2 seats left, recommend boarding if arriving soon
  if (availableSeats <= 2 && eta <= 5) {
    return {
      action: "board",
      reason: `Board now - only ${availableSeats} seat${availableSeats !== 1 ? 's' : ''} left!`,
      reasonTl: `Sumakay na - ${availableSeats} upuan na lang!`,
      confidence: 85,
    };
  }

  // If plenty of seats and arriving soon, board
  if (availableSeats > 2 && eta <= 5) {
    return {
      action: "board",
      reason: `Good choice - plenty of seats, arrives in ${eta} mins`,
      reasonTl: `Maganda ito - maraming upuan, ${eta} minuto`,
      confidence: 90,
    };
  }

  // If long wait and next jeepney is close, consider waiting
  if (eta > 10 && nextJeepney && nextJeepney.eta < eta - 5) {
    const nextSeats = nextJeepney.totalSeats - nextJeepney.occupiedSeats;
    if (nextSeats > 0) {
      return {
        action: "wait",
        reason: `Consider waiting - next jeepney arrives sooner (${nextJeepney.eta} mins)`,
        reasonTl: `Maghintay na lang - mas mabilis ang susunod (${nextJeepney.eta} minuto)`,
        nextJeepneyEta: nextJeepney.eta,
        confidence: 75,
      };
    }
  }

  // Default: recommend boarding if seats available
  return {
    action: "board",
    reason: `You can board - ${availableSeats} seat${availableSeats !== 1 ? 's' : ''} available`,
    reasonTl: `Pwede sumakay - may ${availableSeats} upuan`,
    confidence: 70,
  };
}

/**
 * Get seat availability status
 */
export function getSeatStatus(jeepney: Jeepney): {
  status: "plenty" | "few" | "full";
  color: string;
  label: string;
  labelTl: string;
} {
  const available = jeepney.totalSeats - jeepney.occupiedSeats;

  if (available === 0) {
    return {
      status: "full",
      color: "bg-jeepnigo-red",
      label: "Full",
      labelTl: "Puno",
    };
  }

  if (available <= 2) {
    return {
      status: "few",
      color: "bg-jeepnigo-orange",
      label: "Few Left",
      labelTl: "Konti Lang",
    };
  }

  return {
    status: "plenty",
    color: "bg-jeepnigo-green",
    label: "Plenty",
    labelTl: "Marami Pa",
  };
}

/**
 * Get ETA urgency level
 */
export function getEtaUrgency(eta: number): {
  level: "arriving" | "soon" | "later";
  color: string;
  icon: string;
} {
  if (eta <= 3) {
    return { level: "arriving", color: "text-jeepnigo-green", icon: "🟢" };
  }
  if (eta <= 8) {
    return { level: "soon", color: "text-jeepnigo-orange", icon: "🟡" };
  }
  return { level: "later", color: "text-muted-foreground", icon: "🔵" };
}
