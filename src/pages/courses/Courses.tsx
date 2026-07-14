import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PageTitle,
  SectionHead,
  StyledContainer,
  StyledCoursesContainer,
  Subtitle,
  ViewAll,
} from "./Courses.styled";
import CourseCard from "./components/CourseCard/CourseCard";
import { useCourses } from "./hooks/useCourses";

interface Props {
  /** "full" = standalone Courses page; "home" = compact section on the Home page. */
  mode?: "full" | "home";
}

const CoursesPage: React.FC<Props> = ({ mode = "full" }) => {
  const { courses, loading, error } = useCourses();
  const navigate = useNavigate();
  const isHome = mode === "home";

  return (
    <StyledContainer $darkMode={false}>
      {isHome ? (
        <SectionHead>
          <h2>My Courses</h2>
          <ViewAll onClick={() => navigate("/courses")}>View all →</ViewAll>
        </SectionHead>
      ) : (
        <>
          <PageTitle>My Courses</PageTitle>
          <Subtitle>
            Structured paths through the writers and works that shaped
            literature.
          </Subtitle>
        </>
      )}

      {loading && <p>Loading courses...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <StyledCoursesContainer>
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            variant={isHome ? "home" : "full"}
          />
        ))}
      </StyledCoursesContainer>
    </StyledContainer>
  );
};

export default CoursesPage;
