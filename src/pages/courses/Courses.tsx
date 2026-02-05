import React, { useEffect, useState } from "react";

import axios from "axios";
import { StyledContainer, StyledCoursesContainer } from "./Courses.styled";
import CourseCard, { type Course } from "./components/CourseCard/CourseCard";
import config from "../../config";

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get(`${config.apiBaseURL}/courses`);

      const backendCourses = response.data.data;

      // 🔁 Map backend data → frontend Course interface
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mappedCourses: Course[] = backendCourses.map((course: any) => ({
        id: course._id,
        title: course.title,
        description: course.description,
        image: course.image,
        tuition: course.tuition,
        minimumSkill: course.minimumSkill,
        scholarshipAvailable: course.scholarshipsAvailable,
        user: course.user, // optional
        Weeks: course.Weeks, // optional, empty for list page
      }));

      setCourses(mappedCourses);
      console.log(mappedCourses);
    };

    fetchCourses();
  }, []);

  return (
    <StyledContainer $darkMode={false}>
      <h1>My Courses</h1>

      <StyledCoursesContainer>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </StyledCoursesContainer>
    </StyledContainer>
  );
};

export default CoursesPage;
