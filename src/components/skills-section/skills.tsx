import { DiAws, DiJava, DiJavascript, DiLinux, DiNginx, DiPostgresql, DiRedis } from "react-icons/di";
import { Separator } from "../ui/separator";
import { FaAws, FaGolang } from "react-icons/fa6";
import { TbBrandCpp, TbBrandReactNative } from "react-icons/tb";
import { SiExpress, SiJetpackcompose, SiKotlin, SiNextdotjs, SiPrisma, SiRedux, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GitCommit, GitGraph } from "lucide-react";

export default function SkillsSection() {
    return (<>
        <div className="text-sm my-2">
            <div>
                <h2 className="font-semibold mt-2">
                    Languages
                </h2>
                <p className="flex flex-wrap gap-x-5 gap-y-1 items-center">
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
                    {/* <span className="flex items-center gap-1">
                        Kotlin <SiKotlin className="w-3 h-3"/>
                    </span> */}
                </p>
            </div>
            <Separator />
            <div>
                <h2 className="font-semibold mt-2">
                    Libraries and Frameworks
                </h2>
                <p className="flex flex-wrap gap-x-5 gap-y-1 items-center">
                    <span className="flex gap-x-1 items-center">
                        ReactJS <FaReact />
                    </span>
                    <span className="flex gap-x-1 items-center">
                        NextJS <SiNextdotjs />
                    </span>
                    <span>
                        NextAuth
                    </span>
                    <span className="flex gap-x-1 items-center">
                        Prisma <SiPrisma />
                    </span>
                    <span>
                        Gin
                    </span>
                    <span className="flex gap-x-1 items-center">
                        React Native <TbBrandReactNative />
                    </span>
                    <span className="flex gap-x-1 items-center">
                        Jetpack Compose <SiJetpackcompose />
                    </span>
                    <span className="flex gap-x-1 items-center">
                        ExpressJS <SiExpress />
                    </span>
                    <span>
                        Zustand
                    </span>
                    <span className="flex gap-x-1 items-center">
                        Redux <SiRedux />
                    </span>
                </p>
            </div>
            <Separator />
            <div>
                <h2 className="font-semibold mt-2">
                    Tools
                </h2>
                <p className="flex flex-wrap gap-x-5 gap-y-1 items-center">
                    <span className="flex gap-x-1 items-center">
                        Linux <DiLinux />
                    </span>
                    <span className="flex gap-x-1 items-center">
                        Git <GitGraph className="h-4 w-4" />
                    </span>
                    <span className="flex gap-x-1 items-center">
                        AWS <FaAws className="h-4 w-4" />
                    </span>
                    <span className="flex gap-x-1 items-center">
                        PostgreSQL <DiPostgresql className="h-6 w-6"/>
                    </span>
                    <span className="flex gap-x-1 items-center">
                        Redis <DiRedis className="h-6 w-6"/>
                    </span>
                    <span className="flex gap-x-1 items-center">
                        Nginx <DiNginx className="h-6 w-6"/>
                    </span>
                </p>
            </div> 
            <Separator />
        </div>
    </>)
}