import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Achievements",
  "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/75 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* ================= Logo ================= */}

        <a
          href="#home"
          className="flex items-center gap-3 group"
        >
          {/* Circle Logo */}

          <div
            className="
            w-12
            h-12
            rounded-full
            bg-cyan-400/10
            border-2
            border-cyan-400
            flex
            items-center
            justify-center
            shadow-lg
            shadow-cyan-500/20
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:shadow-cyan-400/50
          "
          >
            <span className="text-cyan-400 font-extrabold text-lg tracking-wider">
              SJ
            </span>
          </div>

          {/* Name */}

          <div className="leading-tight">
            <h1 className="text-2xl font-extrabold tracking-wide">
              <span className="text-white">Shreya </span>

              <span className="text-cyan-400">
                Jha
              </span>
            </h1>

            <p className="text-xs text-gray-400 tracking-[0.25em] uppercase">
              Portfolio
            </p>
          </div>
        </a>

        {/* ================= Desktop Menu ================= */}

        <ul className="hidden md:flex items-center gap-9 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="
                relative
                transition
                duration-300
                hover:text-cyan-400

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-cyan-400
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* ================= Mobile Menu Button ================= */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;