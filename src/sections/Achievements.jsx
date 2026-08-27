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
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          My <span className="text-cyan-400">Achievements</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          Milestones that reflect my journey in research,
          innovation and competitive problem solving.
        </p>

        {/* Achievement Cards */}

        <div className="grid md:grid-cols-2 gap-6 mt-14">

          {achievements.map((achievement, index) => (

            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-4xl">
                {achievement.icon}
              </div>

              <h3 className="text-xl font-bold mt-4">
                {achievement.title}
              </h3>

              <p className="text-cyan-400 mt-2">
                {achievement.subtitle}
              </p>

              <p className="text-gray-400 mt-4 leading-7 text-sm">
                {achievement.description}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Contact */}

        <motion.div
            id="contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="scroll-mt-24 mt-24 text-center"
        >

          <h2 className="text-4xl font-bold">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing projects,
            internships, full-time jobs,
            research collaborations and more exciting opportunities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">

            {/* Email */}

            <a
              href="mailto:shreya2005jha@gmail.com"
              className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 transition"
            >
              <FaEnvelope className="text-cyan-400 text-3xl mx-auto" />

              <h4 className="mt-4 font-semibold">
                Email
              </h4>

              <p className="text-gray-400 text-sm mt-2">
                shreya2005jha@gmail.com
              </p>
            </a>

            {/* Phone */}

            <a
              href="tel:+919318314958"
              className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 transition"
            >
              <FaPhoneAlt className="text-cyan-400 text-3xl mx-auto" />

              <h4 className="mt-4 font-semibold">
                Phone
              </h4>

              <p className="text-gray-400 text-sm mt-2">
                +91 93183 14958
              </p>
            </a>

            {/* Location */}

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 transition">

              <FaMapMarkerAlt className="text-cyan-400 text-3xl mx-auto" />

              <h4 className="mt-4 font-semibold">
                Location
              </h4>

              <p className="text-gray-400 text-sm mt-2">
                Gurugram, Haryana
              </p>

            </div>

            {/* GitHub */}

            <a
              href="https://github.com/SHREYA-CODES-11"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 transition"
            >

              <FaGithub className="text-cyan-400 text-3xl mx-auto" />

              <h4 className="mt-4 font-semibold">
                GitHub
              </h4>

              <p className="text-gray-400 text-sm mt-2">
                View Profile
              </p>

            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/shreya-jha-5966b6292/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 transition"
            >

              <FaLinkedin className="text-cyan-400 text-3xl mx-auto" />

              <h4 className="mt-4 font-semibold">
                LinkedIn
              </h4>

              <p className="text-gray-400 text-sm mt-2">
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