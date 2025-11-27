import React from "react";
import CourseCard from "./CourseCard";
import type { Course } from "./CourseCard";
import reactImage from "../../assets/react.svg";
import typescriptImage from "../../assets/typescript.jpg";
import javascriptImage from "../../assets/javascript.png";

const courses: Course[] = [
  {
    id: "c1",
    title: "React for Beginners",
    description: "Learn the basics of React and build dynamic interfaces.",
    image: reactImage,
  },
  {
    id: "c2",
    title: "TypeScript Essentials",
    description: "Master TypeScript and write safer, cleaner code.",
    image: typescriptImage,
  },
  {
    id: "c3",
    title: "Advanced JavaScript",
    description: "Deep dive into JS concepts, patterns, and performance.",
    image: javascriptImage,
  },
];

const CoursesPage: React.FC = () => {
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
