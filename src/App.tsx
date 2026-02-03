import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page/main";
import CoursesPage from "./pages/courses/Courses";
import Assessments from "./pages/assessments/Assessments";
import EBooks from "./pages/e-books/Ebooks";
import ContactUs from "./pages/contact/ContactUs";
import { CustomThemeProvider } from "./theme/ThemeContext";
import { GlobalStyles } from "./global-styles";

import Layout from "./components/Layout/Layout";

import Register from "./pages/auth/components /Register";
import Login from "./pages/auth/components /Login";

import { AuthProvider } from "./pages/auth/authContext";
import CoursePage from "./pages/courses/components/CourseCard/CoursePage";
import IndexRoute from "./navigation/indexRoute";

import Profile from "./pages/profile/profile";
import TestPage from "./pages/assessments/components/AssessmentPage";

export default function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyles />

      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* 🌍 Public layout routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<IndexRoute />} />

              <Route path="home" element={<MainPage />} />
              <Route path="courses" element={<CoursesPage />} />
              <Route path="assessments" element={<Assessments />} />
              <Route path="e-books" element={<EBooks />} />
              <Route path="contactus" element={<ContactUs />} />
              <Route path="profile" element={<Profile />} />
              <Route path="courses/:id" element={<CoursePage />} />
              <Route path="tests/:id" element={<TestPage />} />
            </Route>

            {/* 🔓 Auth routes (NO Layout / NavBar) */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}
