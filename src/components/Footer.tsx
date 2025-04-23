
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-7 px-2 mt-12 bg-gradient-to-tr from-violet-100/40 via-white/60 to-purple-100/50 dark:from-slate-900 dark:via-black/70 dark:to-indigo-900 glass-morphism border-t border-white/20">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <a
            href="https://github.com/votrerepo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-black/10 dark:hover:bg-white/5 transition"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/votreprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-[#0e76a810] dark:hover:bg-[#0e76a81d] transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:votre.mail@pro.fr"
            className="p-3 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 transition"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-900 dark:text-gray-200 gap-1">
          <span>
            <strong>Votre Nom Prénom</strong>
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={14} className="opacity-80 mr-1" />
            Nantes, France
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
