/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../assets/css/test.css";

export default function Test() {
  const tests = [
    {
      instructionText: "OUUUUUUUI",
      answerOptions: [
        { answerText: "Parpaing", value: 3 },
        { answerText: "Parpaing", value: 2 },
        { answerText: "Parpaing", value: 1 },
        { answerText: "Parpaing", value: 0 },
      ],
    },
    {
      instructionText: "NOOOOOOON",
      answerOptions: [
        { answerText: "Parpaing", value: 3 },
        { answerText: "Parpaing", value: 2 },
        { answerText: "Parpaing", value: 1 },
        { answerText: "Parpaing", value: 0 },
      ],
    },
    {
      instructionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Parpaing", value: 3 },
        { answerText: "Parpaing", value: 2 },
        { answerText: "Parpaing", value: 1 },
        { answerText: "Parpaing", value: 0 },
      ],
    },
    {
      instructionText: "OUUUUUUUUF",
      answerOptions: [
        { answerText: "Parpaing", value: 3 },
        { answerText: "Parpaing", value: 2 },
        { answerText: "Parpaing", value: 1 },
        { answerText: "Parpaing", value: 0 },
      ],
    },
  ];

  const [currentTest, setCurrentTest] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [value, setValue] = useState(0);

  const handleAnswerOptionClick = () => {
    if (value > 0) {
      setScore(score + value);
    }

    const nextTest = currentTest + 1;
    if (nextTest < tests.length) {
      setCurrentTest(nextTest);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="Test">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {tests.length}
        </div>
      ) : (
        <>
          <div className="Test-section">
            <div className="Test-count">
              <span>Test {currentTest + 1}</span>/{tests.length}
            </div>
            <div className="Test-text">{tests[currentTest].TestText}</div>
            <div className="instruction" />
          </div>
          <div className="answer-section">
            {tests[currentTest].answerOptions.map((answerOption) => (
              // eslint-disable-next-line react/button-has-type
              <button
                id="valuebtn"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                <p>{answerOption.answerText}</p>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
