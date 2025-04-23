import { Home } from "lucide-react";
import { SkillCarousel, skillsList, toolsList } from "@/components/SkillCarousel";

const Index = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full pt-10 fade-in">
      <div className="flex flex-col gap-8 items-center w-full max-w-4xl">
        {/* Titre et Logo en dehors de la carte */}
        <div className="flex items-center gap-4 mb-2 justify-center">
          <Home size={36} />
          <h1 className="text-3xl font-bold tracking-tight">Accueil</h1>
        </div>

        {/* Carte Titre et Présentation */}
        <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow-lg w-full transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center gap-2 mb-4">
            <h1 className="text-2xl font-extrabold tracking-tight">Pablo LEPAROUX</h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Développeur Web FullStack | Étudiant en BTS SIO SLAM
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-6">
              Je suis actuellement en deuxième année de BTS Services Informatiques aux Organisations (SIO), spécialité SLAM 
              (Solutions Logicielles et Applications Métiers), au lycée Carcouët à Nantes.
            </p>
            <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-6">
              Je poursuis ma formation en alternance au sein de l’entreprise FOBware SI, ce qui me permet de développer mes 
              compétences techniques tout en les appliquant en contexte professionnel.
            </p>
            <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center">
              Passionné par le développement web et les technologies numériques, j’ai pour ambition de poursuivre mes études 
              jusqu’à un niveau Bac+5 afin de devenir un professionnel complet et polyvalent dans le domaine de l’informatique.
            </p>
          </div>
        </div>

        {/* Carte Carrousel Compétences */}
        <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow-lg w-full transform transition-transform hover:scale-105">
          <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
            Mes compétences développement
          </h2>
          <SkillCarousel items={skillsList} />
        </div>

        {/* Carte Carrousel Logiciels */}
        <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow-lg w-full transform transition-transform hover:scale-105">
          <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
            Mes logiciels
          </h2>
          <SkillCarousel items={toolsList} />
        </div>

        {/* Boutons pour télécharger le CV et le tableau de synthèse */}
        <div className="bg-white/80 dark:bg-black/60 glass-morphism p-6 rounded-xl shadow-lg w-full flex flex-col items-center gap-4 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
            Téléchargements
          </h2>
          <div className="flex gap-4">
            <a
              href="/path/to/cv.pdf"
              download
              className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-full shadow-lg hover:bg-gray-600 transition"
            >
              Télécharger mon CV
            </a>
            <a
              href="/path/to/tableau-synthese.pdf"
              download
              className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-full shadow-lg hover:bg-gray-600 transition"
            >
              Télécharger le tableau de synthèse
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
