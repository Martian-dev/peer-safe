"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      title="theme"
      size="icon"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <Sun className="blcock h-[1.2rem] w-[1.2rem] dark:hidden" />
      <Moon className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
    </Button>
  );
};

export default ThemeToggle;
