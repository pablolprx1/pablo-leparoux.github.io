
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, Copy, Menu } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const menuLinks = [
  { label: "Accueil", to: "/" },
  { label: "Parcours", to: "/parcours" },
  { label: "Expériences pro", to: "/experiences" },
  { label: "Projets", to: "/projets" },
  { label: "Veille technologique", to: "/veille" },
];

const email = "leparouxpablo@gmail.com";

const Header = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleCopyMail = async () => {
    await navigator.clipboard.writeText(email);
    toast({
      title: "Adresse copiée !",
      description: "L'adresse e-mail a été copiée dans le presse-papier.",
      duration: 3000,
    });
  };

  return (
    <header className="w-full glass-morphism px-4 py-3 flex flex-col md:flex-row items-center justify-between shadow-xl z-20 mb-4 border border-white/25 backdrop-blur-xl sticky top-0">
      {/* Logo et titre */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-primary/70 to-violet-300 rounded-full flex items-center justify-center mr-2 shadow-md border border-white/40">
            <span className="text-lg font-bold text-primary drop-shadow-sm">PL</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-br from-primary to-violet-700 bg-clip-text text-transparent select-none drop-shadow-sm">Portfolio BTS SIO SLAM</span>
        </div>
        
        {/* Bouton menu mobile */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Navigation - centrée sur desktop, pleine largeur sur mobile quand ouverte */}
      <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto justify-center mt-4 md:mt-0`}>
        <ul className="flex flex-col md:flex-row gap-3 md:gap-4 items-center w-full md:w-auto">
          {menuLinks.map(link => (
            <li key={link.label} className="w-full md:w-auto">
              <Link
                to={link.to}
                className={`relative px-4 py-2 font-medium rounded-full transition-all duration-200 text-sm md:text-base text-center block
                  ${
                    location.pathname === link.to
                      ? "bg-gradient-to-r from-primary/60 via-violet-400/60 to-slate-200/60 text-primary shadow"
                      : "hover:bg-gradient-to-r hover:from-slate-100/40 hover:to-violet-100/40 text-gray-700 dark:text-gray-200"
                  }
                  hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:origin-bottom-left after:content-[''] after:block after:w-full after:h-0.5 after:bg-violet-400 after:absolute after:left-0 after:bottom-0
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Liens sociaux - visibles seulement sur desktop ou dans menu mobile */}
      <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex gap-3 items-center mt-4 md:mt-0 justify-center w-full md:w-auto`}>
        <a
          href="https://github.com/pablolprx1/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          aria-label="GitHub"
          title="Voir mon profil GitHub"
        >
          <Github size={20} strokeWidth={2.2} className="text-gray-700 dark:text-gray-200" />
        </a>
        <a
          href="https://www.linkedin.com/in/pablo-leparoux-2866a7296/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          aria-label="LinkedIn"
          title="Voir mon profil LinkedIn"
        >
          <Linkedin size={20} strokeWidth={2.2} className="text-[#0e76a8]" />
        </a>
        <button
          onClick={handleCopyMail}
          className="p-2 rounded-full hover:scale-110 hover:bg-purple-100 dark:hover:bg-purple-900 transition group"
          aria-label="Copier l'adresse e-mail"
          title="Copier mon adresse e-mail"
        >
          <Mail size={20} strokeWidth={2.2} className="text-violet-400 inline" />
        </button>
      </div>
    </header>
  );
};

export default Header;
