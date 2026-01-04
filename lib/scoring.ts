import { Question, ImpactLevel } from "./questions";

export type RiskLevel = "low" | "medium" | "high";

export interface AssessmentResult {
  totalScore: number;
  maxScore: number;
  riskLevel: RiskLevel;
  message: string;
  highImpactNoCount: number;
}

export function calculateScore(questions: Question[]): AssessmentResult {
  let totalScore = 0;
  let highImpactNoCount = 0;

  questions.forEach((question) => {
    if (question.answer === true) {
      totalScore += question.weight;
    } else if (question.answer === false && question.impactLevel === "high") {
      highImpactNoCount++;
    }
  });

  const maxScore = 44; // 8*3 + 8*2 + 4*1 = 24 + 16 + 4 = 44

  // Override rule: If 3 or more High-Impact questions are answered "No", classify as High Risk
  let riskLevel: RiskLevel;
  if (highImpactNoCount >= 3) {
    riskLevel = "high";
  } else if (totalScore >= 35) {
    riskLevel = "low";
  } else if (totalScore >= 22) {
    riskLevel = "medium";
  } else {
    riskLevel = "high";
  }

  const messages: Record<RiskLevel, string> = {
    low: "The organization demonstrates strong financial governance and control discipline. The likelihood of material misstatement or compliance failure is low.",
    medium: "The assessment indicates moderate governance risk. Certain financial processes and controls require improvement to strengthen reliability and oversight.",
    high: "Significant financial governance weaknesses are present. Immediate corrective action is recommended to mitigate risk of errors, fraud, or non-compliance.",
  };

  return {
    totalScore,
    maxScore,
    riskLevel,
    message: messages[riskLevel],
    highImpactNoCount,
  };
}

