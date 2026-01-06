import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page/main";
import CoursesPage from "./pages/courses/Courses";
import Assessments from "./pages/assessments/Assessments";
import EBooks from "./pages/e-books/Ebooks";
import ContactUs from "./pages/contact/ContactUs";
import { CustomThemeProvider } from "./theme/ThemeContext";
import { GlobalStyles } from "./global-styles";
import ThemeButton from "./components/ThemeButton";
import Layout from "./components/Layout/Layout";

import Profile from "./pages/profile/profile";
import Register from "./pages/auth/components /Register";
import Login from "./pages/auth/components /Login";

import { AuthProvider } from "./pages/auth/authContext";
import CoursePage from "./pages/courses/components/CourseCard/CoursePage";

export default function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <ThemeButton />

      <BrowserRouter>
        {/* 🔐 AUTH PROVIDER MUST BE HERE */}
        <AuthProvider>
          <Routes>
            {/* 🌍 Public layout routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="courses" element={<CoursesPage />} />
              <Route path="assessments" element={<Assessments />} />
              <Route path="e-books" element={<EBooks />} />
              <Route path="contactus" element={<ContactUs />} />
              <Route path="/profile" element={<Profile />} />
            </Route>

            {/* 🔓 Auth routes (NO Layout / NavBar) */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="courses/:_id" element={<CoursePage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}
