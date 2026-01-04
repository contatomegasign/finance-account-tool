"use client";

import { Question, ImpactLevel } from "@/lib/questions";

interface QuestionCardProps {
  question: Question;
  onAnswer: (id: number, answer: boolean) => void;
}

const impactColors: Record<ImpactLevel, string> = {
  high: "border-red-500 bg-red-50",
  medium: "border-orange-500 bg-orange-50",
  low: "border-green-500 bg-green-50",
};

const impactLabels: Record<ImpactLevel, string> = {
  high: "High Impact",
  medium: "Medium Impact",
  low: "Low Impact",
};

export default function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  return (
    <div className={`border-2 rounded-lg p-6 mb-4 ${impactColors[question.impactLevel]}`}>
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm font-semibold text-gray-700">
          Question {question.id} • {impactLabels[question.impactLevel]}
        </span>
      </div>
      <p className="text-lg mb-6 text-gray-900">{question.text}</p>
      <div className="flex gap-4">
        <button
          onClick={() => onAnswer(question.id, true)}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            question.answer === true
              ? "bg-green-600 text-white"
              : "bg-white text-green-600 border-2 border-green-600 hover:bg-green-50"
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => onAnswer(question.id, false)}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            question.answer === false
              ? "bg-red-600 text-white"
              : "bg-white text-red-600 border-2 border-red-600 hover:bg-red-50"
          }`}
        >
          No
        </button>
      </div>
    </div>
  );
}

