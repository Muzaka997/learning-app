import { useThemeContext } from "./useThemeContext";
import { ToggleButton } from "./ThemeButton.styled";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeButton() {
  const ctx = useThemeContext();
  const { toggleTheme } = ctx;
  const darkMode = ctx.darkmode ?? false;

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      $muted={!darkMode}
    >
      {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </ToggleButton>
  );
}
