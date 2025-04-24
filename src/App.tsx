
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Experiences from "./pages/Experiences";
import Parcours from "./pages/Parcours";
import Veille from "./pages/Veille";
import Projets from "./pages/Projets";
import Footer from "@/components/Footer";

// Layout qui inclut entête + footer pour toutes les pages
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Index />} />
            <Route path="projets" element={<Projets />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="parcours" element={<Parcours />} />
            <Route path="veille" element={<Veille />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
