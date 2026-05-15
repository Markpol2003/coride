# JeepniGo - MVP Product Document

![JeepniGo Logo](/jeepnigo-logo.png)

## Table of Contents
1. [Overview](#overview)
2. [Problem Statement](#problem-statement)
3. [Solution](#solution)
4. [Target Users](#target-users)
5. [Final MVP Scope](#section-5--final-mvp-scope)
6. [Interaction Flow (Core Logic)](#section-6--interaction-flow-core-logic)
7. [Wizard of Oz Check](#section-7--wizard-of-oz-check)
8. [Technical Stack](#technical-stack)
9. [Success Metrics](#success-metrics)

---

## Overview

**JeepniGo** is a real-time public transportation tracking system designed specifically for Philippine jeepneys. It helps commuters make informed decisions about when to wait for a ride and enables drivers to optimize passenger loading.

---

## Section 5 – Final MVP Scope

### ✅ Included in MVP:

#### Core Features
- **Jeepney arrival time for one route**
  - Real-time ETA updates based on driver location
  - Distance-based time estimation (km to destination)
  - Color-coded urgency indicators (arriving soon, 5-10 mins, 10+ mins)

- **Seat availability indicator**
  - Visual seat counter (e.g., "8/14 seats available")
  - Status badges: "🟢 Plenty", "🟡 Few Left", "🔴 Full"
  - Historical capacity trends (peak hours visualization)

- **Simple web interface accessible via mobile browser**
  - Progressive Web App (PWA) capabilities for "add to home screen"
  - Offline fallback showing last known status
  - Low-data mode for 2G/3G networks (< 50kb page load)

- **Basic driver update input (manual)**
  - Quick-tap interface for drivers
  - Voice command integration (hands-free updates)
  - One-button status updates: "Departing", "En Route", "Full"

#### 🌟 Unique JeepniGo Features (MVP):

1. **"Sakay o Antay?" Decision Helper**
   - Smart recommendation: "✓ Board Now" or "⏰ Wait for Next" based on seat availability + user's commute pattern
   - Shows next jeepney arrival if current one is full

2. **QR Code Quick Access**
   - Route-specific QR codes posted at jeepney stops
   - Instant access to that route's real-time status (no app download needed)

3. **Filipino-First Interface**
   - Bilingual support (Tagalog/English toggle)
   - Local terminology: "Sakay", "Para", "Bayad", "Linya"
   - Familiar jeepney route naming (e.g., "Cubao-Divisoria", "SM-Quiapo")

4. **Data-Saver Mode**
   - Text-only view for ultra-low bandwidth
   - SMS backup notifications for critical updates (optional)

5. **Community Trust Score**
   - Driver rating system visible to commuters
   - "Verified Driver" badge for registered operators
   - Commuter feedback on accuracy of seat/time estimates

---

## Section 6 – Interaction Flow (Core Logic)

### 🚦 User Journey (Enhanced)

#### 1️⃣ Pre-Commute (User Planning Phase)
```
User opens JeepniGo web page
    ↓
System shows:
    • Current jeepney position on mini-map
    • ETA countdown timer
    • Seat availability with visual gauge
    • Weather advisory (if raining, expect delays)
    ↓
User sees "Sakay o Antay?" recommendation:
    ✅ "Board this one - seats available, arrives in 3 mins"
    OR
    ⏰ "Wait for next - this one is full, next arrives in 7 mins"
```

#### 2️⃣ Decision Point (Core Value Delivery)
```
Value delivery occurs when:
    ✓ Arrival time is displayed (reduces uncertainty)
    ✓ Seat availability shown (avoids futile waiting)
    ✓ Smart recommendation helps user decide instantly
    ↓
User decides whether to:
    • Wait at stop (if jeepney arriving soon with seats)
    • Walk to alternate route (if long wait expected)
    • Board with confidence (knowing seats are available)
```

#### 3️⃣ Post-Board (Validation Phase)
```
Validation occurs when:
    ✓ User boards with less waiting time
    ✓ Driver loads passengers smoothly (no overcrowding)
    ✓ System asks for quick feedback: "Was the info accurate?" 👍/👎
    ↓
System learns from feedback:
    • Improves ETA algorithm
    • Adjusts seat availability thresholds
    • Flags unreliable data sources
```

#### 🌟 Unique Flow Enhancements:

**A. Multi-Modal Decision Support**
```
If current route is delayed/full:
    → System suggests nearby alternate routes
    → Shows walking distance to alternate stops
    → Compares total travel time of all options
```

**B. Driver-Commuter Sync**
```
When driver marks "Approaching Stop":
    → Waiting users get push notification
    → Users can signal "I'm waiting here" (helps driver know demand)
    → Driver sees count of waiting passengers
```

**C. Fair Boarding Queue (Future Enhancement Preview)**
```
During MVP, manually observe:
    → Who arrives at stop first
    → Suggest virtual queue system for V2
```

---

## Section 7 – Wizard of Oz Check

### 🧙 Handled Manually During MVP:

#### Manual Operations (Human-in-the-Loop):

1. **Seat Availability Updates**
   - **Who handles:** Driver/Operator via simple mobile form
   - **Frequency:** Every stop or when significant change occurs
   - **Wizard of Oz element:** No automatic passenger counting sensors
   - **Manual input:** Driver taps "Empty", "Half Full", "Almost Full", "Full"
   - **Fallback:** If driver forgets to update, team monitors via crowdsourced reports

2. **Arrival Time Estimates**
   - **Who handles:** Team or driver
   - **Method:** Driver shares GPS location (via WhatsApp/Messenger initially)
   - **Wizard of Oz element:** No integrated GPS tracking system
   - **Manual calculation:** Team plots location on map, estimates time based on distance + traffic conditions
   - **Update frequency:** Every 5 minutes or upon request

#### 🌟 Unique Manual Validations (JeepniGo-Specific):

3. **Route Adherence Verification**
   - **Manual check:** Team member rides the jeepney to verify:
     - Actual route matches digital route map
     - Stop locations are accurate
     - Average trip duration is correctly estimated
   - **Learning outcome:** Real traffic patterns vs. theoretical ETA

4. **Driver Reliability Score**
   - **Manual tracking:** Team logs:
     - Did driver actually update as promised?
     - Were seat counts accurate?
     - Did jeepney arrive within estimated time window?
   - **Use case:** Identify most reliable drivers for beta testing expansion

5. **Commuter Behavior Analysis**
   - **Manual observation:** Team surveys users:
     - Did you board based on our recommendation?
     - Was the wait time acceptable?
     - Would you use this daily?
   - **Insight gathering:** Understand what features drive actual behavior change

6. **Peak Hour Pattern Mapping**
   - **Manual logging:** Record manually for 2 weeks:
     - Rush hour seat occupancy trends
     - Frequency of jeepneys during different times
     - Correlation between time-of-day and accuracy
   - **Goal:** Build dataset to automate predictions in V2

#### 🎯 What We're Testing Manually (Before Automation):

| Feature | Manual MVP Approach | Automated V2 Goal |
|---------|---------------------|-------------------|
| GPS Tracking | Driver shares location via chat | Real-time GPS API integration |
| Seat Counting | Driver eyeballs and reports | IoT weight sensors or cameras |
| Traffic Delays | Team checks Google Maps manually | Waze/Google Traffic API |
| User Notifications | Team sends manual alerts | Automated push notifications |
| Feedback Collection | Phone calls/texts to users | In-app 1-tap feedback system |

#### 🧪 Validation Success Criteria (Manual Observation):

✅ **MVP succeeds if:**
- 70%+ of users report reduced waiting time
- Seat availability estimates are accurate within ±2 seats
- Arrival time estimates are accurate within ±5 minutes
- At least 60% of users would recommend to others
- Drivers find the system easy enough to update consistently

❌ **Pivot signals (what would make us change approach):**
- Drivers cannot/will not update regularly (need auto-tracking)
- Users don't trust manual estimates (need real-time sensors)
- Manual effort doesn't scale beyond 3 routes (need automation)

---

## Technical Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Deployment:** Vercel
- **State Management:** React Context API
- **UI Components:** shadcn/ui
- **Icons:** Lucide Icons
- **Maps:** OpenStreetMap (future integration)

---

## Success Metrics

### Phase 1 (First 2 Weeks):
- **User Engagement:** 50+ unique users testing the system
- **Driver Participation:** 5+ drivers actively updating
- **Accuracy:** 75% of ETAs within ±5 minutes
- **User Retention:** 40% return within 3 days

### Phase 2 (Month 1):
- **User Base:** 200+ active users
- **Routes Covered:** 3 major routes
- **Feedback Score:** 4/5 average rating
- **Time Saved:** Average 10 minutes less waiting per user

---

## Contact & Support

**Project Maintainer:** [Your Name]
**Email:** [Your Email]
**Version:** MVP v1.0
**Last Updated:** February 6, 2026

---

*Made with 💛 for Filipino commuters*
