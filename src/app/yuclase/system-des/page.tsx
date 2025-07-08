import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-bg";
import { FadeInUp } from "@/components/ui/fade-in-up";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import ThemeToggle from "@/components/ui/theme-toggle";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Network, Server, Shield, Zap, Globe, Database, Monitor } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yuclase - System Design Document | Yash Kumar Portfolio",
  description: "Comprehensive system design documentation for Yuclase - scalable message queue infrastructure and deployment architecture.",
  keywords: ["Yuclase", "System Design", "Message Queue", "Scalability", "Go Infrastructure", "Yash Kumar"],
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function YuclaseSystemDesignPage() {
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
                Yuclase System Design
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Scalable Message Queue Infrastructure & Deployment Architecture
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
    subgraph "Client Applications"
        WebApp[Web Applications]
        MicroServices[Microservices]
        CLITools[CLI Tools]
        BatchJobs[Batch Jobs]
    end
    
    subgraph "Load Balancer Layer"
        LB[Load Balancer]
        HealthCheck[Health Checks]
    end
    
    subgraph "Yuclase Cluster"
        Node1[Yuclase Node 1]
        Node2[Yuclase Node 2]
        Node3[Yuclase Node 3]
        NodeN[Yuclase Node N]
    end
    
    subgraph "Storage Layer"
        PersistentVolumes[Persistent Volumes]
        BackupStorage[Backup Storage]
        LogArchive[Log Archive]
    end
    
    subgraph "Monitoring & Observability"
        Metrics[Metrics Collection]
        Logging[Centralized Logging]
        Alerting[Alerting System]
        Dashboard[Monitoring Dashboard]
    end
    
    subgraph "Infrastructure"
        Kubernetes[Kubernetes Cluster]
        Docker[Docker Containers]
        CloudProvider[Cloud Provider]
    end
    
    WebApp --> LB
    MicroServices --> LB
    CLITools --> LB
    BatchJobs --> LB
    
    LB --> Node1
    LB --> Node2
    LB --> Node3
    LB --> NodeN
    
    HealthCheck --> Node1
    HealthCheck --> Node2
    HealthCheck --> Node3
    
    Node1 --> PersistentVolumes
    Node2 --> PersistentVolumes
    Node3 --> PersistentVolumes
    
    PersistentVolumes --> BackupStorage
    PersistentVolumes --> LogArchive
    
    Node1 --> Metrics
    Node2 --> Metrics
    Node3 --> Metrics
    
    Metrics --> Dashboard
    Logging --> Dashboard
    Alerting --> Dashboard
    
    Kubernetes --> Docker
    Docker --> CloudProvider`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Scalability Architecture */}
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
                    <h4 className="font-medium mb-2">Topic Partitioning</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Hash-based topic distribution</li>
                      <li>• Consistent hashing for load balancing</li>
                      <li>• Dynamic rebalancing on node changes</li>
                      <li>• Partition-aware client routing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Load Distribution</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Round-robin client distribution</li>
                      <li>• Connection-based load balancing</li>
                      <li>• Health-aware routing</li>
                      <li>• Circuit breaker patterns</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Performance Metrics</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Performance Targets
const performanceMetrics = {
  // Throughput
  throughput: {
    writes: "100k msgs/sec per node",
    reads: "200k msgs/sec per node",
    concurrent_clients: "10k connections",
    topics_per_node: "1k topics"
  },
  
  // Latency
  latency: {
    write_p99: "< 10ms",
    read_p99: "< 5ms",
    connection_setup: "< 100ms",
    topic_creation: "< 50ms"
  },
  
  // Resource Usage
  resources: {
    memory_per_node: "< 2GB",
    cpu_utilization: "< 70%",
    disk_iops: "10k IOPS",
    network_bandwidth: "1Gbps"
  },
  
  // Availability
  availability: {
    uptime: "99.9%",
    recovery_time: "< 30s",
    data_durability: "99.999%",
    backup_frequency: "hourly"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* High Availability Design */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.3}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              High Availability & Fault Tolerance
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Replication Strategy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Data Replication</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Asynchronous log replication</li>
                      <li>• Configurable replication factor</li>
                      <li>• Cross-zone data distribution</li>
                      <li>• Automatic failover mechanisms</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Consensus & Leadership</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Raft consensus algorithm</li>
                      <li>• Leader election for topics</li>
                      <li>• Split-brain prevention</li>
                      <li>• Quorum-based decisions</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Failure Recovery Flow</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`sequenceDiagram
    participant Client as Client
    participant LB as Load Balancer
    participant Node1 as Primary Node
    participant Node2 as Replica Node
    participant Monitor as Health Monitor
    
    Client->>LB: Send Message
    LB->>Node1: Route to Primary
    
    Note over Node1: Node1 Fails
    
    Monitor->>Node1: Health Check
    Node1-->>Monitor: No Response
    Monitor->>LB: Mark Node1 Unhealthy
    
    LB->>Node2: Promote to Primary
    Node2->>Node2: Replay WAL
    Node2->>LB: Ready for Traffic
    
    Client->>LB: Retry Message
    LB->>Node2: Route to New Primary
    Node2->>Client: Success Response
    
    Note over Node1: Node1 Recovers
    
    Node1->>Monitor: Health Check OK
    Monitor->>LB: Mark Node1 Healthy
    Node1->>Node2: Sync Missing Data
    Node2->>Node1: Replication Data
    LB->>LB: Rebalance Traffic`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Storage Architecture */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.4}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Database className="w-6 h-6" />
              Storage Architecture & Data Management
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Multi-tier Storage Strategy</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Hot Storage (SSD)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Active log segments</li>
                      <li>• Recent consumer offsets</li>
                      <li>• Index files</li>
                      <li>• Metadata catalogs</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Warm Storage (HDD)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Older log segments</li>
                      <li>• Compressed archives</li>
                      <li>• Historical data</li>
                      <li>• Backup snapshots</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Cold Storage (Object)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Long-term archives</li>
                      <li>• Compliance data</li>
                      <li>• Disaster recovery</li>
                      <li>• Analytics datasets</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Storage Optimization</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Storage Management Configuration
const storageConfig = {
  // Tiering Strategy
  tiering: {
    hot_retention: "7 days",
    warm_retention: "30 days",
    cold_retention: "1 year",
    compression_threshold: "1GB",
    migration_schedule: "daily"
  },
  
  // Performance Optimization
  optimization: {
    segment_size: "1GB",
    index_interval: "4KB",
    sync_policy: "async",
    cache_size: "512MB",
    prefetch_size: "64KB"
  },
  
  // Backup & Recovery
  backup: {
    strategy: "incremental",
    frequency: "hourly",
    retention: "30 days",
    compression: "lz4",
    encryption: "AES-256"
  },
  
  // Monitoring
  monitoring: {
    disk_usage_alert: "80%",
    iops_threshold: "8000",
    latency_alert: "100ms",
    error_rate_alert: "1%"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Network Architecture */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.5}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6" />
              Network Architecture & Communication
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Network Topology</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Client-Server Communication</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• TCP persistent connections</li>
                      <li>• Connection pooling & reuse</li>
                      <li>• Keep-alive mechanisms</li>
                      <li>• Graceful connection handling</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Inter-Node Communication</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• gRPC for internal APIs</li>
                      <li>• Gossip protocol for discovery</li>
                      <li>• Heartbeat monitoring</li>
                      <li>• Cluster membership management</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Protocol Optimization</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Network Configuration
const networkConfig = {
  // TCP Settings
  tcp: {
    keepalive: true,
    keepalive_time: "7200s",
    keepalive_interval: "75s",
    keepalive_probes: 9,
    no_delay: true,
    buffer_size: "64KB"
  },
  
  // Connection Management
  connections: {
    max_per_client: 100,
    idle_timeout: "300s",
    read_timeout: "30s",
    write_timeout: "30s",
    max_concurrent: "10000"
  },
  
  // Load Balancing
  load_balancing: {
    algorithm: "round_robin",
    health_check_interval: "10s",
    failure_threshold: 3,
    recovery_threshold: 2,
    sticky_sessions: false
  },
  
  // Security
  security: {
    tls_enabled: true,
    tls_version: "1.3",
    cipher_suites: ["TLS_AES_256_GCM_SHA384"],
    client_auth: "optional",
    rate_limiting: "1000/min"
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
          <FadeInUp delay={0.6}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Server className="w-6 h-6" />
              Deployment & Infrastructure Architecture
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Kubernetes Deployment</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`# Kubernetes Deployment Configuration
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: yuclase-cluster
spec:
  serviceName: yuclase
  replicas: 3
  selector:
    matchLabels:
      app: yuclase
  template:
    metadata:
      labels:
        app: yuclase
    spec:
      containers:
      - name: yuclase
        image: yuclase:latest
        ports:
        - containerPort: 8080
        env:
        - name: YUCLASE_NODE_ID
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: YUCLASE_CLUSTER_PEERS
          value: "yuclase-0.yuclase:8080,yuclase-1.yuclase:8080,yuclase-2.yuclase:8080"
        volumeMounts:
        - name: data
          mountPath: /data
        - name: config
          mountPath: /config
        resources:
          requests:
            memory: "1Gi"
            cpu: "500m"
          limits:
            memory: "2Gi"
            cpu: "1000m"
        livenessProbe:
          tcpSocket:
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          exec:
            command:
            - /bin/yuclase-cli
            - -cmd
            - "PING"
          initialDelaySeconds: 5
          periodSeconds: 5
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 100Gi
      storageClassName: fast-ssd`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Infrastructure Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Container Orchestration</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Kubernetes StatefulSets</li>
                      <li>• Persistent Volume Claims</li>
                      <li>• Service discovery</li>
                      <li>• Rolling updates</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Service Mesh</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Istio for traffic management</li>
                      <li>• mTLS encryption</li>
                      <li>• Circuit breaker patterns</li>
                      <li>• Observability integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Monitoring & Observability */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.7}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Monitor className="w-6 h-6" />
              Monitoring & Observability Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Metrics & Alerting</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">System Metrics</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• CPU, memory, disk utilization</li>
                      <li>• Network I/O and latency</li>
                      <li>• Connection pool statistics</li>
                      <li>• Garbage collection metrics</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Application Metrics</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Message throughput rates</li>
                      <li>• Topic and consumer statistics</li>
                      <li>• Error rates and types</li>
                      <li>• Queue depth and lag</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Observability Stack</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Monitoring Configuration
const observabilityStack = {
  // Metrics Collection
  metrics: {
    prometheus: {
      scrape_interval: "15s",
      retention: "30d",
      storage: "100GB"
    },
    grafana: {
      dashboards: ["cluster", "node", "topic"],
      alerts: ["high_latency", "disk_full", "node_down"]
    }
  },
  
  // Distributed Tracing
  tracing: {
    jaeger: {
      sampling_rate: 0.1,
      retention: "7d",
      storage: "elasticsearch"
    },
    spans: ["request", "storage", "replication"]
  },
  
  // Logging
  logging: {
    fluentd: {
      log_level: "info",
      rotation: "daily",
      compression: true
    },
    elasticsearch: {
      indices: ["yuclase-logs"],
      retention: "30d",
      shards: 3
    }
  },
  
  // Alerting
  alerting: {
    alertmanager: {
      routes: ["pagerduty", "slack", "email"],
      grouping: ["cluster", "severity"],
      inhibition: ["maintenance_mode"]
    }
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Disaster Recovery */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.8}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Disaster Recovery & Business Continuity
            </h2>
            <div className="bg-card rounded-lg p-6 border">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Multi-Region Deployment</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`graph TB
    subgraph "Primary Region (US-East)"
        PrimaryCluster[Primary Cluster]
        PrimaryStorage[Primary Storage]
        PrimaryLB[Primary Load Balancer]
    end
    
    subgraph "Secondary Region (US-West)"
        SecondaryCluster[Secondary Cluster]
        SecondaryStorage[Secondary Storage]
        SecondaryLB[Secondary Load Balancer]
    end
    
    subgraph "Tertiary Region (EU-West)"
        TertiaryCluster[Tertiary Cluster]
        TertiaryStorage[Tertiary Storage]
        TertiaryLB[Tertiary Load Balancer]
    end
    
    subgraph "Global Services"
        DNS[Global DNS]
        CDN[Content Delivery Network]
        Monitoring[Global Monitoring]
    end
    
    PrimaryCluster --> SecondaryCluster
    PrimaryCluster --> TertiaryCluster
    SecondaryCluster --> TertiaryCluster
    
    PrimaryStorage --> SecondaryStorage
    PrimaryStorage --> TertiaryStorage
    
    DNS --> PrimaryLB
    DNS --> SecondaryLB
    DNS --> TertiaryLB
    
    Monitoring --> PrimaryCluster
    Monitoring --> SecondaryCluster
    Monitoring --> TertiaryCluster`}
                  </pre>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Recovery Objectives</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• RTO (Recovery Time): < 5 minutes</li>
                    <li>• RPO (Recovery Point): < 1 minute</li>
                    <li>• Data durability: 99.999999999%</li>
                    <li>• Cross-region failover: Automatic</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Backup Strategy</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Continuous replication</li>
                    <li>• Point-in-time recovery</li>
                    <li>• Cross-region backup</li>
                    <li>• Automated testing</li>
                  </ul>
                </div>
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
