import React, { useEffect, useState } from "react";
import lightButton from "../../assets/website/light-mode-button.png";
import darkButton from "../../assets/website/dark-mode-button.png";

function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="cursor-pointer">
      {theme === "dark" ? (
        <img
          src={lightButton}
          className="w-8"
          onClick={() => setTheme("light")}
        />
      ) : (
        <img
          src={darkButton}
          className="w-8"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkMode;
