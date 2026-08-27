import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {

  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  const ProjectCard = ({ project, featured = false }) => (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
      }}
      className={`
        bg-slate-900
        rounded-2xl
        overflow-hidden
        border
        border-slate-800
        hover:border-cyan-400
        hover:shadow-xl
        hover:shadow-cyan-500/10
        transition-all
        duration-300

        ${featured ? "lg:flex" : ""}
      `}
    >

      {/* Project Image */}

      <div
        className={`
          bg-slate-800
          flex
          items-center
          justify-center

          ${
            featured
              ? "lg:w-2/5 h-72"
              : "h-56"
          }
        `}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}

      <div
        className={`
          p-7

          ${
            featured
              ? "lg:w-3/5"
              : ""
          }
        `}
      >

        <h3 className="text-3xl font-bold">
          {project.title}
        </h3>

        <p className="text-cyan-400 mt-2">
          {project.subtitle}
        </p>

        <p className="text-gray-400 mt-5 leading-7">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3 mt-6">

          {project.tech.map((tech) => (

            <span
              key={tech}
              className="bg-slate-800 px-3 py-2 rounded-full text-sm hover:bg-cyan-400 hover:text-black transition"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex items-center justify-between mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-lg font-semibold transition"
          >
            <FaGithub />
            GitHub
          </a>

          {project.badge && (
            <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
              {project.badge}
            </span>
          )}

        </div>

      </div>

    </motion.div>
  );
    return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
            A collection of projects that showcase my expertise in
            Artificial Intelligence, Machine Learning, Full-Stack Development,
            and Data Analytics.
          </p>
        </motion.div>

        {/* Featured Projects */}

        <div className="mt-16 space-y-12">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={true}
            />
          ))}
        </div>

        {/* Other Projects */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-4xl font-bold text-center mb-14">
            Other <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;