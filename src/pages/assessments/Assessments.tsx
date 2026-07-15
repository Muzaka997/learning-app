import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import AssessmentCard from "./components/AssessmentCard";

import "./Assessments.css";

// Question type
export interface Question {
  id: string;
  question: string;
  options: string[];
}

// Test type
export interface Test {
  id: string;
  courseTitle: string;
  title: string;
  timeLimitMinutes: number;
  passingScore: number;
  questions: Question[];
  createdAt?: Date; // optional because MongoDB will set it by default
}

export const TESTS_QUERY = gql`
  query Tests {
    tests {
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

interface TestsQueryData {
  tests: Test[];
}

const Assessments: React.FC = () => {
  const { data } = useQuery<TestsQueryData>(TESTS_QUERY, {
    fetchPolicy: "cache-and-network",
  });

  const tests: Test[] = data?.tests ?? [];

  return (
    <div className="assessments-container">
      <h1 className="page-title">Assessments</h1>
      <p className="page-sub">
        Review how your understanding is progressing across each course.
      </p>

      <div className="assessments-grid">
        {tests.map((assessment) => (
          <AssessmentCard key={assessment.id} assessment={assessment} />
        ))}
      </div>
    </div>
  );
};

export default Assessments;
