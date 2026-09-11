import { useState } from "react";
import "./RecruiterAssistant.css";

const questions = [
  {
    question: "What does Krishna specialize in?",
    answer:
      "Krishna specializes in React.js, Node.js, Appian development, FastAPI integrations, and AI-powered document automation using Sensible IDP.",
  },
  {
    question: "What is Krishna's strongest project?",
    answer:
      "His strongest project is Insurance Policy Checking Automation, where insurance documents are extracted, compared, and validated using Appian, FastAPI, JSON Logic, and Sensible IDP.",
  },
  {
    question: "Is Krishna available for remote opportunities?",
    answer:
      "Yes. Krishna is interested in remote software engineering opportunities involving frontend development, full-stack development, Appian, and AI automation.",
  },
  {
    question: "What makes Krishna different?",
    answer:
      "Krishna combines low-code enterprise workflow development with traditional software engineering and AI document-processing experience.",
  },
];

function RecruiterAssistant() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <section className="assistant-section" id="assistant">
      <div className="assistant-shell">
        <div className="assistant-intro">
          <span className="section-eyebrow">RECRUITER ASSISTANT</span>

          <h2>
            Have a question?
            <span>Ask about Krishna.</span>
          </h2>

          <p>
            Get quick answers about my experience, technical skills,
            projects, and the kind of opportunities I am looking for.
          </p>

          <a className="assistant-cta" href="#contact">
            Start a conversation <span>↗</span>
          </a>
        </div>

        <div className="assistant-panel">
          <div className="assistant-panel-header">
            <div className="assistant-status">
              <span className="status-dot" />
              <span>Krishna Assistant</span>
            </div>

            <span className="assistant-label">AI / PROFILE</span>
          </div>

          <div className="assistant-message assistant-message-bot">
            Hi! I can help you understand Krishna’s background and
            technical experience.
          </div>

          <div className="assistant-question-list">
            {questions.map((item, index) => {
              const isActive = activeQuestion === index;

              return (
                <button
                  className={`assistant-question ${
                    isActive ? "active" : ""
                  }`}
                  key={item.question}
                  onClick={() =>
                    setActiveQuestion(isActive ? null : index)
                  }
                >
                  <span>{item.question}</span>
                  <span>{isActive ? "−" : "+"}</span>
                </button>
              );
            })}
          </div>

          {activeQuestion !== null && (
            <div className="assistant-message assistant-message-answer">
              {questions[activeQuestion].answer}
            </div>
          )}

          <div className="assistant-panel-footer">
            <span>Profile-based responses</span>
            <span>● Online</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecruiterAssistant;