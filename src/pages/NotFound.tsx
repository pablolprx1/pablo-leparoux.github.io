
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 fade-in">
      <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
        <AlertCircle size={40} className="text-red-600 dark:text-red-300" />
      </div>
      <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-red-600 to-violet-600 dark:from-red-400 dark:to-violet-400 bg-clip-text text-transparent">404</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Page introuvable</h2>
      <p className="max-w-md text-center text-gray-600 dark:text-gray-400 mb-8">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Button 
        asChild
        className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105"
      >
        <a href="/">Retour à l'accueil</a>
      </Button>
    </div>
  );
};

export default NotFound;
