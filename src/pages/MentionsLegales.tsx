
import React from "react";
import { FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const MentionsLegales = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-8">
    <div className="flex flex-col gap-8 items-center w-full max-w-4xl">
      {/* Entête avec animation */}
      <div className="flex flex-col items-center gap-2 mb-4 w-full">
        <div className="flex items-center gap-4 mb-2 justify-center">
          <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-full">
            <FileText size={32} className="text-violet-600 dark:text-violet-300" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-700 to-violet-500 dark:from-gray-300 dark:to-violet-400 bg-clip-text text-transparent">
            Mentions Légales
          </h1>
        </div>
        <Separator className="w-1/3 bg-gradient-to-r from-transparent via-violet-300 dark:via-violet-700 to-transparent h-0.5 my-1" />
      </div>

      <div className="max-w-3xl w-full px-4 sm:px-6 text-gray-700 dark:text-gray-300 space-y-8 mb-10 bg-gradient-to-br from-white/80 to-violet-50/90 dark:from-black/60 dark:to-violet-900/10 p-6 rounded-xl shadow-lg border border-violet-200/50 dark:border-violet-800/30">
        <div>
          <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-violet-700 to-indigo-700 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">Éditeur du site</h2>
          <p>Ce site est édité par Pablo LEPAROUX, étudiant en BTS SIO SLAM.</p>
          <p>Contact : leparouxpablo@gmail.com</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-violet-700 to-indigo-700 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">Hébergement</h2>
          <p>Ce site est hébergé par Netlify.</p>
          <p>Netlify, Inc.</p>
          <p>512 2nd Street, Suite 200</p>
          <p>San Francisco, CA 94107</p>
          <p>États-Unis</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-violet-700 to-indigo-700 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-violet-700 to-indigo-700 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">Données personnelles</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle. Le site ne fait pas usage de cookies nécessitant une acceptation de votre part.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-violet-700 to-indigo-700 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">Crédits</h2>
          <p>
            Les icônes utilisées sur ce site proviennent de Lucide Icons.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MentionsLegales;
