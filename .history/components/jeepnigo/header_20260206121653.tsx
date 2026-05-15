"use client";

import { User, Truck, Settings, UserCircle } from "lucide-react";
import { useJeepniGo } from "@/lib/jeepnigo-context";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LanguageToggle } from "./language-toggle";
import { DataModeToggle } from "./data-mode-toggle";
import { NavigationMenu, DesktopNavigation } from "./navigation-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { t } from "@/lib/translations";

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export function Header({ currentView = "home", onViewChange }: HeaderProps) {
  const { userMode, setUserMode, language, toggleLanguage, dataMode, toggleDataMode } = useJeepniGo();

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      {/* Main Header */}
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <NavigationMenu currentView={currentView} onViewChange={onViewChange} />

          {/* Logo */}
          <button
            onClick={() => onViewChange("home")}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <Image
                src="/jeepnigo-logo.png"
                alt="JeepniGo Logo"
                width={40}
                height={40}
                className="rounded-full"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-tight">JeepniGo</h1>
            </div>
          </button>
        </div>

        {/* Center: Desktop Navigation */}
        <DesktopNavigation currentView={currentView} onViewChange={onViewChange} />

        {/* Right: Mode Toggle + Settings */}
        <div className="flex items-center gap-2">
          {/* Mode Toggle */}
          <div className="hidden rounded-full bg-primary-foreground/20 p-1 md:flex">
            <button
              type="button"
              onClick={() => setUserMode("commuter")}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all",
                userMode === "commuter"
                  ? "bg-primary-foreground text-primary shadow-sm"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              )}
              aria-label="Switch to commuter mode"
            >
              <User className="h-4 w-4" />
              <span className="hidden lg:inline">{t("commuter", language)}</span>
            </button>
            <button
              type="button"
              onClick={() => setUserMode("driver")}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all",
                userMode === "driver"
                  ? "bg-primary-foreground text-primary shadow-sm"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              )}
              aria-label="Switch to driver mode"
            >
              <Truck className="h-4 w-4" />
              <span className="hidden lg:inline">{t("driver", language)}</span>
            </button>
          </div>

          {/* Mobile Mode Toggle (Compact) */}
          <div className="flex rounded-full bg-primary-foreground/20 p-1 md:hidden">
            <button
              type="button"
              onClick={() => setUserMode("commuter")}
              className={cn(
                "rounded-full p-2 transition-all",
                userMode === "commuter"
                  ? "bg-primary-foreground text-primary"
                  : "text-primary-foreground"
              )}
              aria-label="Commuter mode"
            >
              <User className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setUserMode("driver")}
              className={cn(
                "rounded-full p-2 transition-all",
                userMode === "driver"
                  ? "bg-primary-foreground text-primary"
                  : "text-primary-foreground"
              )}
              aria-label="Driver mode"
            >
              <Truck className="h-4 w-4" />
            </button>
          </div>

          {/* Settings Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Settings className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                {language === "tl" ? "Mga Setting" : "Settings"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              <div className="p-2">
                <p className="mb-2 text-xs font-medium text-muted-foreground">
                  {language === "tl" ? "Wika" : "Language"}
                </p>
                <LanguageToggle 
                  language={language} 
                  onToggle={toggleLanguage}
                  className="w-full"
                />
              </div>

              <DropdownMenuSeparator />

              <div className="p-2">
                <p className="mb-2 text-xs font-medium text-muted-foreground">
                  {language === "tl" ? "Data Mode" : "Data Mode"}
                </p>
                <DataModeToggle 
                  mode={dataMode} 
                  onToggle={toggleDataMode} 
                  language={language}
                  className="w-full"
                />
              </div>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => onViewChange("settings")}>
                <Settings className="mr-2 h-4 w-4" />
                {language === "tl" ? "Lahat ng Setting" : "All Settings"}
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => onViewChange("profile")}>
                <UserCircle className="mr-2 h-4 w-4" />
                {language === "tl" ? "Profile" : "Profile"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Quick Info Bar (Optional - shows current mode and status) */}
      <div className="border-t border-primary-foreground/10 bg-primary/90 px-4 py-1.5">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            {userMode === "commuter" ? (
              <>
                <User className="h-3 w-3" />
                <span className="text-primary-foreground/80">
                  {language === "tl" ? "Pasahero Mode" : "Commuter Mode"}
                </span>
              </>
            ) : (
              <>
                <Truck className="h-3 w-3" />
                <span className="text-primary-foreground/80">
                  {language === "tl" ? "Drayber Mode" : "Driver Mode"}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-1 text-primary-foreground/60">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-jeepnigo-green" />
            <span>{language === "tl" ? "Live" : "Live"}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
