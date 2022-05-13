/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../assets/css/test.css";

export default function Test() {
  const tests = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", value: 3 },
        { answerText: "London", value: 2 },
        { answerText: "Paris", value: 1 },
        { answerText: "Dublin", value: 0 },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", value: 3 },
        { answerText: "Elon Musk", value: 2 },
        { answerText: "Bill Gates", value: 1 },
        { answerText: "Tony Stark", value: 0 },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", value: 3 },
        { answerText: "Intel", value: 2 },
        { answerText: "Amazon", value: 1 },
        { answerText: "Microsoft", value: 0 },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "3", value: 3 },
        { answerText: "4", value: 2 },
        { answerText: "6", value: 1 },
        { answerText: "7", value: 0 },
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
          </div>
          <div className="answer-section">
            {tests[currentTest].answerOptions.map((answerOption) => (
              // eslint-disable-next-line react/button-has-type
              <button
                id="valuebtn"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
