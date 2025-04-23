
import { Lightbulb } from "lucide-react";

const Veille = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-12">
    <div className="flex items-center gap-4 mb-6">
      <Lightbulb size={32} />
      <h1 className="text-3xl font-bold tracking-tight">Veille technologique</h1>
    </div>
    <div className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
      Quels outils et méthodes utilises-tu pour rester à jour dans le domaine ?<br />
      <span className="text-sm opacity-60">
        (Remplace ce texte par ta propre démarche de veille : sources, blogs, newsletters, technos surveillées…)
      </span>
    </div>
    {/* Exemples sujets de veille */}
    <div className="grid gap-6 w-full max-w-2xl">
      <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow hover-scale transition">
        <p className="font-semibold mb-1">Veille sur les frameworks JavaScript</p>
        <ul className="list-disc pl-6 text-base">
          <li>React, Vue, Svelte – évolution et communauté</li>
          <li>Nouveautés ES2024</li>
          <li>Blogs : Smashing Magazine, Grafikart, Mozilla Dev</li>
        </ul>
      </div>
      {/* Ajoute ici d'autres cartouches de veille */}
    </div>
  </section>
);

export default Veille;
