import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Toaster } from "@/components/ui/sonner"
import ScrollToTopOnNavigate from "@/components/scroll-to-top"
import { Head } from "@inertiajs/react"
import { Bell } from "lucide-react"
import AppearanceToggleTab from "@/components/appearance-tabs2"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { AppSidebar } from "@/components/admin/sidebar"

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <ScrollToTopOnNavigate />
            <Head title="Admin">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <AppSidebar />

            <SidebarInset>
                {/* Header */}
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <h2 className="text-xl font-semibold">Admin Dashboard</h2>
                    </div>

                    <div className="ml-auto flex items-center gap-4 pr-4">
                        <AppearanceToggleTab />
                        <button className="relative p-2 rounded hover:bg-muted transition">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 animate-ping" />
                        </button>
                    </div>
                </header>

                {/* Page content */}
                <motion.main
                    className="flex-grow p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Toaster />
                    {children}
                </motion.main>
            </SidebarInset>
        </SidebarProvider>
    )
}
