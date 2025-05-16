import CPSection from "@/components/cp-section/cp-section";
import AboutMe from "@/components/portfolio/about-me";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import Card from "@/components/projects/card";
import SkillsSection from "@/components/skills-section/skills";
import { Button } from "@/components/ui/button";
import NavButton from "@/components/ui/nav-button";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Code, File } from "lucide-react";
import Image from "next/image";
import { CgWebsite } from "react-icons/cg";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center p-2">

        {/* Navbar */}
        <PortfolioSection>
          <div className="w-full m-2">
            <NavButton>Home</NavButton>
            <NavButton>Projects</NavButton>
          </div>
          <ThemeToggle className="absolute top-[2px] right-[2px]" />
        </PortfolioSection>

        <PortfolioSection className="mt-10">
          <div className="flex flex-wrap justify-around">
            <div className="min-w-[200px] max-w-[300px] flex flex-col gap-2 items-center">
              <Image src={"/profile.png"} height={100} width={100} className="rounded-full w-32 mt-10  h-32 object-cover" alt="profile pic"></Image>
              <h2 className="text-lg w-fit text-center font-semibold">
                Yash Ramesh Kumar
              </h2>
            </div>
            <AboutMe />
          </div>
        </PortfolioSection>

        {/* <PortfolioSection>
            Work Experience
        </PortfolioSection> */}

        <PortfolioSection className="mt-10">
          <h1 className="text-lg font-semibold my-1">Skills</h1>
          <SkillsSection />
        </PortfolioSection>

        <PortfolioSection className="mt-10">
          <h3 className="font-semibold">Competitive Programming</h3>
          <CPSection />
        </PortfolioSection>

        <PortfolioSection className="mt-10">
          <h1 className="text-lg font-semibold">Featured Projects</h1>
          <div className="flex flex-wrap gap-2 mt-2 items-center justify-center">
            <Card desc="Peer programming playground" name="Kaicode" >
              <Image alt="image" src={"/image.jpg"} height={100} width={100} className="w-full h-[200px] object-cover"/>
              <ul className="text-sm list-disc p-2 pl-6">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </ul>
              <div className="p-2 flex gap-1 text-sm">                
                <Button className="text-sm hover:cursor-pointer">
                  Live <CgWebsite />
                </Button>
                <Button variant={"outline"} className="text-sm hover:cursor-pointer">
                  Blog <File />
                </Button>
                <Button variant={"link"} className="text-sm hover:cursor-pointer">
                  Backend <Code />
                </Button>
                <Button variant={"link"} className="text-sm hover:cursor-pointer">
                  Frontend <Code />
                </Button>
              </div>
            </Card>

            <Card desc="Fullstack voice chat" name="Riotalk" >

            </Card>

            <Card desc="Blender MCP project" name="Blender MCP Project">

            </Card>

            <Card desc="A fault tolerant queue service" name="YuClase" >

            </Card>

            <Card desc="Using async io, reverse proxy and load balance" name="Reverse Proxy and Load Balance" >

            </Card>

            <Card desc="Offline-first android app for data collection" name="iCrops" >

            </Card>
          </div>
        </PortfolioSection>

        <PortfolioSection className="mt-5">
          <h1>Certifications</h1>
        </PortfolioSection>

      </main>
    </>
  );
}
