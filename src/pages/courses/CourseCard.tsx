/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card } from "./CourseCard.styles";
import axios from "axios";

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
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/uploads/${course.image}`,
          { responseType: "blob" }
        );

        const url = URL.createObjectURL(response.data);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();

    // Cleanup the object URL to prevent memory leaks
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [course.image]);

  return (
    <Card>
      {imageUrl ? (
        <img src={imageUrl} alt={course.title} />
      ) : (
        <p>Loading image...</p>
      )}
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <button>View Course</button>
    </Card>
  );
};

export default CourseCard;
