'use client'

import { Header as DesktopHeader } from "@/components/header/desktop/Header";
import { Header as MobileHeader } from "@/components/header/mobile/Header";

export function Header() {
    return (
        <>
            {window.innerWidth >= 1400 ? <DesktopHeader /> : <MobileHeader />}
        </>
    )
}