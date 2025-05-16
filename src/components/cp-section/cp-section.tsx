"use client"
import { ReactNode, useEffect, useState } from "react"
import axios from "axios"
import { Skeleton } from "@/components/ui/skeleton"
import { SiCodeforces, SiLeetcode } from "react-icons/si"
import Link from "next/link"

type CPUserInfo = {
    maxRating: Number;
    currentRating: Number;
    profilePic: string;
    maxRank: string;
}

export default function CPSection() {
    const [userInfo, setUserInfo] = useState<CPUserInfo | null>(null);
    useEffect(() => {
        (async () => {
            console.log("Triggering the async function")
            const response = await axios.get("https://codeforces.com/api/user.info?handles=ShonenDev&checkHistoricHandles=false")
            console.log(response.data.result[0])
            const user = response.data.result[0]
            setUserInfo({
                currentRating: user.rating,
                maxRank: user.maxRank,
                maxRating: user.maxRating,
                profilePic: user.avatar
            })
            console.log(response)
        })()
    }, [])

    return (<>
        <div className="mt-2 flex flex-wrap gap-3">
            <div className="flex flex-col text-sm">
                {
                    userInfo == null ? <div className="flex flex-col gap-1">
                        <Skeleton className="w-[100px] h-[15px] rounded-full" />
                        <Skeleton className="w-[100px] h-[7px] rounded-full" />
                        <Skeleton className="w-[100px] h-[7px] rounded-full" />
                    </div> : <>
                        <Link href={""} className="flex gap-2 items-center text-sm">
                            <SiCodeforces className="" /> <span className="text-sm">Codeforces</span>
                        </Link>
                        <div className="flex select-none flex-col font-light text-xs relative">
                            <div>Max Rating: {userInfo.maxRating as ReactNode}</div>
                            <div>Current Rating: {userInfo.currentRating as ReactNode}</div>
                            <div>Max Rank: {userInfo.maxRank}</div>
                        </div>
                    </>
                }
            </div>
            <div className="">
                <Link href={""} className="text-sm flex items-center h-fit gap-1">
                    <SiLeetcode /> Leetcode
                </Link>
            </div>
            <div className="h-fit">
                <Link href={""} className="text-sm h-fit flex items-center">Atcoder</Link>
            </div>
            
        </div>
    </>)
}