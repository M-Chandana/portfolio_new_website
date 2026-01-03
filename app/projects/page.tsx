import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Real-Time Sign Language Translator",
      description:
        "Built a web app to translate ASL hand gestures into text in real time using MediaPipe for hand tracking and Random Forest Classifier for recognition. Deployed Flask REST API with dynamic HTML5 Canvas frontend.",
      duration: "April 2025 - July 2025",
      tags: ["AI/ML", "Flask", "MediaPipe", "Web App"],
    },
    {
      title: "TPA Token-Based Health Insurance Claim System",
      description:
        "Designed a secure, multi-role distributed system for real-time claim approvals. Implemented JWT-based role dashboards, token tracking, and secure workflows with MongoDB-backed data transactions.",
      duration: "May 2025 - July 2025",
      tags: ["Distributed Systems", "JWT", "MongoDB", "Security"],
    },
    {
      title: "E-Commerce Site with Secure Checkout",
      description:
        "Built a full-stack e-commerce web app with authentication, cart, and secure Stripe payments. Enabled persistent purchase history tracking and live cart updates with integrated review system.",
      duration: "April 2025 - June 2025",
      tags: ["Full Stack", "Stripe", "React", "Node.js"],
    },
    {
      title: "Hotel Booking & Billing Desktop App",
      description:
        "Developed a desktop-based hotel reservation system with live slot booking, menu categorization, and automatic billing. Ported web app to cross-platform desktop using Electron with scalable, responsive UI.",
      duration: "May 2023 - June 2024",
      tags: ["Electron", "Desktop App", "JavaScript"],
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
      title: "SIH 2024",
      project: "Secure Geo-Attendance Tracker",
      achievement: "Selected Project",
      description: "GPS-based check-in/out with Firestore & role-based access using Flutter and Firebase.",
      tags: ["Flutter", "Firebase", "GPS"],
    },
    {
      title: "Cosmocloud Low Code Hackathon 2024",
      project: "Distributed Hospital Management",
      achievement: "Completed Project",
      description: "JWT-based refugee healthcare management system built with MERN stack.",
      tags: ["MERN", "Healthcare", "JWT"],
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
