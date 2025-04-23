
import { Briefcase } from "lucide-react";

const Experiences = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-12">
    <div className="flex items-center gap-4 mb-6">
      <Briefcase size={32} />
      <h1 className="text-3xl font-bold tracking-tight">Expériences professionnelles</h1>
    </div>
    <div className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
      Ici tu pourras présenter tes expériences en entreprise, stages ou alternance durant ton parcours BTS SIO option SLAM.  
      <br />
      <span className="text-sm opacity-60">
        (Remplace ce texte par tes vraies missions, entreprises, stacks techniques, résultats, etc.)
      </span>
    </div>
    {/* Exemples d'expériences */}
    <div className="grid gap-6 w-full max-w-2xl">
      <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow hover-scale transition">
        <p className="font-semibold">Développeur stagiaire — Société XYZ</p>
        <p className="text-gray-500 dark:text-gray-300 text-sm mb-1">Mars 2024 - Juin 2024</p>
        <ul className="list-disc pl-6 text-base">
          <li>Développement d'une application web en React et Node.js</li>
          <li>Mise en place d'une base de données PostgreSQL</li>
          <li>Gestion de la documentation et support utilisateurs</li>
        </ul>
      </div>
      {/* Ajoute d'autres encarts similaires */}
    </div>
  </section>
);

export default Experiences;
