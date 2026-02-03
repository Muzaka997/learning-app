import React from "react";
import type { Test } from "../Assessments";
import { useNavigate } from "react-router-dom";
import { AssessmentCardContainer } from "./AssessmentCard.styles";
import { useAuth } from "../../auth/useAuth";

interface Props {
  assessment: Partial<Test>;
}

const AssessmentCard: React.FC<Props> = ({ assessment }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = () => {
    navigate(`/tests/${assessment.id}`);
  };

  const assessmentResult = user?.testResults?.find(
    (tr) => tr.test === assessment.id,
  );

  return assessmentResult?.submitted ? (
    <AssessmentCardContainer>
      <h3>{assessment.title}</h3>
      <p>Course: {assessment.courseTitle}</p>
      <p>Your Score: {assessmentResult?.score || 0}%</p>
    </AssessmentCardContainer>
  ) : (
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
