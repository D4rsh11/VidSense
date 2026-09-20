import Link from "next/link"
import {
  ArrowLeft,
  Clock,
  MessageSquare,
  Play,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur-xl">
        <div className="flex h-16 items-center px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to library
          </Link>

          <div className="mx-auto flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground">
              <Play className="h-3.5 w-3.5 fill-background text-background" />
            </div>

            <span className="font-semibold tracking-tight">
              VidSense
            </span>
          </div>

          <div className="w-28" />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Video title */}

        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Harkirat Singh
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight">
            Why 90% of Developers Will Be Replaced First
          </h1>
        </div>

        {/* Video + Summary */}

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Video */}

          <Card className="overflow-hidden">
            <div className="aspect-video bg-black">
              <div className="flex h-full items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <Play className="ml-1 h-6 w-6 fill-black text-black" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-3">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                18:42
              </span>

              <Separator orientation="vertical" className="h-4" />

              <span className="text-xs text-muted-foreground">
                Analyzed today
              </span>
            </div>
          </Card>

          {/* Summary */}

          <Card className="p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />

              <h2 className="font-semibold">
                AI Summary
              </h2>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              This video discusses how software development is
              changing with AI and why developers need to move
              beyond simply writing code.
            </p>

            <Separator className="my-5" />

            <h3 className="text-sm font-medium">
              Key points
            </h3>

            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li>• AI is changing traditional development workflows.</li>
              <li>• Developers need stronger system-level understanding.</li>
              <li>• Applied AI and distributed systems are becoming increasingly important.</li>
            </ul>
          </Card>
        </div>

        {/* Bottom section */}

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Transcript */}

          <Card className="overflow-hidden">
            <div className="p-6">
              <h2 className="font-semibold">
                Transcript
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Searchable transcript from the video
              </p>
            </div>

            <Separator />

            <div className="max-h-[420px] space-y-5 overflow-y-auto p-6">
              <TranscriptLine
                time="00:01"
                text="The way we build software is changing very quickly."
              />

              <TranscriptLine
                time="00:42"
                text="You can't just rely on writing code anymore."
              />

              <TranscriptLine
                time="02:15"
                text="Understanding systems and AI becomes much more important."
              />

              <TranscriptLine
                time="05:32"
                text="The best engineers will learn how these systems actually work."
              />

              <TranscriptLine
                time="08:17"
                text="Applied AI is going to become a core engineering skill."
              />
            </div>
          </Card>

          {/* Chat */}

          <Card className="flex min-h-[520px] flex-col overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />

                <h2 className="font-semibold">
                  Ask about this video
                </h2>
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                Ask questions grounded in the video.
              </p>
            </div>

            <Separator />

            <div className="flex flex-1 flex-col justify-end p-6">
              <div className="rounded-xl border bg-muted/40 p-4">
                <p className="text-xs font-medium">
                  AI
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Ask me anything about this video. I'll answer
                  using the video's transcript and relevant
                  context.
                </p>
              </div>

              <div className="mt-6 flex gap-2">
                <input
                  placeholder="Ask a question..."
                  className="h-11 flex-1 rounded-lg border bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
                />

                <Button size="icon" className="h-11 w-11">
                  →
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

function TranscriptLine({
  time,
  text,
}: {
  time: string
  text: string
}) {
  return (
    <div className="group flex gap-4">
      <span className="w-12 shrink-0 text-xs tabular-nums text-muted-foreground">
        {time}
      </span>

      <p className="text-sm leading-6 text-muted-foreground transition-colors group-hover:text-foreground">
        {text}
      </p>
    </div>
  )
}