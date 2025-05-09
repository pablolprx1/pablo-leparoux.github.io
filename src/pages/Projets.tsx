
import { FolderArchive } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import AsanaIcon from "@/components/icons/AsanaIcon";

const projects = [
  {
    title: "Application web de gestion de projets",
    description: [
      "Cette application web permet de créer, modifier et supprimer des projets.", <br />,
      "La gestion des projets comprend une gestion des tâches et des collaborateurs.", <br />,
      "Cette application a été développée à l'aide de PHP et du framework Laravel, ainsi que de JavaScript.",
    ],
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    url: "https://github.com/pablolprx1/plGestionTache",
    tools: ["Asana", "GitHub", "VS Code", "MySQL Workbench"],
  },
  {
    title: "API REST pour un cabinet infirmier",
    description: [
      "Cette API permet de gérer les services d'un cabinet infirmier. ",
      "Elle est développée en Python à l'aide du framework FastAPI.",
    ],
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    url: "https://github.com/pablolprx1/plGestionInfirmieres",
    tools: ["Asana", "GitHub", "VS Code", "MySQL Workbench"],
  },
];

const Projets = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-12">
      <div className="flex items-center gap-4 mb-6">
        <FolderArchive size={32} />
        <h1 className="text-3xl font-bold tracking-tight">Projets</h1>
      </div>
      <div className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        Voici les projets personnels que j'ai réalisé et qui mettent en avant les compétences que j'ai acquit durant ces deux années de BTS SIO.
      </div>
      
      {/* Asana Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <AsanaIcon className="h-5 w-5" /> Asana - Gestion de projet
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img 
              src="/lovable-uploads/a7617b64-ed2d-42a7-92e2-c9a71e62b401.png" 
              alt="Screenshot Asana" 
              className="w-full rounded-md border border-gray-200 dark:border-gray-800" 
            />
          </div>
        </DialogContent>
      </Dialog>
      
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
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tools.map((tool) => (
                      <Badge 
                        key={`${project.title}-${tool}`} 
                        variant="secondary" 
                        className={`bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${tool === 'Asana' ? 'cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700' : ''}`}
                        onClick={tool === 'Asana' ? (e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setOpenDialog(true);
                        } : undefined}
                      >
                        {tool === 'Asana' && <AsanaIcon className="h-3.5 w-3.5 mr-1" />}
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projets;
