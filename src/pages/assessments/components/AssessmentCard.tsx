import React from "react";
import type { Test } from "../Assessments";
import { useNavigate } from "react-router-dom";

interface Props {
  assessment: Partial<Test>;
}

const AssessmentCard: React.FC<Props> = ({ assessment }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/tests/${assessment.id}`);
  };

  return (
    <div className="assessment-card">
      <h3>{assessment.title}</h3>
      <p>Course: {assessment.courseTitle}</p>
      <p>Time Limit: {assessment.timeLimitMinutes} minutes</p>
      <p>Passing Score: {assessment.passingScore}%</p>

      <button onClick={handleSubmit}>Start Assessment</button>
    </div>
  );
};

export default AssessmentCard;
