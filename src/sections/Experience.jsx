import { motion } from "framer-motion";
import gitsLogo from "../assets/images/gits_logo.png";
import learnnexLogo from "../assets/images/learnnex_logo.png";
import gaotekLogo from "../assets/images/gaotek_logo.png";

const experiences = [
  {
    role: "Software Development Intern",
    company: "GITS India Solutions Pvt. Ltd.",
    duration: "July 2026 – Present",
    logo: gitsLogo,
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
    duration: "June 2025 - Sept 2025",
    logo: learnnexLogo,
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
    duration: "Jan 2024 - Mar 2024",
    logo: gaotekLogo,
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
      className="bg-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
        >
          My <span className="text-cyan-400">Experience</span>
        </motion.h2>

        <div className="relative mt-10 sm:mt-12">

          {/* Vertical Cyan Timeline */}
          <div className="absolute left-3.5 sm:left-4 top-3 bottom-3 w-0.5 sm:w-1 bg-cyan-500/70 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative pl-11 sm:pl-14 mb-8 sm:mb-10 last:mb-0"
            >

              {/* Circular Timeline Marker */}
              <div className="absolute left-1.5 sm:left-2 top-5 w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-cyan-400 border-4 border-slate-900 shadow-md shadow-cyan-400/50" />

              {/* Experience Card */}
              <div className="bg-slate-950/90 border border-slate-800/90 rounded-2xl p-5 sm:p-6 hover:border-cyan-400/80 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">

                {/* Card Header: Logo, Role, Company, Badge & Duration */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 pb-4 border-b border-slate-800/70">
                  <div className="flex items-center sm:items-start gap-3.5 sm:gap-4">
                    
                    {/* Official Company Logo */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/95 p-1.5 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-950/70 text-cyan-400 border border-cyan-500/30">
                          Internship
                        </span>
                      </div>

                      <p className="text-cyan-400 font-medium text-sm sm:text-base mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm text-gray-400 sm:text-right font-medium whitespace-nowrap pl-15 sm:pl-0">
                    {exp.duration}
                  </div>
                </div>

                {/* Responsibilities / Key Points */}
                <ul className="mt-4 space-y-2 text-gray-300 text-sm sm:text-base list-disc list-inside">
                  {exp.points.map((point, i) => (
                    <li key={i} className="leading-relaxed">
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