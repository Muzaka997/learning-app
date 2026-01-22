import React from "react";
import type { Test } from "../Assessments";
import { useNavigate } from "react-router-dom";
import { AssessmentCardContainer } from "./AssessmentCard.styles";

interface Props {
  assessment: Partial<Test>;
}

const AssessmentCard: React.FC<Props> = ({ assessment }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/tests/${assessment.id}`);
  };

  return (
    <AssessmentCardContainer>
      <h3>{assessment.title}</h3>
      <p>Course: {assessment.courseTitle}</p>
      <p>Time Limit: {assessment.timeLimitMinutes} minutes</p>
      <p>Passing Score: {assessment.passingScore}%</p>

      <button onClick={handleSubmit}>Start Assessment</button>
    </AssessmentCardContainer>
  );
};

export default AssessmentCard;
