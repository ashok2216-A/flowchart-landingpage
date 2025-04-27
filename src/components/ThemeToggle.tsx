
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "w-10 h-10 relative overflow-hidden rounded-full border border-border/40",
        className
      )}
    >
      <Sun
        className={`h-4 w-4 absolute top-1/2 left-1/2 transition-all duration-300 ${
          theme === "light"
            ? "translate-x-[-50%] translate-y-[-50%] opacity-100"
            : "translate-x-[-50%] translate-y-[-200%] opacity-0"
        }`}
      />
      <Moon
        className={`h-4 w-4 absolute top-1/2 left-1/2 transition-all duration-300 ${
          theme === "dark"
            ? "translate-x-[-50%] translate-y-[-50%] opacity-100"
            : "translate-x-[-50%] translate-y-[100%] opacity-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
