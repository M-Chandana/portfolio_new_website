import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
  {
    title: "Food Redistribution & Waste Management System",
    description:
      "Developed a scalable platform to redistribute surplus food from donors to underserved communities, reducing food wastage and improving resource utilization. Built using the MERN stack (MongoDB, Express.js, React, Node.js) with real-time request matching and logistics coordination.",
    duration: "Nov 2025 - Mar 2026",
    tags: ["MERN", "Full Stack", "MongoDB", "Node.js"],
  },
  {
    title: "TPA Token-Based Health Insurance Claim System",
    description:
      "Designed a secure, multi-role distributed system for real-time claim approvals. Implemented JWT-based role dashboards, token tracking, and secure workflows with MongoDB-backed data transactions.",
    duration: "May 2025 - July 2025",
    tags: ["Distributed Systems", "JWT", "MongoDB", "Security"],
  },
  {
    title: "Enterprise Goal Management & Performance Tracking System",
    description:
      "Built a full-stack performance management platform (React.js, Vite, Node.js, Express.js, SQLite3) with role-based workflows for Employee, Manager, and Admin. Implemented goal creation with weightage validation, manager approval flows, and shared KPI deployment. Added automated performance scoring, quarterly check-ins, an escalation engine for pending approvals, Recharts analytics dashboards, and CSV export for reporting.",
    duration: "April 2026 - June 2026",
    tags: ["SQLite3","React.js", "Node.js"],
  },
  {
    title: "GenAI Medical Pre-Screening for Psychiatric Patients",
    description:
      "Built an AI-driven system to assist psychiatrists in early-stage patient screening and assessment. Leveraged NLP and generative AI to analyze patient responses and identify potential mental health indicators through an adaptive questionnaire system.",
    duration: "Nov 2025 - Mar 2026",
    tags: ["GenAI", "NLP", "AI/ML", "Healthcare"],
  },
]
  const hackathons = [
    {
      title: "ICSRF 2025 Hackathon",
      project: "Visual AI Tutor for Village Students",
      achievement: "Top 15 out of 100+ submissions",
      description: "Gamified quizzes, AI mentor, offline PDFs, and faculty assistant tools improving learning by 40%.",
      tags: ["AI", "Education", "TinkerFlow"],
    },
    {
      title: "NitroStack Agentic AI Hackathon",
      project: "Multi-Source Candidate Data Transformer",
      achievement: "Secured 3rd Place",
      description: "Developed a multi-source candidate data transformation system that unified applicant data from JSON, CSV, resumes, LinkedIn exports and recruiter notes into standardized JSON outputs with automated validation and HTML reporting.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">My Projects</h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                A showcase of my work in AI and web development
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-12 text-2xl font-bold md:text-3xl">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="p-6">
                <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {project.duration}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Hackathons Section */}
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-2xl font-bold md:text-3xl">Hackathons & Competitions</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {hackathons.map((hackathon, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{hackathon.title}</h3>
                  <p className="mb-2 text-sm font-medium text-primary">{hackathon.achievement}</p>
                  <p className="mb-3 text-sm font-medium">{hackathon.project}</p>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{hackathon.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
