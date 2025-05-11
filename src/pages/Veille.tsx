
import { Lightbulb, Rss, Twitter } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Articles data - sorted by date (newest to oldest)
const articles = [
  {
    title: "OpenAI s'offre Windsurf pour 3 milliards de dollars, sa plus importante acquisition",
    description: "OpenAI rachète la start-up Windsurf pour 3 milliards de dollars, sa plus grande acquisition à ce jour, afin de renforcer ses outils d'IA pour le codage.",
    source: "l'Echo",
    url: "https://www.lecho.be/entreprises/tech-science/openai-s-offre-windsurf-pour-3-milliards-de-dollars-sa-plus-importante-acquisition/10605900.html",
    date: "2025"
  },
  {
    title: "L'IA de Claude bientôt intégrée à Xcode",
    description: "Apple travaille sur l'intégration de l'IA Claude d'Anthropic dans Xcode pour assister les développeurs dans leurs tâches de programmation.",
    source: "Consomac",
    url: "https://consomac.fr/news-21167-l-ia-de-claude-bientot-integree-a-xcode.html",
    date: "2024"
  },
  {
    title: "Nouveautés Figma : générateur de code propulsé à l'IA, dessin vectoriel et création de sites",
    description: "Figma a annoncé plusieurs fonctionnalités basées sur l'IA générative, dont un générateur de code et de nouvelles capacités de dessin vectoriel.",
    source: "Blog du Modérateur",
    url: "https://www.blogdumoderateur.com/nouveautes-figma-generateur-code-propulse-ia-dessin-vectoriel-creation-sites/",
    date: "2024"
  },
  {
    title: "Faire évoluer le métier de développeur avec l'IA générative",
    description: "L'intelligence artificielle générative représente une avancée technologique majeure qui bouleverse de nombreux domaines professionnels.",
    source: "Synapse",
    url: "https://www.synapse-developpement.fr/blog/ia/faire-evoluer-le-metier-de-developpeur-avec-lia-generative/",
    date: "2024"
  },
  {
    title: "L'IA et l'avenir des développeurs en informatique : à quoi s'attendre ?",
    description: "Les développeurs sont désormais impliqués dans la conception, la formation et l'amélioration des systèmes d'IA, ainsi que dans l'interprétation des insights générés par l'IA.",
    source: "iQuesta",
    url: "https://www.iquesta.com/Article-Lia-Et-Lavenir-Des-Developpeurs-En-Informatique-Quoi-Attendre-228.html",
    date: "2023"
  },
  {
    title: "L'IA et l'avenir des développeurs",
    description: "Comment l'IA transforme le métier de développeur informatique et les compétences à développer pour rester pertinent.",
    source: "LaConsole.dev",
    url: "https://laconsole.dev/blog/ia-avenir-developpeurs",
    date: "2023"
  },
];

const Veille = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-8">
    <div className="flex flex-col gap-8 items-center w-full max-w-6xl">
      {/* Entête avec animation */}
      <div className="flex flex-col items-center gap-2 mb-4 w-full">
        <div className="flex items-center gap-4 mb-2 justify-center">
          <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-full">
            <Lightbulb size={32} className="text-violet-600 dark:text-violet-300" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-700 to-violet-500 dark:from-gray-300 dark:to-violet-400 bg-clip-text text-transparent">
            Veille technologique
          </h1>
        </div>
        <Separator className="w-1/3 bg-gradient-to-r from-transparent via-violet-300 dark:via-violet-700 to-transparent h-0.5 my-1" />
        <div className="max-w-3xl text-lg text-gray-600 dark:text-gray-300 text-center mb-4">
          L'évolution du métier de développeur informatique avec l'émergence de l'IA
        </div>
      </div>
      
      {/* Comment je suis l'information */}
      <div className="w-full max-w-4xl bg-white/80 dark:bg-black/40 p-6 rounded-xl shadow-md border border-violet-100 dark:border-violet-900/30">
        <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-violet-700 to-indigo-700 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">Comment je reste informé</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-full">
              <Rss size={20} className="text-violet-600 dark:text-violet-300" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Google Alerts</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Suivi de mots-clés : Windsurf, OpenAI, Figma, Codeium, IA générative
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-full">
              <Twitter size={20} className="text-violet-600 dark:text-violet-300" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Twitter</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Abonnements à des comptes spécialisés en actualités IA et technologies
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {articles.map((article, index) => (
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={index}
            className="no-underline transform transition-all duration-300 hover:scale-105"
          >
            <Card className="bg-gradient-to-br from-white/80 to-violet-50/90 dark:from-black/60 dark:to-violet-900/10 shadow-lg hover:shadow-xl transition h-full border border-violet-200/50 dark:border-violet-800/30">
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-violet-700 to-indigo-700 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">{article.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{article.source} • {article.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{article.description}</p>
              </CardContent>
              <CardFooter className="text-violet-600 dark:text-violet-400 text-sm font-medium">
                Lire l'article →
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Veille;
