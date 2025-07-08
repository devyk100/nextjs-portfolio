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
  Terminal,
  Globe,
  Shield,
  Database,
  Zap,
  CheckCircle,
  Download,
  FileCode
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mochi - C++ Competitive Programming Tool | Yash Kumar Portfolio",
  description: "Mochi is a command-line tool for generating and testing C++ problem files for competitive programming, built with Go for template-based problem file generation and automated testing.",
  keywords: ["Mochi", "Competitive Programming", "C++", "Go", "CLI Tool", "Template Generation", "Automated Testing", "Yash Kumar", "Juquox", "devyk100"],
  openGraph: {
    title: "Mochi - C++ Competitive Programming Tool",
    description: "Command-line tool for generating and testing C++ problem files with automated testing capabilities",
    url: "https://yashk.dev/mochi",
    images: [{ url: "/yarei.jpeg", width: 1200, height: 630 }],
  },
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function MochiPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Mochi
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                C++ Competitive Programming Tool
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm">
                  Go
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  C++
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">
                  CLI Tool
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  Automated Testing
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
                    <Download className="w-5 h-5 text-orange-600" />
                    <h3 className="font-semibold">Download Binary</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get the latest Mochi CLI tool
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
                    <BookOpen className="w-5 h-5 text-red-600" />
                    <h3 className="font-semibold">Documentation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Learn how to use Mochi effectively
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
                Mochi is a command-line tool for generating and testing C++ problem files for competitive programming. 
                Built with Go, it provides template-based problem file generation and automated testing against 
                predefined inputs and outputs, streamlining the competitive programming workflow.
              </p>
              <p className="leading-relaxed mb-4">
                The tool features customizable C++ templates, automatic compilation and execution, test case management, 
                and performance benchmarking. Mochi helps competitive programmers focus on problem-solving by automating 
                the repetitive tasks of file setup, compilation, and testing.
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
                    Go programming language
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Cobra CLI framework
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Go templates engine
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    File system operations
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">C++ Integration</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    GCC/Clang compiler support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    C++17/20 standard support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Custom compilation flags
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Optimization settings
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Testing Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Automated test execution
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Input/output validation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Performance benchmarking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Memory usage tracking
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Workflow Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Template management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Project scaffolding
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Configuration management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Cross-platform support
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
                  <FileCode className="w-5 h-5 text-orange-600" />
                  Template Generation
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Customizable C++ templates</li>
                  <li>• Problem-specific scaffolding</li>
                  <li>• Header file management</li>
                  <li>• Boilerplate code generation</li>
                  <li>• Template versioning</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-blue-600" />
                  CLI Interface
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Intuitive command structure</li>
                  <li>• Interactive prompts</li>
                  <li>• Colored output formatting</li>
                  <li>• Progress indicators</li>
                  <li>• Help documentation</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Automated Testing
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Test case execution</li>
                  <li>• Output comparison</li>
                  <li>• Time limit enforcement</li>
                  <li>• Memory limit checking</li>
                  <li>• Batch testing support</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  Performance Analysis
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Execution time measurement</li>
                  <li>• Memory usage tracking</li>
                  <li>• Performance comparisons</li>
                  <li>• Optimization suggestions</li>
                  <li>• Benchmark reporting</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-purple-600" />
                  Test Management
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Test case organization</li>
                  <li>• Input/output file handling</li>
                  <li>• Test suite creation</li>
                  <li>• Custom test generation</li>
                  <li>• Test result archiving</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  Configuration
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Compiler settings</li>
                  <li>• Template preferences</li>
                  <li>• Default configurations</li>
                  <li>• Environment variables</li>
                  <li>• Profile management</li>
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
                <h3 className="text-lg font-medium mb-3">Installation</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  <div className="text-muted-foreground mb-2"># Install from source</div>
                  <div>git clone https://github.com/devyk100/mochi.git</div>
                  <div>cd mochi</div>
                  <div>go build -o mochi</div>
                  <div className="mt-4 text-muted-foreground mb-2"># Or download binary</div>
                  <div>curl -L https://github.com/devyk100/mochi/releases/latest/download/mochi -o mochi</div>
                  <div>chmod +x mochi</div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <div className="text-muted-foreground mb-2"># Create a new problem</div>
                  <div>mochi new problem-name</div>
                  <div className="mt-4 text-muted-foreground mb-2"># Test your solution</div>
                  <div>mochi test problem-name.cpp</div>
                  <div className="mt-4 text-muted-foreground mb-2"># Run with custom input</div>
                  <div>mochi run problem-name.cpp &lt; input.txt</div>
                  <div className="mt-4 text-muted-foreground mb-2"># Benchmark performance</div>
                  <div>mochi bench problem-name.cpp</div>
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
                  Learn how to install Mochi and create your first competitive programming problem setup.
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
                  Explore advanced features like custom templates, automated testing, and performance benchmarking.
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
                    Complete Go source code with CLI implementation
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
                    <h3 className="font-semibold">Release Binaries</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Pre-compiled binaries for multiple platforms
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    Releases
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
                    Building a competitive programming CLI tool with Go
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
                    Detailed CLI architecture and template system design
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
                    System architecture and testing framework design
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
