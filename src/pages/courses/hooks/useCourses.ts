import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import config from "../../../config";
import type { Course } from "../components/CourseCard/CourseCard";

interface UseCoursesResult {
  courses: Course[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

// Map raw backend course into the UI Course type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapCourse = (c: any): Course => ({
  id: c._id,
  title: c.title,
  description: c.description,
  image: c.image,
  tuition: c.tuition,
  minimumSkill: c.minimumSkill,
  scholarshipAvailable: c.scholarshipAvailable,
  // Backend stores weeks as string; we keep Weeks array for details page
  // "weeks" numeric is optional on card usage
  weeks: Number(c.weeks ?? 0) as unknown as number,
  Weeks: c.Weeks,
});

export const useCourses = (): UseCoursesResult => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const resp = await axios.get(`${config.apiBaseURL}/courses`, {
        withCredentials: true,
      });
      const backendCourses = resp.data?.data ?? [];
      const mapped: Course[] = backendCourses.map(mapCourse);
      setCourses(mapped);
    } catch (e) {
      const msg =
        (e as Error)?.message || "Failed to load courses. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchCourses();
  }, [fetchCourses]);

  return { courses, loading, error, refetch: fetchCourses };
};

export default useCourses;
