import {
  Body,
  Media,
  Meta,
  Placeholder,
  SkillChip,
  StyledButton,
  StyledCourseCard,
  StyledImage,
} from "./CourseCard.styles";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth/useAuth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

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
  /** "full" = Courses page (solid button, square image); "home" = Home grid (ghost button, 4:3 image). */
  variant?: "full" | "home";
}

const CourseCard: React.FC<Props> = ({ course, variant = "full" }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const isFull = variant === "full";

  const lessonCount = (course.Weeks ?? []).reduce(
    (total, w) => total + (w.content?.length ?? 0),
    0,
  );

  const handleSubmit = () => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <StyledCourseCard $darkMode={false}>
      <Media>
        {course.image?.url ? (
          <StyledImage
            src={course.image.url}
            alt={course.title}
            loading="lazy"
            $square={isFull}
          />
        ) : (
          <Placeholder $square={isFull}>
            <AutoStoriesIcon />
          </Placeholder>
        )}
        {isFull && course.minimumSkill && (
          <SkillChip $level={course.minimumSkill}>
            {course.minimumSkill}
          </SkillChip>
        )}
      </Media>

      <Body>
        {isFull && (course.weeks || lessonCount > 0) && (
          <Meta>
            {course.weeks ? (
              <span>
                <ScheduleIcon />
                {course.weeks} {course.weeks === 1 ? "week" : "weeks"}
              </span>
            ) : null}
            {course.weeks && lessonCount > 0 ? (
              <span className="dot" />
            ) : null}
            {lessonCount > 0 ? (
              <span>
                <MenuBookIcon />
                {lessonCount} {lessonCount === 1 ? "lesson" : "lessons"}
              </span>
            ) : null}
          </Meta>
        )}

        <h3>{course.title}</h3>
        <p>{course.description}</p>

        {user ? (
          <StyledButton $primary={isFull} onClick={handleSubmit}>
            View Course
          </StyledButton>
        ) : (
          <StyledButton>Please log in to view course details.</StyledButton>
        )}
      </Body>
    </StyledCourseCard>
  );
};

export default CourseCard;
