import CPSection from "@/components/cp-section/cp-section";
import AboutMe from "@/components/portfolio/about-me";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import Card from "@/components/projects/card";
import ProjectCards from "@/components/projects/project-cards";
import SkillsSection from "@/components/skills-section/skills";
import { AnimatedBackground } from "@/components/ui/animated-bg";
import { Button } from "@/components/ui/button";
import NavButton from "@/components/ui/nav-button";
import ScrollProgress from "@/components/ui/scroll-progress";
import ThemeToggle from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { GraduationCap, Languages, Link2, PersonStanding } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { DiGit, DiOpensource } from "react-icons/di";
import { FaCertificate, FaGit } from "react-icons/fa";
import { GiAchievement, GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
const glassClass =
  "dark:bg-white/10 bg-violet-300/10 backdrop-blur-2xl";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <ThemeToggle className="fixed top-3 md:right-1/12 lg:right-3/12 right-2 z-[9999]" />
      <ScrollProgress />
      <main className={cn("relative w-full overflow-x-hidden text-foreground flex items-center justify-center flex-col px-3", glassClass)}>

        <PortfolioSection className="flex justify-between items-center">
          <div className="w-full m-2">
            <NavButton href="#">Home</NavButton>
            <NavButton href="#projects">Projects</NavButton>
          </div>

        </PortfolioSection>

        <PortfolioSection className="mt-10">
          <div className="flex flex-wrap justify-around">
            <div className="min-w-[200px] max-w-[300px] flex flex-col gap-2 items-center">
              <Image src={"/profile.png"} height={100} width={100} className="rounded-full w-32 mt-10 border-[0.5px] border-zinc-200 h-32 object-cover" alt="profile pic"></Image>
              <h2 className="text-lg w-fit text-center text-foreground font-semibold magnetic px-2">
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
          <h1 className="text-lg font-semibold my-1 flex gap-2 items-center underline-wavy-primary magnetic px-1 w-fit text-foreground">Skills <GiSkills /></h1>
          <SkillsSection />
        </PortfolioSection>

        <PortfolioSection className="mt-10">
          <h3 className="font-semibold underline-wavy-primary magnetic px-1 w-fit text-foreground">Competitive Programming</h3>
          <CPSection />
        </PortfolioSection>

        <PortfolioSection className="mt-10" id="projects">
          <h1 className="font-semibold flex gap-1 items-center underline-wavy-primary magnetic px-1 w-fit text-foreground">Featured Projects <GrProjects /></h1>
          <ProjectCards />
        </PortfolioSection>

        <PortfolioSection className="mt-10">
          <h1 className="font-semibold flex gap-1 items-center underline-wavy-primary magnetic px-1 w-fit">Certifications <FaCertificate /></h1>
          <ul className="list-disc pl-5 gap-1 flex flex-col">
            <li className="w-full h-fit">
              <div className="w-full flex items-center justify-between flex-wrap gap-x-8 text-sm">
                <span className="w-screen block">Object Oriented Design</span>
                <span className="text-sm italic font-light">University of Alberta</span>
                <Link href={""} className="text-sm italic flex gap-1 items-center underline text-primary">Certificate <Link2 className="w-4 h-4" /> </Link>
              </div>
            </li>
            <li className="w-full">
              <div className="w-full flex items-center justify-between flex-wrap gap-x-8 text-sm">
                <span className="w-screen block">Design Patterns</span>
                <span className="text-sm italic font-light">University of Alberta</span>
                <Link href={""} className="text-sm italic flex gap-1 items-center underline text-primary">Certificate <Link2 className="w-4 h-4" /> </Link>
              </div>
            </li>
            <li className="w-full">
              <div className="w-full flex items-center justify-between flex-wrap gap-x-8 text-sm">
                <span className="w-screen block">Software Architecture</span>
                <span className="text-sm italic font-light">University of Alberta</span>
                <Link href={""} className="text-sm italic flex gap-1 items-center underline text-primary">Certificate <Link2 className="w-4 h-4" /> </Link>
              </div>
            </li>
          </ul>
        </PortfolioSection>

        <PortfolioSection className="mt-10">
          <h1 className="font-semibold flex gap-1 items-center underline-wavy-primary magnetic px-1 w-fit">
            Open Source <DiGit className="w-6 h-6" />
          </h1>
          <div className="text-sm">
            <ul className="list-disc pl-5">
              <li>AnkiDroid PRs</li>
              <li>Other PRs</li>
            </ul>
          </div>
        </PortfolioSection>

        <PortfolioSection className="mt-10">
          <h1 className="font-semibold flex gap-1 underline-wavy-primary magnetic px-1 w-fit">Education <GraduationCap /></h1>
          <ul className="text-sm">
            <li className="mt-2 flex justify-between">
              <div>
                <h3 className="">National Institute of Technology, Warangal</h3>
                <h4 className="font-light">BTech. (Bachelor of Technology)</h4>
                <h6 className="text-xs italic">in Electronics and Communication Engineering</h6>
                <p className="mt-1 font-light">
                  CGPA: 9.06 (2nd Year)
                  <Link className="text-xs hover:cursor-pointer" href={"https://drive.google.com/file/d/1n81WXyvOiA-UoHn_JXDLpfFufLkRc6OJ/view?usp=sharing"}>
                    <Button variant={"link"} className="text-xs p-1 hover:cursor-pointer">Gradesheet</Button>
                  </Link>
                </p>
              </div>
              <div className="font-semibold border-l-2 md:border-l-0">
                2023 - 2027
              </div>
            </li>
          </ul>
        </PortfolioSection>

        <PortfolioSection className="mt-10">
          <h1 className="font-semibold flex gap-1 items-center underline-wavy-primary magnetic px-1 w-fit">Other Achievements <GiAchievement /></h1>
          <ul className="text-sm mt-2 list-disc pl-5">
            <li>SIH @Waitlist Qualified</li>
            <li>Junior Skill Championship Round 3 Qualified - Web Technologies</li>
            <li>JEE Main 2023 - 99.1 percentile</li>
            <li>Regional Children's Science Congress by Navoadaya Vidyalaya Samiti - 2019 </li>
          </ul>
        </PortfolioSection>

        <PortfolioSection className="mt-10">
          <h1 className="font-semibold flex gap-1 underline-wavy-primary magnetic px-1 w-fit">Languages <Languages /></h1>
          <ul className="text-sm max-w-[500px] pl-5 list-disc mt-2">
            <li className="">
              <div className="flex gap-x-4 justify-between">
                <div>English</div>
                <div className="italic">Professional</div>
              </div>
            </li>
            <li >
              <div className="flex gap-x-4 justify-between">
                <div>Hindi</div>
                <div className="italic">Native</div>
              </div>
            </li>
            <li >
              <div className="flex gap-x-4 justify-between">
                <div>Japanese</div>
                <div className="italic flex flex-col items-end"><span>Very Basic</span> <span className="text-xs">(preparing for JLPT-N5)</span></div>
              </div>
            </li>
          </ul>
        </PortfolioSection>

        <PortfolioSection className="mt-10 mb-10">
          <h1 className="font-semibold flex gap-1 underline-wavy-primary magnetic px-1 w-fit">Positions of Responsibility <PersonStanding /></h1>
          <ul className="text-sm mt-2 flex flex-col">
            <li>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span>Software Development Club</span>
                  <span className="text-xs">Executive Member</span>
                </div>
                <div className="italic">
                  Nov'23 - Nov'24
                </div>
              </div>

              <div className="flex justify-between mt-1">
                <div className="flex flex-col">
                  <span>ECE Society</span>
                  <span className="text-xs">Executive Member</span>
                </div>
                <div className="italic">
                  Aug'24 - Sept'24
                </div>
              </div>
            </li>
          </ul>
        </PortfolioSection>

        <PortfolioSection className="mt-10">
          <div className="text-center w-full text-sm p-2 font-light select-none">
            © 2025 Developed by Yash
          </div>
        </PortfolioSection>
      </main>
    </>
  );
}
