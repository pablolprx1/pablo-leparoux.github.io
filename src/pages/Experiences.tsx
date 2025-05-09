import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import AsanaIcon from "@/components/icons/AsanaIcon";

const Experiences = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-12">
      <div className="flex items-center gap-4 mb-6">
        <Briefcase size={32} />
        <h1 className="text-3xl font-bold tracking-tight">Expériences professionnelles</h1>
      </div>
      <div className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        Voici les expériences professionnelles que j'ai acquit durant ces deux années de BTS SIO.
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
      
      {/* Alternance FOBware SI */}
      <div className="grid gap-6 w-full max-w-2xl">
        <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow hover-scale transition">
          <p className="font-semibold">Alternance Développeur FullStack - FOBware SI</p>
          <p className="text-gray-500 dark:text-gray-300 text-sm mb-1">Septembre 2024 - Septembre 2025</p>
          <ul className="list-disc pl-6 text-base">
            <li>Formation sur le WLangage (PCSoft)</li>
            <li>Passage en API d'une application interne de gestion de tâches</li>
            <li>Ticketting</li>
            <li>Réalisation de pages sur le site interne de gestion d'entreprise</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge 
              variant="secondary" 
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setOpenDialog(true)}
            >
              <AsanaIcon className="h-3.5 w-3.5 mr-1" />
              Asana
            </Badge>
            <Badge 
              variant="secondary" 
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              Suite PCSoft
            </Badge>
            <Badge 
              variant="secondary" 
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              MySQL Workbench
            </Badge>
          </div>
        </div>
        {/* Stage FOBware SI */}
        <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow hover-scale transition">
          <p className="font-semibold">Stage Développeur Web - FOBware SI</p>
          <p className="text-gray-500 dark:text-gray-300 text-sm mb-1">Mai 2024 - Juin 2024</p>
          <ul className="list-disc pl-6 text-base">
            <li>Formation sur les langages de programmation Python et JS et le framework Django</li>
            <li>Apprentissage de la méthode en mode projet de l'entreprise</li>
            <li>Développement d'un site de gestion de charge/capacité</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge 
              variant="secondary" 
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setOpenDialog(true)}
            >
              <AsanaIcon className="h-3.5 w-3.5 mr-1" />
              Asana
            </Badge>
            <Badge 
              variant="secondary" 
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              GitLab
            </Badge>
            <Badge 
              variant="secondary" 
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              DBeaver
            </Badge>
            <Badge 
              variant="secondary" 
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              VS Code
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
