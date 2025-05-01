import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Listes des compétences et outils
const skills = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "C#", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "WLangage", img: "https://www.windev.com/img/logos/logo-pcsoft-2022.svg" },
];

const tools = [
  { name: "WAMP", img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/WampServer-logo.png" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "GitLab", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Asana", img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg" },
  { name: "UML", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/UML_logo.svg" },
  { name: "AGILE", img: "https://cdn-icons-png.flaticon.com/512/3967/3967015.png" },
];

/**
 * Carrousel compétences/logiciels avec défilement automatique fluide.
 */
export function SkillCarousel({ items }: { items: { name: string; img: string }[] }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [
      AutoScroll({
        speed: 1.5, // Ajuste la vitesse ici
        startDelay: 1000, // Délai avant démarrage du scroll (ms)
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <div ref={emblaRef} className="overflow-hidden w-full px-4">
      <div className="flex">
        {items.map((item, index) => (
          <div
            key={index}
            className="embla__slide flex-shrink-0 w-28 h-28 bg-white/80 dark:bg-black/60 rounded-lg mr-4"
            style={{ minWidth: "7rem" }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-contain p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Exporter les listes pour usage ailleurs
export const skillsList = skills;
export const toolsList = tools;
