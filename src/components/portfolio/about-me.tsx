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
                Lorem ipsum dolor sit amet.
            </p>
            <p className="text-sm my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit suscipit, sint est eius dolorum et iusto? Aut aliquam quidem
            </p>
            <p className="text-sm my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo voluptatibus eum eos ut nihil modi quibusdam nulla ipsum quod.
            </p>
            <div className="flex gap-3 flex-wrap items-center m-2 ">
                <Link href={""}>
                    <FaGithub className="w-6 h-6" />
                </Link>
                <Link href={""}>
                    <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link href={""}>
                    <FaXTwitter className="w-6 h-6" />
                </Link>
                <Link href={"https://www.google.com"}>
                    <FaDiscord className="w-6 h-6" />
                </Link>
                <Link href={""}>
                    <FaMediumM className="w-6 h-6" />
                </Link>
                <Button variant={"secondary"} className="text-sm hover:cursor-pointer"><File /> Resume</Button>
            </div>
        </div>
    </>)
}