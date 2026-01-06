import React, { useEffect, useState } from "react";
import {
  StyledButton,
  StyledCourseCard,
  StyledImage,
} from "./CourseCard.styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth/useAuth";

export interface Video {
  _id: string;
  week: number;
  title: string;
  url: string;
}

export interface Homework {
  _id: string;
  week: number;
  description: string;
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  image: string;
  videos: Video[];
  homeworks: Homework[];
}

interface Props {
  course: Course;
}

const CourseCard: React.FC<Props> = ({ course }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = () => {
    navigate(`/courses/${course._id}`);
  };

  useEffect(() => {
    let isMounted = true; // flag to prevent state update if component unmounts
    let objectUrl: string | null = null; // store the local URL

    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/uploads/${course.image}`,
          { responseType: "blob" }
        );

        objectUrl = URL.createObjectURL(response.data);

        if (isMounted) {
          setImageUrl(objectUrl);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();

    // Cleanup: revoke the object URL to prevent memory leaks
    return () => {
      isMounted = false;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [course.image]);

  return (
    <StyledCourseCard $darkMode={false}>
      {imageUrl ? (
        <StyledImage src={imageUrl} alt={course.title} />
      ) : (
        <p>Loading image...</p>
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
