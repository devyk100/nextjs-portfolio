import { Button } from "../ui/button";
import Card from "./card";
import Link from "next/link";

export default function ProjectCards() {
    return (<>
        <div className="flex flex-wrap gap-2 mt-2 items-start justify-center w-full">
            <Card desc="Realtime peer programming playground with collaborative editing and code execution" name="Kaicode" coverUrl="/image.webp" point1="Real-time collaborative editing with Y.js CRDT" point2="Secure Docker-based code execution with AI completions" techStack="Next.js, Go, WebSockets">
                <div className="p-2 flex justify-center">
                    <Link href="/kaicode">
                        <Button className="text-sm hover:cursor-pointer" size={"sm"}>
                            Learn More
                        </Button>
                    </Link>
                </div>
            </Card>

            <Card desc="AI-powered document management with RAG technology" name="Memoriva" coverUrl="/image.webp" point1="RAG pipeline for intelligent document retrieval" point2="Vector search with OpenAI embeddings and LLM integration" techStack="Next.js, Go, PostgreSQL">
                <div className="p-2 flex justify-center">
                    <Link href="/memoriva">
                        <Button className="text-sm hover:cursor-pointer" size={"sm"}>
                            Learn More
                        </Button>
                    </Link>
                </div>
            </Card>

            <Card desc="High-performance message queue system with clustering" name="Yuclase" coverUrl="/image.webp" point1="Fault-tolerant distributed message queue" point2="Custom binary protocol with persistent storage" techStack="Golang">
                <div className="p-2 flex justify-center">
                    <Link href="/yuclase">
                        <Button className="text-sm hover:cursor-pointer" size={"sm"}>
                            Learn More
                        </Button>
                    </Link>
                </div>
            </Card>

            <Card desc="High-performance reverse proxy with SSL/TLS and HTTP/2" name="Pristine" coverUrl="/image.webp" point1="Automatic SSL certificate management with Let's Encrypt" point2="Load balancing and WebSocket proxying capabilities" techStack="C++, Boost.Asio">
                <div className="p-2 flex justify-center">
                    <Link href="/pristine">
                        <Button className="text-sm hover:cursor-pointer" size={"sm"}>
                            Learn More
                        </Button>
                    </Link>
                </div>
            </Card>

            <Card desc="Simple competitive programming template manager" name="Mochi" coverUrl="/image.webp" point1="Template management for competitive programming" point2="Quick setup and file generation utilities" techStack="Golang">
                <div className="p-2 flex justify-center">
                    <Link href="/mochi">
                        <Button className="text-sm hover:cursor-pointer" size={"sm"}>
                            Learn More
                        </Button>
                    </Link>
                </div>
            </Card>

            <Card desc="Offline-first android app for data collection" name="iCrops" coverUrl="/image.webp" point1="Offline-first architecture for field data collection" point2="React Native with local storage and sync capabilities" techStack="React Native, React, Express">
                <div className="p-2 flex justify-center">
                    <span className="text-xs text-muted-foreground">Coming Soon</span>
                </div>
            </Card>
        </div>
    </>)
}
