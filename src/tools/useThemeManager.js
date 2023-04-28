import { useState } from "react";
import { darkTheme, konamiTheme, lightTheme } from "../style/Theme";

export const useThemeManager = () => {
  const defaultTheme = "light";

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || defaultTheme
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const cheatTheme = () => {
    setTheme("konami");
  };

  const handleTheme = (MyTheme) => {
    if (MyTheme === "dark") {
      return darkTheme;
    } else if (MyTheme === "konami") {
      return konamiTheme;
    } else {
      return lightTheme;
    }
  };

  return { theme, toggleTheme, handleTheme, cheatTheme };
};
