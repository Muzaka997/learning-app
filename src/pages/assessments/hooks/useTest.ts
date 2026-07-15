import { useState } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import type { Test } from "../Assessments";

export const TEST_QUERY = gql`
  query Test($id: ID!) {
    test(id: $id) {
      id
      courseTitle
      title
      timeLimitMinutes
      passingScore
      questions {
        id
        question
        options
      }
    }
  }
`;

interface TestQueryData {
  test: Test | null;
}

export const useTest = (id?: string) => {
  // Kept for API compatibility with AssessmentPage; set after a successful submit.
  const [submitted, setSubmitted] = useState(false);

  const { data, loading, error } = useQuery<TestQueryData>(TEST_QUERY, {
    variables: { id: id as string },
    skip: !id,
    fetchPolicy: "cache-and-network",
  });

  const backendTest = data?.test ?? null;

  const test: Test | null = backendTest
    ? {
        id: backendTest.id,
        courseTitle: backendTest.courseTitle,
        title: backendTest.title,
        timeLimitMinutes: backendTest.timeLimitMinutes,
        passingScore: backendTest.passingScore,
        questions: backendTest.questions,
      }
    : null;

  return {
    test,
    submitted,
    setSubmitted,
    loading,
    error: error ?? (!id ? new Error("No id param present") : null),
  } as const;
};

export default useTest;
