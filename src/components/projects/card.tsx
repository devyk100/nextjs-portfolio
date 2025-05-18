import { ReactNode } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Card({ name, desc, children, coverUrl, point1, point2 }: {
    name: string;
    coverUrl: string;
    desc: string;
    children?: ReactNode;
    point1: string;
    point2: string;
}) {
    return (<>
        <div className="relative overflow-hidden rounded-2xl  border max-w-[325px] dark:hover:border-white/20 hover:border-zinc-300 transition-colors duration-200 border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/[0.02] p-4 backdrop-blur-md">
            <h3 className=" font-semibold dark:text-white">{name}</h3>
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