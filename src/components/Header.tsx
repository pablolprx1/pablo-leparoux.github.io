
import { Link, useLocation } from "react-router-dom";

const menuLinks = [
  { label: "Accueil", to: "/" },
  { label: "Projets", to: "/projets" },
  { label: "Expériences pro", to: "/experiences" },
  { label: "Parcours", to: "/parcours" },
  { label: "Veille technologique", to: "/veille" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full bg-white/80 dark:bg-black/60 glass-morphism px-6 py-2 flex items-center justify-between shadow-lg z-10">
      <span className="text-lg font-bold tracking-tight">Portfolio BTS SIO SLAM</span>
      <nav>
        <ul className="flex space-x-4">
          {menuLinks.map(link => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={`px-3 py-1 font-medium rounded transition hover:bg-primary/10 hover:text-primary ${
                  location.pathname === link.to ? "bg-primary/20 text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
