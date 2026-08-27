import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import profile from "../assets/images/shreya.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-lg mb-3">
            👋 Hi, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Shreya{" "}
            <span className="text-cyan-400">
              Jha
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl mt-6 text-gray-300">
            AI & Data Science Student
          </h2>

          <p className="mt-6 text-gray-400 leading-8 max-w-xl">
            Passionate about Artificial Intelligence, Software Development,
            Data Analytics and building impactful solutions using Machine
            Learning and modern web technologies.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4 flex-wrap">

            {/* Resume Buttons */}
            <div className="flex">

              {/* View Resume */}
              <a
                href="/SHREYA JHA CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-l-lg font-semibold transition duration-300"
              >
                View Resume
              </a>

              {/* Download Resume */}
              <a
                href="/SHREYA JHA CV.pdf"
                download
                className="border-y border-r border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-4 py-3 rounded-r-lg transition duration-300 text-xl"
                title="Download Resume"
              >
                <FaDownload />
              </a>

            </div>

            {/* GitHub */}
            <a
              href="https://github.com/SHREYA-CODES-11"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center gap-2"
            >
              <FaGithub />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shreya-jha-5966b6292/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center gap-2"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 rounded-full bg-cyan-500/20 border-4 border-cyan-400 overflow-hidden shadow-lg shadow-cyan-500/20">

            <img
              src={profile}
              alt="Shreya Jha"
              className="w-full h-full object-cover scale-125 translate-x-10"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;