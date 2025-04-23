
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef } from "react";

// Pour chaque "skill" et chaque "outil", associer une image libre (url externes SVG/png ou images dans /public)
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
  { name: "Asana", img: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Asana_logo.svg" }
];

/**
 * Carrousel avec défilement automatique.
 * @param items Liste des éléments à afficher (name + img)
 */
export function SkillCarousel({ items }: { items: { name: string; img: string }[] }) {
  // Embla pour autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
  const autoplayInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    // Démarrer le défilement automatique
    autoplayInterval.current = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 2000);

    return () => {
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    };
  }, [emblaApi]);

  return (
    <div ref={emblaRef}>
      <div className="flex space-x-6 py-2">
        {items.map(({ name, img }) => (
          <div
            key={name}
            className="basis-auto flex flex-col items-center justify-center"
            style={{ minWidth: 100 }}
          >
            <img
              src={img}
              alt={name}
              className="w-16 h-16 object-contain rounded-lg bg-white shadow hover:scale-105 transition-transform"
            />
            <span className="mt-2 text-center text-sm text-gray-700 dark:text-gray-200">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Exporter les listes pour utilisation ailleurs
export const skillsList = skills;
export const toolsList = tools;
