import React from "react";
import "./Assessments.css";

export interface Assessment {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

interface Props {
  assessment: Assessment;
}

const AssessmentCard: React.FC<Props> = ({ assessment }) => {
  return (
    <div className="assessment-card">
      <h3>{assessment.title}</h3>
      <p>{assessment.description}</p>
      <span className={`difficulty ${assessment.difficulty.toLowerCase()}`}>
        {assessment.difficulty}
      </span>

      <button>Start Assessment</button>
    </div>
  );
};

export default AssessmentCard;
