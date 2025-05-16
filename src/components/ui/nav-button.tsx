import React from "react";
import { Button } from "./button";

export default function NavButton({children}: {
    children?: React.ReactNode;
}) {
    return (<>
        <Button variant={"ghost"} className="text-sm hover:cursor-pointer">
            {children}
        </Button>
    </>)
}