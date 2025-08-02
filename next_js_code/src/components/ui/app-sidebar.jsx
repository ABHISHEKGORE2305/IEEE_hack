import { Calendar, Home, Inbox, Search, Settings,CirclePlus,Hospital } from "lucide-react"
import { Button } from "@/components/ui/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/admin",
    icon: Home,
  },
  {
    title: "clinic request",
    url: "/admin/clinic-request",
    icon: Hospital,
  },
  {
    title: "add clinic",
    url: "/admin/add-clinic",
    icon: CirclePlus,
  },
  
]

export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-medium text-black dark:text-white">Clinic Link</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
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
        <Button variant="outline">logout</Button>
      </SidebarFooter>
    </Sidebar>
  )
}