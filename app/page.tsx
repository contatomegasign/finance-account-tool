"use client";

import { useState } from "react";
import { questions as initialQuestions, Question } from "@/lib/questions";
import { calculateScore, AssessmentResult } from "@/lib/scoring";
import QuestionCard from "@/components/QuestionCard";
import ProgressIndicator from "@/components/ProgressIndicator";
import ResultsDisplay from "@/components/ResultsDisplay";

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const handleAnswer = (id: number, answer: boolean) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, answer } : q))
    );
  };

  const handleSubmit = () => {
    const assessmentResult = calculateScore(questions);
    setResult(assessmentResult);
    setShowResults(true);
  };

  const handleReset = () => {
    setQuestions(initialQuestions.map((q) => ({ ...q, answer: null })));
    setShowResults(false);
    setResult(null);
  };

  const handleExportPDF = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const assessmentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const questionsByImpact = {
      high: questions.filter((q) => q.impactLevel === "high"),
      medium: questions.filter((q) => q.impactLevel === "medium"),
      low: questions.filter((q) => q.impactLevel === "low"),
    };

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Financial Governance Assessment Report</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              color: #333;
            }
            h1 {
              color: #1a1a1a;
              border-bottom: 3px solid #2563eb;
              padding-bottom: 10px;
            }
            h2 {
              color: #374151;
              margin-top: 30px;
              margin-bottom: 15px;
            }
            .summary {
              background: ${result?.riskLevel === "low" ? "#d1fae5" : result?.riskLevel === "medium" ? "#fed7aa" : "#fee2e2"};
              border: 2px solid ${result?.riskLevel === "low" ? "#10b981" : result?.riskLevel === "medium" ? "#f97316" : "#ef4444"};
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
            }
            .risk-level {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            .score {
              font-size: 18px;
              margin-bottom: 10px;
            }
            .question {
              margin: 15px 0;
              padding: 10px;
              border-left: 4px solid #ccc;
              background: #f9fafb;
            }
            .question-number {
              font-weight: bold;
              color: #6b7280;
            }
            .answer {
              margin-top: 5px;
              font-weight: bold;
            }
            .answer-yes {
              color: #059669;
            }
            .answer-no {
              color: #dc2626;
            }
            .disclaimer {
              margin-top: 30px;
              padding: 15px;
              background: #fef3c7;
              border: 1px solid #fbbf24;
              border-radius: 5px;
              font-size: 14px;
            }
            @media print {
              body { padding: 20px; }
            }
          </style>
        </head>
        <body>
          <h1>Financial Governance Self-Assessment Report</h1>
          <p><strong>Assessment Date:</strong> ${assessmentDate}</p>
          
          <div class="summary">
            <div class="risk-level">Risk Level: ${result?.riskLevel.toUpperCase() || "N/A"}</div>
            <div class="score">Score: ${result?.totalScore} / ${result?.maxScore}</div>
            <p>${result?.message || ""}</p>
            ${result?.highImpactNoCount && result.highImpactNoCount >= 3 ? `<p><strong>Note:</strong> ${result.highImpactNoCount} high-impact questions were answered "No", which automatically classifies this assessment as High Risk.</p>` : ""}
          </div>

          <h2>High Impact Questions</h2>
          ${questionsByImpact.high.map((q) => `
            <div class="question">
              <div class="question-number">Question ${q.id}</div>
              <div>${q.text}</div>
              <div class="answer ${q.answer === true ? "answer-yes" : q.answer === false ? "answer-no" : ""}">
                Answer: ${q.answer === true ? "Yes" : q.answer === false ? "No" : "Not Answered"}
              </div>
            </div>
          `).join("")}

          <h2>Medium Impact Questions</h2>
          ${questionsByImpact.medium.map((q) => `
            <div class="question">
              <div class="question-number">Question ${q.id}</div>
              <div>${q.text}</div>
              <div class="answer ${q.answer === true ? "answer-yes" : q.answer === false ? "answer-no" : ""}">
                Answer: ${q.answer === true ? "Yes" : q.answer === false ? "No" : "Not Answered"}
              </div>
            </div>
          `).join("")}

          <h2>Low Impact Questions</h2>
          ${questionsByImpact.low.map((q) => `
            <div class="question">
              <div class="question-number">Question ${q.id}</div>
              <div>${q.text}</div>
              <div class="answer ${q.answer === true ? "answer-yes" : q.answer === false ? "answer-no" : ""}">
                Answer: ${q.answer === true ? "Yes" : q.answer === false ? "No" : "Not Answered"}
              </div>
            </div>
          `).join("")}

          <div class="disclaimer">
            <strong>Disclaimer:</strong> This tool provides an indicative assessment, not a formal audit. 
            The results should be used as a guide for internal evaluation and improvement purposes only.
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  const answeredCount = questions.filter((q) => q.answer !== null).length;
  const allAnswered = answeredCount === questions.length;

  if (showResults && result) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Start New Assessment
            </button>
          </div>
          <ResultsDisplay result={result} questions={questions} onExportPDF={handleExportPDF} />
        </div>
      </div>
    );
  }

  const questionsByImpact = {
    high: questions.filter((q) => q.impactLevel === "high"),
    medium: questions.filter((q) => q.impactLevel === "medium"),
    low: questions.filter((q) => q.impactLevel === "low"),
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Financial Governance Self-Assessment Tool
          </h1>
          <p className="text-lg text-gray-600">
            Evaluate your organization's financial governance maturity through a structured assessment
          </p>
        </header>

        <ProgressIndicator questions={questions} />

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-red-700">🔴 High Impact Questions</h2>
          {questionsByImpact.high.map((question) => (
            <QuestionCard key={question.id} question={question} onAnswer={handleAnswer} />
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-700">🟠 Medium Impact Questions</h2>
          {questionsByImpact.medium.map((question) => (
            <QuestionCard key={question.id} question={question} onAnswer={handleAnswer} />
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-700">🟢 Low Impact Questions</h2>
          {questionsByImpact.low.map((question) => (
            <QuestionCard key={question.id} question={question} onAnswer={handleAnswer} />
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${
              allAnswered
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit Assessment
          </button>
        </div>

        {!allAnswered && (
          <div className="text-center text-gray-600 mb-8">
            Please answer all {questions.length} questions before submitting.
          </div>
        )}
      </div>
    </div>
  );
}

