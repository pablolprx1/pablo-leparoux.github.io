
import { GraduationCap } from "lucide-react";

const Parcours = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-12">
    <div className="flex items-center gap-4 mb-6">
      <GraduationCap size={32} />
      <h1 className="text-3xl font-bold tracking-tight">Parcours scolaire</h1>
    </div>
    <div className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
      Mets ici les étapes de ton parcours scolaire : diplômes, établissements, options, etc.<br />
      <span className="text-sm opacity-60">
        (Personnalise ce texte pour décrire ton cursus avant et pendant le BTS SIO SLAM)
      </span>
    </div>
    {/* Exemples de parcours */}
    <div className="grid gap-6 w-full max-w-2xl">
      <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow hover-scale transition">
        <p className="font-semibold">BTS SIO option SLAM — Lycée Informatique 2023-2025</p>
        <ul className="list-disc pl-6 text-base">
          <li>Développement d'applications web et mobiles</li>
          <li>Apprentissage des langages modernes : JavaScript, Python, PHP…</li>
          <li>Projet de veille et stage en entreprise</li>
        </ul>
      </div>
      {/* Autres étapes scolaires */}
    </div>
  </section>
);
export default Parcours;
