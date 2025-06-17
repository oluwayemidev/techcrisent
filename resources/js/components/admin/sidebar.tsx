"use client"

import {
    Home,
    Users,
    Briefcase,
    PhoneCall,
    FileText,
    UserPlus,
    Newspaper,
    Settings,
    Hammer,
    Activity,
    LogOut,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

import { BiSupport as BiSupportIcon } from "react-icons/bi";

import { useForm } from "@inertiajs/react"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/pages/admin/nav-user"
const BiSupportForwardRef = (props: React.ComponentProps<'svg'>) => (
    <BiSupportIcon {...props} />
);

const navMain = [
    { title: "Dashboard", href: route("admin.dashboard"), icon: Home, isActive: route().current("admin.dashboard") },
    { title: "Clients", href: route("admin.clients"), icon: Users, isActive: route().current("admin.clients") },
    { title: "Projects", href: route("admin.projects"), icon: Briefcase, isActive: route().current("admin.projects") },
    { title: "Leads", href: route("admin.leads"), icon: PhoneCall, isActive: route().current("admin.leads") },
    { title: "Invoices", href: route("admin.invoices"), icon: FileText, isActive: route().current("admin.invoices") },
    { title: "Team", href: route("admin.team"), icon: UserPlus, isActive: route().current("admin.team") },
    { title: "Blog", href: route("admin.blog"), icon: Newspaper, isActive: route().current("admin.blog") },
    { title: "Settings", href: route("admin.settings"), icon: Settings, isActive: route().current("admin.settings") },
    { title: "Tools", href: route("admin.tools"), icon: Hammer, isActive: route().current("admin.tools") },
    { title: "Activity Logs", href: route("admin.activity"), icon: Activity, isActive: route().current("admin.activity") },
    { title: "Support", href: route("admin.support"), icon: BiSupportForwardRef, isActive: route().current("admin.support") },
]

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
    const { post } = useForm()

    return (
        <Sidebar collapsible="icon" className="group/sidebar-wrapper" {...props}>
            <SidebarHeader className="flex items-center justify-between px-4 py-3 border-b">
                <div className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        width={28}
                        height={28}
                        className="shrink-0"
                    />
                    <span className="text-lg font-bold truncate hidden sidebar-expanded:inline">
                        Admin Panel
                    </span>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={navMain} />
            </SidebarContent>

            <SidebarFooter className="gap-2 p-2 border-t">
                <NavUser
                    user={{
                        name: "Admin",
                        email: "admin@crisent.com",
                        avatar: "/avatars/admin.jpg",
                    }}
                />
                <button
                    onClick={() => post(route("admin.logout"))}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-red-600 hover:text-red-700 hover:bg-muted transition"
                >
                    <LogOut size={18} />
                    <span className="truncate">Logout</span>
                </button>
            </SidebarFooter>

            <SidebarRail>
                
            </SidebarRail>
        </Sidebar>
    )
}
