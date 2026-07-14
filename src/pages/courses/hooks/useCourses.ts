import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import type { Course } from "../components/CourseCard/CourseCard";

interface UseCoursesResult {
  courses: Course[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

// Raw shape returned by the GraphQL `courses` query (weeks is a string here).
interface CoursesQueryData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  courses: any[];
}

export const COURSES_QUERY = gql`
  query Courses {
    courses {
      id
      title
      description
      weeks
      tuition
      minimumSkill
      scholarshipAvailable
      image {
        url
        publicId
      }
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

// Backend stores `weeks` as a string; the UI Course type expects a number.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapCourse = (c: any): Course => ({
  ...c,
  weeks: Number(c.weeks ?? 0),
});

export const useCourses = (): UseCoursesResult => {
  const { data, loading, error, refetch } = useQuery<CoursesQueryData>(
    COURSES_QUERY,
    {
      fetchPolicy: "cache-and-network",
    },
  );

  const courses: Course[] = (data?.courses ?? []).map(mapCourse);

  return {
    courses,
    loading,
    error: error ? error.message : null,
    refetch: async () => {
      await refetch();
    },
  };
};

export default useCourses;
