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
        <div className="relative overflow-hidden rounded-2xl border w-full hover:border-white/20 transition-colors duration-200 md:w-[450px] border-white/10 bg-white/[0.02] p-4 backdrop-blur-md">
            <h3 className=" font-semibold text-white">{name}</h3>
            <p className="mt-1 text-sm text-white/70">{desc}</p>
            <div className="text-sm mt-1">
                <Image alt="image" src={coverUrl} height={100} width={100} className="w-full h-I[200px] object-cover" />
                <ul className="text-sm list-disc p-2 pl-6">
                    <li>{point1}</li>
                    <li>{point2}</li>
                </ul>
                {children}
            </div>
        </div>
    </>)
}