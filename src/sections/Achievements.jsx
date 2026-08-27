import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import achievements from "../data/achievements";

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-slate-900 text-white pt-16 sm:pt-20 px-4 sm:px-6 pb-12 sm:pb-16"
    >
      <div className="max-w-5xl mx-auto">

        {/* Achievements Full Viewport Wrapper */}
        <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center py-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
          >
            My <span className="text-cyan-400">Achievements</span>
          </motion.h2>

          <p className="text-center text-gray-400 mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Milestones that reflect my journey in research,
            innovation and competitive problem solving.
          </p>

          {/* Achievement Cards (2x2 Grid) */}
          <div className="grid md:grid-cols-2 gap-x-4 sm:gap-x-5 gap-y-3 sm:gap-y-3.5 mt-5 sm:mt-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-3xl sm:text-3xl">
                      {achievement.icon}
                    </div>

                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 shrink-0 whitespace-nowrap"
                      >
                        View Research Paper
                      </a>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold mt-2 text-white">
                    {achievement.title}
                  </h3>

                  <p className="text-cyan-400 text-xs sm:text-sm font-medium mt-0.5">
                    {achievement.subtitle}
                  </p>

                  <p className="text-gray-400 mt-2 text-xs sm:text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-mt-24 mt-20 sm:mt-28 lg:mt-36 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="text-gray-400 mt-2 sm:mt-2.5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            I'm always open to discussing projects,
            internships, full-time jobs,
            research collaborations and more exciting opportunities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 mt-6 sm:mt-8">

            {/* Email */}

            <a
              href="mailto:shreya2005jha@gmail.com"
              className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 hover:border-cyan-400 transition"
            >
              <FaEnvelope className="text-cyan-400 text-2xl sm:text-3xl mx-auto" />

              <h4 className="mt-3 font-semibold text-sm sm:text-base">
                Email
              </h4>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                shreya2005jha@gmail.com
              </p>
            </a>

            {/* Phone */}

            <a
              href="tel:+919318314958"
              className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 hover:border-cyan-400 transition"
            >
              <FaPhoneAlt className="text-cyan-400 text-2xl sm:text-3xl mx-auto" />

              <h4 className="mt-3 font-semibold text-sm sm:text-base">
                Phone
              </h4>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                +91 93183 14958
              </p>
            </a>

            {/* Location */}

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 hover:border-cyan-400 transition">

              <FaMapMarkerAlt className="text-cyan-400 text-2xl sm:text-3xl mx-auto" />

              <h4 className="mt-3 font-semibold text-sm sm:text-base">
                Location
              </h4>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Gurugram, Haryana
              </p>

            </div>

            {/* GitHub */}

            <a
              href="https://github.com/SHREYA-CODES-11"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 hover:border-cyan-400 transition"
            >

              <FaGithub className="text-cyan-400 text-2xl sm:text-3xl mx-auto" />

              <h4 className="mt-3 font-semibold text-sm sm:text-base">
                GitHub
              </h4>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                View Profile
              </p>

            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/shreya-jha-5966b6292/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 hover:border-cyan-400 transition"
            >

              <FaLinkedin className="text-cyan-400 text-2xl sm:text-3xl mx-auto" />

              <h4 className="mt-3 font-semibold text-sm sm:text-base">
                LinkedIn
              </h4>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Connect
              </p>

            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Achievements;