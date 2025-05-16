import { cn } from "@/lib/utils"
import { ReactNode } from "react";

export default function PortfolioSection({className, children}: {
    className?: string;
    children?: ReactNode
}) {
    return (<>
        <section className={cn("max-w-[1000px] w-full relative", className)}>
            {children}
        </section>
    </>)
}