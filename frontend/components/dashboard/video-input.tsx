"use client"

import { Link, ArrowRight, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function VideoInput() {
  return (
    <section className="mt-10">
      <div className="rounded-2xl border bg-card p-2 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Link className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Paste a YouTube URL..."
              className="h-12 border-0 bg-transparent pl-11 text-sm shadow-none focus-visible:ring-0"
            />
          </div>

          <Button className="h-12 rounded-xl px-5">
            Analyze
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="h-px w-16 bg-border" />

        <span className="text-xs text-muted-foreground">
          or
        </span>

        <div className="h-px w-16 bg-border" />
      </div>

      <div className="mt-4 flex justify-center">
        <Button
          variant="outline"
          className="rounded-xl"
        >
          <Upload className="mr-2 h-4 w-4" />
          Upload a video
        </Button>
      </div>
    </section>
  )
}