"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Layers,
  Database,
  Shield,
  Palette,
  Ticket,
  Code2,
  Rocket,
  GitBranch,
  FlaskConical,
  BarChart3,
  Users,
  BookOpen,
  Bug,
  Menu,
  X,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "PRD Generator", href: "/prd", icon: FileText },
  { name: "Architecture", href: "/architecture", icon: Layers },
  { name: "Database", href: "/database", icon: Database },
  { name: "Security", href: "/security", icon: Shield },
  { name: "Frontend Spec", href: "/design", icon: Palette },
  { name: "Feature Tickets", href: "/tickets", icon: Ticket },
  { name: "AI Coding Studio", href: "/code", icon: Code2 },
  { name: "Testing", href: "/testing", icon: FlaskConical },
  { name: "Deployment", href: "/deploy", icon: Rocket },
  { name: "GitHub", href: "/github", icon: GitBranch },
  { name: "Code Review", href: "/review", icon: Bug },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Team", href: "/team", icon: Users },
  { name: "Knowledge Base", href: "/knowledge", icon: BookOpen },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="h-screen flex bg-[#0b0f19] text-gray-200">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform border-r border-gray-800 bg-gray-900 transition-transform duration-200 lg:static lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-800 px-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-400" />
            <span className="text-lg font-semibold text-white">VibeForge AI</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <nav className="space-y-1 px-2 py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "bg-blue-600/10 text-blue-400"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex flex-1 flex-col min-w-0">
        <header className="flex h-16 items-center justify-between border-b border-gray-800 bg-gray-900/50 px-4 backdrop-blur">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="hidden lg:block text-sm text-gray-400">
            {navigation.find((item) => item.href === pathname)?.name ?? "VibeForge"}
          </div>
          <div className="ml-auto flex items-center gap-3">
            <span className="text-xs text-gray-500">Free Plan</span>
            <div className="h-8 w-8 rounded-full bg-blue-600 text-xs font-semibold text-white flex items-center justify-center">
              U
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
