
import { FolderArchive } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Application web de gestion de projets",
    description: "Application web pour organiser, suivre et partager des tâches en équipe.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg",
    url: "https://github.com/pablolprx1/gestion-projets",
  },
  {
    title: "Portfolio BTS SIO",
    description: "Portfolio interactif développé en React et Tailwind pour présenter mon cursus et mes compétences.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    url: "https://github.com/pablolprx1/portfolio-bts",
  },
  {
    title: "API REST pour un cabinet infirmier",
    description: "Service REST pour la base de données d'un cabinet infirmier.",
    img: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
    url: "https://github.com/pablolprx1/api-cabinet-infirmier",
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
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          key={project.title}
          className="block w-full transition-transform duration-200 hover:-translate-y-1"
        >
          <Card className="flex gap-4 bg-white/80 dark:bg-black/60 glass-morphism p-4 rounded-xl shadow hover:shadow-lg transition">
            <CardContent className="p-0 flex items-center gap-4 w-full">
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
                <img 
                  src={project.img} 
                  alt={`Logo ${project.title}`} 
                  className="w-20 h-20 object-contain" 
                />
              </div>
              <div className="flex-grow">
                <p className="text-lg font-semibold mb-1">{project.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  </section>
);

export default Projets;
