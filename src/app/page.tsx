import CPSection from "@/components/cp-section/cp-section";
import AboutMe from "@/components/portfolio/about-me";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import Card from "@/components/projects/card";
import ProjectCards from "@/components/projects/project-cards";
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
              <Image src={"/profile.png"} height={100} width={100} className="rounded-full w-32 mt-10 border-[0.5px] border-zinc-200 h-32 object-cover" alt="profile pic"></Image>
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
          <ProjectCards />
        </PortfolioSection>

        <PortfolioSection className="mt-5">
          <h1>Certifications</h1>
        </PortfolioSection>

      </main>
    </>
  );
}
