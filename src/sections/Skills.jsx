import { motion } from "framer-motion";

import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaCode,
  FaChartBar,
  FaFileExcel,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiFastapi,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

const firstRow = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "C", icon: <span className="font-bold text-blue-400">C</span> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-300" />,
      },
      {
        name: "SQL",
        icon: <span className="font-bold text-cyan-400">SQL</span>,
      },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-300" />,
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "FastAPI", icon: <SiFastapi className="text-green-400" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-sky-500" />,
      },
    ],
  },
];

const secondRow = [
  {
    title: "AI / Data Science",
    skills: [
      {
        name: "Machine Learning",
        icon: "🤖",
      },
      {
        name: "Pandas",
        icon: <SiPandas className="text-white" />,
      },
      {
        name: "NumPy",
        icon: <SiNumpy className="text-blue-400" />,
      },
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn className="text-orange-400" />,
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="text-orange-500" />,
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
      { name: "Power BI", icon: <FaChartBar className="text-yellow-400" /> },
      { name: "Excel", icon: <FaFileExcel className="text-green-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-950 text-white flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
    >
      <div className="max-w-5xl w-full mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Technologies, frameworks and tools that I use to build intelligent,
          scalable and modern software solutions.
        </p>

        {/* ---------------- First Row ---------------- */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-6 sm:mt-8">
          {firstRow.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3.5 sm:mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-slate-800 hover:bg-cyan-400 hover:text-black transition-all duration-300 px-3.5 py-1.5 rounded-full"
                  >
                    <span className="text-lg">{skill.icon}</span>

                    <span className="text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------------- Second Row ---------------- */}

        <div className="flex justify-center gap-5 sm:gap-6 flex-wrap mt-5 sm:mt-6">
          {secondRow.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 3) * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3.5 sm:mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-slate-800 hover:bg-cyan-400 hover:text-black transition-all duration-300 px-3.5 py-1.5 rounded-full"
                  >
                    <span className="text-lg">{skill.icon}</span>

                    <span className="text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;