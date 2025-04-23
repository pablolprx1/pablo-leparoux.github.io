
import { Home } from "lucide-react";
import { SkillCarousel, skillsList, toolsList } from "@/components/SkillCarousel";

const Index = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full pt-10 fade-in">
      <div className="flex flex-col gap-3 items-center">
        <div className="flex items-center gap-4 mb-4">
          <Home size={36} />
          <h1 className="text-4xl font-extrabold tracking-tight">Bienvenue sur mon Portfolio BTS SIO SLAM</h1>
        </div>
        <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center mb-6">
          Un portfolio minimaliste en noir et blanc pour présenter mon parcours, mes expériences et ma veille technologique dans le cadre du BTS SIO option SLAM.
        </p>
        <img
          className="rounded-xl shadow-lg max-w-sm w-full object-cover glass-morphism"
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80"
          alt="Ordinateur portable, portfolio"
        />

        {/* Carrousel Compétences */}
        <div className="w-full max-w-2xl mt-10">
          <h2 className="text-xl font-bold mb-4 text-center">Mes compétences développement</h2>
          <SkillCarousel items={skillsList} />
        </div>
        {/* Carrousel Logiciels */}
        <div className="w-full max-w-2xl mt-8">
          <h2 className="text-xl font-bold mb-4 text-center">Mes logiciels</h2>
          <SkillCarousel items={toolsList} />
        </div>
      </div>
    </section>
  );
};

export default Index;
