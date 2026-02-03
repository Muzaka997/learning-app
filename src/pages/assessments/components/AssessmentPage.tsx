import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
import authApi from "../../auth/authApi";
import { useAuth } from "../../auth/useAuth";

const TestPage = () => {
  const { id } = useParams<{ id: string }>();
  const [test, setTest] = useState<Test | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState<{
    score: number;
    passed: boolean;
    correctAnswers: Record<string, string>;
  } | null>(null);
  const { fetchCurrentUser } = useAuth();

  // Fetch test
  useEffect(() => {
    if (!id) return;

    const fetchTest = async () => {
      try {
        const response = await authApi.get(`/tests/${id}`);
        const backendTest = response.data.data;

        if (backendTest.submitted) {
          alert(
            "You have already completed this test. You cannot take it again.",
          );
          setSubmitted(true); // prevents test UI from showing
          return; // stop here — do NOT set test
        }

        const mappedTest: Test = {
          id: backendTest._id || backendTest.id, // fallback
          courseTitle: backendTest.courseTitle,
          title: backendTest.title,
          timeLimitMinutes: backendTest.timeLimitMinutes,
          passingScore: backendTest.passingScore,
          questions: backendTest.questions,
          createdAt: backendTest.createdAt,
        };

        setTest(mappedTest);
      } catch (error) {
        console.error("Error fetching test:", error);
      }
    };

    fetchTest();
  }, [id]);

  // Select answer
  const handleSelect = (questionId: string, option: string) => {
    if (submitted || !test) return;

    setAnswers((prev) => ({ ...prev, [questionId]: option }));

    setTimeout(() => {
      if (currentIndex < test.questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 300);
  };

  // Submit test
  const handleSubmit = async () => {
    if (!test?.id) return alert("Test ID missing");

    if (Object.keys(answers).length !== test.questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const formattedAnswers = Object.entries(answers).map(
      ([questionId, selectedOption]) => ({ questionId, selectedOption }),
    );

    // ✅ Use authApi — it will automatically send token
    const response = await authApi.post(`/users/${test.id}/submit`, {
      answers: formattedAnswers,
    });

    setResult({
      score: response.data.score,
      passed: response.data.passed,
      correctAnswers: response.data.correctAnswers,
    });

    setSubmitted(true);
    fetchCurrentUser(); // refresh user data to update test results in context
  };

  if (!test) return <p>Loading test...</p>;

  const currentQuestion = test.questions[currentIndex];
  const isLastQuestion = currentIndex === test.questions.length - 1;

  return (
    <QuizContainer>
      <QuizHeader>
        <h1>{test.title}</h1>
        <p>
          {test.courseTitle} • {test.timeLimitMinutes} min • Passing{" "}
          {test.passingScore}%
        </p>
      </QuizHeader>
      {submitted && result ? (
        // ✅ Show only results — hide all questions
        <div style={{ marginTop: "20px" }}>
          <h2>You have already completed this test.</h2>
          <h3>
            Score: {result.score}% — {result.passed ? "Passed 🎉" : "Failed"}
          </h3>

          {/* Optional: Show answers with correct/wrong highlights */}
          {test.questions.map((question, index) => {
            const correctAnswer = result.correctAnswers[question.id];
            return (
              <QuestionCard key={question.id}>
                <QuestionTitle>
                  {index + 1}. {question.question}
                </QuestionTitle>

                <Options>
                  {question.options.map((option) => {
                    const isSelected = answers[question.id] === option;
                    const isCorrect = option === correctAnswer;
                    const isWrong = isSelected && option !== correctAnswer;

                    return (
                      <StyledOption
                        key={option}
                        selected={isSelected}
                        correct={isCorrect}
                        wrong={isWrong}
                      >
                        {option}
                      </StyledOption>
                    );
                  })}
                </Options>
              </QuestionCard>
            );
          })}
        </div>
      ) : (
        // ✅ Show only the current question while taking the test
        <QuestionCard key={currentQuestion.id}>
          <QuestionTitle>
            {currentIndex + 1}. {currentQuestion.question}
          </QuestionTitle>

          <Options>
            {currentQuestion.options.map((option) => {
              const isSelected = answers[currentQuestion.id] === option;

              return (
                <StyledOption key={option} selected={isSelected}>
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    checked={isSelected}
                    onChange={() => handleSelect(currentQuestion.id, option)}
                  />
                  {option}
                </StyledOption>
              );
            })}
          </Options>

          {isLastQuestion && (
            <SubmitButton onClick={handleSubmit}>Submit Test</SubmitButton>
          )}
        </QuestionCard>
      )}
    </QuizContainer>
  );
};

export default TestPage;
