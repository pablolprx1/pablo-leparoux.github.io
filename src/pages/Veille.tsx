
import { Lightbulb, Brain, Code } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Articles data
const iaArticles = [
  {
    title: "L'IA et l'avenir des développeurs",
    description: "Comment l'IA transforme le métier de développeur informatique et les compétences à développer pour rester pertinent.",
    source: "LaConsole.dev",
    url: "https://laconsole.dev/blog/ia-avenir-developpeurs",
    date: "2023"
  },
  {
    title: "L'IA et l'avenir des développeurs en informatique : à quoi s'attendre ?",
    description: "Les développeurs sont désormais impliqués dans la conception, la formation et l'amélioration des systèmes d'IA, ainsi que dans l'interprétation des insights générés par l'IA.",
    source: "iQuesta",
    url: "https://www.iquesta.com/Article-Lia-Et-Lavenir-Des-Developpeurs-En-Informatique-Quoi-Attendre-228.html",
    date: "2023"
  }
];

const wlangageArticles = [
  {
    title: "Formation au WLangage",
    description: "Tutoriel WEBDEV pour apprendre le langage de programmation de la suite PCSOFT",
    source: "PCSOFT Documentation",
    url: "https://doc.pcsoft.fr/fr-FR/?1410087510&verdisp=290",
    date: "2024"
  },
  {
    title: "WINDEV TECH TOUR 2025",
    description: "Présentation des nouveautés de la suite PCSOFT pour 2025",
    source: "PCSOFT",
    url: "https://pcsoft.fr/annonce2025/index.html",
    date: "2025"
  }
];

// Component to render article cards
const ArticleGrid = ({ articles }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
    {articles.map((article, index) => (
      <a 
        href={article.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        key={index}
        className="no-underline"
      >
        <Card className="bg-white/80 dark:bg-black/60 glass-morphism hover-scale transition h-full">
          <CardHeader>
            <CardTitle className="text-xl">{article.title}</CardTitle>
            <CardDescription className="text-sm text-gray-500">{article.source} • {article.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{article.description}</p>
          </CardContent>
          <CardFooter className="text-blue-500 text-sm">
            Lire l'article →
          </CardFooter>
        </Card>
      </a>
    ))}
  </div>
);

const Veille = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-12">
    <div className="flex items-center gap-4 mb-6">
      <Lightbulb size={32} />
      <h1 className="text-3xl font-bold tracking-tight">Veille technologique</h1>
    </div>
    
    {/* Première partie : IA et métiers de l'informatique */}
    <div className="w-full max-w-6xl px-4 mb-12">
      <div className="flex items-center gap-3 mb-4">
        <Brain size={24} />
        <h2 className="text-2xl font-semibold">L'évolution des métiers de l'informatique avec l'émergence de l'IA</h2>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Comment l'intelligence artificielle transforme le rôle et les compétences des développeurs
      </p>
      <ArticleGrid articles={iaArticles} />
    </div>
    
    <Separator className="w-full max-w-6xl my-8" />
    
    {/* Deuxième partie : Formation WLangage */}
    <div className="w-full max-w-6xl px-4">
      <div className="flex items-center gap-3 mb-4">
        <Code size={24} />
        <h2 className="text-2xl font-semibold">Ma formation au WLangage</h2>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Ressources et apprentissage du langage de programmation de la suite PCSOFT
      </p>
      <ArticleGrid articles={wlangageArticles} />
    </div>
  </section>
);

export default Veille;
