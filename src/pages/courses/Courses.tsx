import React from "react";
import { StyledContainer, StyledCoursesContainer } from "./Courses.styled";
import CourseCard from "./components/CourseCard/CourseCard";
import { useCourses } from "./hooks/useCourses";

const CoursesPage: React.FC = () => {
  const { courses, loading, error } = useCourses();

  return (
    <StyledContainer $darkMode={false}>
      <h1>My Courses</h1>

      {loading && <p>Loading courses...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <StyledCoursesContainer>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </StyledCoursesContainer>
    </StyledContainer>
  );
};

export default CoursesPage;
