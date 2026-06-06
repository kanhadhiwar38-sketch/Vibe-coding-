import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mic, Upload, FileText, Shield, Code, Rocket, Bug, TestTube, Database, Palette } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            VibeForge AI
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Complete Vibe Coding Platform - Idea se Deployment tak AI Automation
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <Textarea 
                placeholder='Example: "Mujhe Netflix-style Anime Streaming App banana hai"'
                className="mb-4 min-h-[100px] bg-gray-900/50 border-gray-700 text-white"
              />
              <div className="flex gap-2 mb-4">
                <Input placeholder="Project Name" className="flex-1 bg-gray-900/50 border-gray-700 text-white" />
                <Button variant="outline" size="icon">
                  <Mic className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
              <Link href="/dashboard">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Rocket className="mr-2 h-4 w-4" /> Start Vibe Coding
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard 
            icon={<FileText />}
            title="PRD Generator"
            description="Automatically generates comprehensive Product Requirements Documents"
            href="/prd"
          />
          <FeatureCard 
            icon={<Shield />}
            title="Security Document"
            description="Generates complete security architecture and rules"
            href="/security"
          />
          <FeatureCard 
            icon={<Code />}
            title="AI Coding Studio"
            description="Multi-agent AI code generation for any stack"
            href="/code"
          />
          <FeatureCard 
            icon={<Database />}
            title="Database Designer"
            description="ER diagrams and schema generation for PostgreSQL, MySQL, MongoDB"
            href="/database"
          />
          <FeatureCard 
            icon={<Palette />}
            title="Frontend Spec"
            description="Design system with colors, components, and responsive layouts"
            href="/design"
          />
          <FeatureCard 
            icon={<Bug />}
            title="AI Bug Fixer"
            description="Error analysis and automatic fixes"
            href="/review"
          />
          <FeatureCard 
            icon={<TestTube />}
            title="Testing Generator"
            description="Unit, integration and E2E tests"
            href="/testing"
          />
          <FeatureCard 
            icon={<Rocket />}
            title="Deployment Center"
            description="Deploy to Vercel, Netlify, AWS, and more"
            href="/deploy"
          />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Supported Tech Stacks</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStacks.map((stack) => (
              <span key={stack} className="px-4 py-2 bg-gray-800/50 rounded-full text-gray-300">
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description, href }: { 
  icon: React.ReactNode
  title: string
  description: string
  href: string
}) {
  return (
    <Link href={href}>
      <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all cursor-pointer h-full">
        <CardHeader>
          <div className="text-blue-400 mb-2">
            {icon}
          </div>
          <CardTitle className="text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-400">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}

const techStacks = [
  "React", "Next.js", "Vue", "Angular", "Flutter",
  "React Native", "Node.js", "NestJS", "Django",
  "Spring Boot", "PHP", "Laravel", "Go", "Rust", "C#"
]