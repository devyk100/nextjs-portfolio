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
  Zap,
  Shield,
  Clock,
  Database,
  Network,
  MessageSquare
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yuclase - High-Performance Message Queue | Yash Kumar Portfolio",
  description: "Yuclase is a high-performance message queue system built with Go, featuring persistent storage, clustering, and real-time messaging capabilities.",
  keywords: ["Yuclase", "Message Queue", "Go", "Distributed Systems", "Real-time Messaging", "Yash Kumar"],
  openGraph: {
    title: "Yuclase - High-Performance Message Queue",
    description: "Scalable message queue system with clustering and persistent storage",
    url: "https://yashk.dev/yuclase",
    images: [{ url: "/yarei.jpeg", width: 1200, height: 630 }],
  },
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
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Yuclase
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                High-Performance Message Queue System
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">
                  Go Backend
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Message Queue
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  Clustering
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm">
                  Real-time
                </span>
              </div>
            </div>
        </PortfolioSection>

        {/* Quick Links */}
        <PortfolioSection className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="#" target="_blank" className="group">
                <div className="p-6 rounded-lg border bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Play className="w-5 h-5" />
                    <h3 className="font-semibold">Try Demo</h3>
                  </div>
                  <p className="text-sm text-green-100">
                    Message queue system
                  </p>
                </div>
              </Link>
              
              <Link href="https://github.com/devyk100/yuclase" target="_blank" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Github className="w-5 h-5" />
                    <h3 className="font-semibold">Source Code</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Go implementation repository
                  </p>
                </div>
              </Link>
              
              <Link href="/yuclase/soft-des" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold">Software Design</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Queue architecture & algorithms
                  </p>
                </div>
              </Link>
              
              <Link href="/yuclase/system-des" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Layers className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold">System Design</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Distributed system architecture
                  </p>
                </div>
              </Link>
            </div>
        </PortfolioSection>

        {/* Project Overview */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Project Overview
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="p-4 mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">
                  🏗️ Single Repository Architecture
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Yuclase is a single Go repository containing the complete message queue implementation. Installation and setup instructions are available in the repository's README.
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Yuclase is a high-performance message queue system built from scratch in Go, designed for 
                scalability, reliability, and low-latency message processing. It provides persistent storage, 
                clustering capabilities, and real-time messaging with support for multiple consumers and producers.
              </p>
              <p className="leading-relaxed mb-4">
                The system features a custom binary protocol for efficient communication, disk-based persistence 
                for durability, and a distributed architecture that can scale horizontally across multiple nodes. 
                Built with performance in mind, it handles thousands of messages per second with minimal latency.
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
                <h3 className="text-lg font-medium mb-3">Core Technologies</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Go programming language
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Custom binary protocol
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    TCP/UDP networking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Concurrent goroutines
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Storage & Persistence</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Disk-based persistence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Write-ahead logging (WAL)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Memory-mapped files
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Configurable retention policies
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Distributed Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Node clustering
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Leader election
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Replication support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Fault tolerance
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Performance Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Zero-copy operations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Batch processing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Connection pooling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Low-latency messaging
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  Message Queue
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• FIFO message ordering</li>
                  <li>• Topic-based routing</li>
                  <li>• Message acknowledgments</li>
                  <li>• Dead letter queues</li>
                  <li>• Priority queuing</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  Persistent Storage
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Disk-based message storage</li>
                  <li>• Write-ahead logging</li>
                  <li>• Configurable retention</li>
                  <li>• Crash recovery</li>
                  <li>• Data compression</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Network className="w-5 h-5 text-purple-600" />
                  Clustering
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Multi-node deployment</li>
                  <li>• Leader election algorithm</li>
                  <li>• Data replication</li>
                  <li>• Node discovery</li>
                  <li>• Split-brain protection</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  High Performance
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sub-millisecond latency</li>
                  <li>• Thousands of messages/sec</li>
                  <li>• Zero-copy operations</li>
                  <li>• Memory-mapped I/O</li>
                  <li>• Efficient serialization</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  Reliability
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• At-least-once delivery</li>
                  <li>• Exactly-once semantics</li>
                  <li>• Automatic failover</li>
                  <li>• Health monitoring</li>
                  <li>• Circuit breakers</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-teal-600" />
                  Real-time Features
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Live message streaming</li>
                  <li>• Real-time metrics</li>
                  <li>• Event notifications</li>
                  <li>• WebSocket support</li>
                  <li>• Push notifications</li>
                </ul>
              </div>
            </div>
        </PortfolioSection>

        {/* Architecture Highlights */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Layers className="w-6 h-6" />
              Architecture Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Custom Binary Protocol</h3>
                <p className="text-muted-foreground mb-3">
                  Designed a lightweight binary protocol optimized for message queue operations, 
                  reducing network overhead and improving throughput compared to text-based protocols.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Minimal header overhead</li>
                  <li>• Efficient serialization</li>
                  <li>• Version compatibility</li>
                  <li>• Compression support</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Distributed Consensus</h3>
                <p className="text-muted-foreground mb-3">
                  Implements a consensus algorithm for leader election and maintaining consistency 
                  across cluster nodes, ensuring reliable operation in distributed environments.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Raft consensus algorithm</li>
                  <li>• Log replication</li>
                  <li>• Membership changes</li>
                  <li>• Partition tolerance</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Storage Engine</h3>
                <p className="text-muted-foreground mb-3">
                  Custom storage engine with write-ahead logging and memory-mapped files for 
                  optimal performance and durability guarantees.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Append-only log structure</li>
                  <li>• Segment-based storage</li>
                  <li>• Background compaction</li>
                  <li>• Index optimization</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Client Libraries</h3>
                <p className="text-muted-foreground mb-3">
                  Provides client libraries and SDKs for easy integration with applications, 
                  supporting multiple programming languages and frameworks.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Go native client</li>
                  <li>• TypeScript/JavaScript SDK</li>
                  <li>• Connection pooling</li>
                  <li>• Automatic reconnection</li>
                </ul>
              </div>
            </div>
        </PortfolioSection>

        {/* Source Code */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Github className="w-6 h-6" />
              Source Code
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <Link href="https://github.com/devyk100/yuclase" target="_blank" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Yuclase Repository</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Complete Go implementation with clustering, persistence, and client libraries
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    Go
                  </div>
                </div>
              </Link>
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
                    <p className="text-sm text-muted-foreground">Message Queue Demo</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">High-Performance Messaging</h3>
                <p className="text-sm text-muted-foreground">
                  Watch Yuclase handle clustering, node failures, and high-throughput message processing with sub-millisecond latency.
                </p>
              </div>
            </div>
        </PortfolioSection>

        {/* Documentation Links */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Technical Documentation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/yuclase/soft-des" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold">Software Design Document</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Detailed queue algorithms, storage engine, and protocol design
                  </p>
                </div>
              </Link>
              
              <Link href="/yuclase/system-des" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Layers className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold">System Design Document</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Distributed architecture, clustering, and scalability design
                  </p>
                </div>
              </Link>
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
