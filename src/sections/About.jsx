import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white px-6 py-24"
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
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 mt-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-6">
              Who am I?
            </h3>

            <p className="text-gray-400 leading-8">
              I'm Shreya Jha, an Artificial Intelligence & Data Science
              undergraduate with a passion for solving real-world problems
              through technology. I enjoy building intelligent applications,
              developing full-stack solutions, and exploring data-driven
              insights using Machine Learning and Artificial Intelligence.
            </p>

            <p className="text-gray-400 leading-8 mt-6">
              My journey includes research publication, Smart India Hackathon
              finalist experience, software development internships, and
              several AI, Machine Learning, and Web Development projects that
              strengthened both my technical and problem-solving skills.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <h4 className="font-semibold text-cyan-400">Education</h4>
                <p className="text-gray-400 mt-2">
                  B.Tech AI & Data Science
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400">CGPA</h4>
                <p className="text-gray-400 mt-2">
                  9.1
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400">Location</h4>
                <p className="text-gray-400 mt-2">
                  Gurugram, Haryana
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400">Interests</h4>
                <p className="text-gray-400 mt-2">
                  AI • ML • Web Development
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-slate-800 rounded-xl p-8 text-center">
                <h1 className="text-5xl font-bold text-cyan-400">10+</h1>
                <p className="mt-4 text-gray-400">Projects</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-8 text-center">
                <h1 className="text-5xl font-bold text-cyan-400">3</h1>
                <p className="mt-4 text-gray-400">Internships / Trainings</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-8 text-center">
                <h1 className="text-5xl font-bold text-cyan-400">4+</h1>
                <p className="mt-4 text-gray-400">Achievements</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-8 text-center">
                <h1 className="text-5xl font-bold text-cyan-400">1</h1>
                <p className="mt-4 text-gray-400">Research Paper</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;