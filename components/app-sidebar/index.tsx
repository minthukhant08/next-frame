import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"


const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
    roles: ['admin']
  },
  {
    title: "Proudcts",
    url: "/products",
    icon: Inbox,
    roles: ['admin', 'user']
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
    roles: ['user']
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
    roles: ['user']
  },
  {
    title: "Categories",
    url: "/categories",
    icon: Settings,
    roles: ['admin']
  },
]

export async function AppSidebar() {
  const session = await getServerSession(authOptions)
  const { user } = session!
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                if (item.roles.includes(user.role)) {
                  return (<SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)
                }else{
                  return <div key={item.title}></div>
                }
              }
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}