import React from "react";
import { Button } from "./button";
import Link from "next/link";

export default function NavButton({children, href}: {
    children?: React.ReactNode;
    href: string;
}) {
    return (<>
    <Link href={href}>
        <Button variant={"ghost"} className="text-sm hover:cursor-pointer">
            {children}
        </Button>
    </Link>
    </>)
}