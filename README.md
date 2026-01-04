# Financial Governance Self-Assessment Tool

## About the Project

The **Financial Governance Self-Assessment Tool** is a frontend-only web application designed to help Small and Medium Enterprises (SMEs) evaluate their financial governance maturity through a structured Yes/No questionnaire. This tool promotes financial transparency, identifies internal control weaknesses, and supports better financial decision-making.

### Key Highlights

- **No Backend Required**: Fully client-side application with no server dependencies
- **No Authentication**: Immediate access without user accounts
- **No Data Persistence**: All processing happens in the browser
- **Professional Assessment**: Based on COSO-aligned risk thinking and professional financial judgment
- **Public Interest Tool**: Designed as open-source evidence for public benefit

### What It Does

The tool presents 20 carefully crafted governance questions categorized by impact level:
- **8 High-Impact Questions**: Critical controls that materially affect risk
- **8 Medium-Impact Questions**: Process maturity and operational discipline
- **4 Low-Impact Questions**: Governance hygiene and continuous improvement

Each question is weighted differently, and the tool calculates a comprehensive risk score that categorizes organizations into **Low**, **Medium**, or **High** governance risk levels.

---

## Setup Guide

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher)
- **npm** (Node Package Manager - comes with Node.js)

### Step 1: Install Node.js

If you don't have Node.js installed:

1. **Visit the official Node.js website**: [https://nodejs.org/](https://nodejs.org/)
2. **Download the LTS (Long Term Support) version** for your operating system
3. **Run the installer** and follow the installation wizard
4. **Verify installation** by opening your terminal/command prompt and running:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers displayed (e.g., `v20.10.0` and `10.2.3`)

### Step 2: Download/Clone the Project

#### Option A: If you have the project files locally
Navigate to the project directory:
```bash
cd /path/to/FinancialAssesmentGovernence
```

#### Option B: If cloning from a Git repository
```bash
git clone <repository-url>
cd FinancialAssesmentGovernence
```

### Step 3: Install Project Dependencies

Once you're in the project directory, install all required dependencies:

```bash
npm install
```

This command will:
- Read the `package.json` file
- Download and install all required packages (Next.js, React, TypeScript, Tailwind CSS, etc.)
- Create a `node_modules` directory with all dependencies
- Generate a `package-lock.json` file for dependency version locking

**Expected output**: You should see a list of installed packages and a message indicating successful installation. This process may take a few minutes depending on your internet connection.

### Step 4: Run the Development Server

Start the development server:

```bash
npm run dev
```

**Expected output**: You should see something like:
```
▲ Next.js 15.x.x
- Local:        http://localhost:3000
- Ready in X.XXs
```

### Step 5: Access the Application

1. Open your web browser
2. Navigate to: [http://localhost:3000](http://localhost:3000)
3. You should see the Financial Governance Self-Assessment Tool homepage

### Step 6: Stop the Development Server

To stop the development server, press `Ctrl + C` in your terminal.

---

## Building for Production

When you're ready to build the application for production:

1. **Build the application**:
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `.next` directory.

2. **Start the production server**:
   ```bash
   npm start
   ```
   The application will run on [http://localhost:3000](http://localhost:3000) in production mode.

---

## Features

- **20 Governance Questions**: Categorized by impact level (High, Medium, Low)
- **Weighted Scoring System**: High Impact (3 points), Medium Impact (2 points), Low Impact (1 point)
- **Risk Classification**: Automatically categorizes organizations into Low, Medium, or High Risk
- **PDF Export**: Generate and download assessment reports
- **Progress Tracking**: Visual progress indicator showing completion status
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **No Backend Required**: Fully client-side application

---

## Technology Stack

- **Next.js 15**: React framework with App Router
- **React 19**: Latest version of React library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework for styling

---

## Assessment Logic

### Scoring System

The assessment uses a weighted scoring system:

- **High Impact Questions** (8 questions): 3 points each
- **Medium Impact Questions** (8 questions): 2 points each
- **Low Impact Questions** (4 questions): 1 point each
- **Maximum Possible Score**: 44 points (8×3 + 8×2 + 4×1)

**Scoring Rules**:
- Answering "Yes" earns the full weight for that question
- Answering "No" earns zero points
- Total score is the sum of all "Yes" responses multiplied by their respective weights

### Risk Classification

Based on the total score, organizations are classified into risk levels:

- **Low Risk**: 35-44 points
  - *Message*: "The organization demonstrates strong financial governance and control discipline. The likelihood of material misstatement or compliance failure is low."

- **Medium Risk**: 22-34 points
  - *Message*: "The assessment indicates moderate governance risk. Certain financial processes and controls require improvement to strengthen reliability and oversight."

- **High Risk**: 0-21 points
  - *Message*: "Significant financial governance weaknesses are present. Immediate corrective action is recommended to mitigate risk of errors, fraud, or non-compliance."

### Override Rule

**Important**: If 3 or more High-Impact questions are answered "No", the assessment is automatically classified as **High Risk**, regardless of the total score. This override rule mirrors real-world audit and controller judgment.

---

## Project Structure

```
FinancialAssesmentGovernence/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx             # Main assessment page
│   └── globals.css          # Global styles and Tailwind imports
├── components/
│   ├── QuestionCard.tsx     # Individual question component with Yes/No buttons
│   ├── ProgressIndicator.tsx # Progress bar component
│   └── ResultsDisplay.tsx   # Results page component with PDF export
├── lib/
│   ├── questions.ts         # Question data structure (all 20 questions)
│   └── scoring.ts           # Scoring and risk calculation logic
├── Guide.md                 # Complete development guide
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── next.config.ts           # Next.js configuration
└── README.md                # This file
```

---

## Usage Guide

### Taking the Assessment

1. **Start the Assessment**: The homepage displays all 20 questions grouped by impact level
2. **Answer Questions**: Click "Yes" or "No" for each question
3. **Track Progress**: Monitor your progress using the progress bar at the top
4. **Submit**: Once all questions are answered, click "Submit Assessment"
5. **Review Results**: View your risk classification, score, and detailed results
6. **Export PDF**: Click "Export as PDF" to download a formatted report
7. **Start New Assessment**: Use "Start New Assessment" to reset and begin again

### Understanding Results

- **Score**: Your total weighted score out of 44 maximum points
- **Risk Level**: Your organization's governance risk classification
- **Explanatory Message**: Professional assessment of your governance maturity
- **Question Responses**: Complete list of all questions and your answers

---

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm start`: Start the production server
- `npm run lint`: Run ESLint to check for code issues

---

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, Next.js will automatically try the next available port (3001, 3002, etc.). Check the terminal output for the actual URL.

### Module Not Found Errors

If you encounter module errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

If the build fails:
1. Ensure you're using Node.js 18 or higher
2. Clear the `.next` directory: `rm -rf .next`
3. Reinstall dependencies: `npm install`
4. Try building again: `npm run build`

---

## Disclaimer

**Important**: This tool provides an indicative assessment, not a formal audit. The results should be used as a guide for internal evaluation and improvement purposes only. This tool does not provide regulatory opinions or replace professional financial advice.

---

## License

This project is designed as public-interest open-source evidence and is intended to promote financial transparency and governance best practices.

---

## Support

If you have any questions about the Financial Governance Self-Assessment Tool or would like to share with me what you have been working on, feel free to reach out to me via:

LinkedIn: [Zunaira Iqbal](https://www.linkedin.com/in/zunaira-iqbal/)
Email: [zunairaiqbal01@hotmail.com](zunairaiqbal01@hotmail.com)
