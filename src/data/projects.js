import railsaarthi from "../assets/images/RailSaarthi.jpg";
import funLearnGalaxy from "../assets/images/FunLearn.png";
import jobscope from "../assets/images/JobScope.png";
import churn from "../assets/images/Customer churn.jpg";
import timeseries from "../assets/images/Time series forecasting.png";

const projects = [
  {
    id: 1,
    title: "RailSaarthi",
    subtitle: "AI-powered Railway Traffic Control",
    description:
      "Developed an AI-powered railway traffic optimization system during Smart India Hackathon 2025 using CP-SAT, FastAPI, React, Redis, and PostgreSQL to maximize railway throughput and minimize delays.",
    tech: [
      "React",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
    ],
    github: "https://github.com/yuvrajrsingh/RailSaarthi_SIH",
    badge: "SIH Finalist",
    image: railsaarthi,
  },

  {
    id: 2,
    title: "FunLearn Galaxy",
    subtitle: "Python-based Gamified Educational System",
    description:
      "A desktop-based educational platform developed using Python and Tkinter to make learning interactive through quizzes, games, progress tracking, and engaging educational activities for children.",
    tech: [
      "Python",
      "Tkinter",
      "SQLite",
    ],
    github: "https://github.com/SHREYA-CODES-11/python-fun-learn-galaxy",
    badge: "Featured",
    image: funLearnGalaxy,
  },

  {
    id: 3,
    title: "Customer Churn Prediction",
    subtitle: "Machine Learning Classification",
    description:
      "Developed a machine learning model to predict customer churn using data preprocessing, feature engineering, and multiple classification algorithms.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
    ],
    github: "https://github.com/SHREYA-CODES-11/customer-churn-prediction#",
    image: churn,
  },

  {
    id: 4,
    title: "JobScope",
    subtitle: "Job Market Analytics & Salary Prediction",
    description:
      "A machine learning project for salary prediction and job market analytics using regression models, exploratory data analysis, and visualization techniques.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
    ],
    github: "https://github.com/SHREYA-CODES-11/job-market-analytics-salary-prediction",
    image: jobscope,
  },

  {
    id: 5,
    title: "Time Series Forecasting",
    subtitle: "Forecasting Future Trends",
    description:
      "Forecasted future trends using time-series analysis, visualization, and predictive modeling techniques to generate meaningful business insights.",
    tech: [
      "Python",
      "Pandas",
      "Matplotlib",
    ],
    github: "https://github.com/SHREYA-CODES-11/time-series-forecasting",
    image: timeseries,
  },
];

export default projects;