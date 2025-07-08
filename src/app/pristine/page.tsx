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
  Globe,
  Database,
  Network,
  Server
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pristine - High-Performance Reverse Proxy | Yash Kumar Portfolio",
  description: "Pristine is a high-performance reverse proxy built with C++ and Boost.Asio, featuring SSL/TLS support, HTTP/2, and WebSocket capabilities.",
  keywords: ["Pristine", "Reverse Proxy", "C++", "Boost.Asio", "SSL/TLS", "HTTP/2", "WebSocket", "Yash Kumar"],
  openGraph: {
    title: "Pristine - High-Performance Reverse Proxy",
    description: "Modern reverse proxy with SSL/TLS, HTTP/2, and WebSocket support",
    url: "https://yashk.dev/pristine",
    images: [{ url: "/yarei.jpeg", width: 1200, height: 630 }],
  },
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function PristinePage() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Pristine
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                High-Performance Reverse Proxy
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  C++
                </span>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                  Boost.Asio
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">
                  SSL/TLS
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  HTTP/2
                </span>
              </div>
            </div>
        </PortfolioSection>

        {/* Quick Links */}
        <PortfolioSection className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="https://github.com/devyk100/pristine" target="_blank" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Github className="w-5 h-5" />
                    <h3 className="font-semibold">Source Code</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    C++ implementation repository
                  </p>
                </div>
              </Link>
              
              <Link href="/pristine/soft-des" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold">Software Design</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Proxy architecture & components
                  </p>
                </div>
              </Link>
              
              <Link href="/pristine/system-des" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Layers className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold">System Design</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scalable infrastructure design
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
              <div className="p-4 mb-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                  🏗️ Single Repository Architecture
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Pristine is a single C++ repository containing the complete reverse proxy implementation. Installation and setup instructions are available in the repository's README.
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Pristine is a high-performance reverse proxy built from scratch in C++ using Boost.Asio, 
                designed for modern web applications requiring SSL/TLS termination, HTTP/2 support, and 
                WebSocket proxying capabilities with minimal latency and maximum throughput.
              </p>
              <p className="leading-relaxed mb-4">
                The proxy features automatic SSL certificate management with Let's Encrypt integration, 
                domain-based routing, load balancing, and a configuration-driven approach that makes it 
                easy to deploy and manage in production environments.
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
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    C++17 with modern features
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Boost.Asio for async I/O
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Boost.Beast for HTTP
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    OpenSSL for cryptography
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Protocol Support</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    HTTP/1.1 and HTTP/2
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    WebSocket proxying
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    SSL/TLS termination
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    TCP load balancing
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Certificate Management</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Let's Encrypt ACME v2
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Automatic renewal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Self-signed fallback
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Manual certificate support
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Configuration</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    YAML configuration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Domain-based routing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Load balancing rules
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Runtime configuration
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
                  <Server className="w-5 h-5 text-blue-600" />
                  Reverse Proxy
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Domain-based request routing</li>
                  <li>• Backend health checking</li>
                  <li>• Connection pooling</li>
                  <li>• Request/response forwarding</li>
                  <li>• Custom header manipulation</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  SSL/TLS Management
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Automatic Let's Encrypt certificates</li>
                  <li>• TLS 1.2+ support</li>
                  <li>• Perfect forward secrecy</li>
                  <li>• OCSP stapling</li>
                  <li>• Certificate auto-renewal</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Network className="w-5 h-5 text-purple-600" />
                  Protocol Support
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• HTTP/1.1 with keep-alive</li>
                  <li>• HTTP/2 with multiplexing</li>
                  <li>• WebSocket upgrade handling</li>
                  <li>• Chunked transfer encoding</li>
                  <li>• Compression support</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  High Performance
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Asynchronous I/O operations</li>
                  <li>• Zero-copy data forwarding</li>
                  <li>• Memory-efficient design</li>
                  <li>• Low-latency processing</li>
                  <li>• High concurrent connections</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-red-600" />
                  Load Balancing
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Round-robin algorithm</li>
                  <li>• Least connections</li>
                  <li>• Health-based routing</li>
                  <li>• Weighted distribution</li>
                  <li>• Failover handling</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-teal-600" />
                  Configuration
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• YAML-based configuration</li>
                  <li>• Hot configuration reload</li>
                  <li>• Environment variable support</li>
                  <li>• Validation and error checking</li>
                  <li>• Default value handling</li>
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
                <h3 className="text-lg font-medium mb-3">Asynchronous I/O Design</h3>
                <p className="text-muted-foreground mb-3">
                  Built on Boost.Asio's proactor pattern for maximum scalability, handling thousands 
                  of concurrent connections with minimal resource usage and optimal performance.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Event-driven architecture</li>
                  <li>• Non-blocking operations</li>
                  <li>• Efficient memory management</li>
                  <li>• Scalable connection handling</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">ACME Protocol Implementation</h3>
                <p className="text-muted-foreground mb-3">
                  Full ACME v2 protocol implementation for automatic SSL certificate provisioning 
                  and renewal, eliminating manual certificate management overhead.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• HTTP-01 challenge support</li>
                  <li>• Account key management</li>
                  <li>• Certificate signing requests</li>
                  <li>• Automatic renewal scheduling</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Modular Component Design</h3>
                <p className="text-muted-foreground mb-3">
                  Clean separation of concerns with modular components for routing, SSL management, 
                  load balancing, and configuration, enabling easy maintenance and extensibility.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Pluggable architecture</li>
                  <li>• Interface-based design</li>
                  <li>• Dependency injection</li>
                  <li>• Unit testable components</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Error Handling & Resilience</h3>
                <p className="text-muted-foreground mb-3">
                  Comprehensive error handling with graceful degradation, automatic recovery, 
                  and detailed logging for production reliability and debugging.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Circuit breaker pattern</li>
                  <li>• Retry mechanisms</li>
                  <li>• Health monitoring</li>
                  <li>• Structured logging</li>
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
              <Link href="https://github.com/devyk100/pristine" target="_blank" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Pristine Repository</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Complete C++ implementation with SSL/TLS, HTTP/2, and WebSocket support
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    C++
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
                    <p className="text-sm text-muted-foreground">Reverse Proxy Demo</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">SSL & Load Balancing</h3>
                <p className="text-sm text-muted-foreground">
                  Watch Pristine automatically provision SSL certificates and handle high-throughput traffic with load balancing.
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
              <Link href="/pristine/soft-des" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold">Software Design Document</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Detailed proxy architecture, SSL implementation, and component design
                  </p>
                </div>
              </Link>
              
              <Link href="/pristine/system-des" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Layers className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold">System Design Document</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scalable infrastructure, deployment, and high-availability design
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
