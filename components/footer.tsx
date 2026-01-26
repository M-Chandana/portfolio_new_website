"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Footer() {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleEmailClick = () => {
    navigator.clipboard.writeText("muppidichandana76@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Muppidi Chandana. Built with passion and code.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/M-Chandana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/chandana-muppidi-b9aab5290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <button
              onClick={handleEmailClick}
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Email"
              title={emailCopied ? "Email copied!" : "Copy email"}
            >
              <Mail className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
