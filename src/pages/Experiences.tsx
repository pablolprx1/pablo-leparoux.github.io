
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import AsanaIcon from "@/components/icons/AsanaIcon";
import { Separator } from "@/components/ui/separator";

const Experiences = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-8">
      <div className="flex flex-col gap-8 items-center w-full max-w-4xl">
        {/* Entête avec animation */}
        <div className="flex flex-col items-center gap-2 mb-4 w-full">
          <div className="flex items-center gap-4 mb-2 justify-center">
            <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-full">
              <Briefcase size={32} className="text-violet-600 dark:text-violet-300" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-700 to-violet-500 dark:from-gray-300 dark:to-violet-400 bg-clip-text text-transparent">
              Expériences professionnelles
            </h1>
          </div>
          <Separator className="w-1/3 bg-gradient-to-r from-transparent via-violet-300 dark:via-violet-700 to-transparent h-0.5 my-1" />
          <div className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-4">
            Voici les expériences professionnelles que j'ai acquit durant ces deux années de BTS SIO.
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
      
        {/* Alternance FOBware SI */}
        <div className="grid gap-6 w-full max-w-2xl">
          <div className="bg-gradient-to-br from-white/80 to-violet-50/90 dark:from-black/60 dark:to-violet-900/10 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-violet-200/50 dark:border-violet-800/30">
            <p className="font-semibold bg-gradient-to-r from-violet-700 to-indigo-700 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent text-lg mb-2">Alternance Développeur FullStack - FOBware SI</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm mb-3">Septembre 2024 - Septembre 2025</p>
            <ul className="list-disc pl-6 text-base text-gray-600 dark:text-gray-300">
              <li>Formation sur le WLangage (PCSoft)</li>
              <li>Passage en API d'une application interne de gestion de tâches</li>
              <li>Ticketting</li>
              <li>Réalisation de pages sur le site interne de gestion d'entreprise</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
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
          <div className="bg-gradient-to-br from-white/80 to-violet-50/90 dark:from-black/60 dark:to-violet-900/10 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-violet-200/50 dark:border-violet-800/30">
            <p className="font-semibold bg-gradient-to-r from-indigo-700 to-violet-700 dark:from-indigo-400 dark:to-violet-300 bg-clip-text text-transparent text-lg mb-2">Stage Développeur Web - FOBware SI</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm mb-3">Mai 2024 - Juin 2024</p>
            <ul className="list-disc pl-6 text-base text-gray-600 dark:text-gray-300">
              <li>Formation sur les langages de programmation Python et JS et le framework Django</li>
              <li>Apprentissage de la méthode en mode projet de l'entreprise</li>
              <li>Développement d'un site de gestion de charge/capacité</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
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
      </div>
    </section>
  );
};

export default Experiences;
