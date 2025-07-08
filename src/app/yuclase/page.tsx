import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-bg";
import { FadeInUp } from "@/components/ui/fade-in-up";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import ThemeToggle from "@/components/ui/theme-toggle";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Github, FileText, Database, Network, Zap, Code, Server, Monitor } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yuclase - High-Performance Message Queue | Yash Kumar Portfolio",
  description: "Yuclase is a high-performance, persistent message queue service built in Go with append-only log storage and Redis-like protocol.",
  keywords: ["Yuclase", "Message Queue", "Go", "Append-Only Log", "RESP Protocol", "Yash Kumar"],
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function YuclasePage() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Yuclase
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                High-Performance Message Queue Service
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                A persistent message queue service built in Go with append-only log storage, 
                Redis-like protocol, and focus on simplicity, reliability, and performance.
              </p>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Key Features */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.1}>
            <h2 className="text-2xl font-semibold mb-6 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <Database className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">Append-Only Log Storage</h3>
                <p className="text-sm text-muted-foreground">
                  Fast, durable message storage using append-only logs with configurable retention and segmentation.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <Network className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">Redis-Like Protocol</h3>
                <p className="text-sm text-muted-foreground">
                  Uses RESP (Redis Serialization Protocol) for simple, efficient client-server communication.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <Zap className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">High Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized for high-throughput sequential writes with minimal memory footprint and concurrent safety.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <Code className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">Multi-Language Clients</h3>
                <p className="text-sm text-muted-foreground">
                  CLI client and TypeScript/JavaScript SDK for easy integration across different platforms.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <Server className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">Topic-Based Messaging</h3>
                <p className="text-sm text-muted-foreground">
                  Organize messages into topics with independent consumer offset tracking for flexible consumption.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <Monitor className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">Docker Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Containerized deployment with Docker Compose and Kubernetes support for scalable infrastructure.
                </p>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Technical Implementation */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.2}>
            <h2 className="text-2xl font-semibold mb-6 text-center">Technical Implementation</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Core Architecture</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span><strong>Storage Engine:</strong> Append-only log with segmented files for efficient cleanup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span><strong>Network Layer:</strong> TCP socket server with Redis-like protocol (RESP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></span>
                    <span><strong>Queue Management:</strong> Topic-based organization with consumer offset tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                    <span><strong>Concurrency:</strong> Thread-safe operations using Go's sync primitives</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Performance Characteristics</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <span><strong>Write Performance:</strong> Sequential writes optimized for maximum throughput</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                    <span><strong>Read Performance:</strong> Efficient sequential reads with optional indexing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
                    <span><strong>Memory Usage:</strong> Minimal memory footprint with disk-based storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2"></span>
                    <span><strong>Durability:</strong> Configurable sync intervals for performance vs durability trade-offs</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Available Commands */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.3}>
            <h2 className="text-2xl font-semibold mb-6 text-center">Available Commands</h2>
            <div className="bg-card rounded-lg p-6 border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-3 bg-muted rounded">
                  <code className="text-sm font-mono text-blue-600">CREATE &lt;topic&gt;</code>
                  <p className="text-xs text-muted-foreground mt-1">Create a new topic</p>
                </div>
                <div className="p-3 bg-muted rounded">
                  <code className="text-sm font-mono text-green-600">ENQUEUE &lt;topic&gt; &lt;message&gt;</code>
                  <p className="text-xs text-muted-foreground mt-1">Add message to topic</p>
                </div>
                <div className="p-3 bg-muted rounded">
                  <code className="text-sm font-mono text-purple-600">LISTEN &lt;topic&gt; &lt;consumer&gt;</code>
                  <p className="text-xs text-muted-foreground mt-1">Get messages for consumer</p>
                </div>
                <div className="p-3 bg-muted rounded">
                  <code className="text-sm font-mono text-orange-600">OFFSET &lt;topic&gt; &lt;consumer&gt;</code>
                  <p className="text-xs text-muted-foreground mt-1">Get/set consumer offset</p>
                </div>
                <div className="p-3 bg-muted rounded">
                  <code className="text-sm font-mono text-red-600">TOPICS</code>
                  <p className="text-xs text-muted-foreground mt-1">List all topics</p>
                </div>
                <div className="p-3 bg-muted rounded">
                  <code className="text-sm font-mono text-cyan-600">STATS [topic]</code>
                  <p className="text-xs text-muted-foreground mt-1">Get statistics</p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Project Setup Note */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.4}>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2 text-yellow-800 dark:text-yellow-200">Project Setup</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Yuclase is a single repository project. Clone the repository and follow the build instructions 
                in the README to get started with the message queue service.
              </p>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Action Buttons */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.5}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://github.com/yash-kumar-portfolio/yuclase" target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  View Source Code
                </Button>
              </Link>
              <Link href="/yuclase/soft-des">
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Software Design
                </Button>
              </Link>
              <Link href="/yuclase/system-des">
                <Button variant="outline" className="flex items-center gap-2">
                  <Network className="w-4 h-4" />
                  System Design
                </Button>
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
