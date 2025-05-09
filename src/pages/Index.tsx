
import { Home } from "lucide-react";
import { SkillCarousel, skillsList, toolsList } from "@/components/SkillCarousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full pt-8 fade-in">
      <div className="flex flex-col gap-8 items-center w-full max-w-4xl">
        {/* Entête avec animation */}
        <div className="flex flex-col items-center gap-2 mb-4 w-full">
          <div className="flex items-center gap-4 mb-2 justify-center">
            <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-full">
              <Home size={32} className="text-violet-600 dark:text-violet-300" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-700 to-violet-500 dark:from-gray-300 dark:to-violet-400 bg-clip-text text-transparent">
              Accueil
            </h1>
          </div>
          <Separator className="w-1/3 bg-gradient-to-r from-transparent via-violet-300 dark:via-violet-700 to-transparent h-0.5 my-1" />
        </div>

        {/* Carte Titre et Présentation avec effet de profondeur */}
        <div className="bg-white/90 dark:bg-black/70 glass-morphism p-8 rounded-2xl shadow-lg hover:shadow-xl w-full transform transition-all duration-300 hover:scale-[1.02] border border-violet-200/50 dark:border-violet-800/30">
          <div className="flex flex-col items-center gap-3 mb-6">
            <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">
              Pablo LEPAROUX
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Apprenti développeur web en alternance chez FOBware SI
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full my-1" />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              Je suis actuellement en deuxième année de BTS Services Informatiques aux Organisations (SIO), spécialité SLAM 
              (Solutions Logicielles et Applications Métiers), au lycée Carcouët à Nantes.
            </p>
            <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              Je poursuis ma formation en alternance au sein de l'entreprise FOBware SI, ce qui me permet de développer mes 
              compétences techniques tout en les appliquant en contexte professionnel.
            </p>
            <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              Passionné par le développement web et les technologies numériques, j'ai pour ambition de poursuivre mes études 
              jusqu'à un niveau Bac+5 afin de devenir un professionnel complet et polyvalent dans le domaine de l'informatique.
            </p>
          </div>
        </div>

        {/* Carrousel des compétences avec mise en avant */}
        <div className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 p-8 rounded-2xl shadow-lg w-full transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-violet-200/50 dark:border-violet-800/30">
          <h2 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-violet-700 to-indigo-700 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">
            Mes compétences développement
          </h2>
          <div className="bg-white/60 dark:bg-black/40 p-4 rounded-xl">
            <SkillCarousel items={skillsList} />
          </div>
        </div>

        {/* Carrousel Logiciels avec mise en avant */}
        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 p-8 rounded-2xl shadow-lg w-full transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-violet-200/50 dark:border-violet-800/30">
          <h2 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-700 to-violet-700 dark:from-indigo-400 dark:to-violet-300 bg-clip-text text-transparent">
            Mes logiciels / outils
          </h2>
          <div className="bg-white/60 dark:bg-black/40 p-4 rounded-xl">
            <SkillCarousel items={toolsList} />
          </div>
        </div>

        {/* Boutons téléchargements modernisés */}
        <div className="bg-gradient-to-br from-gray-50 to-violet-50 dark:from-gray-900/30 dark:to-violet-900/20 p-8 rounded-2xl shadow-lg w-full flex flex-col items-center gap-6 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-violet-200/50 dark:border-violet-800/30">
          <h2 className="text-xl font-bold text-center bg-gradient-to-r from-gray-700 to-violet-700 dark:from-gray-300 dark:to-violet-400 bg-clip-text text-transparent">
            Téléchargements
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-8 py-6 rounded-xl h-auto shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <a href="/fichiers/CV.pdf" download>
                Télécharger mon CV
              </a>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold px-8 py-6 rounded-xl h-auto shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <a href="/fichiers/tableau-de-synthese.xlsx" download>
                Télécharger le tableau de synthèse
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
