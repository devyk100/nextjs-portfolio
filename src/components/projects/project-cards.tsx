import { Code } from "lucide-react";
import { Button } from "../ui/button";
import Card from "./card";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";
import { DiGithub } from "react-icons/di";
import { FaGithub, FaMedium } from "react-icons/fa";

export default function ProjectCards() {
    return (<>
        <div className="flex flex-wrap gap-2 mt-2 items-start justify-center w-full">
            <Card desc="Peer programming playground" name="Kaicode" coverUrl="/image.webp" point1="Lorem ipsum dolor sit amet." point2="Lorem ipsum dolor sit amet consectetur adipisicing." techStack="Next.js, Go, WebSockets">
                <div className="p-2 flex flex-wrap gap-1 text-sm">
                    <Button className="text-sm hover:cursor-pointer" size={"sm"}>
                        Live <CgWebsite />
                    </Button>
                    <Button variant={"outline"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Blog <FaMedium />
                    </Button>
                    <Button variant={"link"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Backend <FaGithub />
                    </Button>
                    <Button variant={"link"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Frontend <FaGithub />
                    </Button>
                </div>
            </Card>

            <Card desc="Fullstack voice chat" name="Riotalk" coverUrl="/image.webp" point1="Lorem ipsum dolor sit amet." point2="Lorem ipsum dolor sit amet consectetur adipisicing." techStack="Next.js, Go, WebRTC">
                <div className="p-2 flex flex-wrap gap-1 text-sm">
                    <Button className="text-sm hover:cursor-pointer" size={"sm"}>
                        Live <CgWebsite />
                    </Button>
                    <Button variant={"outline"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Blog <FaMedium />
                    </Button>
                    <Button variant={"link"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Backend <FaGithub />
                    </Button>
                    <Button variant={"link"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Frontend <FaGithub />
                    </Button>
                </div>
            </Card>

            <Card desc="Blender MCP project" name="Blender MCP Project" coverUrl="/image.webp" point1="Lorem ipsum dolor sit amet." point2="Lorem ipsum dolor sit amet consectetur adipisicing." techStack="TS, Python">
                <div className="p-2 flex flex-wrap gap-1 text-sm">
                    <Button className="text-sm hover:cursor-pointer" size={"sm"}>
                        Live <CgWebsite />
                    </Button>
                    <Button variant={"outline"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Blog <FaMedium />
                    </Button>
                    <Button variant={"link"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Backend <FaGithub />
                    </Button>
                    <Button variant={"link"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Frontend <FaGithub />
                    </Button>
                </div>
            </Card>

            <Card desc="A fault tolerant queue service" name="YuClase" coverUrl="/image.webp" point1="Lorem ipsum dolor sit amet." point2="Lorem ipsum dolor sit amet consectetur adipisicing." techStack="Golang">
                <div className="p-2 flex flex-wrap gap-1 text-sm">
                    <Button className="text-sm hover:cursor-pointer" size={"sm"}>
                        Live <CgWebsite />
                    </Button>
                    <Button variant={"outline"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Blog <FaMedium />
                    </Button>
                    <Button variant={"link"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Backend <FaGithub />
                    </Button>
                    <Button variant={"link"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Frontend <FaGithub />
                    </Button>
                </div>
            </Card>

            <Card desc="Using async io, reverse proxy and load balance" name="Reverse Proxy and Load Balance"coverUrl="/image.webp" point1="Lorem ipsum dolor sit amet." point2="Lorem ipsum dolor sit amet consectetur adipisicing." techStack="C++, Boost Asio">
                <div className="p-2 flex flex-wrap gap-1 text-sm">
                    <Button className="text-sm hover:cursor-pointer" size={"sm"}>
                        Live <CgWebsite />
                    </Button>
                    <Button variant={"outline"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Blog <FaMedium />
                    </Button>
                    <Button variant={"link"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Backend <FaGithub />
                    </Button>
                    <Button variant={"link"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Frontend <FaGithub />
                    </Button>
                </div>
            </Card>

            <Card desc="Offline-first android app for data collection" name="iCrops" coverUrl="/image.webp" point1="Lorem ipsum dolor sit amet." point2="Lorem ipsum dolor sit amet consectetur adipisicing." techStack="React Native, React, Express">
                <div className="p-2 flex flex-wrap gap-1 text-sm">
                    <Button className="text-sm hover:cursor-pointer" size={"sm"}>
                        Live <CgWebsite />
                    </Button>
                    <Button variant={"outline"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Blog <FaMedium />
                    </Button>
                    <Button variant={"link"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Backend <FaGithub />
                    </Button>
                    <Button variant={"link"} className="text-sm hover:cursor-pointer" size={"sm"}>
                        Frontend <FaGithub />
                    </Button>
                </div>
            </Card>
        </div>
    </>)
}