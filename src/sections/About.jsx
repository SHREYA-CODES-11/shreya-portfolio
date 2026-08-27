import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white flex items-center px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.15 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-8 sm:mt-10 lg:mt-12 items-center">

          {/* Left Column: Who am I, Recruiter Introduction & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
              Who am I?
            </h3>

            <div className="space-y-3.5 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a final-year B.Tech student specializing in{" "}
                <span className="text-white font-medium">Artificial Intelligence & Data Science</span>,
                actively seeking full-time opportunities in{" "}
                <span className="text-cyan-400 font-medium">Software Development</span>,{" "}
                <span className="text-cyan-400 font-medium">AI/ML</span>, and{" "}
                <span className="text-cyan-400 font-medium">Data Analytics</span> roles.
                I have hands-on experience designing and developing real-world technical applications,
                complemented by practical software development internships and industry training.
              </p>

              <p>
                Driven by a passion for solving real-world challenges with robust engineering,
                my journey includes reaching the{" "}
                <span className="text-white font-medium">Grand Finale of Smart India Hackathon</span>{" "}
                and contributing to published research in Artificial Intelligence. I am eager to apply
                my technical foundation, problem-solving mindset, and collaborative skills to high-impact engineering teams.
              </p>
            </div>

            {/* Structured Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-6">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400">Education</h4>
                <p className="text-gray-200 font-medium text-sm sm:text-base mt-1">
                  B.Tech AI & Data Science
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400">CGPA</h4>
                <p className="text-gray-200 font-medium text-sm sm:text-base mt-1">
                  9.1
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400">Location</h4>
                <p className="text-gray-200 font-medium text-sm sm:text-base mt-1">
                  Gurugram, Haryana
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400">Interests</h4>
                <p className="text-gray-200 font-medium text-sm sm:text-base mt-1">
                  AI • Data Analytics • Software Development
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2 Prominent Recruiter Statistic Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.15 }}
            className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 justify-center"
          >
            <div className="flex-1 relative rounded-2xl border border-slate-800/90 bg-slate-950/70 backdrop-blur-md p-6 sm:p-8 text-center shadow-xl hover:border-cyan-500/40 transition-colors group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cyan-400 tracking-tight">
                10+
              </h3>
              <p className="mt-2.5 sm:mt-3 text-base sm:text-lg font-semibold text-gray-200">
                Real-World Projects
              </p>
            </div>

            <div className="flex-1 relative rounded-2xl border border-slate-800/90 bg-slate-950/70 backdrop-blur-md p-6 sm:p-8 text-center shadow-xl hover:border-cyan-500/40 transition-colors group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cyan-400 tracking-tight">
                5+
              </h3>
              <p className="mt-2.5 sm:mt-3 text-base sm:text-lg font-semibold text-gray-200">
                Internships & Training
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;
