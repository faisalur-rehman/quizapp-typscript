import { shuffleArray } from "../utils";
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "medium",
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchData = async (total: number, difficulty: Difficulty) => {
  const URL = `https://opentdb.com/api.php?amount=${total}&type=multiple`;
  const response = await fetch(URL);
  let { results } = await response.json();
  return results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
