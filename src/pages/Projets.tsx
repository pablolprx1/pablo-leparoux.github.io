
import { FolderArchive } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Application web de gestion de projets",
    description: "Application web pour organiser, suivre et partager des tâches en équipe. Développée en PHP avec le framework Laravel.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    url: "https://github.com/pablolprx1/plGestionTache",
  },
  {
    title: "Portfolio BTS SIO",
    description: "Portfolio développé en React et Tailwind pour présenter mon cursus et mes compétences.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    url: "https://github.com/pablolprx1/pablo-leparoux.github.io",
  },
  {
    title: "API REST pour un cabinet infirmier",
    description: "API Rest pour les services d'un cabinet infirmier développé en Python à l'aide du framework FastAPI.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    url: "https://github.com/pablolprx1/plGestionInfirmieres",
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
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white rounded-lg">
                <img 
                  src={project.img} 
                  alt={`Logo ${project.title}`} 
                  className="w-12 h-12 object-contain" 
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
