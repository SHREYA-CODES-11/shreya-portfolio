import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Development Intern",
    company: "GITS India Solutions Pvt. Ltd.",
    duration: "May 2026 – Present",
    points: [
      "Developing responsive web applications using React.",
      "Working with PHP backend APIs and MySQL.",
      "Building reusable UI components.",
      "Collaborating with the development team on real-world projects.",
    ],
  },

  {
    role: "Data Science Intern",
    company: "LearnNex powered by Wipro",
    duration: "2025",
    points: [
      "Built Customer Churn Prediction model.",
      "Developed Time Series Forecasting project.",
      "Performed data preprocessing and visualization.",
      "Worked with Machine Learning algorithms using Python.",
    ],
  },

  {
    role: "Tech Support Intern",
    company: "GAO Tek Inc.",
    duration: "2024",
    points: [
      "Provided technical support to clients.",
      "Worked on WordPress website management.",
      "Resolved customer issues efficiently.",
      "Improved communication and teamwork skills.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center"
        >
          My <span className="text-cyan-400">Experience</span>
        </motion.h2>

        <div className="relative mt-20">

          {/* Timeline */}
          <div className="absolute left-4 top-0 h-full w-1 bg-cyan-500 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-16 mb-16"
            >

              {/* Timeline Dot */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-cyan-400 border-4 border-slate-900 shadow-lg shadow-cyan-400"></div>

              {/* Card */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300">

                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {exp.company}
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  {exp.duration}
                </p>

                <ul className="mt-5 space-y-3 text-gray-300 list-disc list-inside">
                  {exp.points.map((point, i) => (
                    <li key={i}>
                      {point}
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;