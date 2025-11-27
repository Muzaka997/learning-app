import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page/main";
import CoursesPage from "./pages/courses/Courses";
import NavBar from "./navigation/nav-bar";
import Assessments from "./pages/assessments/Assessments";
import EBooks from "./pages/e-books/Ebooks";
import ContactUs from "./pages/contact/ContactUs";
import { CustomThemeProvider } from "./theme/ThemeContext";
import { ContentWrapper, GlobalStyles } from "./global-styles";
import ThemeButton from "./components/ThemeButton";

export default function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <ThemeButton />
      <BrowserRouter>
        <NavBar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/e-books" element={<EBooks />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </ContentWrapper>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}
