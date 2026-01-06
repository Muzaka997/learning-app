import React, { useEffect, useState } from "react";
import CourseCard from "./components/CourseCard/CourseCard";
import type { Course } from "./components/CourseCard/CourseCard";

import axios from "axios";
import { StyledContainer, StyledCoursesContainer } from "./Courses.styled";

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get("http://localhost:5001/api/v1/courses");

      const backendCourses = response.data.data;

      // 🔁 Map backend data → frontend Course interface
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mappedCourses: Course[] = backendCourses.map((course: any) => ({
        _id: course._id,
        title: course.title,
        description: course.description,
        image: course.image,
        videos: course.videos || [],
        homeworks: course.homeworks || [],
      }));

      setCourses(mappedCourses);
    };

    fetchCourses();
  }, []);

  return (
    <StyledContainer $darkMode={false}>
      <h1>My Courses</h1>

      <StyledCoursesContainer>
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </StyledCoursesContainer>
    </StyledContainer>
  );
};

export default CoursesPage;
