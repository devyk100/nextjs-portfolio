import { File, FileAudio, FileBadge, Github, GithubIcon, Linkedin, X } from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin, FaMailchimp, FaMediumM, FaTwitter } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";

export default function AboutMe() {
    return (<>
        <div className="max-w-[700px] mt-5">
            <h3 className="font-semibold">About Me</h3>
            <p className="text-sm my-2">
                Backend and Android Developer. Competitive Programmer.
            </p>
            <p className="text-sm my-2">
                I am a Software Engineer with the passion to write fast, scalable, and efficient backend systems that work seamlessly.
            </p>
            <p className="text-sm my-2">
                I am eager to contribute my skills and enthusiasm to a forward thinking organisation that values creativity, teamwork and passion drive for excellence.
            </p>
            <div className="flex gap-3 flex-wrap items-center m-2 ">
                <Link href={"https://github.com/devyk100"}>
                    <FaGithub className="w-6 h-6" />
                </Link>
                <Link href={"https://www.linkedin.com/in/devyk100/"}>
                    <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link href={"https://x.com/devyk100"}>
                    <FaXTwitter className="w-6 h-6" />
                </Link>
                <Link href={""}>
                    <FaDiscord className="w-6 h-6" />
                </Link>
                <Link href={""}>
                    <FaMediumM className="w-6 h-6" />
                </Link>
                <Link href={"https://drive.google.com/file/d/184CZvZU8kKpNBP__j15J4K4gro_CyI-O/view"}>
                <Button variant={"secondary"} className="text-sm hover:cursor-pointer"><File /> Resume</Button>
                </Link>
            </div>
        </div>
    </>)
}