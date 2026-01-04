export type ImpactLevel = "high" | "medium" | "low";

export interface Question {
  id: number;
  text: string;
  impactLevel: ImpactLevel;
  weight: 3 | 2 | 1;
  answer: boolean | null;
}

export const questions: Question[] = [
  // High Impact Questions (8)
  {
    id: 1,
    text: "Are financial statements reviewed and approved by someone independent of preparation?",
    impactLevel: "high",
    weight: 3,
    answer: null,
  },
  {
    id: 2,
    text: "Is there clear segregation between transaction initiation and approval?",
    impactLevel: "high",
    weight: 3,
    answer: null,
  },
  {
    id: 3,
    text: "Are bank reconciliations prepared monthly and independently reviewed?",
    impactLevel: "high",
    weight: 3,
    answer: null,
  },
  {
    id: 4,
    text: "Are manual journal entries reviewed and approved before posting?",
    impactLevel: "high",
    weight: 3,
    answer: null,
  },
  {
    id: 5,
    text: "Is revenue recognition governed by a documented policy?",
    impactLevel: "high",
    weight: 3,
    answer: null,
  },
  {
    id: 6,
    text: "Are access rights to accounting systems periodically reviewed?",
    impactLevel: "high",
    weight: 3,
    answer: null,
  },
  {
    id: 7,
    text: "Are material estimates (accruals, provisions) reviewed by senior finance?",
    impactLevel: "high",
    weight: 3,
    answer: null,
  },
  {
    id: 8,
    text: "Are audit findings formally tracked and remediated?",
    impactLevel: "high",
    weight: 3,
    answer: null,
  },
  // Medium Impact Questions (8)
  {
    id: 9,
    text: "Is there a documented monthly close checklist?",
    impactLevel: "medium",
    weight: 2,
    answer: null,
  },
  {
    id: 10,
    text: "Are balance sheet reconciliations prepared for all material accounts?",
    impactLevel: "medium",
    weight: 2,
    answer: null,
  },
  {
    id: 11,
    text: "Are intercompany balances reconciled monthly?",
    impactLevel: "medium",
    weight: 2,
    answer: null,
  },
  {
    id: 12,
    text: "Is there a formal approval matrix for financial decisions?",
    impactLevel: "medium",
    weight: 2,
    answer: null,
  },
  {
    id: 13,
    text: "Are changes to vendor/customer master data controlled?",
    impactLevel: "medium",
    weight: 2,
    answer: null,
  },
  {
    id: 14,
    text: "Are accounting policies aligned with IFRS or US GAAP?",
    impactLevel: "medium",
    weight: 2,
    answer: null,
  },
  {
    id: 15,
    text: "Are finance roles and responsibilities clearly documented?",
    impactLevel: "medium",
    weight: 2,
    answer: null,
  },
  {
    id: 16,
    text: "Is variance analysis performed for key P&L accounts?",
    impactLevel: "medium",
    weight: 2,
    answer: null,
  },
  // Low Impact Questions (4)
  {
    id: 17,
    text: "Are finance KPIs regularly reviewed by management?",
    impactLevel: "low",
    weight: 1,
    answer: null,
  },
  {
    id: 18,
    text: "Is financial documentation stored centrally and securely?",
    impactLevel: "low",
    weight: 1,
    answer: null,
  },
  {
    id: 19,
    text: "Are accounting deadlines clearly communicated to stakeholders?",
    impactLevel: "low",
    weight: 1,
    answer: null,
  },
  {
    id: 20,
    text: "Is ongoing finance training or knowledge sharing encouraged?",
    impactLevel: "low",
    weight: 1,
    answer: null,
  },
];

