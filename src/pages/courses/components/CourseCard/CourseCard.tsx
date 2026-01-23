import {
  StyledButton,
  StyledCourseCard,
  StyledImage,
} from "./CourseCard.styles";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth/useAuth";

export interface WeekContent {
  type: "video" | "homework";
  title?: string;
  url?: string;
  description?: string;
}

// Type for each week
export interface Week {
  week: number;
  content: WeekContent[];
}

// Type for a single course
export interface Course {
  id: string;
  title: string;
  description: string;
  weeks: number;
  tuition: number;
  minimumSkill: "beginner" | "intermediate" | "advanced";
  scholarshipAvailable: boolean;
  image: {
    url: string;
    publicId: string;
  };
  Weeks: Week[];
}

interface Props {
  course: Partial<Course>;
}

const CourseCard: React.FC<Props> = ({ course }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = () => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <StyledCourseCard $darkMode={false}>
      {course.image?.url ? (
        <StyledImage src={course.image.url} alt={course.title} loading="lazy" />
      ) : (
        <p>No image available</p>
      )}

      <h3>{course.title}</h3>
      <p>{course.description}</p>

      {user ? (
        <StyledButton onClick={handleSubmit}>View Course</StyledButton>
      ) : (
        <StyledButton>Please log in to view course details.</StyledButton>
      )}
    </StyledCourseCard>
  );
};

export default CourseCard;
