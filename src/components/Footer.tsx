
import { Github, Linkedin, Mail, Copy, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import React from "react";
import { Link } from "react-router-dom";

const email = "leparouxpablo@gmail.com";

const Footer = () => {
  const handleCopyMail = async () => {
    await navigator.clipboard.writeText(email);
    toast({
      title: "Adresse copiée !",
      description: "L'adresse e-mail a été copiée dans le presse-papier.",
      duration: 3000,
    });
  };

  return (
    <footer className="w-full bg-transparent px-6 py-4">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo et nom à gauche */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary/80 to-violet-400 rounded-full flex items-center justify-center shadow border border-white/30">
            <span className="text-base font-bold text-primary drop-shadow-sm">PL</span>
          </div>
          <span className="font-bold text-gray-700 tracking-tight text-sm">Pablo LEPAROUX</span>
        </div>
        
        {/* Socials et mail au centre */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pablolprx1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:bg-gray-100 transition"
            aria-label="GitHub"
            title="Voir mon profil GitHub"
          >
            <Github size={17} className="text-gray-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-leparoux-2866a7296/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:bg-blue-100 transition"
            aria-label="LinkedIn"
            title="Voir mon profil LinkedIn"
          >
            <Linkedin size={17} className="text-[#0e76a8]" />
          </a>
          <button
            onClick={handleCopyMail}
            className="p-1.5 rounded-full hover:bg-purple-100 transition group"
            aria-label="Copier l'adresse e-mail"
            title="Copier mon adresse e-mail"
            type="button"
          >
            <Mail size={17} className="text-violet-500 inline" />
          </button>
        </div>
        
        {/* Ville, copyright et mentions légales à droite */}
        <div className="flex items-center gap-2 text-xs text-gray-700 opacity-80 font-medium">
          <MapPin size={13} className="opacity-70" />
          <span>Nantes, France</span>
          <span className="mx-1">|</span>
          <span className="opacity-60">© {new Date().getFullYear()}</span>
          <span className="mx-1">|</span>
          <Link to="/mentions-legales" className="hover:underline hover:text-primary transition-colors">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
