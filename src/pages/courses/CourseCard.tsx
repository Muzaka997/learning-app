import React from "react";
import { Card } from "./CourseCard.styles";

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Props {
  course: Course;
}

const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <Card>
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <button>View Course</button>
    </Card>
  );
};

export default CourseCard;
