"use client"

import { Menu, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur-xl">

      <div className="flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">

        {/* Mobile menu */}

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Search */}

        <div className="relative ml-auto w-full max-w-sm">

          <Search
            className="
              absolute left-3 top-1/2
              h-4 w-4
              -translate-y-1/2
              text-muted-foreground
            "
          />

          <Input
            placeholder="Search your videos..."
            className="h-9 rounded-lg pl-9 pr-12"
          />

          <kbd
            className="
              absolute right-2 top-1/2
              -translate-y-1/2
              rounded border
              bg-muted
              px-1.5 py-0.5
              text-[10px]
              text-muted-foreground
            "
          >
            ⌘ K
          </kbd>

        </div>

        <ThemeToggle />

      </div>

    </header>
  )
}