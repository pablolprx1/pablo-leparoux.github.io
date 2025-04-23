
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
import { useState } from "react";

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
  const [isDark, setIsDark] = useState(
    () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const toggleDark = () => {
    setIsDark(d => {
      const newDark = !d;
      if (newDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newDark;
    });
  };

  // Init on mount
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MENU</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 font-semibold tracking-wide py-2 px-2 rounded-lg hover-scale transition text-base">
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <button onClick={toggleDark} className="w-full flex items-center gap-2 justify-center mt-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition hover-scale">
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
          <span>{isDark ? "Mode clair" : "Mode sombre"}</span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
