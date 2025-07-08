import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-bg";
import { FadeInUp } from "@/components/ui/fade-in-up";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import ThemeToggle from "@/components/ui/theme-toggle";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Github, FileText, Network, Zap, Code, Server, Shield, Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pristine - High-Performance Reverse Proxy | Yash Kumar Portfolio",
  description: "Pristine is a lightweight, high-performance reverse proxy built with C++ using Boost.Asio for async I/O operations.",
  keywords: ["Pristine", "Reverse Proxy", "C++", "Boost.Asio", "HTTP/2", "TLS", "Yash Kumar"],
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
          <FadeInUp>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Pristine
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                High-Performance Reverse Proxy
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                A lightweight, high-performance reverse proxy built with C++ using Boost.Asio for async I/O operations. 
                Designed as a simple alternative to Caddy with automatic certificate management and multi-protocol support.
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
                <Zap className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">High Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Built with Boost.Asio for async I/O and multi-threading, delivering exceptional performance and low latency.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <Network className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">Multi-Protocol Support</h3>
                <p className="text-sm text-muted-foreground">
                  Full HTTP/1.1 and HTTP/2 support with WebSocket proxying and protocol upgrade handling.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <Shield className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">Automatic TLS</h3>
                <p className="text-sm text-muted-foreground">
                  Self-signed certificates with Let's Encrypt integration for automatic certificate management and renewal.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <Code className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">YAML Configuration</h3>
                <p className="text-sm text-muted-foreground">
                  Easy-to-read YAML configuration files with domain-based routing and flexible backend management.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <Server className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">Domain-Based Routing</h3>
                <p className="text-sm text-muted-foreground">
                  Route requests based on Host header with support for multiple backends and load balancing.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <Globe className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">Header Preservation</h3>
                <p className="text-sm text-muted-foreground">
                  All headers are passed through to backends with minimal processing overhead and full compatibility.
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
                    <span><strong>Async I/O:</strong> Boost.Asio for non-blocking operations and high concurrency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span><strong>Multi-Threading:</strong> Configurable worker thread pool for optimal performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></span>
                    <span><strong>Connection Pooling:</strong> Efficient backend connection management and reuse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                    <span><strong>Certificate Management:</strong> Automated ACME protocol with Let's Encrypt</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Protocol Support</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <span><strong>HTTP/1.1:</strong> Full request/response proxying with keep-alive support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                    <span><strong>HTTP/2:</strong> Stream multiplexing and header compression (HPACK)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
                    <span><strong>WebSocket:</strong> Bidirectional communication with protocol upgrade handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2"></span>
                    <span><strong>TLS/SSL:</strong> TLS 1.2+ with strong cipher suites and perfect forward secrecy</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Performance Highlights */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.3}>
            <h2 className="text-2xl font-semibold mb-6 text-center">Performance Highlights</h2>
            <div className="bg-card rounded-lg p-6 border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-2">50k+</div>
                  <div className="text-sm text-muted-foreground">Requests/sec per instance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500 mb-2">&lt;1ms</div>
                  <div className="text-sm text-muted-foreground">Proxy overhead latency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500 mb-2">100k</div>
                  <div className="text-sm text-muted-foreground">Concurrent connections</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500 mb-2">99.99%</div>
                  <div className="text-sm text-muted-foreground">Uptime availability</div>
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
                Pristine is a single repository project. Clone the repository and follow the build instructions 
                in the README to compile and run the reverse proxy with your configuration.
              </p>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Action Buttons */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.5}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://github.com/yash-kumar-portfolio/pristine" target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  View Source Code
                </Button>
              </Link>
              <Link href="/pristine/soft-des">
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Software Design
                </Button>
              </Link>
              <Link href="/pristine/system-des">
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
