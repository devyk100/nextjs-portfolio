import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-bg";
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
  title: "Pristine - Software Design Document | Yash Kumar Portfolio",
  description: "Detailed software design documentation for Pristine - high-performance reverse proxy built with C++ and Boost.Asio.",
  keywords: ["Pristine", "Software Design", "Reverse Proxy", "C++", "Boost.Asio", "Yash Kumar"],
};

const glassClass = "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function PristineSoftwareDesignPage() {
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
                Pristine Software Design
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                High-Performance Reverse Proxy Architecture & Component Design
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
    subgraph "Client Layer"
        HTTPClient[HTTP Clients]
        HTTPSClient[HTTPS Clients]
        WSClient[WebSocket Clients]
    end
    
    subgraph "Proxy Core"
        ReverseProxy[Reverse Proxy]
        RequestRouter[Request Router]
        ConnectionHandler[Connection Handler]
    end
    
    subgraph "Protocol Handlers"
        HTTP1Handler[HTTP/1.1 Handler]
        HTTP2Handler[HTTP/2 Handler]
        WSHandler[WebSocket Handler]
    end
    
    subgraph "Infrastructure"
        ConfigManager[Config Manager]
        CertManager[Certificate Manager]
        LoadBalancer[Load Balancer]
    end
    
    subgraph "Backend Services"
        Backend1[Backend Server 1]
        Backend2[Backend Server 2]
        Backend3[Backend Server 3]
    end
    
    HTTPClient --> ReverseProxy
    HTTPSClient --> ReverseProxy
    WSClient --> ReverseProxy
    
    ReverseProxy --> RequestRouter
    RequestRouter --> ConnectionHandler
    
    ConnectionHandler --> HTTP1Handler
    ConnectionHandler --> HTTP2Handler
    ConnectionHandler --> WSHandler
    
    ReverseProxy --> ConfigManager
    ReverseProxy --> CertManager
    ConnectionHandler --> LoadBalancer
    
    HTTP1Handler --> Backend1
    HTTP2Handler --> Backend2
    WSHandler --> Backend3
    LoadBalancer --> Backend1
    LoadBalancer --> Backend2
    LoadBalancer --> Backend3`}
                  className="w-full"
                />
              </div>
            </div>
        </PortfolioSection>

        {/* Core Components */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Core Component Architecture
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Main Components</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">ReverseProxy</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Main orchestrator and entry point</li>
                      <li>• Manages HTTP/HTTPS servers</li>
                      <li>• Handles SSL context setup</li>
                      <li>• Coordinates component lifecycle</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">RequestRouter</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Domain-based request routing</li>
                      <li>• Backend server selection</li>
                      <li>• TLS requirement determination</li>
                      <li>• WebSocket capability detection</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">ConnectionHandler</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Individual connection management</li>
                      <li>• Request/response forwarding</li>
                      <li>• Protocol upgrade handling</li>
                      <li>• Error response generation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">C++ Class Structure</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Core Classes
class ReverseProxy {
private:
    boost::asio::io_context io_context_;
    tcp::acceptor http_acceptor_;
    tcp::acceptor https_acceptor_;
    ssl::context ssl_context_;
    
public:
    bool initialize(const std::string& configPath);
    void run();
    void stop();
};

class RequestRouter {
private:
    std::shared_ptr<ConfigManager> config_manager_;
    
public:
    std::pair<std::string, int> getBackendForDomain(
        const std::string& domain) const;
    bool isWebSocketEnabled(const std::string& domain) const;
    bool requiresTLS(const std::string& domain) const;
};

class ConnectionHandler {
private:
    tcp::socket socket_;
    ssl::stream<tcp::socket> ssl_socket_;
    beast::flat_buffer buffer_;
    http::request<http::dynamic_body> request_;
    
public:
    void start();
    void handle_request();
    void forward_to_backend();
};`}
                  </pre>
                </div>
              </div>
            </div>
        </PortfolioSection>

        {/* Protocol Handling */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Network className="w-6 h-6" />
              Protocol Handling & Communication
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Multi-Protocol Support</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">HTTP/1.1</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Full request/response proxying</li>
                      <li>• Header preservation</li>
                      <li>• Keep-alive support</li>
                      <li>• Chunked transfer encoding</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">HTTP/2</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Stream multiplexing</li>
                      <li>• Header compression (HPACK)</li>
                      <li>• Server push capability</li>
                      <li>• Binary framing protocol</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">WebSocket</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Protocol upgrade handling</li>
                      <li>• Bidirectional communication</li>
                      <li>• Frame-based messaging</li>
                      <li>• Connection persistence</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Request Processing Flow</h3>
                <MermaidDiagram
                  chart={`sequenceDiagram
    participant Client as Client
    participant Proxy as Reverse Proxy
    participant Router as Request Router
    participant Handler as Connection Handler
    participant Backend as Backend Server
    
    Client->>Proxy: HTTP/HTTPS Request
    Proxy->>Router: Route Request
    Router->>Router: Parse Host Header
    Router->>Router: Lookup Backend Config
    Router->>Handler: Create Connection Handler
    
    Handler->>Handler: Validate Request
    Handler->>Backend: Forward Request
    Backend->>Handler: Send Response
    Handler->>Handler: Process Response Headers
    Handler->>Client: Forward Response
    
    alt WebSocket Upgrade
        Client->>Handler: Upgrade Request
        Handler->>Backend: Forward Upgrade
        Backend->>Handler: Upgrade Response
        Handler->>Client: Complete Upgrade
        
        loop WebSocket Communication
            Client->>Handler: WebSocket Frame
            Handler->>Backend: Forward Frame
            Backend->>Handler: Response Frame
            Handler->>Client: Forward Frame
        end
    end`}
                  className="w-full"
                />
              </div>
            </div>
        </PortfolioSection>

        {/* Configuration Management */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Database className="w-6 h-6" />
              Configuration & Certificate Management
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Configuration Architecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">YAML Configuration</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Human-readable format</li>
                      <li>• Hierarchical structure</li>
                      <li>• Site-specific settings</li>
                      <li>• Global proxy configuration</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Dynamic Loading</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Runtime configuration parsing</li>
                      <li>• Validation and error handling</li>
                      <li>• Singleton pattern implementation</li>
                      <li>• Thread-safe access</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Certificate Management System</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Certificate Management
class CertificateManager {
private:
    std::string cert_dir_;
    std::string email_;
    std::string acme_server_;
    
public:
    bool ensure_certificate(const std::string& domain);
    CertificateInfo get_certificate_info(const std::string& domain) const;
    void setup_ssl_context(ssl::context& ctx, const std::string& domain);
    void check_renewals();
    
private:
    bool request_certificate_acme(const std::string& domain);
    bool generate_self_signed(const std::string& domain);
    bool certificate_exists(const std::string& domain) const;
    bool is_certificate_valid(const std::string& domain) const;
};

struct CertificateInfo {
    std::string domain;
    std::string cert_path;
    std::string key_path;
    std::chrono::system_clock::time_point expiry;
    bool is_self_signed;
    bool is_valid;
};

// Configuration Structures
struct SiteConfig {
    std::string domain;
    std::string backend;
    std::string tls;  // "auto", "manual", "off"
    bool websocket;
    int timeout_seconds;
};

struct ProxyConfig {
    int http_port;
    int https_port;
    std::string email;
    std::string cert_dir;
    std::string acme_server;
    int timeout_seconds;
    int max_connections;
    std::vector<SiteConfig> sites;
};`}
                  </pre>
                </div>
              </div>
            </div>
        </PortfolioSection>

        {/* Async I/O Architecture */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Asynchronous I/O & Performance Design
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Boost.Asio Integration</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Event Loop</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Single-threaded event loop</li>
                      <li>• Non-blocking I/O operations</li>
                      <li>• Callback-based async handling</li>
                      <li>• Efficient resource utilization</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Connection Management</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Async accept operations</li>
                      <li>• Connection pooling</li>
                      <li>• Graceful connection handling</li>
                      <li>• Resource cleanup</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Performance Optimizations</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Async Operation Patterns
void ConnectionHandler::start() {
    do_read();
}

void ConnectionHandler::do_read() {
    auto self = shared_from_this();
    http::async_read(socket_, buffer_, request_,
        [self](beast::error_code ec, std::size_t bytes) {
            self->on_read(ec, bytes);
        });
}

void ConnectionHandler::on_read(beast::error_code ec, 
                               std::size_t bytes_transferred) {
    if (!ec) {
        handle_request();
    } else {
        close_connection();
    }
}

// Backend Connection Pool
class BackendPool {
private:
    std::queue<std::shared_ptr<tcp::socket>> available_connections_;
    std::mutex pool_mutex_;
    
public:
    std::shared_ptr<tcp::socket> get_connection(
        const std::string& host, int port);
    void return_connection(std::shared_ptr<tcp::socket> conn);
};`}
                  </pre>
                </div>
              </div>
            </div>
        </PortfolioSection>

        {/* SSL/TLS Implementation */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              SSL/TLS & Security Architecture
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">TLS Implementation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Certificate Types</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Self-signed certificates</li>
                      <li>• Let's Encrypt ACME protocol</li>
                      <li>• Manual certificate installation</li>
                      <li>• Automatic renewal system</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Security Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• TLS 1.2+ support</li>
                      <li>• Strong cipher suites</li>
                      <li>• Perfect forward secrecy</li>
                      <li>• Certificate validation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">ACME Protocol Implementation</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// ACME Certificate Request Flow
bool CertificateManager::request_certificate_acme(const std::string& domain) {
    // 1. Create account with ACME server
    auto account_key = generate_account_key();
    auto account_url = register_account(account_key, email_);
    
    // 2. Create order for domain
    auto order_url = create_order(account_url, domain);
    
    // 3. Get authorization challenges
    auto challenges = get_challenges(order_url);
    
    // 4. Complete HTTP-01 challenge
    for (const auto& challenge : challenges) {
        if (challenge.type == "http-01") {
            setup_challenge_response(challenge);
            notify_challenge_ready(challenge.url);
            wait_for_validation(challenge.url);
        }
    }
    
    // 5. Generate CSR and finalize order
    auto csr = generate_csr(domain);
    finalize_order(order_url, csr);
    
    // 6. Download certificate
    auto cert_url = get_certificate_url(order_url);
    auto certificate = download_certificate(cert_url);
    
    // 7. Save certificate and key
    save_certificate(domain, certificate);
    return true;
}`}
                  </pre>
                </div>
              </div>
            </div>
        </PortfolioSection>

        {/* Error Handling & Monitoring */}
        <PortfolioSection className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Database className="w-6 h-6" />
              Error Handling & Monitoring Design
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Error Handling Strategy</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Connection Errors</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Backend connection failures</li>
                      <li>• Timeout handling</li>
                      <li>• Graceful degradation</li>
                      <li>• Client error responses</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium text-sm">Certificate Errors</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Certificate validation failures</li>
                      <li>• ACME challenge failures</li>
                      <li>• Automatic fallback to self-signed</li>
                      <li>• Renewal error handling</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Logging & Monitoring</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
{`// Logging Infrastructure
enum class LogLevel {
    DEBUG,
    INFO,
    WARNING,
    ERROR,
    CRITICAL
};

class Logger {
public:
    static void log(LogLevel level, const std::string& message);
    static void log_request(const std::string& method, 
                           const std::string& path,
                           const std::string& host,
                           int status_code,
                           std::chrono::milliseconds duration);
    static void log_error(const std::string& component,
                         const std::string& error,
                         const std::string& context);
};

// Metrics Collection
struct ProxyMetrics {
    std::atomic<uint64_t> total_requests{0};
    std::atomic<uint64_t> successful_requests{0};
    std::atomic<uint64_t> failed_requests{0};
    std::atomic<uint64_t> active_connections{0};
    std::atomic<uint64_t> bytes_transferred{0};
    
    std::chrono::steady_clock::time_point start_time;
    std::map<std::string, uint64_t> domain_requests;
    std::map<int, uint64_t> status_codes;
};`}
                  </pre>
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
