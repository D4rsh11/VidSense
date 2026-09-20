import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/dashboard/hero"
import { VideoInput } from "@/components/dashboard/video-input"
import { RecentVideos } from "@/components/dashboard/recent-videos"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="lg:pl-60">
        <Navbar />

        <main className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
          <Hero />
          <VideoInput />
          <RecentVideos />
        </main>
      </div>
    </div>
  )
}