import { useParams, useNavigate } from "react-router-dom";
import {
  Options,
  PrimaryButton,
  QuestionCard,
  QuestionTitle,
  QuizContainer,
  QuizHeader,
  ResultActions,
  ResultContainer,
  ResultSubtitle,
  ResultTitle,
  StyledOption,
  SubmitButton,
} from "./AssessmentPage.styled";
import { useAuth } from "../../auth/useAuth";
import type { Test } from "../Assessments";
import { useTest } from "../hooks/useTest.ts";
import { useQuiz } from "../hooks/useQuiz.ts";
import { useSubmitTest } from "../hooks/useSubmitTest.ts";

const TestPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { fetchCurrentUser } = useAuth();

  const { test, submitted, setSubmitted } = useTest(id);
  const { answers, currentIndex, handleSelect } = useQuiz(
    test?.questions.length || 0,
    submitted,
  );
  const { result, submit } = useSubmitTest(
    test?.id,
    answers,
    test?.questions.length || 0,
    fetchCurrentUser,
  );

  const handleSubmit = async () => {
    const ok = await submit();
    if (ok) setSubmitted(true);
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
        <ResultContainer>
          <ResultActions>
            <PrimaryButton onClick={() => navigate("/assessments")}>
              Back to Assessments
            </PrimaryButton>
          </ResultActions>
          <ResultTitle>You have already completed this test.</ResultTitle>
          <ResultSubtitle>
            Score: {result.score}% — {result.passed ? "Passed 🎉" : "Failed"}
          </ResultSubtitle>

          {/* Optional: Show answers with correct/wrong highlights */}
          {test.questions.map(
            (question: Test["questions"][number], index: number) => {
              const correctAnswer = result.correctAnswers[question.id];
              return (
                <QuestionCard key={question.id}>
                  <QuestionTitle>
                    {index + 1}. {question.question}
                  </QuestionTitle>

                  <Options>
                    {question.options.map((option: string) => {
                      const isSelected = answers[question.id] === option;
                      const isCorrect = option === correctAnswer;
                      const isWrong = isSelected && option !== correctAnswer;

                      return (
                        <StyledOption
                          key={option}
                          $selected={isSelected}
                          $correct={isCorrect}
                          $wrong={isWrong}
                        >
                          {option}
                        </StyledOption>
                      );
                    })}
                  </Options>
                </QuestionCard>
              );
            },
          )}
        </ResultContainer>
      ) : (
        // ✅ Show only the current question while taking the test
        <QuestionCard key={currentQuestion.id}>
          <QuestionTitle>
            {currentIndex + 1}. {currentQuestion.question}
          </QuestionTitle>

          <Options>
            {currentQuestion.options.map((option: string) => {
              const isSelected = answers[currentQuestion.id] === option;

              return (
                <StyledOption key={option} $selected={isSelected}>
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
