
import { Github, Linkedin, Mail, MapPin, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import React from "react";

const email = "leparouxpablo@gmail.com";

const Footer = () => {
  const handleCopyMail = async () => {
    await navigator.clipboard.writeText(email);
    toast({
      title: "Adresse copiée !",
      description: "L'adresse e-mail a été copiée dans le presse-papier.",
    });
  };

  return (
    <footer className="w-full bg-white/80 dark:bg-black/70 border-t border-gray-300/30 dark:border-gray-700/50 px-0 py-1 shadow-inner">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 py-2">
        {/* Logo et nom à gauche */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary/80 to-violet-400 rounded-full flex items-center justify-center shadow border border-white/30">
            <span className="text-base font-bold text-primary drop-shadow-sm">SL</span>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-200 tracking-tight text-sm">Pablo LEPAROUX</span>
        </div>
        {/* Socials et mail au centre */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/pablolprx1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:bg-gray-100/70 dark:hover:bg-gray-800/60 transition"
            aria-label="GitHub"
          >
            <Github size={17} className="text-gray-700 dark:text-gray-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-leparoux-2866a7296/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:bg-blue-100/60 dark:hover:bg-blue-900/50 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} className="text-[#0e76a8]" />
          </a>
          <button
            onClick={handleCopyMail}
            className="p-1.5 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition group"
            aria-label="Copier l'adresse e-mail"
            type="button"
          >
            <Mail size={17} className="text-violet-500 dark:text-violet-300 inline" />
            <Copy size={12} className="inline ml-1 text-gray-400 opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
        {/* Ville & copyright à droite */}
        <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 opacity-80 font-medium">
          <MapPin size={13} className="opacity-70" />
          <span>Nantes, France</span>
          <span className="hidden sm:inline mx-1">|</span>
          <span className="hidden sm:inline opacity-60">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

