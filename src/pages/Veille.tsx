
import { Lightbulb } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Articles data
const articles = [
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

const Veille = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-12">
    <div className="flex items-center gap-4 mb-6">
      <Lightbulb size={32} />
      <h1 className="text-3xl font-bold tracking-tight">Veille technologique</h1>
    </div>
    <div className="max-w-3xl text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
      L'évolution des métiers de l'informatique avec l'émergence de l'IA
    </div>
    
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
  </section>
);

export default Veille;
