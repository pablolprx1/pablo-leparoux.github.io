
import { Lightbulb } from "lucide-react";

const Veille = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-12">
    <div className="flex items-center gap-4 mb-6">
      <Lightbulb size={32} />
      <h1 className="text-3xl font-bold tracking-tight">Veille technologique</h1>
    </div>
    {/* <div className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
      Quels outils et méthodes utilises-tu pour rester à jour dans le domaine?<br />
      <span className="text-sm opacity-60">
        (Remplace ce texte par ta propre démarche de veille: sources, blogs, newsletters, technos surveillées…)
      </span>
    </div> */}
    {/* Pyton Django */}
    <div className="grid gap-6 w-full max-w-2xl">
      <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow hover-scale transition">
        <p className="font-semibold mb-1">Veille sur le framework Python Django</p>
          <ul className="list-disc pl-6 text-base">
            <li>
              <a 
                href="https://www.djangoproject.com/start/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                Réalisation du tutoriel sur le site officiel
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/watch?v=LxEFgfPdhDg&list=PLEn9o0UAh_cCszR1kXFAe-4lxkJjCnAiH" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                Formation via des vidéos YouTube
              </a>
            </li>
        </ul>
      </div>
      {/* WinDev + WLangage */}
      <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow hover-scale transition">
        <p className="font-semibold mb-1">Veille sur le WLangage de la suite PCSOFT</p>
        <ul className="list-disc pl-6 text-base">
        <li>
              <a 
                href="https://doc.pcsoft.fr/fr-FR/?1410087510&verdisp=290" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                Réalisation du tutoriel WEBDEV sur le site officiel
              </a>
            </li>
            <li>
              <a 
                href="https://pcsoft.fr/annonce2025/index.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                WINDEV TECH TOUR 2025
              </a>
            </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Veille;
