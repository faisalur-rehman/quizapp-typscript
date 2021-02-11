import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchData } from "./Services/API";
import { QuestionState } from "./Services/API";

import { Difficulty } from "./Services/API";
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  userAnswer: string;
  isCorrect: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [quizOver, setQuizOver] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>();
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);

  const StartQuiz = async () => {
    setLoading(true);
    setQuizOver(false);
    const questions = await fetchData(TOTAL_QUESTIONS, Difficulty.HARD);
    setQuestions(questions);
    setLoading(false);
    setQuestionNumber(0);
    setUserAnswer([]);
    setScore(0);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (questions) {
      const selectedOption = e.currentTarget.value;
      const correct =
        questions[questionNumber].correct_answer === selectedOption;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const UserObj = {
        question: questions[questionNumber].question,
        userAnswer: selectedOption,
        isCorrect: correct,
        correctAnswer: questions[questionNumber].correct_answer,
      };
      setUserAnswer((prev) => [...prev, UserObj]);
    }
  };
  const nextQuestion = () => {
    if (questions && questionNumber + 1 !== questions.length) {
      setQuestionNumber((prev) => prev + 1);
    } else {
      setQuizOver(true);
    }
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <h1>React Quiz</h1>
        {quizOver || userAnswer.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={StartQuiz}>
            Start
          </button>
        ) : null}
        {!quizOver && <p className="score">Score: {score}</p>}
        {loading && <p>Loading...</p>}
        {questions !== undefined ? (
          <QuestionCard
            questionNumber={questionNumber + 1}
            question={questions[questionNumber].question}
            answers={questions[questionNumber].answers}
            callback={checkAnswer}
            userAnswer={userAnswer ? userAnswer[questionNumber] : undefined}
            totalQuestions={TOTAL_QUESTIONS}
          />
        ) : null}
        {!quizOver &&
        !loading &&
        userAnswer.length === questionNumber + 1 &&
        questionNumber !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
