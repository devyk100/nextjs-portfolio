import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-bg";
import { FadeInUp } from "@/components/ui/fade-in-up";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import ThemeToggle from "@/components/ui/theme-toggle";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, FileText, Code, Database, Cloud, Layers } from "lucide-react";
import { Metadata } from "next";
import { MermaidDiagram } from "@/components/ui/mermaid-diagram";

export const metadata: Metadata = {
  title: "Kaicode - Software Design Document | Yash Kumar Portfolio",
  description: "Detailed software design documentation for Kaicode - AI-powered collaborative coding platform with real-time editing and code execution.",
  keywords: ["Kaicode", "Software Design", "Architecture", "Real-time Collaboration", "Code Execution", "Yash Kumar"],
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function KaicodeSoftwareDesignPage() {
  return (
    <>
      <AnimatedBackground />
      <ThemeToggle className="fixed top-3 md:right-1/12 lg:right-3/12 right-2 z-[9999]" />
      <ScrollProgress />
      
      <main className={cn("relative w-full overflow-x-hidden text-foreground flex items-center justify-center flex-col px-3", glassClass)}>
        
        {/* Navigation */}
        <PortfolioSection className="flex justify-between items-center">
          <div className="w-full m-2">
            <Link href="/kaicode">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Kaicode
              </Button>
            </Link>
          </div>
        </PortfolioSection>

        {/* Hero Section */}
        <PortfolioSection className="mt-10">
          <FadeInUp>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Kaicode Software Design
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Comprehensive Software Architecture & Component Design
              </p>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Architecture Overview */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.1}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Layers className="w-6 h-6" />
              System Architecture Overview
            </h2>
            <div className="bg-card rounded-lg p-6 border">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">High-Level Architecture</h3>
                <MermaidDiagram
                  chart={`graph TB
    subgraph "Frontend Layer"
        UI[Next.js UI]
        Monaco[Monaco Editor]
        YJS[Y.js CRDT]
        WS_Client[WebSocket Client]
    end
    
    subgraph "Backend Services"
        YJS_Server[Y.js WebSocket Server]
        Sync_Server[Sync WebSocket Server]
        Judge[Code Judge Service]
        Orchestrator[Job Orchestrator]
    end
    
    subgraph "Infrastructure"
        Redis[(Redis Cache)]
        PostgreSQL[(PostgreSQL DB)]
        SQS[AWS SQS Queue]
        Docker[Docker Containers]
    end
    
    subgraph "External Services"
        DeepSeek[DeepSeek LLM API]
        AWS[AWS Lambda/EC2]
    end
    
    UI --> Monaco
    Monaco --> YJS
    YJS --> WS_Client
    WS_Client --> YJS_Server
    WS_Client --> Sync_Server
    
    Sync_Server --> Redis
    Sync_Server --> PostgreSQL
    
    Judge --> Orchestrator
    Orchestrator --> SQS
    SQS --> Docker
    
    UI --> DeepSeek
    Docker --> AWS`}
                  className="w-full"
                />
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Frontend Architecture */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.2}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Frontend Architecture
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Component Structure</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Editor Components</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Monaco Editor Integration</li>
                      <li>• Y.js Provider for CRDT</li>
                      <li>• Multi-cursor Management</li>
                      <li>• Syntax Highlighting</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Collaboration Layer</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Real-time Document Sync</li>
                      <li>• User Presence Indicators</li>
                      <li>• Cursor Position Sharing</li>
                      <li>• Conflict Resolution</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">AI Integration</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Ghost Text Completions</li>
                      <li>• Context-aware Suggestions</li>
                      <li>• DeepSeek API Integration</li>
                      <li>• Inline Code Generation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">State Management</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Zustand Store Structure
interface EditorStore {
  // Document State
  document: Y.Doc
  provider: WebsocketProvider
  
  // User State
  currentUser: User
  connectedUsers: User[]
  
  // Editor State
  editorInstance: monaco.editor
  language: string
  theme: string
  
  // AI State
  completions: Completion[]
  isGenerating: boolean
  
  // Execution State
  output: string
  isRunning: boolean
  executionHistory: Execution[]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Backend Architecture */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.3}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Database className="w-6 h-6" />
              Backend Architecture
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Service Architecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Y.js WebSocket Server</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Document synchronization</li>
                      <li>• CRDT operations handling</li>
                      <li>• Real-time collaboration</li>
                      <li>• Connection management</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Sync Server</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• User authentication</li>
                      <li>• Session management</li>
                      <li>• Presence tracking</li>
                      <li>• Cursor synchronization</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Judge Service</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Code execution orchestration</li>
                      <li>• Docker container management</li>
                      <li>• Security sandboxing</li>
                      <li>• Result processing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Orchestrator</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Job queue management</li>
                      <li>• Worker coordination</li>
                      <li>• Load balancing</li>
                      <li>• Failure handling</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Code Execution Pipeline</h3>
                <MermaidDiagram
                  chart={`sequenceDiagram
    participant UI as Frontend
    participant Judge as Judge Service
    participant Orch as Orchestrator
    participant SQS as AWS SQS
    participant Docker as Container
    
    UI->>Judge: Execute Code Request
    Judge->>Orch: Create Job
    Orch->>SQS: Queue Job
    SQS->>Docker: Spawn Container
    Docker->>Docker: Execute Code
    Docker->>SQS: Return Result
    SQS->>Orch: Job Complete
    Orch->>Judge: Result Ready
    Judge->>UI: Execution Result`}
                  className="w-full"
                />
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Data Models */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.4}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Data Models & Schemas
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Database Schema</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`-- Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  username VARCHAR(100),
  avatar_url TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Sessions Table
CREATE TABLE sessions (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  language VARCHAR(50),
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Executions Table
CREATE TABLE executions (
  id UUID PRIMARY KEY,
  session_id UUID REFERENCES sessions(id),
  code TEXT,
  output TEXT,
  status VARCHAR(50),
  executed_at TIMESTAMP
);`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">API Models</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// TypeScript Interfaces
interface User {
  id: string
  email: string
  username: string
  avatarUrl?: string
  isOnline: boolean
  cursor?: CursorPosition
}

interface Session {
  id: string
  name: string
  language: string
  createdBy: string
  participants: User[]
  document: Y.Doc
}

interface ExecutionJob {
  id: string
  sessionId: string
  code: string
  language: string
  status: 'pending' | 'running' | 'completed' | 'failed'
  output?: string
  error?: string
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Security & Performance */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.5}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Cloud className="w-6 h-6" />
              Security & Performance Considerations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Security Measures</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Sandboxed Execution:</strong> All code runs in isolated Docker containers with resource limits
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Authentication:</strong> JWT-based authentication with session management
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Input Validation:</strong> Comprehensive validation of all user inputs and code
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Rate Limiting:</strong> API rate limiting and execution time constraints
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Performance Optimizations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <div>
                      <strong>CRDT Efficiency:</strong> Y.js provides efficient conflict-free replicated data types
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Connection Pooling:</strong> WebSocket connection pooling and management
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Caching Strategy:</strong> Redis caching for session data and user presence
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Queue Management:</strong> AWS SQS for reliable job processing and scaling
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Footer */}
        <PortfolioSection className="mt-10 mb-10">
          <div className="text-center w-full text-sm p-2 font-light select-none">
            <Link href="/kaicode" className="text-primary hover:underline">
              ← Back to Kaicode Project
            </Link>
          </div>
        </PortfolioSection>

      </main>
    </>
  );
}
