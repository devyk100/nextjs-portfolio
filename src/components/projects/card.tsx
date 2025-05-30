import { ReactNode } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Card({ name, desc, children, coverUrl, point1, point2, techStack, className }: {
    name: string;
    coverUrl: string;
    desc: string;
    children?: ReactNode;
    point1: string;
    point2: string;
    techStack?: string;
    className?: string;
}) {
    return (<>
        <div className={cn("relative overflow-hidden rounded-2xl border max-w-[325px] dark:hover:border-white/20 hover:border-zinc-300 transition-colors duration-200 border-zinc-200 dark:border-white/10 bg-zinc-100/[0.2] dark:bg-white/[0.02] p-4 backdrop-blur-md ", className)}>
        <div className="flex items-center justify-between">
            <h3 className=" font-semibold dark:text-white mt-2">{name}</h3>
            <h6 className="text-xs magnetic dark:bg-zinc-300 dark:text-black p-1 rounded-sm text-wrap text-white bg-zinc-800 w-fit text-right h-fit select-none">{techStack}</h6>
        </div>
            <p className="mt-1 text-sm text-zinc-500 dark:text-white/70">{desc}</p>
            <div className="text-sm mt-1">
                <div className="h-[214px] overflow-hidden rounded-lg">
                    <Image
                        alt="image"
                        src={coverUrl}
                        height={2000}
                        width={3000}
                        className="w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
                    />
                </div>
                <ul className="text-sm list-disc p-2 pl-6">
                    <li>{point1}</li>
                    <li>{point2}</li>
                </ul>
                {children}
            </div>
        </div>
    </>)
}