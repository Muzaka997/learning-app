import React from "react";
import type { Test } from "../Assessments";
import { useNavigate } from "react-router-dom";
import {
  AssessmentCardContainer,
  Title,
  Description,
  ScoreRing,
  PrimaryButton,
} from "./AssessmentCard.styles";
import { useAuth } from "../../auth/useAuth";

interface Props {
  assessment: Partial<Test>;
}

const RADIUS = 56;
const CIRC = 2 * Math.PI * RADIUS;

const ringColor = (score: number) => {
  if (score >= 70) return "#2fa36b"; // pass green
  if (score >= 40) return "#e0a63b"; // amber
  return "#d9534f"; // red
};

const AssessmentCard: React.FC<Props> = ({ assessment }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = () => {
    navigate(`/tests/${assessment.id}`);
  };

  const assessmentResult = user?.testResults?.find(
    (tr) => tr.test === assessment.id,
  );

  if (assessmentResult?.submitted) {
    const score = assessmentResult?.score ?? 0;
    const dash = `${((CIRC * score) / 100).toFixed(1)} ${CIRC.toFixed(1)}`;
    return (
      <AssessmentCardContainer>
        <Title>{assessment.title}</Title>
        <Description>Course: {assessment.courseTitle}</Description>
        <ScoreRing>
          <svg width="128" height="128" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r={RADIUS}
              fill="none"
              stroke="rgba(128,140,160,0.22)"
              strokeWidth="11"
            />
            <circle
              cx="64"
              cy="64"
              r={RADIUS}
              fill="none"
              stroke={ringColor(score)}
              strokeWidth="11"
              strokeLinecap="round"
              strokeDasharray={dash}
            />
          </svg>
          <div className="score-value">
            <span className="score-number">{score}%</span>
            <span className="score-label">Your Score</span>
          </div>
        </ScoreRing>
        <PrimaryButton onClick={handleSubmit}>Review answers</PrimaryButton>
      </AssessmentCardContainer>
    );
  }

  return (
    <AssessmentCardContainer>
      <Title>{assessment.title}</Title>
      <Description>Course: {assessment.courseTitle}</Description>
      <Description>Time Limit: {assessment.timeLimitMinutes} minutes</Description>
      <Description>Passing Score: {assessment.passingScore}%</Description>
      <PrimaryButton onClick={handleSubmit}>Start Assessment</PrimaryButton>
    </AssessmentCardContainer>
  );
};

export default AssessmentCard;
