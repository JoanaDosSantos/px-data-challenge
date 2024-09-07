'use client'

import { Header as DesktopHeader } from "@/components/header/desktop/Header";
import { Header as MobileHeader } from "@/components/header/mobile/Header";
import { useEffect, useState } from "react";

export function Header() {
    const [winWidth, setWinWidth] = useState(1400)

    useEffect(() => {
        setWinWidth(window.innerWidth)
    }, [])

    return (
        <>
            {winWidth >= 1400 ? <DesktopHeader /> : <MobileHeader />}
        </>
    )
}