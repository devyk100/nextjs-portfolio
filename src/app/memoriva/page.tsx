import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-bg";
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
  Settings,
  Brain,
  Shield,
  Clock,
  Database,
  Image,
  Edit3
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memoriva - AI Document Management | Yash Kumar Portfolio",
  description: "Memoriva is an intelligent document management and retrieval system using RAG technology, built with Go backend and Next.js frontend.",
  keywords: ["Memoriva", "RAG", "Document Management", "AI", "Vector Search", "Go", "Next.js", "Yash Kumar"],
  openGraph: {
    title: "Memoriva - AI Document Management",
    description: "Intelligent document management with RAG technology and vector search",
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
              <Button variant="ghost" className="flex items-center gap-2 cursor-pointer">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </PortfolioSection>

        {/* Hero Section */}
        <PortfolioSection className="mt-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Memoriva
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              AI-Powered Document Management & RAG System
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                RAG Pipeline
              </span>
              <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 rounded-full text-sm">
                SRS
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                Go Backend
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">
                Next.js Frontend
              </span>
            </div>
          </div>
        </PortfolioSection>

        {/* Quick Links */}
        <PortfolioSection className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="https://memoriva.yashk.dev" target="_blank" className="group">
              <div className="p-6 rounded-lg border bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Play className="w-5 h-5" />
                  <h3 className="font-semibold">Try Demo</h3>
                </div>
                <p className="text-sm text-purple-100">
                  Flashcard and AI generated study sessions
                </p>
              </div>
            </Link>

            <Link href="https://github.com/devyk100/memoriva" target="_blank" className="group">
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

            <Link href="https://github.com/devyk100/memoriva-rag-backend" target="_blank" className="group">
              <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Github className="w-5 h-5" />
                  <h3 className="font-semibold">Backend Code</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Go backend repository
                </p>
              </div>
            </Link>

            <Link href="/memoriva/soft-des" className="group">
              <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Design</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  RAG architecture & AI integration, and Software Design
                </p>
              </div>
            </Link>

            {/* <Link href="/memoriva/system-des" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Layers className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold">System Design</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scalable AI infrastructure
                  </p>
                </div>
              </Link> */}
          </div>
        </PortfolioSection>

        {/* Project Overview */}
        <PortfolioSection className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Project Overview
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <div className="p-4 mb-6 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <p className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-2">
                🏗️ Multi-Repository Architecture
              </p>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Memoriva consists of two separate repositories: frontend (Next.js) and backend (Go). Installation and setup instructions are available in each repository's README.
              </p>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              Memoriva is flashcard review app that is based on the SRS - Spaced repetition system for better memory retention of the flashcards. It has baked in RAG for generating flashcard sesssions for study for specific topics, your weak topics, etc., based on the prompt given.
            </p>
            <p className="leading-relaxed mb-4">
              The platform combines powerful SRS algorithm for better retention and uses RAG for generating AI based flashcard study sessions.
            </p>
          </div>
        </PortfolioSection>

        {/* Tech Stack */}
        <PortfolioSection className="mt-10">
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
                  Next.js 14 with App Router
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  TypeScript for type safety
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Tailwind CSS styling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  React Query for state management
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Backend & Database</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Go backend services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  PostgreSQL with pgvector
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Redis for caching
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Docker containerization
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">AI & Vector Search</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  OpenAI Embeddings API
                </li>
                {/* <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Vector similarity search
                  </li> */}
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  RAG pipeline implementation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Document chunking & indexing
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Infrastructure</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  RESTful API design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  File upload handling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Authentication & authorization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Scalable microservices
                </li>
              </ul>
            </div>
          </div>
        </PortfolioSection>

        {/* Core Features */}
        <PortfolioSection className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Settings className="w-6 h-6" />
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-600" />
                RAG Pipeline
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Document ingestion & processing</li>
                <li>• Intelligent text chunking</li>
                <li>• Vector embedding generation</li>
                <li>• Semantic similarity search</li>
                <li>• Context-aware retrieval</li>
              </ul>
            </div>
            {/* <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  Vector Database
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• PostgreSQL with pgvector</li>
                  <li>• High-dimensional vector storage</li>
                  <li>• Efficient similarity queries</li>
                  <li>• Metadata filtering</li>
                  <li>• Scalable indexing</li>
                </ul>
              </div> */}
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-blue-600" />
                Spaced Repetition System (SRS)
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Optimized memory retention through adaptive intervals</li>
                <li>• Intelligent scheduling based on user performance</li>
                <li>• Support for various flashcard types</li>
                <li>• Daily review tracking and analytics</li>
                <li>• Handles forgotten cards with ease</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-600" />
                Security & Privacy
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• User authentication</li>
                <li>• Document access control</li>
                <li>• Data encryption</li>
                <li>• Privacy-first design</li>
                <li>• Secure file handling</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-600" />
                Performance
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Caching layer with Redis</li>
                <li>• Optimized query processing</li>
                <li>• Concurrent request handling</li>
                <li>• Scalable architecture</li>
              </ul>
            </div>
          </div>
        </PortfolioSection>

        {/* Demo Video */}
        <PortfolioSection className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Play className="w-6 h-6" />
            Demo Video
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 rounded-lg border bg-card">
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                  {/* <p className="text-sm text-muted-foreground">RAG Pipeline Demo</p> */}
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2">Demo</h3>
              {/* <p className="text-sm text-muted-foreground">
                  Watch how documents are processed, indexed, and searched using natural language queries with contextual answers.
                </p> */}
            </div>
          </div>
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
