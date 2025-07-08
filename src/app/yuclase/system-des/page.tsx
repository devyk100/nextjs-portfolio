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
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Yuclase System Design
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Scalable Message Queue Infrastructure & Deployment Architecture
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
              />
            </div>
          </div>
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
