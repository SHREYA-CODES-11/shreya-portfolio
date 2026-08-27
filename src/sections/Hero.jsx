import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaBrain, FaChartBar, FaCode } from "react-icons/fa";
import profile from "../assets/images/shreya.jpeg";

function Hero() {
  const focusAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      icon: <FaBrain className="text-cyan-400 text-base shrink-0" />,
      items: ["Machine Learning", "Predictive Modeling", "AI Solutions"],
    },
    {
      title: "Data Analytics",
      icon: <FaChartBar className="text-cyan-400 text-base shrink-0" />,
      items: ["Python", "SQL", "Power BI", "Data Visualization"],
    },
    {
      title: "Software Development",
      icon: <FaCode className="text-cyan-400 text-base shrink-0" />,
      items: ["React", "FastAPI", "APIs", "Application Development"],
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative overflow-hidden"
    >
      {/* Background Ambient Cyan Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

        {/* Left Side (Content & CTAs with Circular Photo beside Heading) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Profile Photo (Left Corner) & Heading Row */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* Left Circular Profile Photo */}
            <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-cyan-500/10 border-4 border-cyan-400 overflow-hidden shadow-lg shadow-cyan-500/25 shrink-0">
              <img
                src={profile}
                alt="Shreya Jha"
                className="w-full h-full object-cover scale-135 translate-x-4"
              />
            </div>

            {/* Name and Title beside the image */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Shreya{" "}
                <span className="text-cyan-400">
                  Jha
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl mt-3 font-semibold text-gray-200">
                AI & Data Science Student
              </h2>
            </div>
          </div>

          <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            Passionate about Artificial Intelligence, Software Development,
            Data Analytics and building impactful solutions using Machine
            Learning and modern web technologies.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            {/* Resume Group */}
            <div className="inline-flex rounded-lg shadow-sm">
              <a
                href="/SHREYA JHA CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2.5 rounded-l-lg transition-colors duration-200 flex items-center text-sm sm:text-base"
              >
                View Resume
              </a>
              <a
                href="/SHREYA JHA CV.pdf"
                download
                className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 px-3.5 py-2.5 rounded-r-lg border-l border-cyan-400/40 transition-colors duration-200 flex items-center justify-center text-sm sm:text-base"
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
              className="border border-slate-700 hover:border-cyan-400 bg-slate-900/80 hover:bg-slate-850 text-gray-200 hover:text-cyan-300 px-4 sm:px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 text-sm sm:text-base shadow-sm"
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shreya-jha-5966b6292/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-700 hover:border-cyan-400 bg-slate-900/80 hover:bg-slate-850 text-gray-200 hover:text-cyan-300 px-4 sm:px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 text-sm sm:text-base shadow-sm"
            >
              <FaLinkedin className="text-lg text-cyan-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side ("What I Work On" Panel) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          {/* "What I Work On" Panel */}
          <div className="w-full relative rounded-2xl border border-slate-800/90 bg-slate-900/80 backdrop-blur-md p-5 sm:p-6 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400/50" />
                <h3 className="text-base sm:text-lg font-semibold tracking-wide text-white">
                  What I Work On
                </h3>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400/90 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                Focus Areas
              </span>
            </div>

            <div className="mt-4 space-y-3.5 sm:space-y-4">
              {focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {area.icon}
                    <h4 className="text-sm font-semibold text-gray-100">
                      {area.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {area.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="text-xs font-medium text-gray-300 bg-slate-900/90 border border-slate-800 px-2.5 py-0.5 rounded-md text-nowrap hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;