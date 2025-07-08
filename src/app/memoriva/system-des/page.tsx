import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-bg";
import { FadeInUp } from "@/components/ui/fade-in-up";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import ThemeToggle from "@/components/ui/theme-toggle";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Network, Server, Shield, Zap, Globe, Database, Brain } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memoriva - System Design Document | Yash Kumar Portfolio",
  description: "Comprehensive system design documentation for Memoriva - scalable RAG-based AI study assistant architecture.",
  keywords: ["Memoriva", "System Design", "RAG Architecture", "AI Scalability", "Vector Database", "Yash Kumar"],
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function MemorivaSystemDesignPage() {
  return (
    <>
      <AnimatedBackground />
      <ThemeToggle className="fixed top-3 md:right-1/12 lg:right-3/12 right-2 z-[9999]" />
      <ScrollProgress />
      
      <main className={cn("relative w-full overflow-x-hidden text-foreground flex items-center justify-center flex-col px-3", glassClass)}>
        
        {/* Navigation */}
        <PortfolioSection className="flex justify-between items-center">
          <div className="w-full m-2">
            <Link href="/memoriva">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Memoriva
              </Button>
            </Link>
          </div>
        </PortfolioSection>

        {/* Hero Section */}
        <PortfolioSection className="mt-10">
          <FadeInUp>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Memoriva System Design
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Scalable RAG-based AI Study Assistant Infrastructure
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
        API[Gin API Gateway]
        Auth[NextAuth Service]
    end
    
    subgraph "AI Processing Layer"
        RAG[RAG Service]
        LLM[LLM Service]
        Embedding[Embedding Service]
        Queue[Queue Service]
    end
    
    subgraph "External AI Services"
        OpenAI[OpenAI API]
        DeepSeek[DeepSeek API]
        VectorDB[Vector Database]
    end
    
    subgraph "Data Layer"
        PostgreSQL[(PostgreSQL)]
        Redis[(Redis Cache)]
        S3[S3 Storage]
    end
    
    subgraph "Infrastructure"
        Docker[Docker Containers]
        ECS[AWS ECS]
        Lambda[AWS Lambda]
    end
    
    Browser --> CDN
    Mobile --> CDN
    CDN --> ALB
    ALB --> Frontend
    Frontend --> API
    API --> Auth
    
    API --> RAG
    RAG --> LLM
    RAG --> Embedding
    RAG --> Queue
    
    LLM --> OpenAI
    LLM --> DeepSeek
    Embedding --> VectorDB
    
    API --> PostgreSQL
    Queue --> Redis
    API --> S3
    
    Docker --> ECS
    ECS --> Lambda`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* RAG System Architecture */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.2}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Brain className="w-6 h-6" />
              RAG System Architecture
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">RAG Pipeline Scalability</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Document Ingestion</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Async processing with queue system</li>
                      <li>• Parallel document chunking</li>
                      <li>• Batch embedding generation</li>
                      <li>• Progressive indexing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Vector Search Optimization</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Hierarchical navigable small world (HNSW)</li>
                      <li>• Approximate nearest neighbor search</li>
                      <li>• Index partitioning by user/session</li>
                      <li>• Caching frequent queries</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Performance Metrics</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// RAG Performance Targets
const ragMetrics = {
  // Document Processing
  ingestion: {
    throughput: "100 docs/min",
    latency: "< 30s per doc",
    chunkSize: "512-1024 tokens",
    overlap: "50 tokens"
  },
  
  // Vector Search
  retrieval: {
    queryLatency: "< 200ms",
    accuracy: "> 90%",
    recall: "> 85%",
    indexSize: "10M+ vectors"
  },
  
  // Generation
  synthesis: {
    responseTime: "< 3s",
    contextLength: "4k tokens",
    relevanceScore: "> 0.8",
    coherence: "> 90%"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Scalability Architecture */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.3}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Scalability & Performance Architecture
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Horizontal Scaling Strategy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Auto Scaling Components</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• ECS services with target tracking</li>
                      <li>• Queue-based worker scaling</li>
                      <li>• Database read replicas</li>
                      <li>• CDN edge caching</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Load Distribution</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Application Load Balancer</li>
                      <li>• Session-aware routing</li>
                      <li>• Geographic distribution</li>
                      <li>• Circuit breaker patterns</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Queue-Based Processing Architecture</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`sequenceDiagram
    participant User as User
    participant API as API Gateway
    participant Queue as Queue Service
    participant Worker1 as RAG Worker 1
    participant Worker2 as RAG Worker 2
    participant WorkerN as RAG Worker N
    participant VectorDB as Vector DB
    participant Cache as Redis Cache
    
    User->>API: Upload Document
    API->>Queue: Enqueue Processing Job
    
    par Parallel Processing
        Queue->>Worker1: Assign Job 1
        Queue->>Worker2: Assign Job 2
        Queue->>WorkerN: Assign Job N
    end
    
    Worker1->>VectorDB: Store Embeddings
    Worker1->>Cache: Cache Results
    Worker1->>Queue: Job Complete
    
    Queue->>API: All Jobs Complete
    API->>User: Processing Finished`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Data Architecture */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.4}>
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
                      <li>• Active user sessions</li>
                      <li>• Recent query results</li>
                      <li>• Embedding cache</li>
                      <li>• Processing job status</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Warm Data (PostgreSQL)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• User accounts & sessions</li>
                      <li>• Study session metadata</li>
                      <li>• RAG query history</li>
                      <li>• Analytics data</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Cold Data (S3)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Original documents</li>
                      <li>• Processed images</li>
                      <li>• Backup embeddings</li>
                      <li>• Audit logs</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Vector Database Architecture</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Vector Database Scaling Strategy
const vectorDBArchitecture = {
  // Indexing Strategy
  indexing: {
    algorithm: "HNSW",
    dimensions: 1536,
    efConstruction: 200,
    maxConnections: 16,
    partitioning: "user-based"
  },
  
  // Sharding Strategy
  sharding: {
    strategy: "hash-based",
    shardKey: "userId",
    replication: 3,
    consistency: "eventual"
  },
  
  // Performance Optimization
  optimization: {
    batchSize: 1000,
    parallelQueries: 10,
    cacheSize: "1GB",
    compressionRatio: 0.7
  },
  
  // Backup & Recovery
  backup: {
    frequency: "daily",
    retention: "30-days",
    crossRegion: true,
    pointInTime: true
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* AI Service Integration */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.5}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6" />
              AI Service Integration & Reliability
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Multi-Provider Strategy</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Primary Services</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• OpenAI GPT-4 for complex reasoning</li>
                      <li>• OpenAI text-embedding-3-small</li>
                      <li>• DeepSeek for cost-effective processing</li>
                      <li>• Fallback to local models</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Reliability Patterns</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Circuit breaker for API failures</li>
                      <li>• Exponential backoff with jitter</li>
                      <li>• Request timeout and retries</li>
                      <li>• Graceful degradation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Cost Optimization</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// AI Service Cost Management
const costOptimization = {
  // Request Routing
  routing: {
    simple: "DeepSeek API",
    complex: "OpenAI GPT-4",
    embeddings: "OpenAI text-embedding-3-small",
    fallback: "Local models"
  },
  
  // Caching Strategy
  caching: {
    embeddings: "30-day TTL",
    responses: "7-day TTL",
    hitRate: "> 70%",
    storage: "Redis + S3"
  },
  
  // Rate Limiting
  rateLimiting: {
    perUser: "100 req/hour",
    perSession: "20 req/hour",
    burst: "10 req/min",
    priority: "premium users"
  },
  
  // Monitoring
  monitoring: {
    costPerRequest: "< $0.01",
    monthlyBudget: "$1000",
    alerts: "80% threshold",
    optimization: "weekly review"
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
              Security & Privacy Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Data Protection Layers</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Data Encryption</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• TLS 1.3 for data in transit</li>
                      <li>• AES-256 for data at rest</li>
                      <li>• End-to-end encryption for sensitive data</li>
                      <li>• Key rotation every 90 days</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Access Control</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• OAuth 2.0 with PKCE</li>
                      <li>• JWT with short expiration</li>
                      <li>• Role-based access control (RBAC)</li>
                      <li>• Multi-factor authentication</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Privacy Compliance</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• GDPR compliance framework</li>
                      <li>• Data anonymization</li>
                      <li>• Right to be forgotten</li>
                      <li>• Audit trail logging</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Security Monitoring</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Security Monitoring Stack
const securityMonitoring = {
  // Threat Detection
  detection: {
    tool: "AWS GuardDuty",
    alerts: "real-time",
    ml: "anomaly detection",
    integration: "SIEM"
  },
  
  // Vulnerability Management
  vulnerability: {
    scanning: "daily",
    dependencies: "Snyk",
    containers: "Trivy",
    compliance: "SOC 2"
  },
  
  // Incident Response
  incident: {
    playbooks: "automated",
    escalation: "PagerDuty",
    forensics: "CloudTrail",
    recovery: "< 4h RTO"
  },
  
  // Compliance
  compliance: {
    framework: "GDPR + SOC 2",
    audits: "quarterly",
    certifications: "ISO 27001",
    reporting: "automated"
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
              <Server className="w-6 h-6" />
              Deployment & Infrastructure Architecture
            </h2>
            <div className="bg-card rounded-lg p-6 border">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Container Orchestration</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`graph LR
    subgraph "CI/CD Pipeline"
        Git[GitHub]
        Build[Docker Build]
        Test[Integration Tests]
        Security[Security Scan]
    end
    
    subgraph "Container Registry"
        ECR[AWS ECR]
    end
    
    subgraph "Orchestration"
        ECS[AWS ECS Fargate]
        ALB[Application Load Balancer]
        Service[ECS Service]
    end
    
    subgraph "Environments"
        Dev[Development]
        Staging[Staging]
        Prod[Production]
    end
    
    Git --> Build
    Build --> Test
    Test --> Security
    Security --> ECR
    
    ECR --> ECS
    ECS --> Service
    ALB --> Service
    
    Service --> Dev
    Service --> Staging
    Service --> Prod`}
                  </pre>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Infrastructure as Code</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Terraform for AWS resources</li>
                    <li>• Docker Compose for local development</li>
                    <li>• ECS task definitions</li>
                    <li>• Environment-specific configurations</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Monitoring & Observability</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• CloudWatch for metrics and logs</li>
                    <li>• X-Ray for distributed tracing</li>
                    <li>• Custom dashboards for RAG metrics</li>
                    <li>• Automated alerting and escalation</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Footer */}
        <PortfolioSection className="mt-10 mb-10">
          <div className="text-center w-full text-sm p-2 font-light select-none">
            <Link href="/memoriva" className="text-primary hover:underline">
              ← Back to Memoriva Project
            </Link>
          </div>
        </PortfolioSection>

      </main>
    </>
  );
}
