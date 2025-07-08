import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-bg";
import { FadeInUp } from "@/components/ui/fade-in-up";
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
  FileText, 
  Layers, 
  ArrowLeft,
  Play,
  BookOpen,
  Settings,
  Smartphone,
  Globe,
  Shield,
  Database,
  Zap,
  MapPin,
  Download,
  RefreshCw
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iCrops - Crop Data Collection Tool for ICRISAT | Yash Kumar Portfolio",
  description: "iCrops is a crop data collection tool made for ICRISAT scientists to collect crop images and parameters for research purposes from remote locations with offline-first capabilities.",
  keywords: ["iCrops", "ICRISAT", "Crop Data Collection", "Agricultural Research", "Offline First", "React Native", "Android App", "Yash Kumar", "Juquox", "devyk100"],
  openGraph: {
    title: "iCrops - Crop Data Collection Tool for ICRISAT",
    description: "Agricultural research data collection platform for ICRISAT scientists with offline capabilities",
    url: "https://yashk.dev/icrops",
    images: [{ url: "/yarei.jpeg", width: 1200, height: 630 }],
  },
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function IcropsPage() {
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
          <FadeInUp>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                iCrops
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Crop Data Collection Tool for ICRISAT Scientists
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">
                  React Native
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  React.js
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  Redux
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                  Python
                </span>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Quick Links */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Play className="w-5 h-5" />
                    <h3 className="font-semibold">Try Demo</h3>
                  </div>
                  <p className="text-sm text-green-100">
                    iCrops web dashboard
                  </p>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Github className="w-5 h-5" />
                    <h3 className="font-semibold">GitHub Repository</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    View source code and contribute
                  </p>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Download className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-semibold">Android App</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download the mobile data collection app
                  </p>
                </div>
              </Link>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Project Overview */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.2}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Project Overview
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                iCrops is a crop data collection tool made for ICRISAT scientists to collect crop images and 
                parameters for research purposes from remote locations. The platform consists of an Android 
                mobile application for field data collection and a web dashboard for data management and analysis.
              </p>
              <p className="leading-relaxed mb-4">
                Built with React Native CLI in TypeScript for the mobile app and React.js with Vite for the web 
                dashboard, iCrops features automatic timestamping of coordinates and time on captured images, 
                GPS sensor integration, Google Maps API for location services, and the ability to export data 
                in .xlsx, .csv, and .shp formats with or without images. The offline-first architecture ensures 
                data collection continues even without internet connectivity, with automatic synchronization when 
                connection is restored.
              </p>
              <p className="leading-relaxed mb-4">
                Originally developed and tested on Debian with nginx, the application is deployed on Windows IIS 
                server at <a href="http://maps.icrisat.org/react" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">maps.icrisat.org/react</a>, 
                leveraging IIS's built-in load balancing and routing capabilities for optimal performance.
              </p>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Tech Stack */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.3}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Layers className="w-6 h-6" />
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Mobile Application</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    React Native framework
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    TypeScript for type safety
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Redux for state management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    SQLite for offline storage
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Web Dashboard</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    React.js with hooks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Redux Toolkit
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Material-UI components
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Chart.js for visualizations
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Backend Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    ExpressJS REST API
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Python data processing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    MongoDB database
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    JWT authentication
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Integration & APIs</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Google Maps API
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    GPS sensor integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Excel/CSV export
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Real-time synchronization
                  </li>
                </ul>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Core Features */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.4}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Settings className="w-6 h-6" />
              Core Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-green-600" />
                  Mobile Data Collection
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Offline-first architecture</li>
                  <li>• Form-based data entry</li>
                  <li>• Photo and media capture</li>
                  <li>• GPS location tracking</li>
                  <li>• Barcode/QR code scanning</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  Web Dashboard
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Real-time data visualization</li>
                  <li>• Interactive maps integration</li>
                  <li>• Advanced filtering & search</li>
                  <li>• User management system</li>
                  <li>• Custom report generation</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-purple-600" />
                  Data Synchronization
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Automatic sync when online</li>
                  <li>• Conflict resolution handling</li>
                  <li>• Incremental data updates</li>
                  <li>• Background synchronization</li>
                  <li>• Sync status monitoring</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  Location Services
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• GPS coordinate capture</li>
                  <li>• Google Maps integration</li>
                  <li>• Geofencing capabilities</li>
                  <li>• Location-based filtering</li>
                  <li>• Route optimization</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Download className="w-5 h-5 text-teal-600" />
                  Data Export
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Excel (.xlsx) export</li>
                  <li>• CSV format support</li>
                  <li>• Custom field selection</li>
                  <li>• Batch data export</li>
                  <li>• Scheduled exports</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-600" />
                  Security & Access
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Role-based access control</li>
                  <li>• Data encryption at rest</li>
                  <li>• Secure API endpoints</li>
                  <li>• Audit trail logging</li>
                  <li>• Multi-tenant support</li>
                </ul>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Installation & Usage */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.5}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Installation & Usage
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Web Dashboard Setup</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  <div className="text-muted-foreground mb-2"># Clone and install dependencies</div>
                  <div>git clone https://github.com/devyk100/icrops-web.git</div>
                  <div>cd icrops-web</div>
                  <div>npm install</div>
                  <div className="mt-4 text-muted-foreground mb-2"># Start development server</div>
                  <div>npm start</div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Mobile App Development</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <div className="text-muted-foreground mb-2"># Setup React Native environment</div>
                  <div>git clone https://github.com/devyk100/icrops-mobile.git</div>
                  <div>cd icrops-mobile</div>
                  <div>npm install</div>
                  <div className="mt-4 text-muted-foreground mb-2"># Run on Android</div>
                  <div>npx react-native run-android</div>
                  <div className="mt-4 text-muted-foreground mb-2"># Build APK</div>
                  <div>cd android && ./gradlew assembleRelease</div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Demo Videos */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.6}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Play className="w-6 h-6" />
              Demo Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Mobile App Demo</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Demo video coming soon</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  See the Android app in action with offline data collection, GPS tracking, and synchronization.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-medium mb-3">Web Dashboard Tour</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Demo video coming soon</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Explore the web dashboard features including data visualization, maps, and export capabilities.
                </p>
              </div>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Source Code & Links */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.7}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Github className="w-6 h-6" />
              Source Code & Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Web Dashboard</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    React.js web application with data management features
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    React.js
                  </div>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Mobile Application</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    React Native Android app for field data collection
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    React Native
                  </div>
                </div>
              </Link>
            </div>
          </FadeInUp>
        </PortfolioSection>

        {/* Documentation Links */}
        <PortfolioSection className="mt-10">
          <FadeInUp delay={0.8}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Documentation & Design
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold">Development Blog</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Building an offline-first data collection platform
                  </p>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold">Software Design Document</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Detailed architecture and offline synchronization design
                  </p>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Layers className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold">System Design Document</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    System architecture and deployment strategies
                  </p>
                </div>
              </Link>
            </div>
          </FadeInUp>
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
