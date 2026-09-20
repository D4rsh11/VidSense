"use client"

import {
  Home,
  Folder,
  Star,
  Settings,
  Play,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 border-r bg-background lg:flex lg:flex-col">

      {/* Logo */}

      <div className="flex h-16 items-center px-6">
        <div className="flex items-center gap-2">

          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground">
            <Play className="h-3.5 w-3.5 fill-background text-background" />
          </div>

          <span className="font-semibold tracking-tight">
            VidSense
          </span>

          <Badge
            variant="secondary"
            className="rounded-full px-1.5 text-[10px]"
          >
            BETA
          </Badge>

        </div>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-1 px-3 py-5">

        <SidebarItem
          icon={Home}
          label="Home"
          active
        />

        <SidebarItem
          icon={Folder}
          label="Library"
        />

        <SidebarItem
          icon={Star}
          label="Starred"
        />

        <Separator className="my-5" />

        <SidebarItem
          icon={Settings}
          label="Settings"
        />

      </nav>

      {/* Upgrade */}

      <div className="border-t p-4">

        <div className="rounded-xl border bg-muted/30 p-4">

          <p className="text-sm font-medium">
            Unlock more with Pro
          </p>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Get longer videos, advanced insights and more.
          </p>

          <Button
            className="mt-4 w-full rounded-lg"
            size="sm"
          >
            Upgrade
          </Button>

        </div>

        {/* User */}

        <div className="mt-4 flex items-center gap-3 px-1">

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
            D
          </div>

          <div>
            <p className="text-sm font-medium">
              Darshan Patil
            </p>

            <p className="text-xs text-muted-foreground">
              Free plan
            </p>
          </div>

        </div>

      </div>

    </aside>
  )
}


function SidebarItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ElementType
  label: string
  active?: boolean
}) {
  return (
    <button
      className={`
        flex w-full items-center gap-3 rounded-lg
        px-3 py-2.5 text-sm transition-colors

        ${
          active
            ? "bg-muted font-medium text-foreground"
            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
        }
      `}
    >
      <Icon className="h-4 w-4" />

      {label}
    </button>
  )
}