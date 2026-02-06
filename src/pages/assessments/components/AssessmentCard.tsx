import React from "react";
import type { Test } from "../Assessments";
import { useNavigate } from "react-router-dom";
import {
  AssessmentCardContainer,
  Title,
  Description,
  PrimaryButton,
} from "./AssessmentCard.styles";
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
      <Title>{assessment.title}</Title>
      <Description>Course: {assessment.courseTitle}</Description>
      <Description>Your Score: {assessmentResult?.score || 0}%</Description>
    </AssessmentCardContainer>
  ) : (
    <AssessmentCardContainer>
      <Title>{assessment.title}</Title>
      <Description>Course: {assessment.courseTitle}</Description>
      <Description>
        Time Limit: {assessment.timeLimitMinutes} minutes
      </Description>
      <Description>Passing Score: {assessment.passingScore}%</Description>

      <PrimaryButton onClick={handleSubmit}>Start Assessment</PrimaryButton>
    </AssessmentCardContainer>
  );
};

export default AssessmentCard;
