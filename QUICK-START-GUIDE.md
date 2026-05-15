# 🚀 JeepniGo Quick Start Guide

## Welcome to JeepniGo!

This guide will help you explore all the enhanced features in 5 minutes.

---

## 🎯 Feature Tour (Try These First!)

### 1. **Language Toggle** (30 seconds)
**Where:** Top-right of header, "Tagalog" button

**Try it:**
1. Click the **"Tagalog"** button
2. Watch the entire UI switch to Filipino
3. Notice: Headers, buttons, recommendations all update
4. Click **"English"** to switch back

**Look for:** "Sakay o Antay?" becomes "Board or Wait?", "Arriving Soon" becomes "Malapit Na"

---

### 2. **"Sakay o Antay?" Decision Helper** (1 minute)
**Where:** Commuter View, just below route selector

**Try it:**
1. Stay in **Commuter** mode
2. Select any route (e.g., "Toril Market – San Pedro")
3. Look at the large colored card
4. It will say either:
   - ✅ **"BOARD NOW"** (green) - with reason why
   - ⏰ **"WAIT"** (orange) - with alternative

**Notice:**
- Confidence % (e.g., "95% sure")
- Reasoning (e.g., "arrives in 2 mins, 4 seats available")
- Next jeepney info (if recommending wait)

**Switch to Tagalog:** See how it says "SUMAKAY NA" instead!

---

### 3. **Driver Ratings** (1 minute)
**Where:** On each jeepney card in the list

**Try it:**
1. Scroll down to "Arriving Soon" section
2. Look at any jeepney card
3. Below the route name, you'll see:
   - ⭐⭐⭐⭐⭐ (star rating)
   - Driver name (e.g., "Mang Tomas")
   - 🏆 **Verified** badge (if reliable)
   - Accuracy % (e.g., "94% accuracy")

**Compare:** Check multiple jeepneys - some have higher ratings!

---

### 4. **Voice Commands (Driver Mode)** (2 minutes)
**Where:** Driver View, top card

**Try it:**
1. Click **"Driver"** button at the top
2. Toggle **"On Duty"** if not already on
3. Find the **"Voice Commands"** card
4. Try either:
   - **Tap the big microphone button** → Wait 2 seconds → See auto-detection
   - **Click quick command buttons** → "Departing", "En Route", "Arriving", "Full"

**Watch:**
- Status updates immediately
- Toast notification confirms
- Trip counter increases (when you click "Arrived")

**In Tagalog:**
- Commands become "Aalis na", "Byaheng", "Papara na", "Puno na"

---

### 5. **Data-Saver Mode** (30 seconds)
**Where:** Top-right of header, next to language toggle

**Try it:**
1. Click **"Normal"** button (becomes "Data Saver")
2. Notice:
   - Map disappears (saves bandwidth)
   - QR code section hides
   - Only essential info remains
3. Click **"Data Saver"** to switch back to Normal

**Purpose:** For users on 2G/3G or with limited data

---

### 6. **QR Code Quick Access** (30 seconds)
**Where:** Commuter View, below the jeepney list

**Try it:**
1. Make sure you're in **Normal** mode (not Data Saver)
2. Scroll to the QR Code card
3. Click **"Generate QR"**
4. Toast notification appears

**Real-world use:** Print QR code, post at jeepney stop → Commuters scan → Instant route status!

---

### 7. **Weather Advisory** (Hidden by default)
**Where:** Would appear below hero section

**How to see it:**
Currently set to "clear" (no alert shown)

**To trigger it:**
You'd need to update the weather state in the code:
```typescript
// In lib/jeepnigo-context.tsx, line 48
const [weather, setWeather] = useState<WeatherCondition>("rainy"); // Change from "clear"
```

**What it looks like:**
- ☔ Orange alert: "Raining - expect 5-10 min delays"
- ⛈️ Red alert: "Heavy rain - expect 10-20 min delays"

---

## 🎨 Visual Indicators Guide

