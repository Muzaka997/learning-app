import { useThemeContext } from "../theme/useThemeContext";
import { ToggleButton } from "./ThemeButton.styled";

export default function ThemeButton() {
  const ctx = useThemeContext();
  const { toggleTheme } = ctx;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const darkMode = (ctx as any).darkMode ?? false;

  return (
    <ToggleButton onClick={toggleTheme}>{darkMode ? "☀️" : "🌑"}</ToggleButton>
  );
}
