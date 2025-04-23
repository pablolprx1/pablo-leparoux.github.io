
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Pour chaque compétence et logiciel, associer une image libre (url externes SVG/png ou images dans /public)
const skills = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "C#", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "WebDev", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
];

const tools = [
  { name: "WAMP", img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/WampServer-logo.png" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "GitLab", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Asana", img: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Asana_logo.svg" },
];

/**
 * Carrousel compétences/logiciels avec navigation manuelle.
 */
export function SkillCarousel({ items }: { items: { name: string; img: string }[] }) {
  // Embla – configuration avec alignement centré
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center", 
    skipSnaps: false,
  });
  
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Initialisation du carrousel
    emblaApi.reInit();
    onSelect();
    
    // Ajout des event listeners pour mettre à jour les états des boutons
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative px-8">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex py-4 items-center justify-center gap-8">
          {items.map(({ name, img }) => (
            <div
              key={name}
              className="min-w-[120px] flex flex-col items-center justify-center"
            >
              <img
                src={img}
                alt={name}
                className="w-16 h-16 object-contain rounded-lg bg-white shadow hover:scale-105 transition-transform"
              />
              <span className="mt-3 text-center text-sm text-gray-700 dark:text-gray-200">{name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Boutons de navigation */}
      <Button
        variant="outline"
        size="icon"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white shadow-md border-gray-200 hover:bg-gray-100"
        aria-label="Précédent"
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline" 
        size="icon"
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white shadow-md border-gray-200 hover:bg-gray-100"
        aria-label="Suivant"
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

// Exporter les listes pour usage ailleurs
export const skillsList = skills;
export const toolsList = tools;
