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
  Database,
  Globe,
  Shield,
  Clock,
  Zap
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YuClase - Topicwise Queue Service | Yash Kumar Portfolio",
  description: "YuClase is a topicwise simple queue service that uses append-only log method to persist data, built with Golang and concurrency packages for high performance.",
  keywords: ["YuClase", "Queue Service", "Golang", "Message Queue", "Append-only Log", "Yash Kumar", "Juquox", "devyk100"],
  openGraph: {
    title: "YuClase - Topicwise Queue Service",
    description: "High-performance topicwise queue service with append-only log persistence built with Golang",
    url: "https://yashk.dev/yuclase",
    images: [{ url: "/yarei.jpeg", width: 1200, height: 630 }],
  },
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function YuClasePage() {
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
                YuClase
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Topicwise Queue Service
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Golang
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  Message Queue
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">
                  Append-only Log
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
                    <Play className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold">Live Demo</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Try YuClase queue service online
                  </p>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Github className="w-5 h-5" />
                    <h3 className="font-semibold">GitHub Repository</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    View source code and contribute
                  </p>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold">API Documentation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complete API reference and examples
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
                YuClase is a topicwise simple queue service that uses append-only log method to persist data. 
                Built with Golang and leveraging Go's powerful concurrency packages, it provides high-performance 
                message queuing with topic-based organization and reliable data persistence.
              </p>
              <p className="leading-relaxed mb-4">
                The service supports enqueue, dequeue, and play operations from specific topics with offset support, 
                allowing for flexible message consumption patterns. Data is persisted for configurable time periods 
                using an efficient append-only log structure that ensures durability and performance.
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
                <h3 className="text-lg font-medium mb-3">Core Technologies</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Golang (Go 1.21+)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Go concurrency packages
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Goroutines and channels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    sync package primitives
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Storage & Persistence</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Append-only log structure
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    File-based persistence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Configurable retention
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Offset-based indexing
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Performance Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Concurrent message handling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Lock-free data structures
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Memory-mapped files
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Batch processing support
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">API & Interface</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    RESTful HTTP API
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    JSON message format
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Topic-based routing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Client libraries
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
                  <Database className="w-5 h-5 text-blue-600" />
                  Queue Operations
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Enqueue messages to topics</li>
                  <li>• Dequeue with FIFO ordering</li>
                  <li>• Play from specific offset</li>
                  <li>• Batch operations support</li>
                  <li>• Message acknowledgment</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-green-600" />
                  Topic Management
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Dynamic topic creation</li>
                  <li>• Topic-based partitioning</li>
                  <li>• Configurable retention</li>
                  <li>• Topic metadata tracking</li>
                  <li>• Auto-cleanup policies</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  Data Persistence
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Append-only log structure</li>
                  <li>• Crash recovery support</li>
                  <li>• Configurable sync policies</li>
                  <li>• Data integrity checks</li>
                  <li>• Compression support</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  Performance
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• High-throughput processing</li>
                  <li>• Low-latency operations</li>
                  <li>• Concurrent consumers</li>
                  <li>• Memory-efficient design</li>
                  <li>• Horizontal scalability</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-600" />
                  Time Management
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Configurable TTL</li>
                  <li>• Message timestamps</li>
                  <li>• Retention policies</li>
                  <li>• Scheduled cleanup</li>
                  <li>• Time-based queries</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-teal-600" />
                  Monitoring
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Queue metrics tracking</li>
                  <li>• Performance monitoring</li>
                  <li>• Health check endpoints</li>
                  <li>• Logging and tracing</li>
                  <li>• Admin dashboard</li>
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
                <h3 className="text-lg font-medium mb-3">Quick Start</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  <div className="text-muted-foreground mb-2"># Clone and build</div>
                  <div>git clone https://github.com/devyk100/yuclase.git</div>
                  <div>cd yuclase</div>
                  <div>go build -o yuclase ./cmd/server</div>
                  <div className="mt-4 text-muted-foreground mb-2"># Run the server</div>
                  <div>./yuclase --config config.yaml</div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">API Usage Examples</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <div className="text-muted-foreground mb-2"># Enqueue a message</div>
                  <div>curl -X POST http://localhost:8080/topics/orders/enqueue \</div>
                  <div className="ml-4">-H <span className="text-green-600">"Content-Type: application/json"</span> \</div>
                  <div className="ml-4">-d <span className="text-green-600">{`'{"data": "order-123", "timestamp": 1640995200}'`}</span></div>
                  <div className="mt-4 text-muted-foreground mb-2"># Dequeue messages</div>
                  <div>curl http://localhost:8080/topics/orders/dequeue?count=10</div>
                  <div className="mt-4 text-muted-foreground mb-2"># Play from offset</div>
                  <div>curl http://localhost:8080/topics/orders/play?offset=100&count=5</div>
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
                  Learn how to set up YuClase, create topics, and perform basic queue operations.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Performance & Scaling</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Demo video coming soon</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Performance benchmarks and scaling strategies for high-throughput scenarios.
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
                    Complete Go source code with tests and documentation
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    Go
                  </div>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Client Libraries</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Go, Python, and JavaScript client libraries
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    Multi-language
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
                    Building a high-performance queue service with Go
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
                    Detailed architecture and implementation design
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
                    System architecture and deployment strategies
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
