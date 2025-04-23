
import { Briefcase } from "lucide-react";

const Experiences = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-12">
    <div className="flex items-center gap-4 mb-6">
      <Briefcase size={32} />
      <h1 className="text-3xl font-bold tracking-tight">Expériences professionnelles</h1>
    </div>
    {/* <div className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
      Ici tu pourras présenter tes expériences en entreprise, stages ou alternance durant ton parcours BTS SIO option SLAM.  
      <br />
      <span className="text-sm opacity-60">
        (Remplace ce texte par tes vraies missions, entreprises, stacks techniques, résultats, etc.)
      </span>
    </div> */}
    {/* Alternance FOBware SI */}
    <div className="grid gap-6 w-full max-w-2xl">
      <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow hover-scale transition">
        <p className="font-semibold">Alternance Développeur FullStack - FOBware SI</p>
        <p className="text-gray-500 dark:text-gray-300 text-sm mb-1">Septembre 2024 - Septembre 2025</p>
        <ul className="list-disc pl-6 text-base">
          <li>Passage en API d’une application interne de gestion de tâches</li>
          <li>Ticketting</li>
          <li>Réalisation de pages sur le site interne de gestion d’entreprise (WEBDEV)</li>
        </ul>
      </div>
      {/* Stage FOBware SI */}
      <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow hover-scale transition">
        <p className="font-semibold">Stage Développeur Web - FOBware SI</p>
        <p className="text-gray-500 dark:text-gray-300 text-sm mb-1">Mai 2024 - Juin 2024</p>
        <ul className="list-disc pl-6 text-base">
          <li>Apprentissage de langages/frameworks (Python Django/JSS)</li>
          <li>Développement d’un site de gestion de charge/capacité</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experiences;
