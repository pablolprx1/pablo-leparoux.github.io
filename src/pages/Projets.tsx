
import { FolderArchive } from "lucide-react";

const projects = [
  {
    title: "Application web de gestion de projets",
    description: "Application web pour organiser, suivre et partager des tâches en équipe.",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&q=80",
  },
  {
    title: "Portfolio BTS SIO",
    description: "Portfolio interactif développé en React et Tailwind pour présenter mon cursus et mes compétences.",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80",
  },
  {
    title: "API REST pour un cabinet infirmier",
    description: "Service REST pour la base de données d'un cabinet infirmier.",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&q=80",
  },
];

const Projets = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-12">
    <div className="flex items-center gap-4 mb-6">
      <FolderArchive size={32} />
      <h1 className="text-3xl font-bold tracking-tight">Projets</h1>
    </div>
    <div className="grid gap-6 w-full max-w-2xl">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex gap-4 bg-white/80 dark:bg-black/60 glass-morphism p-4 rounded-xl shadow hover-scale transition items-center"
        >
          <img src={project.img} alt={project.title} className="w-28 h-20 object-cover rounded-lg border shadow" />
          <div>
            <p className="text-lg font-semibold mb-1">{project.title}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projets;
