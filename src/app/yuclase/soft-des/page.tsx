import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-bg";
import { FadeInUp } from "@/components/ui/fade-in-up";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import ThemeToggle from "@/components/ui/theme-toggle";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, FileText, Code, Database, Network, Layers, Zap } from "lucide-react";
import { Metadata } from "next";
import { MermaidDiagram } from "@/components/ui/mermaid-diagram";

export const metadata: Metadata = {
  title: "Yuclase - Software Design Document | Yash Kumar Portfolio",
  description: "Detailed software design documentation for Yuclase - high-performance message queue service built in Go.",
  keywords: ["Yuclase", "Software Design", "Message Queue", "Go", "Append-Only Log", "Yash Kumar"],
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function YuclaseSoftwareDesignPage() {
  return (
    <>
      <AnimatedBackground />
      <ThemeToggle className="fixed top-3 md:right-1/12 lg:right-3/12 right-2 z-[9999]" />
      <ScrollProgress />
      
      <main className={cn("relative w-full overflow-x-hidden text-foreground flex items-center justify-center flex-col px-3", glassClass)}>
        
        {/* Navigation */}
        <PortfolioSection className="flex justify-between items-center">
          <div className="w-full m-2">
            <Link href="/yuclase">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Yuclase
              </Button>
            </Link>
          </div>
        </PortfolioSection>

        {/* Hero Section */}
        <PortfolioSection className="mt-10">
          <FadeInUp>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Yuclase Software Design
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                High-Performance Message Queue Architecture & Component Design
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
    subgraph "Client Layer"
        CLI[CLI Client]
        TSClient[TypeScript Client]
        GoClient[Go Client]
    end
    
    subgraph "Network Layer"
        TCPServer[TCP Server]
        Protocol[RESP Protocol]
        ConnPool[Connection Pool]
    end
    
    subgraph "Queue Management"
        QueueManager[Queue Manager]
        TopicManager[Topic Manager]
        ConsumerTracker[Consumer Tracker]
    end
    
    subgraph "Storage Engine"
        AppendLog[Append-Only Log]
        IndexEngine[Index Engine]
        SegmentManager[Segment Manager]
    end
    
    subgraph "Persistence Layer"
        LogFiles[(Log Files)]
        IndexFiles[(Index Files)]
        ConsumerCatalog[(Consumer Catalog)]
    end
    
    CLI --> TCPServer
    TSClient --> TCPServer
    GoClient --> TCPServer
    
    TCPServer --> Protocol
    Protocol --> ConnPool
    ConnPool --> QueueManager
    
    QueueManager --> TopicManager
    QueueManager --> ConsumerTracker
    
    TopicManager --> AppendLog
    AppendLog --> IndexEngine
    IndexEngine --> SegmentManager
    
    SegmentManager --> LogFiles
    IndexEngine --> IndexFiles
    ConsumerTracker --> ConsumerCatalog`}
                />
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Core Components */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.2}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Core Component Architecture
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Storage Engine Components</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Append-Only Log</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Sequential write optimization</li>
                      <li>• Message format: [timestamp][size][data]</li>
                      <li>• Atomic write operations</li>
                      <li>• Configurable sync intervals</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Segment Management</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Log file segmentation</li>
                      <li>• Configurable segment size</li>
                      <li>• Automatic cleanup & retention</li>
                      <li>• Efficient storage utilization</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Index Engine</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Optional message indexing</li>
                      <li>• Fast random access</li>
                      <li>• Configurable index intervals</li>
                      <li>• Memory-efficient design</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Queue Management</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Go Component Structure
type QueueManager struct {
    topics    map[string]*Topic
    consumers map[string]*ConsumerCatalog
    storage   *StorageEngine
    config    *Config
    mu        sync.RWMutex
}

type Topic struct {
    name      string
    log       *AppendOnlyLog
    index     *IndexEngine
    segments  *SegmentManager
    stats     *TopicStats
}

type ConsumerCatalog struct {
    offsets   map[string]int64
    lastSeen  map[string]time.Time
    mu        sync.RWMutex
}

type StorageEngine struct {
    dataDir   string
    segSize   int64
    syncInt   time.Duration
    retention time.Duration
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Network Protocol Design */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.3}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Network className="w-6 h-6" />
              Network Protocol & Communication
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">RESP Protocol Implementation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Command Structure</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Redis-like protocol (RESP)</li>
                      <li>• Text-based command format</li>
                      <li>• Simple request-response model</li>
                      <li>• Error handling & status codes</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Connection Management</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• TCP socket server</li>
                      <li>• Concurrent client handling</li>
                      <li>• Connection pooling</li>
                      <li>• Graceful shutdown</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Command Processing Flow</h3>
                <MermaidDiagram
                  chart={`sequenceDiagram
    participant Client as Client
    participant Server as TCP Server
    participant Protocol as RESP Handler
    participant Queue as Queue Manager
    participant Storage as Storage Engine
    
    Client->>Server: TCP Connection
    Server->>Protocol: Parse Command
    
    alt ENQUEUE Command
        Protocol->>Queue: Enqueue Message
        Queue->>Storage: Append to Log
        Storage->>Queue: Return Offset
        Queue->>Protocol: Success Response
    else LISTEN Command
        Protocol->>Queue: Get Messages
        Queue->>Storage: Read from Offset
        Storage->>Queue: Return Messages
        Queue->>Protocol: Message Array
    else OFFSET Command
        Protocol->>Queue: Get/Set Offset
        Queue->>Storage: Update Consumer Catalog
        Storage->>Queue: Confirm Update
        Queue->>Protocol: Offset Response
    end
    
    Protocol->>Server: Format Response
    Server->>Client: Send Response`}
                />
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Storage Design */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.4}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Database className="w-6 h-6" />
              Storage Engine Design
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Append-Only Log Architecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Log File Format</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 8-byte timestamp (Unix nanoseconds)</li>
                      <li>• 4-byte message size (big-endian)</li>
                      <li>• Variable-length message data</li>
                      <li>• Sequential write optimization</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Segmentation Strategy</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Configurable segment size (1MB default)</li>
                      <li>• Automatic segment rotation</li>
                      <li>• Time-based retention policy</li>
                      <li>• Efficient cleanup operations</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Directory Structure & File Organization</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Storage Directory Structure
data/
└── topics/
    └── <topic-name>/
        ├── 000000000000000000.log  # Log segment files
        ├── 000000000000000001.log  # (sequential numbering)
        ├── 000000000000000002.log
        ├── index.idx               # Index file (optional)
        └── consumers.json          # Consumer offset catalog

// Message Format in Log Files
type LogEntry struct {
    Timestamp int64  // 8 bytes - Unix nanoseconds
    Size      uint32 // 4 bytes - Message size
    Data      []byte // Variable - Message payload
}

// Consumer Catalog Format (JSON)
type ConsumerCatalog struct {
    Consumers map[string]ConsumerInfo \`json:"consumers"\`
}

type ConsumerInfo struct {
    Offset   int64     \`json:"offset"\`
    LastSeen time.Time \`json:"last_seen"\`
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Performance Optimizations */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.5}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Performance Optimizations & Design Patterns
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Write Performance</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Sequential Writes</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Append-only log design</li>
                      <li>• No random access writes</li>
                      <li>• OS page cache optimization</li>
                      <li>• Minimal disk seeks</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Batching & Buffering</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Configurable sync intervals</li>
                      <li>• Write batching for throughput</li>
                      <li>• Memory-mapped files</li>
                      <li>• Async I/O operations</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Concurrency Design</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Concurrency Patterns
type SafeQueue struct {
    topics map[string]*Topic
    mu     sync.RWMutex  // Reader-writer lock
}

// Lock-free read operations
func (q *SafeQueue) GetTopic(name string) *Topic {
    q.mu.RLock()
    defer q.mu.RUnlock()
    return q.topics[name]
}

// Write operations with exclusive lock
func (q *SafeQueue) CreateTopic(name string) error {
    q.mu.Lock()
    defer q.mu.Unlock()
    // Topic creation logic
}

// Per-topic locks for fine-grained concurrency
type Topic struct {
    log *AppendOnlyLog
    mu  sync.Mutex  // Per-topic synchronization
}

// Atomic operations for consumer offsets
type ConsumerCatalog struct {
    offsets sync.Map  // Concurrent map for offsets
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Client Architecture */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.6}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Client Architecture & SDK Design
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Multi-Language Client Support</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Go CLI Client</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Interactive mode</li>
                      <li>• Command-line interface</li>
                      <li>• Connection management</li>
                      <li>• Error handling</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">TypeScript Client</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Promise-based API</li>
                      <li>• Type definitions</li>
                      <li>• Connection pooling</li>
                      <li>• Async/await support</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Protocol Abstraction</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• RESP protocol handling</li>
                      <li>• Command serialization</li>
                      <li>• Response parsing</li>
                      <li>• Error code mapping</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">TypeScript Client Architecture</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// TypeScript Client Design
interface YuclaseClient {
  connect(): Promise<void>
  disconnect(): Promise<void>
  ping(message?: string): Promise<string>
  createTopic(topic: string): Promise<void>
  enqueue(topic: string, message: string): Promise<number>
  listen(topic: string, consumerId: string): Promise<string[]>
  getOffset(topic: string, consumerId: string): Promise<number>
  setOffset(topic: string, consumerId: string, offset: number): Promise<void>
  listTopics(): Promise<string[]>
  getStats(topic?: string): Promise<QueueStats>
}

class SimpleYuclaseClient implements YuclaseClient {
  private socket: net.Socket
  private config: ClientConfig
  private connected: boolean = false
  
  constructor(config: ClientConfig) {
    this.config = config
    this.socket = new net.Socket()
  }
  
  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.socket.connect(this.config.port, this.config.host, () => {
        this.connected = true
        resolve()
      })
      this.socket.on('error', reject)
    })
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Configuration & Deployment */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.7}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Database className="w-6 h-6" />
              Configuration & Deployment Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Configuration Management</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// config.yaml structure
server:
  host: "localhost"
  port: 8080
  max_connections: 1000
  read_timeout: "30s"
  write_timeout: "30s"

storage:
  data_directory: "./data"
  log_segment_size: 1048576  # 1MB
  index_interval: 1000
  sync_interval: "1s"
  retention_duration: "168h"  # 7 days
  compression: false

logging:
  level: "info"
  file: "./logs/yuclase.log"
  max_size: "100MB"
  max_backups: 5
  max_age: 30

performance:
  buffer_size: 4096
  worker_pool_size: 10
  gc_interval: "5m"`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Deployment Patterns</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Single Instance:</strong> Simple deployment for development and small workloads
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Docker Container:</strong> Containerized deployment with volume mounts for persistence
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Kubernetes:</strong> Scalable deployment with persistent volumes and service discovery
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Load Balanced:</strong> Multiple instances behind a load balancer for high availability
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
            <Link href="/yuclase" className="text-primary hover:underline">
              ← Back to Yuclase Project
            </Link>
          </div>
        </PortfolioSection>

      </main>
    </>
  );
}
