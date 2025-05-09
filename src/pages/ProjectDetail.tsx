
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FolderArchive, Github, ArrowLeft, Code, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

// Import the projects data from Projets.tsx
// In a real app, this would likely be in a separate data file or fetched from an API
const projects = [
  {
    id: "plGestionTache",
    title: "Application web de gestion de projets",
    description: [
      "Cette application web permet de créer, modifier et supprimer des projets.",
      "La gestion des projets comprend une gestion des tâches et des collaborateurs.",
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

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    // Find the project with the matching ID
    const foundProject = projects.find((p) => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
    } else {
      // Redirect to the projects page if no project is found
      navigate('/projets');
    }
  }, [projectId, navigate]);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-8 pb-16">
      <div className="flex flex-col gap-8 items-center w-full max-w-4xl">
        {/* Back button */}
        <div className="self-start mb-2">
          <Button 
            variant="outline" 
            onClick={() => navigate('/projets')} 
            className="gap-2 hover:bg-violet-100 dark:hover:bg-violet-900/30"
          >
            <ArrowLeft size={16} />
            Retour aux projets
          </Button>
        </div>

        {/* Project Header */}
        <Card className="w-full bg-gradient-to-br from-white/80 to-violet-50/90 dark:from-black/60 dark:to-violet-900/10 border border-violet-200/50 dark:border-violet-800/30">
          <CardContent className="p-8">
            <div className="flex gap-6 items-center">
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow-md">
                <img 
                  src={project.img} 
                  alt={`Logo ${project.title}`} 
                  className="w-16 h-16 object-contain" 
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-700 to-violet-500 dark:from-gray-300 dark:to-violet-400 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <div className="flex gap-3 mt-3">
                  <Button 
                    variant="default"
                    size="sm"
                    className="gap-2"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    <Github size={16} />
                    Voir sur GitHub
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Description */}
        <Card className="w-full bg-gradient-to-br from-white/80 to-violet-50/90 dark:from-black/60 dark:to-violet-900/10 border border-violet-200/50 dark:border-violet-800/30">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FolderArchive size={20} className="text-violet-600 dark:text-violet-300" />
              Description du projet
            </h2>
            <Separator className="mb-4 bg-violet-200/50 dark:bg-violet-800/30" />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="w-full bg-gradient-to-br from-white/80 to-violet-50/90 dark:from-black/60 dark:to-violet-900/10 border border-violet-200/50 dark:border-violet-800/30">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-violet-600 dark:text-violet-300" />
              Fonctionnalités
            </h2>
            <Separator className="mb-4 bg-violet-200/50 dark:bg-violet-800/30" />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className="w-full bg-gradient-to-br from-white/80 to-violet-50/90 dark:from-black/60 dark:to-violet-900/10 border border-violet-200/50 dark:border-violet-800/30">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Code size={20} className="text-violet-600 dark:text-violet-300" />
              Technologies utilisées
            </h2>
            <Separator className="mb-6 bg-violet-200/50 dark:bg-violet-800/30" />
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, index: number) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="px-3 py-1.5 text-sm bg-white dark:bg-black/40 border-violet-200 dark:border-violet-800/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tools */}
        <Card className="w-full bg-gradient-to-br from-white/80 to-violet-50/90 dark:from-black/60 dark:to-violet-900/10 border border-violet-200/50 dark:border-violet-800/30">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold mb-4">Outils utilisés</h2>
            <Separator className="mb-6 bg-violet-200/50 dark:bg-violet-800/30" />
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool: string, index: number) => (
                <Badge 
                  key={index}
                  className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectDetail;
