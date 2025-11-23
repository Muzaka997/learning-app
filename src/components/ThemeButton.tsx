import { useThemeContext } from "../theme/useThemeContext";

export default function ThemeButton() {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme}>
      Switch to {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
}
