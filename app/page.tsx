import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code2, Brain, Database, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Available for Opportunities
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">Muppidi Chandana</h1>
            <p className="mb-4 text-xl font-medium text-primary md:text-2xl">AI & ML Engineer | Full Stack Developer</p>
            <p className="mb-8 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              CSE undergraduate passionate about solving real-world problems with technology. Skilled in machine
              learning, full-stack development, and building accessibility solutions that make a meaningful impact.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="border-y border-border bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">What I Do</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Machine Learning</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Building intelligent systems with NLP, computer vision, and deep learning.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Full Stack Development</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Creating scalable web applications with React, Node.js, and modern frameworks.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Distributed Systems</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Designing secure, role-based systems with JWT authentication and APIs.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Accessibility Tech</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Developing solutions that empower everyone, including sign language translation.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-balance text-2xl font-bold md:text-3xl">Let's Build Something Amazing Together</h2>
            <p className="mb-8 text-pretty text-base leading-relaxed text-primary-foreground/90 md:text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
