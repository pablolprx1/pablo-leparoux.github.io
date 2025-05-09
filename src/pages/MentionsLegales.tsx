
import React from "react";
import { FileText } from "lucide-react";

const MentionsLegales = () => (
  <section className="w-full flex flex-col items-center justify-center flex-1 fade-in pt-12">
    <div className="flex items-center gap-4 mb-6">
      <FileText size={32} />
      <h1 className="text-3xl font-bold tracking-tight">Mentions Légales</h1>
    </div>

    <div className="max-w-3xl w-full px-4 sm:px-6 text-gray-700 space-y-8 mb-10">
      <div>
        <h2 className="text-xl font-semibold mb-3">Éditeur du site</h2>
        <p>Ce site est édité par Pablo LEPAROUX, étudiant en BTS SIO SLAM.</p>
        <p>Contact : leparouxpablo@gmail.com</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Hébergement</h2>
        <p>Ce site est hébergé par Netlify.</p>
        <p>Netlify, Inc.</p>
        <p>512 2nd Street, Suite 200</p>
        <p>San Francisco, CA 94107</p>
        <p>États-Unis</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Propriété intellectuelle</h2>
        <p>
          L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
          Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Données personnelles</h2>
        <p>
          Ce site ne collecte aucune donnée personnelle. Le site ne fait pas usage de cookies nécessitant une acceptation de votre part.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Crédits</h2>
        <p>
          Les icônes utilisées sur ce site proviennent de Lucide Icons.
        </p>
      </div>
    </div>
  </section>
);

export default MentionsLegales;
