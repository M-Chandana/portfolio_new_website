import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Award, BookOpen, Languages, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Summary */}
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold">Hi, I'm Chandana!</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                I'm an AI & ML enthusiast and CSE undergraduate passionate about solving real-world problems with
                technology. My journey in tech has been driven by a desire to create meaningful impact through
                innovation.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                With expertise spanning machine learning, natural language processing, full-stack development, and
                accessibility technologies, I aspire to contribute meaningfully to dynamic organizations while
                continuously learning and working on impactful projects in AI, healthcare, and web development.
              </p>
            </Card>
          </div>
        </section>

        {/* Education */}
        <section className="border-y border-border bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">Education</h2>
            <div className="mx-auto max-w-3xl space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-semibold">B.Tech – Computer Science & Engineering</h3>
                    <p className="mb-2 text-sm text-muted-foreground">Amrita Vishwa Vidyapeetham</p>
                    <p className="text-sm font-medium text-primary">GPA: 8.35</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-semibold">Senior Secondary (+2)</h3>
                    <p className="mb-2 text-sm text-muted-foreground">Stanes Higher Secondary School (CBSE)</p>
                    <p className="text-sm font-medium text-primary">92%</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-semibold">Secondary (10th)</h3>
                    <p className="mb-2 text-sm text-muted-foreground">Ravindra Bharathi Global School (CBSE)</p>
                    <p className="text-sm font-medium text-primary">89%</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">Technical Skills</h2>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Domains</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Natural Language Processing",
                    "Full Stack Web Dev",
                    "Security Systems",
                    "Distributed Systems",
                    "Accessibility Technologies",
                  ].map((skill) => (
                    <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "C", "C++", "JavaScript", "HTML", "CSS", "Tailwind"].map((skill) => (
                    <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Matlab", "Excel", "Git", "GitHub"].map((skill) => (
                    <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Certifications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Technology Job Simulation (Deloitte)</li>
                  <li>• Deep Learning (Evaluating AI Agents)</li>
                  <li>• Machine Learning (Infosys Springboard)</li>
                  <li>• 5-Day AI Agents Course (Google)</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              <Card className="p-6 text-center">
                <Award className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">Activities</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>House Captain, Sports</li>
                  <li>ASCII Newsletter Team</li>
                  <li>Anokha Techfair Member</li>
                </ul>
              </Card>
              <Card className="p-6 text-center">
                <Languages className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">Languages</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>English (Proficient)</li>
                  <li>Telugu (Native)</li>
                  <li>Hindi & Tamil (Elementary)</li>
                </ul>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">Hobbies</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Reading & Coding</li>
                  <li>Problem Solving</li>
                  <li>Music & Badminton</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
