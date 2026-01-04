"use client";

import { Question } from "@/lib/questions";

interface ProgressIndicatorProps {
  questions: Question[];
}

export default function ProgressIndicator({ questions }: ProgressIndicatorProps) {
  const answeredCount = questions.filter((q) => q.answer !== null).length;
  const totalCount = questions.length;
  const percentage = (answeredCount / totalCount) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold text-gray-700">
          Progress: {answeredCount} / {totalCount} answered
        </span>
        <span className="text-lg font-semibold text-gray-700">{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

