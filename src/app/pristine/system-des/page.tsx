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
              />
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
