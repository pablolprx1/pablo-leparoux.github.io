
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Briefcase, GraduationCap, Lightbulb, FolderArchive } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const menuItems = [
  {
    title: "Accueil",
    url: "/",
    icon: Home,
  },
  {
    title: "Projets",
    url: "/projets",
    icon: FolderArchive,
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
  const location = useLocation();

  return (
    <Sidebar collapsible="none">
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
    </Sidebar>
  );
}
