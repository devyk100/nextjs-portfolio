import { DiJava, DiJavascript } from "react-icons/di";
import { Separator } from "../ui/separator";
import { FaGolang } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { SiKotlin, SiTypescript } from "react-icons/si";

export default function SkillsSection() {
    return (<>
        <div className="text-sm my-2">
            <div>
                <h2 className="font-semibold my-1">
                    Languages
                </h2>
                <p className="flex flex-wrap gap-5 items-center">
                    <span className="flex items-center gap-1">
                        Golang <FaGolang className="w-6 h-6" />
                    </span>
                    <span className="h-full">
                        C++ 20
                    </span>
                    <span className="flex items-center gap-1">
                        TypeScript <SiTypescript className="w-4 h-4"/>
                    </span>
                    <span className="flex items-center gap-1">
                        Java <DiJava className="w-6 h-6"/>
                    </span>
                    <span className="flex items-center gap-1">
                        Kotlin <SiKotlin className="w-3 h-3"/>
                    </span>
                </p>
            </div>
            <Separator />
            <div>
                <h2 className="font-semibold my-1">
                    Libraries and Frameworks
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eligendi?
                </p>
            </div>
            <Separator />
            <div>
                <h2 className="font-semibold my-1">
                    Tools
                </h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, soluta.
                </p>
            </div> 
            <Separator />
        </div>
    </>)
}