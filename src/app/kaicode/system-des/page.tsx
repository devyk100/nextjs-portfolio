import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-bg";
import { FadeInUp } from "@/components/ui/fade-in-up";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import ThemeToggle from "@/components/ui/theme-toggle";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Network, Server, Shield, Zap, Globe, Database } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaicode - System Design Document | Yash Kumar Portfolio",
  description: "Comprehensive system design documentation for Kaicode - scalable architecture for real-time collaborative coding platform.",
  keywords: ["Kaicode", "System Design", "Scalability", "Real-time Architecture", "Distributed Systems", "Yash Kumar"],
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function KaicodeSystemDesignPage() {
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
                Kaicode System Design
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Scalable Infrastructure & Distributed System Architecture
              </p>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* System Overview */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.1}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Network className="w-6 h-6" />
              System Architecture Overview
            </h2>
            <div className="bg-card rounded-lg p-6 border">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">High-Level System Design</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`graph TB
    subgraph "Client Layer"
        Browser[Web Browser]
        Mobile[Mobile App]
    end
    
    subgraph "CDN & Load Balancer"
        CDN[CloudFront CDN]
        ALB[Application Load Balancer]
    end
    
    subgraph "Application Layer"
        Frontend[Next.js Frontend]
        API[API Gateway]
        Auth[Auth Service]
    end
    
    subgraph "Core Services"
        YJS[Y.js Sync Service]
        Collab[Collaboration Service]
        Judge[Code Execution Service]
        AI[AI Completion Service]
    end
    
    subgraph "Message Queue"
        SQS[AWS SQS]
        SNS[AWS SNS]
    end
    
    subgraph "Data Layer"
        RDS[PostgreSQL RDS]
        Redis[ElastiCache Redis]
        S3[S3 Storage]
    end
    
    subgraph "Execution Environment"
        Lambda[AWS Lambda]
        ECS[ECS Containers]
        Docker[Docker Runtime]
    end
    
    Browser --> CDN
    Mobile --> CDN
    CDN --> ALB
    ALB --> Frontend
    Frontend --> API
    API --> Auth
    API --> YJS
    API --> Collab
    API --> Judge
    API --> AI
    
    Judge --> SQS
    SQS --> Lambda
    Lambda --> ECS
    ECS --> Docker
    
    YJS --> Redis
    Collab --> Redis
    Auth --> RDS
    Judge --> RDS
    
    AI --> S3
    Lambda --> SNS`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Scalability Design */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.2}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Scalability & Performance Architecture
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Horizontal Scaling Strategy</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Auto Scaling Groups</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Frontend servers scale based on CPU/memory</li>
                      <li>• WebSocket servers scale based on connection count</li>
                      <li>• Code execution workers scale based on queue depth</li>
                      <li>• Target tracking scaling policies</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Load Distribution</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Application Load Balancer with health checks</li>
                      <li>• Session affinity for WebSocket connections</li>
                      <li>• Geographic load balancing via Route 53</li>
                      <li>• Circuit breaker pattern for fault tolerance</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Performance Optimizations</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Performance Metrics & Targets
const performanceTargets = {
  // Real-time Collaboration
  documentSync: {
    latency: "< 50ms",
    throughput: "10k ops/sec",
    consistency: "eventual"
  },
  
  // Code Execution
  codeExecution: {
    coldStart: "< 2s",
    warmStart: "< 500ms",
    concurrent: "1000 jobs",
    timeout: "30s"
  },
  
  // AI Completions
  aiCompletions: {
    responseTime: "< 1s",
    cacheHitRate: "> 80%",
    accuracy: "> 85%"
  },
  
  // System Availability
  availability: {
    uptime: "99.9%",
    rto: "< 4h",
    rpo: "< 1h"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Real-time Architecture */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.3}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6" />
              Real-time Collaboration Architecture
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">WebSocket Infrastructure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Connection Management</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sticky sessions for WebSocket connections</li>
                      <li>• Connection pooling and reuse</li>
                      <li>• Automatic reconnection with exponential backoff</li>
                      <li>• Heartbeat mechanism for connection health</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Message Broadcasting</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Redis pub/sub for cross-server messaging</li>
                      <li>• Message deduplication and ordering</li>
                      <li>• Selective broadcasting based on room membership</li>
                      <li>• Message compression for large payloads</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">CRDT Synchronization Flow</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`sequenceDiagram
    participant C1 as Client 1
    participant WS1 as WebSocket Server 1
    participant Redis as Redis Pub/Sub
    participant WS2 as WebSocket Server 2
    participant C2 as Client 2
    
    C1->>WS1: Y.js Operation
    WS1->>WS1: Apply Operation Locally
    WS1->>Redis: Broadcast Operation
    Redis->>WS2: Forward Operation
    WS2->>C2: Send Operation
    C2->>C2: Apply Operation
    
    Note over C1,C2: Conflict-free merge via Y.js CRDT
    
    C2->>WS2: Concurrent Operation
    WS2->>WS2: Apply Operation Locally
    WS2->>Redis: Broadcast Operation
    Redis->>WS1: Forward Operation
    WS1->>C1: Send Operation
    C1->>C1: Merge Operations`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Code Execution Infrastructure */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.4}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Server className="w-6 h-6" />
              Code Execution Infrastructure
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Containerized Execution</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Security Isolation</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Docker containers with restricted privileges</li>
                      <li>• Network isolation and firewall rules</li>
                      <li>• Resource limits (CPU, memory, disk)</li>
                      <li>• Execution time limits and monitoring</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Container Orchestration</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• ECS Fargate for serverless containers</li>
                      <li>• Pre-warmed container pools</li>
                      <li>• Language-specific base images</li>
                      <li>• Automatic cleanup and garbage collection</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Execution Pipeline</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Execution Flow Architecture
const executionPipeline = {
  stages: [
    {
      name: "Request Validation",
      duration: "< 10ms",
      checks: ["syntax", "security", "limits"]
    },
    {
      name: "Queue Processing",
      duration: "< 100ms",
      components: ["SQS", "DLQ", "priority"]
    },
    {
      name: "Container Allocation",
      duration: "< 1s",
      resources: ["CPU", "memory", "network"]
    },
    {
      name: "Code Execution",
      duration: "< 30s",
      monitoring: ["stdout", "stderr", "metrics"]
    },
    {
      name: "Result Processing",
      duration: "< 100ms",
      outputs: ["result", "logs", "metrics"]
    }
  ],
  
  failureHandling: {
    retries: 3,
    backoff: "exponential",
    deadLetterQueue: true,
    alerting: "real-time"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Data Architecture */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.5}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Database className="w-6 h-6" />
              Data Architecture & Storage Strategy
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Multi-tier Storage Strategy</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Hot Data (Redis)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Active sessions</li>
                      <li>• User presence</li>
                      <li>• Real-time cursors</li>
                      <li>• Cache frequently accessed data</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Warm Data (PostgreSQL)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• User accounts</li>
                      <li>• Project metadata</li>
                      <li>• Execution history</li>
                      <li>• Analytics data</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Cold Data (S3)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Code snapshots</li>
                      <li>• Execution logs</li>
                      <li>• Backup data</li>
                      <li>• Analytics archives</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Data Consistency & Replication</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Data Consistency Strategy
const dataStrategy = {
  // Real-time collaboration data
  crdt: {
    consistency: "eventual",
    conflictResolution: "automatic",
    storage: "memory + redis",
    replication: "multi-region"
  },
  
  // User and session data
  transactional: {
    consistency: "strong",
    isolation: "read-committed",
    storage: "postgresql",
    backup: "point-in-time"
  },
  
  // Analytics and logs
  analytical: {
    consistency: "eventual",
    partitioning: "time-based",
    storage: "s3 + redshift",
    retention: "7-years"
  },
  
  // Disaster recovery
  backup: {
    rto: "< 4h",
    rpo: "< 1h",
    strategy: "cross-region",
    testing: "monthly"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Security Architecture */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.6}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Security & Compliance Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Security Layers</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Network Security</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• VPC with private subnets</li>
                      <li>• WAF with DDoS protection</li>
                      <li>• TLS 1.3 encryption</li>
                      <li>• Network ACLs and security groups</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Application Security</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• JWT authentication with refresh tokens</li>
                      <li>• RBAC authorization model</li>
                      <li>• Input validation and sanitization</li>
                      <li>• Rate limiting and throttling</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Container Security</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Minimal base images</li>
                      <li>• Non-root user execution</li>
                      <li>• Resource constraints</li>
                      <li>• Runtime security monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Monitoring & Observability</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Observability Stack
const monitoring = {
  metrics: {
    system: "CloudWatch",
    custom: "Prometheus",
    dashboards: "Grafana",
    alerts: "PagerDuty"
  },
  
  logging: {
    aggregation: "CloudWatch Logs",
    analysis: "ElasticSearch",
    retention: "30-days",
    structured: "JSON"
  },
  
  tracing: {
    distributed: "X-Ray",
    sampling: "adaptive",
    correlation: "trace-id",
    latency: "p99 < 100ms"
  },
  
  security: {
    scanning: "GuardDuty",
    compliance: "Config",
    secrets: "Secrets Manager",
    audit: "CloudTrail"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Deployment Architecture */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.7}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Deployment & CI/CD Architecture
            </h2>
            <div className="bg-card rounded-lg p-6 border">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Deployment Pipeline</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`graph LR
    subgraph "Source Control"
        Git[GitHub Repository]
        PR[Pull Request]
    end
    
    subgraph "CI Pipeline"
        Build[Build & Test]
        Security[Security Scan]
        Quality[Quality Gates]
    end
    
    subgraph "CD Pipeline"
        Staging[Staging Deploy]
        E2E[E2E Tests]
        Approval[Manual Approval]
        Production[Production Deploy]
    end
    
    subgraph "Environments"
        Dev[Development]
        Stage[Staging]
        Prod[Production]
    end
    
    Git --> Build
    PR --> Build
    Build --> Security
    Security --> Quality
    Quality --> Staging
    Staging --> E2E
    E2E --> Approval
    Approval --> Production
    
    Staging --> Stage
    Production --> Prod
    
    Dev -.-> Stage
    Stage -.-> Prod`}
                  </pre>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Blue-Green Deployment</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Zero-downtime deployments</li>
                    <li>• Instant rollback capability</li>
                    <li>• Health check validation</li>
                    <li>• Traffic shifting strategies</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Infrastructure as Code</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Terraform for AWS resources</li>
                    <li>• Helm charts for Kubernetes</li>
                    <li>• GitOps workflow</li>
                    <li>• Environment parity</li>
                  </ul>
                </div>
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
