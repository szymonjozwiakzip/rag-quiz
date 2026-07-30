import { ragQuestions } from "./rag";
import { accentureQuestions } from "./accenture";

export const quizzes = [
  {
    id: "rag",
    title: {
      en: "RAG & GenAI",
      pl: "RAG & GenAI",
    },
    description: {
      en: "Retrieval, embeddings, LangChain/LangGraph, prompting — 21 questions.",
      pl: "Retrieval, embeddingi, LangChain/LangGraph, prompting — 21 pytań.",
    },
    questions: ragQuestions,
  },
  {
    id: "accenture",
    title: {
      en: "Accenture GenAI Interview",
      pl: "Accenture GenAI Interview",
    },
    description: {
      en: "LLM fundamentals, production RAG, security & multi-agent design — 22 questions.",
      pl: "Fundamenty LLM, produkcyjny RAG, security i multi-agent — 22 pytania.",
    },
    questions: accentureQuestions,
  },
];

export const ui = {
  en: {
    appTitle: "GenAI Interview Quiz",
    homeEyebrow: "Interview prep",
    homeTitle: "Pick a quiz",
    homeLede: "Practice ABCD questions in Polish or English — switch language anytime.",
    start: "Start",
    next: "Next",
    finish: "See results",
    restart: "Try again",
    changeQuiz: "Change quiz",
    questionOf: (n, total) => `Question ${n} of ${total}`,
    score: (correct, total) => `You scored ${correct} / ${total}`,
    correct: "Correct!",
    incorrect: "Incorrect",
    yourAnswer: "Your answer",
    rightAnswer: "Correct answer",
    progress: "Progress",
    review: "Review answers",
    backToScore: "Back to score",
    questionsCount: (n) => `${n} questions`,
    feedbackHigh: "Excellent — interview-ready on this topic.",
    feedbackMid: "Solid — review the weaker spots once more.",
    feedbackLow: "Worth another pass to lock in the basics.",
  },
  pl: {
    appTitle: "GenAI Interview Quiz",
    homeEyebrow: "Przygotowanie do rozmowy",
    homeTitle: "Wybierz quiz",
    homeLede: "Ćwicz pytania ABCD po polsku lub angielsku — język przełączysz w każdej chwili.",
    start: "Start",
    next: "Dalej",
    finish: "Zobacz wynik",
    restart: "Jeszcze raz",
    changeQuiz: "Zmień quiz",
    questionOf: (n, total) => `Pytanie ${n} z ${total}`,
    score: (correct, total) => `Twój wynik: ${correct} / ${total}`,
    correct: "Dobrze!",
    incorrect: "Źle",
    yourAnswer: "Twoja odpowiedź",
    rightAnswer: "Poprawna odpowiedź",
    progress: "Postęp",
    review: "Przegląd odpowiedzi",
    backToScore: "Wróć do wyniku",
    questionsCount: (n) => `${n} pytań`,
    feedbackHigh: "Świetnie — mocna baza pod rozmowę.",
    feedbackMid: "Dobrze — warto jeszcze przejrzeć słabsze tematy.",
    feedbackLow: "Warto przejść quiz jeszcze raz i zgłębić podstawy.",
  },
};

export function getQuiz(id) {
  return quizzes.find((q) => q.id === id) ?? null;
}
