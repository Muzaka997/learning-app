import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { Course } from "./CourseCard";

const getYouTubeId = (url: string) => {
  // Handles URLs like https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const CoursePage = () => {
  const { _id } = useParams<{ _id: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/courses/${_id}`
        );
        setCourse(response.data.data);
      } catch (error) {
        console.error("Failed to fetch course:", error);
      }
    };

    if (_id) fetchCourse();
  }, [_id]);

  if (!course) return <p>Loading course...</p>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <h2>Videos</h2>
      {course.videos.length > 0 ? (
        <div>
          {course.videos.map((video) => {
            const videoId = getYouTubeId(video.url);
            return (
              <div key={video._id} style={{ marginBottom: "20px" }}>
                <p>
                  Week {video.week}: {video.title}
                </p>
                {videoId ? (
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&iv_load_policy=3`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p>Invalid video URL</p>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p>No videos yet</p>
      )}

      <h2>Homeworks</h2>
      {course.homeworks.length > 0 ? (
        <ul>
          {course.homeworks.map((hw) => (
            <li key={hw._id}>
              Week {hw.week}: {hw.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No homeworks yet</p>
      )}
    </div>
  );
};

export default CoursePage;
