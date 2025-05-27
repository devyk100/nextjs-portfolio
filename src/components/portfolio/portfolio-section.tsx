import { cn } from "@/lib/utils"
import { ReactNode } from "react";
import { FadeInUp } from "../ui/fade-in-up";
// import  from "../ui/fade-in-up";

export default function PortfolioSection({ className, children, id }: {
    className?: string;
    children?: ReactNode;
    id?: string
}) {
    return (<>
        <section className={cn("max-w-[700px] lg:max-w-[1000px] w-full", className)} id={id}>
            {children}
        </section>
    </>)
}