import { File, FileAudio, FileBadge, Github, GithubIcon, Linkedin, X } from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin, FaMailchimp, FaMediumM, FaTwitter } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AboutMe() {
    return (<>
        <div className="max-w-[700px] mt-5">
            <h3 className="font-semibold underline-wavy-primary magnetic px-1 w-fit">About Me</h3>
            <p className="text-sm my-2">
                Backend and Android Developer. Competitive Programmer.
            </p>
            <p className="text-sm my-2">
                I am a Software Engineer with the passion to write fast, scalable, and efficient code that works seamlessly.
            </p>
            <p className="text-sm mt-2">
                I am eager to contribute my skills and enthusiasm to a forward thinking organisation that values creativity, teamwork and passion drive for excellence.
            </p>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:cursor-pointer">Read more about Me</AccordionTrigger>
                    <AccordionContent className="select-none">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quam magni itaque ut quibusdam eius voluptatem, repellendus architecto consequuntur laudantium nulla, quod quae? Soluta, recusandae excepturi maiores quam sunt libero.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="flex gap-1 flex-wrap items-center my-2 ">
                <Link href={"https://github.com/devyk100"}>
                    <Button variant={"outline"} className="rounded-full hover:cursor-pointer" size={"icon"}>
                        <FaGithub className="w-6 h-6" />
                    </Button>
                </Link>
                <Link href={"https://www.linkedin.com/in/devyk100/"}>
                    <Button variant={"outline"} className="rounded-full hover:cursor-pointer" size={"icon"}>
                        <FaLinkedin className="w-6 h-6" />
                    </Button>
                </Link>
                <Link href={"https://x.com/devyk100"}>
                    <Button variant={"outline"} className="rounded-full hover:cursor-pointer" size={"icon"}>
                        <FaXTwitter className="w-6 h-6" />
                    </Button>
                </Link>
                <Link href={""}>
                    <Button variant={"outline"} className="rounded-full hover:cursor-pointer" size={"icon"}>
                        <FaDiscord className="w-6 h-6" />
                    </Button>
                </Link>
                <Link href={""}>
                    <Button variant={"outline"} className="rounded-full hover:cursor-pointer" size={"icon"}>
                        <FaMediumM className="w-6 h-6" />
                    </Button>
                </Link>
                <Link href={"https://drive.google.com/file/d/184CZvZU8kKpNBP__j15J4K4gro_CyI-O/view"}>
                    <Button variant={"outline"} className="text-sm hover:cursor-pointer"><File /> Resume</Button>
                </Link>
            </div>


        </div>
    </>)
}