import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import type { Course } from "./CourseCard";

import axios from "axios";

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get("http://localhost:5001/api/v1/courses");

      const backendCourses = response.data.data;

      // 🔁 Map backend data → frontend Course interface
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mappedCourses: Course[] = backendCourses.map((course: any) => ({
        id: course._id,
        title: course.title,
        description: course.description,
        image: course.image,
      }));

      setCourses(mappedCourses);
    };

    fetchCourses();
  }, []);

  return (
    <main>
      <h1>Our Courses</h1>
      <p>Choose a course and start learning today. New content added weekly!</p>

      <div>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
};

export default CoursesPage;
