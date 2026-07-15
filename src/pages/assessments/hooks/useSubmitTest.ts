import { useState } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

export type SubmitResult = {
  score: number;
  passed: boolean;
  correctAnswers: Record<string, string>;
};

const SUBMIT_TEST = gql`
  mutation SubmitTest($testId: ID!, $answers: [AnswerInput!]!) {
    submitTest(testId: $testId, answers: $answers) {
      score
      passed
      correctAnswers {
        questionId
        answer
      }
    }
  }
`;

interface SubmitTestData {
  submitTest: {
    score: number;
    passed: boolean;
    correctAnswers: { questionId: string; answer: string }[];
  };
}

export const useSubmitTest = (
  testId: string | undefined,
  answers: Record<string, string>,
  totalQuestions: number,
  fetchCurrentUser: () => Promise<unknown>,
) => {
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [runSubmit, { loading: submitting }] =
    useMutation<SubmitTestData>(SUBMIT_TEST);

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

    try {
      const { data } = await runSubmit({
        variables: { testId, answers: formattedAnswers },
      });

      const payload = data?.submitTest;
      if (!payload) throw new Error("No result returned");

      // Rebuild the { questionId: answer } map the UI expects
      const correctAnswers: Record<string, string> = {};
      for (const c of payload.correctAnswers) {
        correctAnswers[c.questionId] = c.answer;
      }

      setResult({
        score: payload.score,
        passed: payload.passed,
        correctAnswers,
      });

      await fetchCurrentUser();
      return true;
    } catch (e) {
      console.error("Submit test failed:", e);
      alert("Failed to submit test. Please try again.");
      return false;
    }
  };

  return { result, submit, submitting } as const;
};

export default useSubmitTest;
