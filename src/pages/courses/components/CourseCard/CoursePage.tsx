import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
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
import {
  EssayArea,
  EssayLabel,
  EssayWrap,
  EssayActions,
  EssayButton,
  SaveNote,
} from "./StyledCoursePage";

export const COURSE_QUERY = gql`
  query Course($id: ID!) {
    course(id: $id) {
      id
      title
      description
      image {
        url
        publicId
      }
      tuition
      minimumSkill
      scholarshipAvailable
      Weeks {
        week
        content {
          type
          title
          url
          description
        }
      }
    }
  }
`;

interface CourseQueryData {
  course: Course | null;
}

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

  const { data } = useQuery<CourseQueryData>(COURSE_QUERY, {
    variables: { id: id as string },
    skip: !id,
    fetchPolicy: "cache-and-network",
  });
  const course = data?.course ?? null;

  const storageKey = useMemo(
    () => (id ? `course_essays_${id}` : undefined),
    [id],
  );
  const [essays, setEssays] = useState<Record<string, string>>(() => {
    if (typeof window === "undefined") return {};
    try {
      if (!storageKey) return {};
      const raw = localStorage.getItem(storageKey);
      return raw ? (JSON.parse(raw) as Record<string, string>) : {};
    } catch {
      return {};
    }
  });
  const [saved, setSaved] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!storageKey) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(essays));
    } catch (e) {
      // ignore storage errors (quota/disabled)
      console.warn("Failed to save essay to localStorage", e);
    }
  }, [essays, storageKey]);

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
                  const essayKey = `wk${week.week}-hw${index}`;
                  return (
                    <HomeworkBlock key={index}>
                      <h4>📝 Homework</h4>
                      <p>{item.description}</p>

                      <EssayWrap>
                        <EssayLabel htmlFor={`essay-${essayKey}`}>
                          Your Essay / Notes
                        </EssayLabel>
                        <EssayArea
                          id={`essay-${essayKey}`}
                          placeholder="Write your homework here..."
                          value={essays[essayKey] || ""}
                          onChange={(e) =>
                            setEssays((prev) => ({
                              ...prev,
                              [essayKey]: e.target.value,
                            }))
                          }
                        />
                        <EssayActions>
                          <EssayButton
                            type="button"
                            onClick={() => {
                              if (!storageKey) return;
                              try {
                                localStorage.setItem(
                                  storageKey,
                                  JSON.stringify(essays),
                                );
                                setSaved((s) => ({ ...s, [essayKey]: true }));
                                setTimeout(
                                  () =>
                                    setSaved((s) => ({
                                      ...s,
                                      [essayKey]: false,
                                    })),
                                  1500,
                                );
                              } catch (e) {
                                console.warn(
                                  "Failed to save essay to localStorage",
                                  e,
                                );
                              }
                            }}
                          >
                            Save Essay
                          </EssayButton>
                          {saved[essayKey] && <SaveNote>Saved!</SaveNote>}
                        </EssayActions>
                      </EssayWrap>
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
