import { renderApp } from "./src/views/renderApp";
import { setCurrentTheme } from "./src/state/state";

renderApp();

// Theme toggle
const lightMode = document.getElementById("light-mode") as HTMLInputElement;
const darkMode = document.getElementById("dark-mode") as HTMLInputElement;

// Apply saved theme from localStorage
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
lightMode.checked = savedTheme === "light";
darkMode.checked = savedTheme === "dark";

// Update theme
type CurrentTheme = "light" | "dark";

/**
 * Save the selected theme to localStorage and update the theme
 * @param theme
 */
function updateTheme(theme: CurrentTheme): void {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  setCurrentTheme(theme);
}

// Event listeners to update theme
lightMode.addEventListener("change", () => updateTheme("light"));
darkMode.addEventListener("change", () => updateTheme("dark"));
