import { ReactNode } from "react";
import { Button } from "../ui/button";

export default function Card({name, desc, children}: {
    name: string;
    desc: string;
    children?: ReactNode;
}) {
    return (<>
        <div className="relative overflow-hidden rounded-2xl border w-full hover:border-white/20 transition-colors duration-200 md:w-[450px] border-white/10 bg-white/[0.02] p-4 backdrop-blur-md">
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
            {children}
        </div>
    </>)
}