### Color Meanings:
- **🟢 Green**: Good to go! (plenty of seats, board now, verified)
- **🟡 Orange**: Be careful (few seats, wait recommended, rainy weather)
- **🔴 Red**: Stop/Full (no seats, heavy rain, don't board)
- **🔵 Blue**: Information (primary actions, neutral status)

### Icons Quick Reference:
- 🚐 **Bus**: Jeepney
- ⏱️ **Clock**: ETA/Arrival time
- 💺 **Users**: Seat management
- ⭐ **Star**: Driver rating
- 🏆 **Award**: Verified driver
- 🎤 **Microphone**: Voice commands
- 📍 **Map Pin**: Location
- 🌐 **Globe**: Language toggle
- 📶 **Wifi**: Data mode
- ☔ **Cloud with rain**: Weather

---

## 🔄 Mode Switching

### Commuter Mode:
- Search for destinations
- See decision helper ("Sakay o Antay?")
- View jeepney arrivals with driver ratings
- Check map and QR codes
- Reserve seats

### Driver Mode:
- Toggle duty status
- Use voice commands (hands-free!)
- Manage seat count (+ / - buttons)
- Update location status
- Share live GPS position
- View trip summary

**Switch anytime:** Click Commuter/Driver at the top!

---

## 💡 Pro Tips

### For Best Experience:

1. **Try Both Languages**
   - See how natural the Tagalog translations feel
   - Notice cultural context (not just word-for-word translation)

2. **Check Decision Helper Logic**
   - Compare when it says "Board" vs "Wait"
   - Notice how confidence % changes
   - See next jeepney info when recommending wait

3. **Compare Driver Ratings**
   - Higher stars = more reliable
   - Look for 🏆 Verified badge
   - Check accuracy % (goal is 90%+)

4. **Test Voice Commands Safety**
   - Designed for hands-free use while driving
   - Quick tap options if voice doesn't work
   - All feedback via toast (no looking at screen needed)

5. **Toggle Data Modes**
   - See how much disappears in Data Saver
   - Appreciate the bandwidth savings
   - Perfect for rural areas or limited data

---

## 📱 Mobile Testing

**Best viewed on:**
- Mobile browser (Chrome/Safari)
- Screen size: 375px - 428px (iPhone/Android standard)
- Portrait orientation

**Responsive features:**
- Large touch targets (especially for drivers)
- Readable at arm's length
- One-handed operation possible
- No tiny buttons

---

## 🐛 Known Limitations (MVP)

**These are intentional for MVP testing:**

1. **GPS is simulated** → Jeepneys move automatically, not real tracking
2. **Voice recognition is mock** → Commands work but don't use actual speech API
3. **QR codes aren't real** → Placeholder only, generate button shows concept
4. **Weather is static** → Set to "clear" by default, manual code change to test
5. **Driver ratings are mock** → Pre-set values, not real user feedback yet

**These will be real in V2!**

---

## 🎬 5-Minute Demo Script

**Perfect for showing someone:**

1. **[30s] Start in Commuter mode**
   - "This is JeepniGo, real-time jeepney tracking"
   - Point out the live arrival times

2. **[30s] Show Decision Helper**
   - "See this? It tells you whether to board or wait"
   - Explain the logic: seats + time + next jeepney

3. **[30s] Highlight Driver Ratings**
   - "Every driver has a rating - builds trust"
   - Show verified badge, accuracy score

4. **[1m] Switch to Driver mode**
   - "For drivers, it's super safe"
   - Demo voice commands
   - Show one-tap status updates

5. **[30s] Toggle Language**
   - "It's bilingual - watch this"
   - Switch to Tagalog, everything updates
   - "Uses real jeepney terms, not just translation"

6. **[30s] Show Data Saver**
   - "For areas with poor internet"
   - Toggle on, map disappears
   - "Saves bandwidth, still functional"

7. **[1m] Explain Impact**
   - "Commuters save 10-15 minutes waiting"
   - "Drivers update safely without looking at phone"
   - "Trust builds through ratings"
   - "Made FOR Filipinos, BY Filipinos"

---

## ❓ FAQ

**Q: Why do I need to switch modes?**  
A: Different users have different needs. Commuters want to see all jeepneys and make decisions. Drivers need large buttons for safe updates.

**Q: What does "Verified" badge mean?**  
A: Verified drivers are registered with the system and have proven reliability (accurate updates, consistent service).

**Q: How does the decision helper work?**  
A: It analyzes: current jeepney ETA, seats available, next jeepney arrival, and your wait time trade-off. Then recommends the best choice.

**Q: Can I use this without internet?**  
A: Not yet! But Data Saver mode uses minimal data. V2 will have offline fallback showing last known status.

**Q: Is voice command required?**  
A: No! It's optional for driver safety. You can always use the quick-tap buttons or dropdown instead.

**Q: Why bilingual?**  
A: Many Filipino commuters prefer Tagalog. It's not about translation—it's about feeling native, using real jeepney culture words.

---

## 🆘 Troubleshooting

**Issue:** Language toggle doesn't work  
**Fix:** Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

**Issue:** Decision helper not showing  
**Fix:** Make sure there are jeepneys on the selected route

**Issue:** Voice commands don't respond  
**Fix:** This is expected—voice is simulated in MVP. Use quick-tap buttons.

**Issue:** Map not displaying  
**Fix:** Check if you're in Data Saver mode (toggle to Normal)

**Issue:** Driver mode disabled  
**Fix:** Toggle "On Duty" switch at the top

---

## 🎓 Next Steps

After testing these features:

1. **Read the full MVP document** → `MVP-DOCUMENT.md`
2. **Check unique features list** → `UNIQUE-FEATURES-SUMMARY.md`
3. **See implementation details** → `FEATURES-IMPLEMENTATION.md`
4. **Provide feedback** → Note what works, what doesn't, what's missing

---

## 🌟 Feature Checklist

Use this to ensure you've tried everything:

**Commuter Features:**
- [ ] Language toggle (EN ↔ TL)
- [ ] Decision helper ("Sakay o Antay?")
- [ ] Driver ratings on jeepney cards
- [ ] QR code card
- [ ] Data-saver mode
- [ ] Route selection
- [ ] Map view toggle
- [ ] Seat availability legend

**Driver Features:**
- [ ] On/Off duty toggle
- [ ] Location sharing toggle
- [ ] Voice command panel
- [ ] Seat management (+ / - buttons)
- [ ] Location status dropdown
- [ ] Quick action buttons (Departing/Arrived)
- [ ] Today's summary
- [ ] Safety notice

**Cross-Cutting:**
- [ ] Bilingual support throughout
- [ ] Responsive design on mobile
- [ ] Toast notifications
- [ ] Color-coded status indicators
- [ ] Accessibility features

---

**Ready to explore?** Start with the Language Toggle and Decision Helper—those are the most impressive! 

**Questions?** Check the FAQ section or review the documentation files.

**Mabuhay ang JeepniGo!** 🚐🇵🇭
