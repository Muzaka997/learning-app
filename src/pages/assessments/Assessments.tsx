import React from "react";
import AssessmentCard from "./AssessmentCard";
import type { Assessment } from "./AssessmentCard";
import "./Assessments.css";

const assessments: Assessment[] = [
  {
    id: "a1",
    title: "JavaScript Basics Quiz",
    description: "Test your understanding of fundamental JavaScript concepts.",
    difficulty: "Beginner",
  },
  {
    id: "a2",
    title: "CSS Layout Challenge",
    description: "Show your skills with Flexbox, Grid, and layouts.",
    difficulty: "Intermediate",
  },
  {
    id: "a3",
    title: "React Mini Project",
    description: "Build a small React component with state and props.",
    difficulty: "Advanced",
  },
];

const Assessments: React.FC = () => {
  return (
    <div className="assessments-container">
      <h1 className="page-title">Assessments</h1>

      <div className="assessments-grid">
        {assessments.map((assessment) => (
          <AssessmentCard key={assessment.id} assessment={assessment} />
        ))}
      </div>
    </div>
  );
};

export default Assessments;
