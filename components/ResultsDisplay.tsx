"use client";

import { AssessmentResult, RiskLevel } from "@/lib/scoring";
import { Question } from "@/lib/questions";

interface ResultsDisplayProps {
  result: AssessmentResult;
  questions: Question[];
  onExportPDF: () => void;
}

const riskColors: Record<RiskLevel, string> = {
  low: "bg-green-100 border-green-500 text-green-900",
  medium: "bg-orange-100 border-orange-500 text-orange-900",
  high: "bg-red-100 border-red-500 text-red-900",
};

const riskLabels: Record<RiskLevel, string> = {
  low: "Low Risk",
  medium: "Medium Risk",
  high: "High Risk",
};

export default function ResultsDisplay({ result, questions, onExportPDF }: ResultsDisplayProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className={`border-4 rounded-lg p-8 mb-8 ${riskColors[result.riskLevel]}`}>
        <h2 className="text-3xl font-bold mb-4">{riskLabels[result.riskLevel]}</h2>
        <div className="text-xl mb-4">
          Score: {result.totalScore} / {result.maxScore}
        </div>
        <p className="text-lg leading-relaxed">{result.message}</p>
        {result.highImpactNoCount >= 3 && (
          <div className="mt-4 p-4 bg-red-200 rounded-lg">
            <p className="font-semibold">
              Note: {result.highImpactNoCount} high-impact questions were answered &quot;No&quot;, which
              automatically classifies this assessment as High Risk.
            </p>
          </div>
        )}
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Question Responses</h3>
        <div className="space-y-4">
          {questions.map((question) => (
            <div key={question.id} className="border rounded-lg p-4 bg-white">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-semibold text-gray-600">
                  Question {question.id} ({question.impactLevel} impact)
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    question.answer === true
                      ? "bg-green-100 text-green-800"
                      : question.answer === false
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {question.answer === true ? "Yes" : question.answer === false ? "No" : "Not Answered"}
                </span>
              </div>
              <p className="text-gray-900">{question.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-900">
          <strong>Disclaimer:</strong> This tool provides an indicative assessment, not a formal
          audit. The results should be used as a guide for internal evaluation and improvement
          purposes only.
        </p>
      </div>

      <div className="flex gap-4 justify-center">
        <button
          onClick={onExportPDF}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Export as PDF
        </button>
      </div>
    </div>
  );
}

