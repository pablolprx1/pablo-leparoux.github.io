
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full mt-12 py-6 flex flex-col items-center gap-2 bg-white/70 dark:bg-black/50 glass-morphism">
      <div className="flex flex-wrap items-center gap-4 mb-1">
        <a
          href="https://github.com/votrerepo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition"
          aria-label="GitHub"
        >
          <Github size={22} />
        </a>
        <a
          href="https://linkedin.com/in/votreprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition"
          aria-label="LinkedIn"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="mailto:votre.mail@pro.fr"
          className="hover:text-primary transition"
          aria-label="Email"
        >
          <Mail size={22} />
        </a>
      </div>
      <div className="flex flex-col items-center text-sm text-gray-700 dark:text-gray-300 gap-1">
        <span><strong>Votre Nom Prénom</strong></span>
        <span className="flex items-center gap-1">
          <MapPin size={14} /> Nantes, France
        </span>
      </div>
    </footer>
  );
};

export default Footer;

