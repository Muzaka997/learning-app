import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { Test } from "../Assessments";

const TestPage = () => {
  const { id } = useParams<{ id: string }>();
  const [tests, setTests] = useState<Test | null>(null);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/tests/${id}`
        );
        setTests(response.data.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };
    if (id) fetchTests();
  }, [id]);

  if (!tests) return <p>Loading course...</p>;

  return (
    <div>
      <h1>{tests.title}</h1>
      <p>Course: {tests.courseTitle}</p>
      <p>Time: {tests.timeLimitMinutes} minutes</p>
      <p>Passing Score: {tests.passingScore}%</p>
      <p>Questions: {tests.questions.length}</p>
    </div>
  );
};

export default TestPage;
