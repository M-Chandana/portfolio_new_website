"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const handleEmailClick = async () => {
    const email = "muppidichandana76@gmail.com"

    try {
      // Try to copy to clipboard
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      // Fallback if clipboard fails
      alert(`Email: ${email}`)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">Get in Touch</h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <Card className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-muted-foreground">Email</p>
                    <Link href="mailto:muppidichandana76@gmail.com" className="text-sm hover:text-primary">
                      muppidichandana76@gmail.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-muted-foreground">Phone</p>
                    <Link href="tel:+917418597139" className="text-sm hover:text-primary">
                      +91 7418597139
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-muted-foreground">Location</p>
                    <p className="text-sm">Coimbatore, India – 641001</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Connect With Me</h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Follow me on social media to stay updated with my latest projects and insights. I'm always excited to
                connect with fellow developers and tech enthusiasts!
              </p>
              <div className="space-y-3">
                <Link
                  href="https://github.com/M-Chandana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-start gap-2 rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/chandana-muppidi-b9aab5290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-start gap-2 rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Link>
                <button
                  onClick={handleEmailClick}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  <Mail className="h-5 w-5" />
                  {copied ? "Email Copied!" : "Copy Email"}
                </button>
                {copied && (
                  <p className="text-center text-sm text-muted-foreground">Email copied: muppidichandana76@gmail.com</p>
                )}
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-balance text-2xl font-bold md:text-3xl">Open to Opportunities</h2>
            <p className="mx-auto mb-8 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/90 md:text-lg">
              I'm currently seeking opportunities in AI/ML, full-stack development, and innovative tech projects.
              Whether you have a project in mind, want to collaborate, or just want to chat about technology, feel free
              to reach out!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
