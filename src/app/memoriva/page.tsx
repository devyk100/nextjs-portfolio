import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-bg";
import { FadeInUp } from "@/components/ui/fade-in-up";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import ThemeToggle from "@/components/ui/theme-toggle";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { 
  Github, 
  ExternalLink, 
  Code, 
  FileText, 
  Layers, 
  ArrowLeft,
  Play,
  BookOpen,
  Settings,
  Brain,
  Globe,
  Shield,
  Clock,
  Zap,
  Database,
  Image,
  Edit3
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memoriva - AI Flashcard App | Yash Kumar Portfolio",
  description: "Memoriva is a spaced repetition based AI flashcard app for better memory retention, built with NextJS, PostgreSQL, AWS services, and GPT-4 for intelligent study sessions.",
  keywords: ["Memoriva", "AI Flashcards", "Spaced Repetition", "NextJS", "GPT-4", "Memory Retention", "Yash Kumar", "Juquox", "devyk100"],
  openGraph: {
    title: "Memoriva - AI Flashcard App",
    description: "Intelligent spaced repetition flashcard app powered by GPT-4 for enhanced memory retention",
    url: "https://yashk.dev/memoriva",
    images: [{ url: "/yarei.jpeg", width: 1200, height: 630 }],
  },
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function MemorivaPage() {
  return (
    <>
      <AnimatedBackground />
      <ThemeToggle className="fixed top-3 md:right-1/12 lg:right-3/12 right-2 z-[9999]" />
      <ScrollProgress />
      
      <main className={cn("relative w-full overflow-x-hidden text-foreground flex items-center justify-center flex-col px-3", glassClass)}>
        
        {/* Navigation */}
        <PortfolioSection className="flex justify-between items-center">
          <div className="w-full m-2">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </PortfolioSection>

        {/* Hero Section */}
        <PortfolioSection className="mt-10">
          <FadeInUp>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Memoriva
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                AI-Powered Spaced Repetition Flashcards
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  NextJS
                </span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 rounded-full text-sm">
                  GPT-4
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  AWS Lambda
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">
                  PostgreSQL
                </span>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Quick Links */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="https://github.com/devyk100/memoriva-frontend" target="_blank" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Github className="w-5 h-5" />
                    <h3 className="font-semibold">Frontend Code</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Next.js frontend repository
                  </p>
                </div>
              </Link>
              
              <Link href="https://github.com/devyk100/memoriva-backend" target="_blank" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Github className="w-5 h-5" />
                    <h3 className="font-semibold">Backend Code</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Golang backend repository
                  </p>
                </div>
              </Link>
              
              <Link href="/memoriva/soft-des" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold">Software Design</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    RAG architecture & AI integration
                  </p>
                </div>
              </Link>
              
              <Link href="/memoriva/system-des" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Layers className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold">System Design</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scalable AI infrastructure
                  </p>
                </div>
              </Link>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Project Overview */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.2}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Project Overview
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="p-4 mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">
                  📋 Setup Requirements
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Memoriva requires both frontend and backend repositories to run. Please clone and set up both repositories before starting the application.
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Memoriva is a spaced repetition based AI flashcard app designed for better memory retention. 
                Built with NextJS and powered by GPT-4, it creates intelligent study sessions that adapt to 
                your learning patterns and optimize retention through scientifically-proven spaced repetition algorithms.
              </p>
              <p className="leading-relaxed mb-4">
                The app features a rich WYSIWYG editor powered by TipTap, seamless image uploading to S3 with 
                presigned URLs, and AI-generated study content. With NextAuth integration for secure authentication 
                and PostgreSQL for robust data persistence, Memoriva provides a comprehensive learning platform.
              </p>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Tech Stack */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.3}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Layers className="w-6 h-6" />
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Frontend Technologies</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    NextJS 14 with App Router
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    TypeScript for type safety
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    TipTap WYSIWYG editor
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Tailwind CSS styling
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Backend & Database</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    PostgreSQL database
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    AWS Lambda functions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    AWS SAM framework
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    NextAuth authentication
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">AI & Cloud Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    GPT-4 LLM API integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    AWS S3 for file storage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    CloudFront CDN
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Presigned URL uploads
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Learning Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Spaced repetition algorithm
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    AI-generated content
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Progress tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Adaptive learning paths
                  </li>
                </ul>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Core Features */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.4}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Settings className="w-6 h-6" />
              Core Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  AI-Powered Learning
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• GPT-4 generated study sessions</li>
                  <li>• Intelligent content creation</li>
                  <li>• Adaptive difficulty adjustment</li>
                  <li>• Personalized learning paths</li>
                  <li>• Smart question generation</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Spaced Repetition
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Scientific repetition intervals</li>
                  <li>• Forgetting curve optimization</li>
                  <li>• Adaptive scheduling</li>
                  <li>• Performance-based timing</li>
                  <li>• Long-term retention focus</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Edit3 className="w-5 h-5 text-green-600" />
                  Rich Content Editor
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• TipTap WYSIWYG editor</li>
                  <li>• Rich text formatting</li>
                  <li>• Image embedding support</li>
                  <li>• Mathematical expressions</li>
                  <li>• Code syntax highlighting</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Image className="w-5 h-5 text-pink-600" />
                  Media Management
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Presigned S3 uploads</li>
                  <li>• CloudFront delivery</li>
                  <li>• Image optimization</li>
                  <li>• Multiple format support</li>
                  <li>• Secure file handling</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  Authentication
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• NextAuth integration</li>
                  <li>• Multiple OAuth providers</li>
                  <li>• Secure session management</li>
                  <li>• User profile management</li>
                  <li>• Privacy protection</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-teal-600" />
                  Data Analytics
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Learning progress tracking</li>
                  <li>• Performance analytics</li>
                  <li>• Study session insights</li>
                  <li>• Retention rate monitoring</li>
                  <li>• Custom reporting</li>
                </ul>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Installation & Usage */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.5}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Installation & Usage
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Local Development</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  <div className="text-muted-foreground mb-2"># Clone and install dependencies</div>
                  <div>git clone https://github.com/devyk100/memoriva.git</div>
                  <div>cd memoriva</div>
                  <div>npm install</div>
                  <div className="mt-4 text-muted-foreground mb-2"># Set up environment variables</div>
                  <div>cp .env.example .env.local</div>
                  <div className="mt-4 text-muted-foreground mb-2"># Run development server</div>
                  <div>npm run dev</div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Environment Configuration</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <div className="text-muted-foreground mb-2"># .env.local</div>
                  <div>NEXTAUTH_SECRET=your_secret_here</div>
                  <div>NEXTAUTH_URL=http://localhost:3000</div>
                  <div>DATABASE_URL=postgresql://...</div>
                  <div>OPENAI_API_KEY=sk-...</div>
                  <div>AWS_ACCESS_KEY_ID=your_key</div>
                  <div>AWS_SECRET_ACCESS_KEY=your_secret</div>
                  <div>S3_BUCKET_NAME=memoriva-uploads</div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Demo Videos */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.6}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Play className="w-6 h-6" />
              Demo Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Getting Started</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Demo video coming soon</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Learn how to create your first flashcard deck and start studying with AI-powered sessions.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Advanced Features</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Demo video coming soon</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Explore advanced features like AI content generation, spaced repetition optimization, and analytics.
                </p>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Source Code & Links */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.7}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Github className="w-6 h-6" />
              Source Code & Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Main Repository</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Complete NextJS application with AWS infrastructure
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    TypeScript
                  </div>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">AWS Infrastructure</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    SAM templates and Lambda functions
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    AWS SAM
                  </div>
                </div>
              </Link>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Documentation Links */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.8}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Documentation & Design
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold">Development Blog</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Building an AI-powered learning app with NextJS and GPT-4
                  </p>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold">Software Design Document</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Detailed architecture and AI integration design
                  </p>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Layers className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold">System Design Document</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AWS infrastructure and scalability design
                  </p>
                </div>
              </Link>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Footer */}
        <PortfolioSection className="mt-10 mb-10">
          <div className="text-center w-full text-sm p-2 font-light select-none">
            <Link href="/" className="text-primary hover:underline">
              ← Back to Portfolio
            </Link>
          </div>
        </PortfolioSection>

      </main>
    </>
  );
}
