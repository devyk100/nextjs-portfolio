import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-bg";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import ThemeToggle from "@/components/ui/theme-toggle";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, FileText, Code, Database, Cloud, Layers, Brain } from "lucide-react";
import { Metadata } from "next";
import { MermaidDiagram } from "@/components/ui/mermaid-diagram";

export const metadata: Metadata = {
  title: "Memoriva - Software Design Document | Yash Kumar Portfolio",
  description: "Detailed software design documentation for Memoriva - AI-powered study companion with RAG capabilities.",
  keywords: ["Memoriva", "Software Design", "RAG", "AI Study Assistant", "Vector Database", "Yash Kumar"],
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function MemorivaSoftwareDesignPage() {
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
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Memoriva Software Design
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              AI-Powered Study Assistant Architecture & Component Design
            </p>
          </div>
        </PortfolioSection>

        {/* Architecture Overview */}
        <PortfolioSection className="mt-10">
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
        Editor[TipTap Editor]
        Auth[NextAuth.js]
        Query[TanStack Query]
    end
    
    subgraph "Backend Services"
        API[Gin REST API]
        RAG[RAG Service]
        LLM[LLM Service]
        Embedding[Embedding Service]
        Queue[Queue Service]
    end
    
    subgraph "AI & ML Layer"
        OpenAI[OpenAI API]
        DeepSeek[DeepSeek API]
        Embeddings[Text Embeddings]
        VectorDB[Vector Database]
    end
    
    subgraph "Data Layer"
        PostgreSQL[(PostgreSQL)]
        S3[AWS S3]
        Redis[(Redis Cache)]
    end
    
    subgraph "Infrastructure"
        Docker[Docker Containers]
        AWS[AWS Services]
    end
    
    UI --> Editor
    UI --> Auth
    UI --> Query
    Query --> API
    
    API --> RAG
    RAG --> LLM
    RAG --> Embedding
    RAG --> Queue
    
    LLM --> OpenAI
    LLM --> DeepSeek
    Embedding --> OpenAI
    Embedding --> VectorDB
    
    API --> PostgreSQL
    API --> S3
    Queue --> Redis
    
    Docker --> AWS`}
              />
            </div>
          </div>
        </PortfolioSection>

        {/* Frontend Architecture */}
        <PortfolioSection className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Frontend Architecture
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-4">Component Structure</h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded">
                  <h4 className="font-medium text-sm">Study Session Components</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    <li>• TipTap Rich Text Editor</li>
                    <li>• Image Upload & Processing</li>
                    <li>• Study Session Management</li>
                    <li>• Progress Tracking</li>
                  </ul>
                </div>
                <div className="p-3 bg-muted rounded">
                  <h4 className="font-medium text-sm">AI Integration Layer</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    <li>• RAG Query Interface</li>
                    <li>• AI Response Display</li>
                    <li>• Context Management</li>
                    <li>• Real-time Processing</li>
                  </ul>
                </div>
                <div className="p-3 bg-muted rounded">
                  <h4 className="font-medium text-sm">Authentication & State</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    <li>• NextAuth.js Integration</li>
                    <li>• User Session Management</li>
                    <li>• TanStack Query Caching</li>
                    <li>• Optimistic Updates</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-4">State Management</h3>
              <div className="bg-muted rounded-lg p-4">
                <pre className="text-sm overflow-x-auto">
{`// TanStack Query Structure
interface StudySessionStore {
  // Session State
  sessions: StudySession[]
  currentSession: StudySession | null
  
  // Processing State
  isProcessing: boolean
  processingStatus: ProcessingStatus
  
  // AI State
  ragResponses: RAGResponse[]
  isQuerying: boolean
  
  // Upload State
  uploadProgress: number
  uploadedFiles: UploadedFile[]
}

// Prisma Schema Types
interface StudySession {
  id: string
  title: string
  content: string
  userId: string
  status: SessionStatus
  createdAt: Date
  updatedAt: Date
  images: SessionImage[]
  ragResults: RAGResult[]
}`}
                </pre>
              </div>
            </div>
          </div>
        </PortfolioSection>

        {/* RAG Architecture */}
        <PortfolioSection className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Brain className="w-6 h-6" />
            RAG (Retrieval-Augmented Generation) Architecture
          </h2>
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-4">RAG Pipeline Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Document Processing</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Text extraction from images</li>
                    <li>• Content chunking strategies</li>
                    <li>• Metadata enrichment</li>
                    <li>• Quality filtering</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Vector Embeddings</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• OpenAI text-embedding-3-small</li>
                    <li>• Semantic similarity search</li>
                    <li>• Vector indexing optimization</li>
                    <li>• Embedding caching</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Retrieval System</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Similarity-based retrieval</li>
                    <li>• Context ranking algorithms</li>
                    <li>• Multi-modal search</li>
                    <li>• Result relevance scoring</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Generation Pipeline</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Context injection</li>
                    <li>• Prompt engineering</li>
                    <li>• Response synthesis</li>
                    <li>• Quality validation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-4">RAG Processing Flow</h3>
              <MermaidDiagram
                chart={`sequenceDiagram
    participant User as User
    participant Frontend as Next.js Frontend
    participant API as Gin API
    participant Queue as Queue Service
    participant RAG as RAG Service
    participant Embedding as Embedding Service
    participant LLM as LLM Service
    participant VectorDB as Vector Database
    
    User->>Frontend: Upload Study Material
    Frontend->>API: POST /study-sessions/process
    API->>Queue: Queue Processing Job
    Queue->>RAG: Process Document
    
    RAG->>Embedding: Generate Embeddings
    Embedding->>VectorDB: Store Vectors
    RAG->>LLM: Generate Study Insights
    
    LLM->>RAG: Return Insights
    RAG->>Queue: Job Complete
    Queue->>API: Update Status
    API->>Frontend: Processing Complete
    Frontend->>User: Display Results`}
              />
            </div>
          </div>
        </PortfolioSection>

        {/* Backend Architecture */}
        <PortfolioSection className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Database className="w-6 h-6" />
            Backend Architecture
          </h2>
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-4">Service Architecture</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">API Layer (Gin)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• RESTful API endpoints</li>
                    <li>• Authentication middleware</li>
                    <li>• CORS configuration</li>
                    <li>• Request validation</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Queue Service</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Concurrent job processing</li>
                    <li>• Worker pool management</li>
                    <li>• Job status tracking</li>
                    <li>• Error handling & retries</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">RAG Service</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Document processing pipeline</li>
                    <li>• Vector similarity search</li>
                    <li>• Context retrieval</li>
                    <li>• Response generation</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Storage Services</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• S3 file management</li>
                    <li>• PostgreSQL operations</li>
                    <li>• Vector database queries</li>
                    <li>• Cache management</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-4">Service Integration</h3>
              <div className="bg-muted rounded-lg p-4">
                <pre className="text-sm overflow-x-auto">
{`// Go Service Structure
type Services struct {
    Database    *DatabaseService
    LLM         *LLMService
    Embedding   *EmbeddingService
    RAG         *RAGService
    S3          *S3Service
    Queue       *QueueService
}

type RAGService struct {
    db          *DatabaseService
    llm         *LLMService
    embedding   *EmbeddingService
    vectorDB    VectorDatabase
}

type QueueService struct {
    workers     int
    jobs        chan Job
    results     chan Result
    ragService  *RAGService
    dbService   *DatabaseService
}`}
                </pre>
              </div>
            </div>
          </div>
        </PortfolioSection>

        {/* Data Models */}
        <PortfolioSection className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Data Models & Schemas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-4">Database Schema (PostgreSQL)</h3>
              <div className="bg-muted rounded-lg p-4">
                <pre className="text-sm overflow-x-auto">
{`-- Prisma Schema
model User {
  id            String         @id @default(cuid())
  email         String         @unique
  name          String?
  image         String?
  studySessions StudySession[]
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt
}

model StudySession {
  id          String         @id @default(cuid())
  title       String
  content     String?
  status      SessionStatus  @default(PENDING)
  userId      String
  user        User           @relation(fields: [userId], references: [id])
  images      SessionImage[]
  ragResults  RAGResult[]
  createdAt   DateTime       @default(now())
  updatedAt   DateTime       @updatedAt
}

model SessionImage {
  id              String       @id @default(cuid())
  filename        String
  s3Key           String
  extractedText   String?
  studySessionId  String
  studySession    StudySession @relation(fields: [studySessionId], references: [id])
  createdAt       DateTime     @default(now())
}

model RAGResult {
  id              String       @id @default(cuid())
  query           String
  response        String
  context         String[]
  confidence      Float?
  studySessionId  String
  studySession    StudySession @relation(fields: [studySessionId], references: [id])
  createdAt       DateTime     @default(now())
}`}
                </pre>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-4">Vector Database Schema</h3>
              <div className="bg-muted rounded-lg p-4">
                <pre className="text-sm overflow-x-auto">
{`// Vector Database Structure
interface DocumentChunk {
  id: string
  content: string
  embedding: number[]
  metadata: {
    sessionId: string
    userId: string
    source: string
    chunkIndex: number
    timestamp: string
  }
}

// API Response Types
interface RAGResponse {
  query: string
  answer: string
  sources: Source[]
  confidence: number
  processingTime: number
}

interface Source {
  content: string
  similarity: number
  metadata: ChunkMetadata
}

// Processing Job Types
interface ProcessingJob {
  id: string
  sessionId: string
  type: 'DOCUMENT_PROCESSING' | 'RAG_QUERY'
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED'
  data: any
  createdAt: Date
  completedAt?: Date
  error?: string
}`}
                </pre>
              </div>
            </div>
          </div>
        </PortfolioSection>

        {/* AI Integration */}
        <PortfolioSection className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Cloud className="w-6 h-6" />
            AI Integration & Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-4">AI Service Integration</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <div>
                    <strong>OpenAI Integration:</strong> Text embeddings and GPT models for content understanding
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <div>
                    <strong>DeepSeek API:</strong> Alternative LLM for cost-effective processing
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                  <div>
                    <strong>Vector Database:</strong> Efficient similarity search and retrieval
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <div>
                    <strong>OCR Processing:</strong> Text extraction from uploaded images
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
                    <strong>Concurrent Processing:</strong> Multi-worker queue system for parallel job execution
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <div>
                    <strong>Embedding Caching:</strong> Redis caching for frequently accessed embeddings
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                  <div>
                    <strong>Chunking Strategy:</strong> Optimized text chunking for better retrieval accuracy
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <div>
                    <strong>Response Streaming:</strong> Real-time status updates during processing
                  </div>
                </li>
              </ul>
            </div>
          </div>
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
