import { Clock, MoreHorizontal, Play } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const videos = [
  {
    title: "Why 90% of Developers Will Be Replaced First",
    channel: "Harkirat Singh",
    duration: "18:42",
    status: "Analyzed",
  },
  {
    title: "Building RAG Applications from Scratch",
    channel: "AI Engineering",
    duration: "32:18",
    status: "Analyzed",
  },
  {
    title: "How Modern AI Agents Actually Work",
    channel: "Tech Talk",
    duration: "24:51",
    status: "Analyzed",
  },
]

export function RecentVideos() {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Recent videos
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Your recently analyzed videos
          </p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
        >
          View all
        </Button>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <Card
            key={video.title}
            className="group overflow-hidden transition-shadow hover:shadow-md"
          >
            {/* Thumbnail */}

            <div className="relative aspect-video bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 shadow-sm">
                  <Play className="h-4 w-4 fill-current" />
                </div>
              </div>

              <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-[11px] text-white">
                {video.duration}
              </span>
            </div>

            {/* Content */}

            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-sm font-medium leading-5">
                    {video.title}
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {video.channel}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 shrink-0"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className="rounded-full text-[11px]"
                >
                  {video.status}
                </Badge>

                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  Recently
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}