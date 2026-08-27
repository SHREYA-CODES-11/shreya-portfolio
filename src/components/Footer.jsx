function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-4 sm:py-5 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">

        <p>
          © {new Date().getFullYear()} Shreya Jha. All Rights Reserved.
        </p>

        <p className="flex items-center gap-2">
          Built with React & Tailwind.
        </p>

      </div>
    </footer>
  );
}

export default Footer;