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
  Smartphone,
  Globe,
  Shield
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pristine - Modern Lightweight Reverse Proxy | Yash Kumar Portfolio",
  description: "Pristine is a modern lightweight reverse proxy built with C++ 20 that efficiently forwards HTTP requests to specified ports from domains with high performance.",
  keywords: ["Pristine", "Reverse Proxy", "C++", "HTTP Proxy", "Network Programming", "Yash Kumar", "Juquox", "devyk100"],
  openGraph: {
    title: "Pristine - Modern Lightweight Reverse Proxy",
    description: "High-performance reverse proxy built with C++ 20 for efficient HTTP request forwarding",
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
          <FadeInUp>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Pristine
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Modern Lightweight Reverse Proxy
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                  C++ 20
                </span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                  Reverse Proxy
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  High Performance
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
                    <Play className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-semibold">Live Demo</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    See Pristine proxy in action
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
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold">Documentation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Setup and configuration guide
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
                Pristine is a modern lightweight reverse proxy built with C++ 20 that efficiently forwards 
                HTTP requests to specified ports from domains. Designed for high performance and reliability, 
                it handles both HTTP/1.1 and HTTP/2 protocols with asynchronous I/O operations.
              </p>
              <p className="leading-relaxed mb-4">
                Built using Boost ASIO for asynchronous networking, Pristine supports WebSocket upgrades 
                through proper header handling and provides efficient port forwarding with minimal latency. 
                The proxy is designed to be lightweight yet robust for production environments.
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
                    C++ 20 modern features
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Boost ASIO for networking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Asynchronous I/O operations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    CMake build system
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Protocol Support</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    HTTP/1.1 protocol
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    HTTP/2 protocol
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    WebSocket upgrades
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Upgrade header handling
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Performance Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Asynchronous port handling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Low latency forwarding
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Lightweight architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    High throughput design
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Deployment</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Cross-platform support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Docker containerization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Production ready
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Minimal dependencies
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
                  <Shield className="w-5 h-5 text-emerald-600" />
                  Request Forwarding
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Domain-based routing</li>
                  <li>• Port-specific forwarding</li>
                  <li>• Header preservation</li>
                  <li>• Query parameter handling</li>
                  <li>• Path-based routing</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  Protocol Support
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• HTTP/1.1 compatibility</li>
                  <li>• HTTP/2 support</li>
                  <li>• WebSocket upgrades</li>
                  <li>• HTTPS termination</li>
                  <li>• Keep-alive connections</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  Performance
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Asynchronous I/O</li>
                  <li>• Connection pooling</li>
                  <li>• Low memory footprint</li>
                  <li>• High throughput</li>
                  <li>• Minimal latency</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-teal-600" />
                  Configuration
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• JSON-based config</li>
                  <li>• Hot reload support</li>
                  <li>• Environment variables</li>
                  <li>• SSL certificate management</li>
                  <li>• Logging configuration</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-orange-600" />
                  Monitoring
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Request/response logging</li>
                  <li>• Performance metrics</li>
                  <li>• Health check endpoints</li>
                  <li>• Error tracking</li>
                  <li>• Connection statistics</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5 text-red-600" />
                  Security
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Rate limiting</li>
                  <li>• IP whitelisting</li>
                  <li>• Request validation</li>
                  <li>• Header sanitization</li>
                  <li>• DDoS protection</li>
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
                <h3 className="text-lg font-medium mb-3">Build from Source</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  <div className="text-muted-foreground mb-2"># Clone the repository</div>
                  <div>git clone https://github.com/devyk100/pristine.git</div>
                  <div className="mt-4 text-muted-foreground mb-2"># Build with CMake</div>
                  <div>mkdir build && cd build</div>
                  <div>cmake .. && make</div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Configuration</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <div className="text-muted-foreground mb-2">// config.json</div>
                  <div>{`{`}</div>
                  <div className="ml-4">
                    <span className="text-green-600">"port"</span>: <span className="text-blue-600">80</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-green-600">"routes"</span>: {`{`}
                  </div>
                  <div className="ml-8">
                    <span className="text-green-600">"example.com"</span>: <span className="text-blue-600">3000</span>,
                  </div>
                  <div className="ml-8">
                    <span className="text-green-600">"api.example.com"</span>: <span className="text-blue-600">8080</span>
                  </div>
                  <div className="ml-4">{`}`}</div>
                  <div>{`}`}</div>
                  <div className="mt-4 text-muted-foreground mb-2"># Run the proxy</div>
                  <div>./pristine --config config.json</div>
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
                <h3 className="text-lg font-medium mb-3">Setup & Configuration</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Demo video coming soon</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Watch how to build, configure, and deploy Pristine reverse proxy in a production environment.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Performance Benchmarks</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Demo video coming soon</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Performance comparison with other reverse proxies showing throughput and latency metrics.
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
                    Complete C++ source code with build scripts and documentation
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    C++
                  </div>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Docker Image</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Pre-built Docker container for easy deployment
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                    Docker
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
                    Building a high-performance reverse proxy with C++
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
                    Detailed software architecture and implementation design
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
                    System architecture and deployment infrastructure design
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
