
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full glass-morphism px-3 py-2 rounded-t-2xl shadow-lg border-t border-white/25 backdrop-blur-xl">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/pablolprx1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition"
            aria-label="GitHub"
          >
            <Github size={18} className="text-gray-700 dark:text-gray-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-leparoux-2866a7296/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:bg-blue-100/60 dark:hover:bg-blue-900/50 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} className="text-[#0e76a8]" />
          </a>
          <a
            href="mailto:leparouxpablo@gmail.com"
            className="p-1.5 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition"
            aria-label="Email"
          >
            <Mail size={18} className="text-violet-500 dark:text-violet-300" />
          </a>
        </div>
        <div className="flex items-center text-xs text-gray-700 dark:text-gray-300 font-semibold space-x-2">
          <MapPin size={13} className="opacity-70" />
          <span>Nantes, France</span>
          <span className="hidden md:inline opacity-60">|</span>
          <span className="font-bold text-primary">Pablo LEPAROUX</span>
          <span className="hidden md:inline opacity-50">©</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
