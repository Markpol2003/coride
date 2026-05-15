"use client";

import { useState } from "react";
import Link from "next/link";
import { JeepniGoProvider, useJeepniGo } from "@/lib/jeepnigo-context";
import { Header } from "@/components/jeepnigo/header";
import { CommuterView } from "@/components/jeepnigo/commuter-view";
import { DriverView } from "@/components/jeepnigo/driver-view";
import { RoutesView } from "@/components/jeepnigo/views/routes-view";
import { HelpView } from "@/components/jeepnigo/views/help-view";
import { AboutView } from "@/components/jeepnigo/views/about-view";
import { HistoryView } from "@/components/jeepnigo/views/history-view";
import { FavoritesView } from "@/components/jeepnigo/views/favorites-view";

function AppContent() {
  const { userMode } = useJeepniGo();
  const [currentView, setCurrentView] = useState("home");

  const renderView = () => {
    // If on home, show mode-specific views
    if (currentView === "home") {
      return userMode === "commuter" ? <CommuterView /> : <DriverView />;
    }

    // Other views
    switch (currentView) {
      case "routes":
        return <RoutesView />;
      case "help":
        return <HelpView />;
      case "about":
        return <AboutView />;
      case "history":
        return <HistoryView />;
      case "favorites":
        return <FavoritesView />;
      case "notifications":
        return (
          <div className="container mx-auto max-w-4xl p-4">
            <div className="rounded-lg border border-dashed bg-muted/50 p-12 text-center">
              <h2 className="text-2xl font-bold text-foreground">Notifications</h2>
              <p className="mt-2 text-muted-foreground">
                Coming soon! Get alerts about your routes.
              </p>
            </div>
          </div>
        );
      case "feedback":
        return (
          <div className="container mx-auto max-w-4xl p-4">
            <div className="rounded-lg border border-dashed bg-muted/50 p-12 text-center">
              <h2 className="text-2xl font-bold text-foreground">Feedback</h2>
              <p className="mt-2 text-muted-foreground">
                Coming soon! Share your thoughts with us.
              </p>
            </div>
          </div>
        );
      case "docs":
        return (
          <div className="container mx-auto max-w-4xl p-4">
            <div className="rounded-lg border border-dashed bg-muted/50 p-12 text-center">
              <h2 className="text-2xl font-bold text-foreground">Documentation</h2>
              <p className="mt-2 text-muted-foreground">
                Check out our MVP documentation files in the project root!
              </p>
              <ul className="mt-4 space-y-2 text-left text-sm">
                <li>• MVP-DOCUMENT.md</li>
                <li>• UNIQUE-FEATURES-SUMMARY.md</li>
                <li>• FEATURES-IMPLEMENTATION.md</li>
                <li>• QUICK-START-GUIDE.md</li>
              </ul>
            </div>
          </div>
        );
      case "settings":
      case "profile":
        return (
          <div className="container mx-auto max-w-4xl p-4">
            <div className="rounded-lg border border-dashed bg-muted/50 p-12 text-center">
              <h2 className="text-2xl font-bold text-foreground">
                {currentView === "settings" ? "Settings" : "Profile"}
              </h2>
              <p className="mt-2 text-muted-foreground">
                Coming soon! Manage your {currentView}.
              </p>
            </div>
          </div>
        );
      default:
        return userMode === "commuter" ? <CommuterView /> : <DriverView />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      <main>{renderView()}</main>
      
      {/* CoRide Demo Link - Floating button */}
      <Link
        href="/coride"
        className="fixed bottom-6 right-6 px-4 py-2 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 z-50"
      >
        Try CoRide
      </Link>
    </div>
  );
}

export default function JeepniGoApp() {
  return (
    <JeepniGoProvider>
      <AppContent />
    </JeepniGoProvider>
  );
}
