import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <p>
          © {new Date().getFullYear()} Shreya Jha. All Rights Reserved.
        </p>

        <p className="flex items-center gap-2 mt-4 md:mt-0">
          Built with React & Tailwind.
        </p>

      </div>
    </footer>
  );
}

export default Footer;