import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { Test } from "../Assessments";
import {
  Options,
  QuestionCard,
  QuestionTitle,
  QuizContainer,
  QuizHeader,
  StyledOption,
  SubmitButton,
} from "./AssessmentPage.styled";

const TestPage = () => {
  const { id } = useParams<{ id: string }>();
  const [test, setTest] = useState<Test | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/tests/${id}`
        );
        setTest(response.data.data);
      } catch (error) {
        console.error("Error fetching test:", error);
      }
    };

    if (id) fetchTest();
  }, [id]);

  const handleSelect = (questionId: string, option: string) => {
    if (submitted) return;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmit = () => {
    if (!test) return;

    if (Object.keys(answers).length !== test.questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }

    let correct = 0;

    test.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });

    setSubmitted(true);

    const percentage = Math.round((correct / test.questions.length) * 100);

    alert(`You scored ${percentage}%`);
  };

  if (!test) return <p>Loading test...</p>;

  //   const allAnswered =
  //     test && Object.keys(answers).length === test.questions.length;

  return (
    <QuizContainer>
      <QuizHeader>
        <h1>{test.title}</h1>
        <p>
          {test.courseTitle} • {test.timeLimitMinutes} min • Passing{" "}
          {test.passingScore}%
        </p>
      </QuizHeader>

      {test.questions.map((question, index) => (
        <QuestionCard key={question.id}>
          <QuestionTitle>
            {index + 1}. {question.question}
          </QuestionTitle>

          <Options>
            {question.options.map((option) => {
              const isSelected = answers[question.id] === option;
              const isCorrect = submitted && option === question.correctAnswer;
              const isWrong =
                submitted && isSelected && option !== question.correctAnswer;

              return (
                <StyledOption
                  key={option}
                  selected={isSelected}
                  correct={isCorrect}
                  wrong={isWrong}
                >
                  <input
                    type="radio"
                    name={question.id}
                    checked={isSelected}
                    onChange={() => handleSelect(question.id, option)}
                    required
                  />
                  {option}
                </StyledOption>
              );
            })}
          </Options>
        </QuestionCard>
      ))}

      <SubmitButton onClick={handleSubmit}>Submit Test</SubmitButton>
    </QuizContainer>
  );
};

export default TestPage;
