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
  ArrowLeft,
  Settings,
  Zap,
  FileText,
  Terminal,
  Download,
  Layers
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mochi - Competitive Programming Template Manager | Yash Kumar Portfolio",
  description: "Mochi is a simple and efficient template manager for competitive programming, built with Go for quick setup and file generation.",
  keywords: ["Mochi", "Competitive Programming", "Template Manager", "Go", "CLI Tool", "Yash Kumar"],
  openGraph: {
    title: "Mochi - Competitive Programming Template Manager",
    description: "Simple template manager for competitive programming with Go",
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
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Mochi
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Competitive Programming Template Manager
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm">
                  Go CLI
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm">
                  Template Manager
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Competitive Programming
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">
                  Quick Setup
                </span>
              </div>
            </div>
        </PortfolioSection>

        {/* Quick Links */}
        <PortfolioSection className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="https://github.com/devyk100/mochi" target="_blank" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Github className="w-5 h-5" />
                    <h3 className="font-semibold">Source Code</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Go CLI implementation repository
                  </p>
                </div>
              </Link>
              
              <div className="p-6 rounded-lg border bg-card">
                <div className="flex items-center gap-3 mb-2">
                  <Download className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Installation</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Available via GitHub releases and Go install
                </p>
              </div>
            </div>
        </PortfolioSection>

        {/* Project Overview */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Project Overview
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <div className="p-4 mb-6 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                <p className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-2">
                  🏗️ Single Repository CLI Tool
                </p>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Mochi is a single Go repository containing a complete CLI tool for competitive programming template management. Installation and usage instructions are available in the repository's README.
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Mochi is a lightweight command-line tool designed specifically for competitive programmers who need 
                quick access to code templates and boilerplate setups. Built with Go for speed and simplicity, 
                it helps streamline the process of starting new competitive programming problems.
              </p>
              <p className="leading-relaxed mb-4">
                The tool provides template management, quick file generation, and customizable configurations 
                that can be tailored to different competitive programming platforms and personal coding preferences. 
                It's designed to minimize setup time and maximize coding efficiency during contests.
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
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Go programming language
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    CLI framework (Cobra)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    File system operations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Template engine
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Template management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Quick file generation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Configuration system
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Cross-platform support
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-600" />
                  Template Management
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Pre-built C++ templates</li>
                  <li>• Custom template creation</li>
                  <li>• Template versioning</li>
                  <li>• Language-specific templates</li>
                  <li>• Template sharing</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  Quick Setup
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• One-command file generation</li>
                  <li>• Automatic directory creation</li>
                  <li>• Boilerplate code insertion</li>
                  <li>• Contest-specific setups</li>
                  <li>• Batch file creation</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-blue-600" />
                  CLI Interface
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Simple command structure</li>
                  <li>• Interactive prompts</li>
                  <li>• Help documentation</li>
                  <li>• Command aliases</li>
                  <li>• Tab completion</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-purple-600" />
                  Configuration
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• User preferences</li>
                  <li>• Default template settings</li>
                  <li>• Custom file extensions</li>
                  <li>• Platform-specific configs</li>
                  <li>• Environment variables</li>
                </ul>
              </div>
            </div>
        </PortfolioSection>

        {/* Usage Examples */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Terminal className="w-6 h-6" />
              Usage Examples
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Basic Commands</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`# Create a new competitive programming file
mochi new problem_name

# Use a specific template
mochi new problem_name --template advanced

# Create multiple files for a contest
mochi contest codeforces_round_123

# List available templates
mochi list

# Update templates
mochi update`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Template Structure</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Default C++ template
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    // Your code here
    
    return 0;
}

// Advanced template with common utilities
#include <bits/stdc++.h>
using namespace std;

#define ll long long
#define vi vector<int>
#define vll vector<long long>
#define pb push_back
#define all(x) x.begin(), x.end()

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    // Your code here
    
    return 0;
}`}
                  </pre>
                </div>
              </div>
            </div>
        </PortfolioSection>

        {/* Installation & Setup */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Download className="w-6 h-6" />
              Installation & Setup
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Go Install</h3>
                <div className="bg-muted rounded-lg p-4 mb-4">
                  <pre className="text-sm overflow-x-auto">
{`# Install via Go
go install github.com/devyk100/mochi@latest

# Verify installation
mochi --version`}
                  </pre>
                </div>
                <p className="text-sm text-muted-foreground">
                  Requires Go 1.19 or later installed on your system.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Manual Installation</h3>
                <div className="bg-muted rounded-lg p-4 mb-4">
                  <pre className="text-sm overflow-x-auto">
{`# Clone repository
git clone https://github.com/devyk100/mochi.git

# Build from source
cd mochi
go build -o mochi

# Add to PATH
sudo mv mochi /usr/local/bin/`}
                  </pre>
                </div>
                <p className="text-sm text-muted-foreground">
                  Build from source for the latest development features.
                </p>
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
              <Link href="https://github.com/devyk100/mochi" target="_blank" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Mochi Repository</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Complete Go CLI implementation with templates and configuration management
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    Go
                  </div>
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
