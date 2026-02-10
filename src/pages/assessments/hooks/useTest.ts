import { useEffect, useState } from "react";
import type { Test } from "../Assessments";
import authApi from "../../auth/authApi";

export const useTest = (id?: string) => {
  const [test, setTest] = useState<Test | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchTest = async () => {
      if (!id) {
        setError(new Error("No id param present"));
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const response = await authApi.get(`/tests/${id}`);
        const backendTest = response.data.data;

        if (backendTest?.submitted) {
          alert(
            "You have already completed this test. You cannot take it again.",
          );
          setSubmitted(true);
          setTest(null);
          return;
        }

        const mapped: Test = {
          id: backendTest._id || backendTest.id,
          courseTitle: backendTest.courseTitle,
          title: backendTest.title,
          timeLimitMinutes: backendTest.timeLimitMinutes,
          passingScore: backendTest.passingScore,
          questions: backendTest.questions,
          createdAt: backendTest.createdAt,
        };
        setTest(mapped);
      } catch (e) {
        console.error("Error fetching test:", e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchTest();
  }, [id]);

  return { test, submitted, setSubmitted, loading, error } as const;
};

export default useTest;
