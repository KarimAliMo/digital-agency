"use client";
import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useState } from "react";

const ToggleMode = () => {
  const { setTheme } = useTheme("light");
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };
  return <Switch onClick={toggleTheme} />;
};

export default ToggleMode;
