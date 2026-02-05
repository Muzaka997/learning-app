import React, { useEffect, useState } from "react";
import AssessmentCard from "./components/AssessmentCard";

import "./Assessments.css";
import axios from "axios";
import config from "../../config";

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

type ResponseTestType = {
  _id: string;
  courseTitle: string;
  title: string;
  timeLimitMinutes: number;
  passingScore: number;
  questions: Question[];
  createdAt?: Date;
};

const Assessments: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    const fetchTests = async () => {
      const response = await axios.get(`${config.apiBaseURL}/tests`);

      const backendTests = response.data.data as ResponseTestType[];

      const mappedTests: Test[] = backendTests.map((test) => ({
        id: test._id,
        courseTitle: test.courseTitle,
        title: test.title,
        timeLimitMinutes: test.timeLimitMinutes,
        passingScore: test.passingScore,
        questions: test.questions,
        createdAt: test.createdAt,
      }));
      setTests(mappedTests);
    };
    fetchTests();
  }, []);

  return (
    <div className="assessments-container">
      <h1 className="page-title">Assessments</h1>

      <div className="assessments-grid">
        {tests.map((assessment) => (
          <AssessmentCard key={assessment.id} assessment={assessment} />
        ))}
      </div>
    </div>
  );
};

export default Assessments;
