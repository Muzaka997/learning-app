import { useState } from "react";

export const useQuiz = (totalQuestions: number, submitted: boolean) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (questionId: string, option: string) => {
    if (submitted || !totalQuestions) return;

    setAnswers((prev) => ({ ...prev, [questionId]: option }));

    setTimeout(() => {
      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 300);
  };

  return { answers, currentIndex, setCurrentIndex, handleSelect } as const;
};

export default useQuiz;
