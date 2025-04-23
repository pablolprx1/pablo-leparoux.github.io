
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Home, Briefcase, GraduationCap, Lightbulb, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const menuItems = [
  {
    title: "Accueil",
    url: "/",
    icon: Home,
  },
  {
    title: "Expériences pro",
    url: "/experiences",
    icon: Briefcase,
  },
  {
    title: "Parcours",
    url: "/parcours",
    icon: GraduationCap,
  },
  {
    title: "Veille technologique",
    url: "/veille",
    icon: Lightbulb,
  },
];

export function AppSidebar() {
  // Le mode clair/sombre agit uniquement sur l’arrière-plan ! On ne touche pas au texte.
  const [isDark, setIsDark] = useState(
    () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const location = useLocation();

  // Applique la classe "dark-bg" pour le fond foncé sinon "light-bg"
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-bg');
      document.body.classList.remove('light-bg');
    } else {
      document.body.classList.add('light-bg');
      document.body.classList.remove('dark-bg');
    }
  }, [isDark]);

  const toggleDark = () => {
    setIsDark(d => !d);
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MENU</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link
                      to={item.url}
                      className="flex items-center gap-3 font-semibold tracking-wide py-2 px-2 rounded-lg hover-scale transition text-base"
                    >
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <button
          onClick={toggleDark}
          className="w-full flex items-center gap-2 justify-center mt-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition hover-scale"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
          <span>{isDark ? "Mode clair" : "Mode sombre"}</span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}

