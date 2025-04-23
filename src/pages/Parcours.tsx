/* eslint-disable no-irregular-whitespace */

import { GraduationCap } from "lucide-react";

const Parcours = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-12">
    <div className="flex items-center gap-4 mb-6">
      <GraduationCap size={32} />
      <h1 className="text-3xl font-bold tracking-tight">Parcours scolaire</h1>
    </div>
    {/* <div className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
    Voici un aperçu de mon parcours scolaire, de mes spécialisations et des compétences acquises au fil de mes études. ✍️<br />
      <span className="text-sm opacity-60">
        (Personnalise ce texte pour décrire ton cursus avant et pendant le BTS SIO SLAM)
      </span>
    </div> */}
    {/* BTS SIO SLAM */}
    <div className="grid gap-6 w-full max-w-2xl">
      <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow hover-scale transition">
        <p className="font-semibold">BTS SIO option SLAM — Lycée Carcouët 2023-2025</p>
        <ul className="list-disc pl-6 text-base">
          <li>Développement d'applications, gestion de bases de données, travail en projet</li>
          <li>Apprentissage des langages : C#, Python, PHP, JavaScript...</li>
          <li>Stage en première année / Alternance en deuxième année</li>
        </ul>
      </div>
      {/* BAC */}
      <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow hover-scale transition">
        <p className="font-semibold">BAC Général — Lycée Grand-Air 2020-2023</p>
        <ul className="list-disc pl-6 text-base">
          <li>Histoire-Géographie, Géopolitique et Sciences politiques</li>
          <li>Scienes économiques et sociales</li>
          <li>Mathématiques</li>
        </ul>
      </div>
    </div>
  </section>
);
export default Parcours;
