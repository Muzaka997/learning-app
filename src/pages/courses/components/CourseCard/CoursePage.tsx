import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { Course } from "./CourseCard";
import {
  ContentBlock,
  HomeworkBlock,
  Iframe,
  StyledContainer,
  StyledContentTitle,
  StyledHeader,
  StyledP,
  VideoBlock,
  WeekDetails,
  WeekSummary,
  WeekTitle,
} from "./StyledCoursePage";

const getYouTubeId = (url?: string) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const CoursePage = () => {
  console.log(useParams());
  const { id } = useParams<{ id: string }>();
  console.log("Course ID from URL:", id);

  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `https://devcamper-api-i20h.onrender.com/api/v1/courses/${id}`,
        );
        setCourse(response.data.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };
    if (id) fetchCourse();
  }, [id]);

  if (!course) return <p>Loading course...</p>;

  return (
    <StyledContainer>
      <StyledHeader>{course.title}</StyledHeader>
      <StyledP>{course.description}</StyledP>
      <ContentBlock>
        {course.Weeks?.map((week) => (
          <div key={week.week}>
            <WeekDetails>
              <WeekSummary>
                <WeekTitle>Week {week.week}</WeekTitle>
              </WeekSummary>

              {week.content.map((item, index) => {
                if (item.type === "video") {
                  const videoId = getYouTubeId(item.url);
                  return (
                    <VideoBlock key={index}>
                      <StyledContentTitle>🎥 {item.title}</StyledContentTitle>
                      {videoId && (
                        <Iframe
                          width="560"
                          height="315"
                          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                          allowFullScreen
                        />
                      )}
                    </VideoBlock>
                  );
                }

                if (item.type === "homework") {
                  return (
                    <HomeworkBlock key={index}>
                      <h4>📝 Homework</h4>
                      <p>{item.description}</p>
                    </HomeworkBlock>
                  );
                }

                return null;
              })}
            </WeekDetails>
          </div>
        ))}
      </ContentBlock>
    </StyledContainer>
  );
};

export default CoursePage;
