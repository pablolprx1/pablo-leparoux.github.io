
import { FolderArchive, Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AsanaIcon from "@/components/icons/AsanaIcon";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "plGestionTache",
    title: "Application web de gestion de projets",
    description: [
      "Cette application web permet de créer, modifier et supprimer des projets.", <br />,
      "La gestion des projets comprend une gestion des tâches et des collaborateurs.", <br />,
      "Cette application a été développée à l'aide de PHP et du framework Laravel, ainsi que de JavaScript.",
    ],
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    url: "https://github.com/pablolprx1/plGestionTache",
    tools: ["Asana", "GitHub", "VS Code", "MySQL Workbench"],
    longDescription: "Cette application web complète permet aux utilisateurs de créer, modifier et supprimer des projets. Elle offre une interface intuitive pour la gestion des tâches associées à chaque projet, avec la possibilité d'assigner des collaborateurs spécifiques. L'application a été développée avec PHP en utilisant le framework Laravel pour le backend, et JavaScript pour améliorer l'interface utilisateur. Le projet utilise une architecture MVC pour une meilleure organisation du code et une maintenance simplifiée.",
    features: [
      "Création et gestion de projets",
      "Attribution de tâches aux collaborateurs",
      "Suivi de l'avancement des projets",
      "Interface administrative pour les gestionnaires",
      "Système de notifications pour les mises à jour"
    ],
    technologies: ["PHP 8", "Laravel", "JavaScript", "MySQL", "HTML/CSS", "Bootstrap"]
  },
  {
    id: "plGestionInfirmieres",
    title: "API REST pour un cabinet infirmier",
    description: [
      "Cette API permet de gérer les services d'un cabinet infirmier. ",
      "Elle est développée en Python à l'aide du framework FastAPI.",
    ],
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    url: "https://github.com/pablolprx1/plGestionInfirmieres",
    tools: ["Asana", "GitHub", "VS Code", "MySQL Workbench"],
    longDescription: "Cette API REST est conçue pour optimiser la gestion quotidienne d'un cabinet infirmier. Développée avec Python et le framework FastAPI, elle offre des endpoints permettant de gérer les patients, les rendez-vous, les soins et le personnel soignant. L'API intègre un système d'authentification et d'autorisation pour sécuriser l'accès aux données sensibles des patients. La documentation complète de l'API est générée automatiquement via Swagger UI.",
    features: [
      "Gestion des patients et de leurs dossiers médicaux",
      "Planification des rendez-vous et des tournées",
      "Suivi des soins dispensés",
      "Gestion des facturations et des remboursements",
      "Génération de rapports statistiques"
    ],
    technologies: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT Authentication", "Swagger UI"]
  },
];

const Projets = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-8">
      <div className="flex flex-col gap-8 items-center w-full max-w-4xl">
        {/* Entête avec animation */}
        <div className="flex flex-col items-center gap-2 mb-4 w-full">
          <div className="flex items-center gap-4 mb-2 justify-center">
            <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-full">
              <FolderArchive size={32} className="text-violet-600 dark:text-violet-300" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-700 to-violet-500 dark:from-gray-300 dark:to-violet-400 bg-clip-text text-transparent">
              Projets
            </h1>
          </div>
          <Separator className="w-1/3 bg-gradient-to-r from-transparent via-violet-300 dark:via-violet-700 to-transparent h-0.5 my-1" />
          <div className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-4">
            Voici les projets personnels que j'ai réalisé et qui mettent en avant les compétences que j'ai acquit durant ces deux années de BTS SIO.
          </div>
        </div>
      
        {/* Asana Dialog */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="max-w-4xl p-0">
            <img 
              src="/lovable-uploads/a7617b64-ed2d-42a7-92e2-c9a71e62b401.png" 
              alt="Screenshot Asana" 
              className="w-full" 
            />
          </DialogContent>
        </Dialog>
      
        <div className="grid gap-6 w-full max-w-2xl">
          {projects.map((project) => (
            <Card 
              key={project.id}
              onClick={() => navigate(`/projets/${project.id}`)}
              className="flex gap-4 bg-gradient-to-br from-white/80 to-violet-50/90 dark:from-black/60 dark:to-violet-900/10 p-4 rounded-xl shadow-lg hover:shadow-xl transition border border-violet-200/50 dark:border-violet-800/30 cursor-pointer"
            >
              <CardContent className="p-0 flex items-center gap-4 w-full">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <img 
                    src={project.img} 
                    alt={`Logo ${project.title}`} 
                    className="w-12 h-12 object-contain" 
                  />
                </div>
                <div className="flex-grow">
                  <p className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-200">{project.title}</p>
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
                  <div className="flex justify-end mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.url, '_blank');
                      }}
                    >
                      <Github size={16} />
                      GitHub
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projets;
