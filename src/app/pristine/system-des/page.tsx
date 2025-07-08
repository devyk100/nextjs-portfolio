import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-bg";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import ThemeToggle from "@/components/ui/theme-toggle";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Network, Server, Shield, Zap, Globe, Database, Monitor } from "lucide-react";
import { Metadata } from "next";
import { MermaidDiagram } from "@/components/ui/mermaid-diagram";

export const metadata: Metadata = {
  title: "Pristine - System Design Document | Yash Kumar Portfolio",
  description: "Comprehensive system design documentation for Pristine - scalable reverse proxy infrastructure and deployment architecture.",
  keywords: ["Pristine", "System Design", "Reverse Proxy", "Scalability", "C++ Infrastructure", "Yash Kumar"],
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function PristineSystemDesignPage() {
  return (
    <>
      <AnimatedBackground />
      <ThemeToggle className="fixed top-3 md:right-1/12 lg:right-3/12 right-2 z-[9999]" />
      <ScrollProgress />
      
      <main className={cn("relative w-full overflow-x-hidden text-foreground flex items-center justify-center flex-col px-3", glassClass)}>
        
        {/* Navigation */}
        <PortfolioSection className="flex justify-between items-center">
          <div className="w-full m-2">
            <Link href="/pristine">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Pristine
              </Button>
            </Link>
          </div>
        </PortfolioSection>

        {/* Hero Section */}
        <PortfolioSection className="mt-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Pristine System Design
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Scalable Reverse Proxy Infrastructure & Deployment Architecture
              </p>
            </div>
        </PortfolioSection>

        {/* System Overview */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Network className="w-6 h-6" />
              System Architecture Overview
            </h2>
            <div className="bg-card rounded-lg p-6 border">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">High-Level System Design</h3>
                <MermaidDiagram
                  chart={`graph TB
    subgraph "Internet"
        Users[Users/Clients]
        CDN[Content Delivery Network]
    end
    
    subgraph "Edge Layer"
        DNS[DNS Resolution]
        DDoSProtection[DDoS Protection]
        WAF[Web Application Firewall]
    end
    
    subgraph "Load Balancer Tier"
        LB1[Load Balancer 1]
        LB2[Load Balancer 2]
        LB3[Load Balancer 3]
    end
    
    subgraph "Pristine Proxy Cluster"
        Proxy1[Pristine Instance 1]
        Proxy2[Pristine Instance 2]
        Proxy3[Pristine Instance 3]
        ProxyN[Pristine Instance N]
    end
    
    subgraph "Backend Services"
        WebApp[Web Applications]
        API[API Services]
        Microservices[Microservices]
        StaticFiles[Static File Servers]
    end
    
    subgraph "Infrastructure Services"
        CertStore[Certificate Storage]
        ConfigStore[Configuration Store]
        Monitoring[Monitoring & Logging]
        HealthCheck[Health Checks]
    end
    
    Users --> CDN
    CDN --> DNS
    DNS --> DDoSProtection
    DDoSProtection --> WAF
    WAF --> LB1
    WAF --> LB2
    WAF --> LB3
    
    LB1 --> Proxy1
    LB1 --> Proxy2
    LB2 --> Proxy2
    LB2 --> Proxy3
    LB3 --> Proxy3
    LB3 --> ProxyN
    
    Proxy1 --> WebApp
    Proxy2 --> API
    Proxy3 --> Microservices
    ProxyN --> StaticFiles
    
    Proxy1 --> CertStore
    Proxy2 --> CertStore
    Proxy3 --> CertStore
    
    Proxy1 --> ConfigStore
    Proxy2 --> ConfigStore
    Proxy3 --> ConfigStore
    
    Proxy1 --> Monitoring
    Proxy2 --> Monitoring
    Proxy3 --> Monitoring
    
    HealthCheck --> Proxy1
    HealthCheck --> Proxy2
    HealthCheck --> Proxy3`}
                  className="w-full"
                />
              </div>
            </div>
        </PortfolioSection>

        {/* Scalability Architecture */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Scalability & Performance Architecture
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Horizontal Scaling Strategy</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Instance Scaling</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Auto-scaling based on CPU/memory</li>
                      <li>• Connection-based scaling triggers</li>
                      <li>• Geographic distribution</li>
                      <li>• Blue-green deployment support</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Load Distribution</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Round-robin load balancing</li>
                      <li>• Least-connections algorithm</li>
                      <li>• Health-aware routing</li>
                      <li>• Session affinity support</li>
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
    requests_per_second: "50k RPS per instance",
    concurrent_connections: "100k connections",
    bandwidth: "10Gbps per instance",
    ssl_handshakes: "5k TLS/sec"
  },
  
  // Latency
  latency: {
    proxy_overhead: "< 1ms",
    ssl_handshake: "< 50ms",
    backend_connection: "< 10ms",
    total_response: "< 100ms"
  },
  
  // Resource Usage
  resources: {
    memory_per_instance: "< 1GB",
    cpu_utilization: "< 80%",
    file_descriptors: "1M FDs",
    network_buffers: "optimized"
  },
  
  // Availability
  availability: {
    uptime: "99.99%",
    failover_time: "< 5s",
    certificate_renewal: "automatic",
    zero_downtime_updates: true
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
        </PortfolioSection>

        {/* High Availability Design */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              High Availability & Fault Tolerance
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Redundancy Strategy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Instance Redundancy</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Multi-zone deployment</li>
                      <li>• Active-active configuration</li>
                      <li>• Automatic failover</li>
                      <li>• Health check monitoring</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Data Redundancy</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Distributed certificate storage</li>
                      <li>• Configuration replication</li>
                      <li>• Backup and recovery</li>
                      <li>• Cross-region synchronization</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Failure Recovery Flow</h3>
                <MermaidDiagram
                  chart={`sequenceDiagram
    participant Client as Client
    participant LB as Load Balancer
    participant Proxy1 as Pristine Instance 1
    participant Proxy2 as Pristine Instance 2
    participant Monitor as Health Monitor
    participant Backend as Backend Service
    
    Client->>LB: HTTPS Request
    LB->>Proxy1: Route to Primary
    
    Note over Proxy1: Instance Fails
    
    Monitor->>Proxy1: Health Check
    Proxy1-->>Monitor: No Response
    Monitor->>LB: Mark Instance Unhealthy
    
    Client->>LB: Retry Request
    LB->>Proxy2: Route to Backup
    Proxy2->>Backend: Forward Request
    Backend->>Proxy2: Response
    Proxy2->>Client: Success Response
    
    Note over Proxy1: Instance Recovers
    
    Proxy1->>Monitor: Health Check OK
    Monitor->>LB: Mark Instance Healthy
    LB->>LB: Rebalance Traffic
    
    Client->>LB: New Request
    LB->>Proxy1: Route to Recovered Instance`}
                  className="w-full"
                />
              </div>
            </div>
        </PortfolioSection>

        {/* Certificate Management */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Database className="w-6 h-6" />
              Certificate Management & Security Architecture
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Automated Certificate Lifecycle</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Acquisition</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Let's Encrypt ACME v2</li>
                      <li>• HTTP-01 challenge</li>
                      <li>• DNS-01 challenge</li>
                      <li>• Self-signed fallback</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Management</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Automatic renewal</li>
                      <li>• Certificate validation</li>
                      <li>• Key rotation</li>
                      <li>• Distributed storage</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Deployment</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Zero-downtime updates</li>
                      <li>• Multi-instance sync</li>
                      <li>• Rollback capability</li>
                      <li>• Health verification</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Certificate Architecture</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Certificate Management System
const certificateArchitecture = {
  // Storage Layer
  storage: {
    primary: "Distributed File System",
    backup: "Object Storage (S3/GCS)",
    cache: "In-Memory Certificate Cache",
    encryption: "AES-256 at rest"
  },
  
  // ACME Integration
  acme: {
    providers: ["Let's Encrypt", "ZeroSSL", "Custom CA"],
    challenges: ["HTTP-01", "DNS-01", "TLS-ALPN-01"],
    key_types: ["RSA-2048", "ECDSA-P256", "ECDSA-P384"],
    renewal_window: "30 days before expiry"
  },
  
  // Distribution
  distribution: {
    sync_method: "Event-driven replication",
    consistency: "Eventually consistent",
    conflict_resolution: "Latest timestamp wins",
    propagation_time: "< 30 seconds"
  },
  
  // Security
  security: {
    key_protection: "Hardware Security Module",
    access_control: "Role-based permissions",
    audit_logging: "All certificate operations",
    compliance: "SOC2, PCI-DSS ready"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
        </PortfolioSection>

        {/* Network Architecture */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6" />
              Network Architecture & Traffic Management
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Network Topology</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Edge Network</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Global anycast DNS</li>
                      <li>• CDN integration</li>
                      <li>• DDoS protection</li>
                      <li>• Geographic routing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Internal Network</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Private VPC networking</li>
                      <li>• Service mesh integration</li>
                      <li>• Network segmentation</li>
                      <li>• Traffic encryption</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Traffic Optimization</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Network Configuration
const networkConfig = {
  // Protocol Optimization
  protocols: {
    http2: {
      enabled: true,
      max_concurrent_streams: 1000,
      header_table_size: 4096,
      server_push: true
    },
    http3: {
      enabled: false,  // Future implementation
      quic_version: "draft-34"
    },
    websocket: {
      enabled: true,
      compression: true,
      heartbeat_interval: "30s"
    }
  },
  
  // Connection Management
  connections: {
    keep_alive: true,
    keep_alive_timeout: "75s",
    max_requests_per_connection: 1000,
    connection_pool_size: 100,
    backend_timeout: "30s"
  },
  
  // Traffic Shaping
  traffic: {
    rate_limiting: "10000/min per IP",
    burst_allowance: 100,
    bandwidth_throttling: "adaptive",
    priority_queues: ["high", "normal", "low"]
  },
  
  // Security
  security: {
    tls_versions: ["1.2", "1.3"],
    cipher_suites: "modern",
    hsts_enabled: true,
    ocsp_stapling: true
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
        </PortfolioSection>

        {/* Deployment Architecture */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Server className="w-6 h-6" />
              Deployment & Infrastructure Architecture
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Container Orchestration</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`# Kubernetes Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pristine-proxy
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: pristine-proxy
  template:
    metadata:
      labels:
        app: pristine-proxy
    spec:
      containers:
      - name: pristine
        image: pristine:latest
        ports:
        - containerPort: 9080
          name: http
        - containerPort: 9443
          name: https
        env:
        - name: CONFIG_PATH
          value: "/etc/pristine/proxy.yaml"
        volumeMounts:
        - name: config
          mountPath: /etc/pristine
        - name: certs
          mountPath: /etc/ssl/certs
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
        livenessProbe:
          httpGet:
            path: /health
            port: 9080
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 9080
          initialDelaySeconds: 5
          periodSeconds: 5
      volumes:
      - name: config
        configMap:
          name: pristine-config
      - name: certs
        persistentVolumeClaim:
          claimName: pristine-certs`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Infrastructure Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Container Platform</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Kubernetes orchestration</li>
                      <li>• Docker containerization</li>
                      <li>• Helm chart deployment</li>
                      <li>• GitOps workflow</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Cloud Integration</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Multi-cloud deployment</li>
                      <li>• Auto-scaling groups</li>
                      <li>• Managed load balancers</li>
                      <li>• Cloud-native storage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </PortfolioSection>

        {/* Monitoring & Observability */}
        <PortfolioSection className="mt-10">
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
                      <li>• CPU, memory, network I/O</li>
                      <li>• Connection pool statistics</li>
                      <li>• SSL handshake performance</li>
                      <li>• Backend health status</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Application Metrics</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Request/response latency</li>
                      <li>• HTTP status code distribution</li>
                      <li>• Certificate expiry tracking</li>
                      <li>• Error rates and patterns</li>
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
      high_availability: true
    },
    grafana: {
      dashboards: ["proxy", "ssl", "performance"],
      alerts: ["high_latency", "cert_expiry", "backend_down"]
    }
  },
  
  // Distributed Tracing
  tracing: {
    jaeger: {
      sampling_rate: 0.01,
      retention: "7d",
      storage: "elasticsearch"
    },
    spans: ["request", "backend", "ssl_handshake"]
  },
  
  // Logging
  logging: {
    structured: true,
    format: "json",
    levels: ["error", "warn", "info", "debug"],
    aggregation: "elasticsearch",
    retention: "90d"
  },
  
  // Alerting
  alerting: {
    channels: ["pagerduty", "slack", "email"],
    escalation: "tiered",
    suppression: "intelligent",
    sla_tracking: true
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
        </PortfolioSection>

        {/* Disaster Recovery */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Disaster Recovery & Business Continuity
            </h2>
            <div className="bg-card rounded-lg p-6 border">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Multi-Region Deployment</h3>
                <MermaidDiagram
                  chart={`graph TB
    subgraph "Primary Region (US-East)"
        PrimaryProxy[Pristine Cluster]
        PrimaryCerts[Certificate Store]
        PrimaryConfig[Configuration]
    end
    
    subgraph "Secondary Region (US-West)"
        SecondaryProxy[Pristine Cluster]
        SecondaryCerts[Certificate Store]
        SecondaryConfig[Configuration]
    end
    
    subgraph "Tertiary Region (EU-West)"
        TertiaryProxy[Pristine Cluster]
        TertiaryCerts[Certificate Store]
        TertiaryConfig[Configuration]
    end
    
    subgraph "Global Services"
        GlobalDNS[Global DNS]
        GlobalLB[Global Load Balancer]
        CentralMonitoring[Central Monitoring]
    end
    
    PrimaryProxy --> SecondaryProxy
    PrimaryProxy --> TertiaryProxy
    SecondaryProxy --> TertiaryProxy
    
    PrimaryCerts --> SecondaryCerts
    PrimaryCerts --> TertiaryCerts
    
    PrimaryConfig --> SecondaryConfig
    PrimaryConfig --> TertiaryConfig
    
    GlobalDNS --> PrimaryProxy
    GlobalDNS --> SecondaryProxy
    GlobalDNS --> TertiaryProxy
    
    GlobalLB --> PrimaryProxy
    GlobalLB --> SecondaryProxy
    GlobalLB --> TertiaryProxy
    
    CentralMonitoring --> PrimaryProxy
    CentralMonitoring --> SecondaryProxy
    CentralMonitoring --> TertiaryProxy`}
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Recovery Objectives</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• RTO (Recovery Time): < 2 minutes</li>
                    <li>• RPO (Recovery Point): < 30 seconds</li>
                    <li>• Certificate availability: 99.99%</li>
                    <li>• Cross-region failover: Automatic</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded">
                  <h4 className="font-medium mb-2">Backup Strategy</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Real-time configuration sync</li>
                    <li>• Certificate replication</li>
                    <li>• Automated failover testing</li>
                    <li>• Point-in-time recovery</li>
                  </ul>
                </div>
              </div>
            </div>
        </PortfolioSection>

        {/* Footer */}
        <PortfolioSection className="mt-10 mb-10">
          <div className="text-center w-full text-sm p-2 font-light select-none">
            <Link href="/pristine" className="text-primary hover:underline">
              ← Back to Pristine Project
            </Link>
          </div>
        </PortfolioSection>

      </main>
    </>
  );
}
