
import { GraduationCap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Parcours = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-8">
    <div className="flex flex-col gap-8 items-center w-full max-w-4xl">
      {/* Entête avec animation */}
      <div className="flex flex-col items-center gap-2 mb-4 w-full">
        <div className="flex items-center gap-4 mb-2 justify-center">
          <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-full">
            <GraduationCap size={32} className="text-violet-600 dark:text-violet-300" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-700 to-violet-500 dark:from-gray-300 dark:to-violet-400 bg-clip-text text-transparent">
            Parcours scolaire
          </h1>
        </div>
        <Separator className="w-1/3 bg-gradient-to-r from-transparent via-violet-300 dark:via-violet-700 to-transparent h-0.5 my-1" />
        <div className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-4">
          Un aperçu de mon parcours scolaire depuis le BAC.
        </div>
      </div>

      {/* BTS SIO SLAM */}
      <div className="grid gap-6 w-full max-w-2xl">
        <div className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-violet-200/50 dark:border-violet-800/30">
          <p className="font-semibold bg-gradient-to-r from-violet-700 to-indigo-700 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent text-lg mb-3">BTS SIO option SLAM — Lycée Carcouët 2023-2025</p>
          <ul className="list-disc pl-6 text-base text-gray-600 dark:text-gray-300">
            <li>Développement d'applications, gestion de bases de données, travail en projet</li>
            <li>Apprentissage des langages : C#, Python, PHP, JavaScript...</li>
            <li>Stage en première année / Alternance en deuxième année</li>
          </ul>
        </div>
        
        {/* BAC */}
        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-violet-200/50 dark:border-violet-800/30">
          <p className="font-semibold bg-gradient-to-r from-indigo-700 to-violet-700 dark:from-indigo-400 dark:to-violet-300 bg-clip-text text-transparent text-lg mb-3">BAC Général — Lycée Grand-Air 2020-2023</p>
          <ul className="list-disc pl-6 text-base text-gray-600 dark:text-gray-300">
            <li>Histoire-Géographie, Géopolitique et Sciences politiques</li>
            <li>Scienes économiques et sociales</li>
            <li>Mathématiques</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default Parcours;
