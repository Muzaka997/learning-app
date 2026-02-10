import { useState } from "react";
import authApi from "../../auth/authApi";

export type SubmitResult = {
  score: number;
  passed: boolean;
  correctAnswers: Record<string, string>;
};

export const useSubmitTest = (
  testId: string | undefined,
  answers: Record<string, string>,
  totalQuestions: number,
  fetchCurrentUser: () => Promise<unknown>,
) => {
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (): Promise<boolean> => {
    if (!testId) {
      alert("Test ID missing");
      return false;
    }

    if (Object.keys(answers).length !== totalQuestions) {
      alert("Please answer all questions before submitting.");
      return false;
    }

    const formattedAnswers = Object.entries(answers).map(
      ([questionId, selectedOption]) => ({ questionId, selectedOption }),
    );

    setSubmitting(true);
    try {
      const response = await authApi.post(`/users/${testId}/submit`, {
        answers: formattedAnswers,
      });

      setResult({
        score: response.data.score,
        passed: response.data.passed,
        correctAnswers: response.data.correctAnswers,
      });

      await fetchCurrentUser();
      return true;
    } catch (e) {
      console.error("Submit test failed:", e);
      alert("Failed to submit test. Please try again.");
      return false;
    } finally {
      setSubmitting(false);
    }
  };

  return { result, submit, submitting } as const;
};

export default useSubmitTest;
