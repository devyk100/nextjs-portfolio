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
  Settings
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaicode - AI-Powered Code Assistant | Yash Kumar Portfolio",
  description: "Kaicode is an intelligent code assistant that helps developers write better code faster. Built with modern AI technologies and real-time collaboration features.",
  keywords: ["Kaicode", "AI Code Assistant", "Developer Tools", "Code Generation", "Yash Kumar", "Juquox", "devyk100"],
  openGraph: {
    title: "Kaicode - AI-Powered Code Assistant",
    description: "Intelligent code assistant with AI-powered features for modern developers",
    url: "https://yashk.dev/kaicode",
    images: [{ url: "/yarei.jpeg", width: 1200, height: 630 }],
  },
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function KaicodePage() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Kaicode
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Realtime Peer Programming Playground
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Collaborative IDE
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">
                  Real-time Editing
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  Code Execution
                </span>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Quick Links */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Play className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold">Live Demo</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Try the interactive demo
                  </p>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Github className="w-5 h-5" />
                    <h3 className="font-semibold">Source Code</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    View on GitHub
                  </p>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold">Documentation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Read the docs
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
              <p className="text-lg leading-relaxed mb-4">
                KaiCode is a realtime peer programming playground that enables collaborative coding with 
                real-time cursor sharing and synchronized editing. Built for developers who want to code 
                together seamlessly, it provides a complete IDE experience in the browser.
              </p>
              <p className="leading-relaxed mb-4">
                The platform features collaborative editing via Gorilla WebSockets and Y.js CRDT, 
                failsafe containerized sandbox code execution, and AI-powered inline ghost completions 
                using DeepSeek LLM API. All code execution happens in secure Docker containers managed 
                through AWS SQS queues.
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
                <h3 className="text-lg font-medium mb-3">Frontend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Next.js with TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Y.js for CRDT operations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Multi-cursor support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Real-time collaborative editing
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Backend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Golang backend services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Gorilla WebSockets
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    PostgreSQL with Drizzle ORM
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Redis for session management
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">AI & Code Execution</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    DeepSeek LLM API
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Inline ghost completions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Docker execution containers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Custom Docker client (Golang)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Infrastructure</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    AWS Lambda & EC2
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    AWS SQS for queue management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Docker containerization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Failsafe sandbox execution
                  </li>
                </ul>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Key Features */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.4}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Settings className="w-6 h-6" />
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Real-time Collaborative Editing</h3>
                <p className="text-muted-foreground">
                  Built with Gorilla WebSockets and Y.js CRDT for seamless real-time cursor sharing 
                  and synchronized editing across multiple users.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">AI-Powered Code Completions</h3>
                <p className="text-muted-foreground">
                  Inline ghost completions powered by DeepSeek LLM API providing 
                  intelligent code suggestions as you type.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Secure Code Execution</h3>
                <p className="text-muted-foreground">
                  Failsafe containerized sandbox execution using custom Docker containers 
                  managed through AWS SQS queues for secure code running.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Multi-Cursor Support</h3>
                <p className="text-muted-foreground">
                  See where your collaborators are editing in real-time with 
                  synchronized cursors and selection highlighting.
                </p>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Code Repository Links */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.5}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Github className="w-6 h-6" />
              Source Code
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Frontend Repository</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Next.js frontend with TypeScript and modern UI components
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
                    <h3 className="font-semibold">Backend Repository</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Node.js API server with AI integration and real-time features
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    JavaScript
                  </div>
                </div>
              </Link>
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
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Real-time Collaboration Demo</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">Collaborative Editing in Action</h3>
                <p className="text-sm text-muted-foreground">
                  Watch multiple developers coding together with synchronized cursors and real-time editing.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Code Execution Demo</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">Secure Code Execution</h3>
                <p className="text-sm text-muted-foreground">
                  See how code runs safely in containerized environments with real-time output.
                </p>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Documentation Links */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.7}>
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
                    Engineering process and technical decisions behind Kaicode
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
                    Detailed architecture and component design specifications
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
                    High-level system architecture and infrastructure design
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
