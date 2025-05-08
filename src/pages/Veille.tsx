
import { Lightbulb } from "lucide-react";

const Veille = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-12">
    <div className="flex items-center gap-4 mb-6">
      <Lightbulb size={32} />
      <h1 className="text-3xl font-bold tracking-tight">Veille technologique</h1>
    </div>
    <div className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
      L'évolution des métiers de l'informatique avec l'émergence de l'IA
    </div>
    {/* Python Django */}
    <div className="grid gap-6 w-full max-w-2xl">
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
                Formation à l'aide du tutoriel WEBDEV sur le site officiel
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
