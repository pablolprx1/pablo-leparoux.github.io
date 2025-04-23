
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/20 bg-white/80 dark:bg-black/70 backdrop-blur px-2 py-3">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/pablolprx1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-200/70 dark:hover:bg-gray-800/60 transition"
            aria-label="GitHub"
          >
            <Github size={20} className="text-gray-700 dark:text-gray-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-leparoux-2866a7296/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#E8F4FD]/70 dark:hover:bg-[#233D4D]/40 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-[#0e76a8]" />
          </a>
          <a
            href="mailto:leparouxpablo@gmail.com"
            className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition"
            aria-label="Email"
          >
            <Mail size={20} className="text-violet-500 dark:text-violet-300" />
          </a>
        </div>
        <div className="flex items-center text-xs text-gray-800 dark:text-gray-300 gap-1 font-medium">
          <span className="hidden md:inline">©</span>
          <span className="font-bold">Pablo LEPAROUX</span>
          <span className="mx-1 opacity-60">|</span>
          <MapPin size={13} className="opacity-70 mr-1" />
          <span>Nantes, France</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
