import { useThemeContext } from "../theme/useThemeContext";
import { ToggleButton } from "./ThemeButton.styled";

export default function ThemeButton() {
  const ctx = useThemeContext();
  const { toggleTheme } = ctx;
  const darkMode = ctx.darkmode ?? false;

  const sunIcon = darkMode ? "☀️" : "🌑";

  return <ToggleButton onClick={toggleTheme}>{sunIcon}</ToggleButton>;
}
