import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-10 sm:pt-14">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Sparkles className="h-4 w-4" />
        <span>AI-powered video understanding</span>
      </div>

      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Understand any video,
        <br />
        <span className="text-muted-foreground">
          faster.
        </span>
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
        Turn YouTube videos into searchable transcripts,
        concise summaries, and an AI conversation grounded
        in the video.
      </p>
    </section>
  )
}