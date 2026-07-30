import { useMemo, useState } from "react";
import { getQuiz, quizzes, ui } from "./quizzes";
import "./App.css";

const LETTERS = ["A", "B", "C", "D"];

function App() {
  const [lang, setLang] = useState("pl");
  const [quizId, setQuizId] = useState(null);
  const [screen, setScreen] = useState("home"); // home | quiz | result | review
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const t = ui[lang];
  const quiz = useMemo(() => (quizId ? getQuiz(quizId) : null), [quizId]);
  const questions = quiz?.questions ?? [];
  const q = questions[index];
  const score = answers.filter((a, i) => a === questions[i]?.correctIndex).length;
  const total = questions.length;

  function toggleLang() {
    setLang((l) => (l === "pl" ? "en" : "pl"));
  }

  function openQuiz(id) {
    setQuizId(id);
    setScreen("quiz");
    setIndex(0);
    setAnswers([]);
    setSelected(null);
    setRevealed(false);
  }

  function goHome() {
    setScreen("home");
    setQuizId(null);
    setIndex(0);
    setAnswers([]);
    setSelected(null);
    setRevealed(false);
  }

  function restartQuiz() {
    if (!quizId) return;
    openQuiz(quizId);
  }

  function pickOption(i) {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
  }

  function goNext() {
    const nextAnswers = [...answers];
    nextAnswers[index] = selected;
    setAnswers(nextAnswers);

    if (index + 1 >= questions.length) {
      setScreen("result");
      return;
    }

    setIndex(index + 1);
    setSelected(null);
    setRevealed(false);
  }

  function scoreFeedback() {
    if (!total) return "";
    const ratio = score / total;
    if (ratio >= 0.85) return t.feedbackHigh;
    if (ratio >= 0.55) return t.feedbackMid;
    return t.feedbackLow;
  }

  return (
    <div className="app">
      <div className="bg" aria-hidden="true" />

      <header className="topbar">
        <button type="button" className="brand brand-btn" onClick={goHome}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">{t.appTitle}</span>
        </button>
        <button type="button" className="lang-toggle" onClick={toggleLang}>
          {lang === "pl" ? "EN" : "PL"}
        </button>
      </header>

      <main className="main">
        {screen === "home" && (
          <section className="panel home-panel">
            <p className="eyebrow">{t.homeEyebrow}</p>
            <h1>{t.homeTitle}</h1>
            <p className="lede">{t.homeLede}</p>

            <ul className="quiz-list">
              {quizzes.map((item) => (
                <li key={item.id}>
                  <button type="button" className="quiz-card" onClick={() => openQuiz(item.id)}>
                    <span className="quiz-card-title">{item.title[lang]}</span>
                    <span className="quiz-card-desc">{item.description[lang]}</span>
                    <span className="quiz-card-meta">{t.questionsCount(item.questions.length)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {screen === "quiz" && q && (
          <section className="panel quiz-panel">
            <div className="meta">
              <span>
                {quiz.title[lang]} · {t.questionOf(index + 1, total)}
              </span>
              <span className="meta-progress">
                {t.progress}: {Math.round(((index + (revealed ? 1 : 0)) / total) * 100)}%
              </span>
            </div>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={index + (revealed ? 1 : 0)}
              aria-valuemin={0}
              aria-valuemax={total}
            >
              <div
                className="progress-fill"
                style={{ width: `${((index + (revealed ? 1 : 0)) / total) * 100}%` }}
              />
            </div>

            <h2 className="question">{q.question[lang]}</h2>

            <ul className="options">
              {q.options[lang].map((opt, i) => {
                let state = "";
                if (revealed) {
                  if (i === q.correctIndex) state = "correct";
                  else if (i === selected) state = "wrong";
                } else if (selected === i) {
                  state = "picked";
                }

                return (
                  <li key={i}>
                    <button
                      type="button"
                      className={`option ${state}`}
                      onClick={() => pickOption(i)}
                      disabled={revealed}
                    >
                      <span className="letter">{LETTERS[i]}</span>
                      <span className="option-text">{opt}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {revealed && (
              <div className={`feedback ${selected === q.correctIndex ? "ok" : "bad"}`}>
                {selected === q.correctIndex ? t.correct : t.incorrect}
              </div>
            )}

            <div className="actions row between">
              <button type="button" className="btn ghost" onClick={goHome}>
                {t.changeQuiz}
              </button>
              <button type="button" className="btn primary" disabled={!revealed} onClick={goNext}>
                {index + 1 >= total ? t.finish : t.next}
              </button>
            </div>
          </section>
        )}

        {screen === "result" && (
          <section className="panel result-panel">
            <p className="eyebrow">{quiz?.title[lang]}</p>
            <h1>{t.score(score, total)}</h1>
            <p className="lede">{scoreFeedback()}</p>
            <div className="score-ring" style={{ "--pct": `${total ? (score / total) * 100 : 0}%` }}>
              <span>{total ? Math.round((score / total) * 100) : 0}%</span>
            </div>
            <div className="actions row">
              <button type="button" className="btn primary" onClick={restartQuiz}>
                {t.restart}
              </button>
              <button type="button" className="btn ghost" onClick={() => setScreen("review")}>
                {t.review}
              </button>
              <button type="button" className="btn ghost" onClick={goHome}>
                {t.changeQuiz}
              </button>
            </div>
          </section>
        )}

        {screen === "review" && (
          <section className="panel review-panel">
            <div className="review-head">
              <h1>{t.review}</h1>
              <button type="button" className="btn ghost" onClick={() => setScreen("result")}>
                {t.backToScore}
              </button>
            </div>
            <ol className="review-list">
              {questions.map((item, i) => {
                const picked = answers[i];
                const ok = picked === item.correctIndex;
                return (
                  <li key={item.id} className={ok ? "ok" : "bad"}>
                    <p className="review-q">
                      <span className="review-num">{i + 1}.</span> {item.question[lang]}
                    </p>
                    <p className="review-a">
                      <strong>{t.yourAnswer}:</strong>{" "}
                      {LETTERS[picked]}. {item.options[lang][picked]}
                    </p>
                    {!ok && (
                      <p className="review-a right">
                        <strong>{t.rightAnswer}:</strong>{" "}
                        {LETTERS[item.correctIndex]}. {item.options[lang][item.correctIndex]}
                      </p>
                    )}
                  </li>
                );
              })}
            </ol>
            <div className="actions row">
              <button type="button" className="btn primary" onClick={restartQuiz}>
                {t.restart}
              </button>
              <button type="button" className="btn ghost" onClick={goHome}>
                {t.changeQuiz}
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
