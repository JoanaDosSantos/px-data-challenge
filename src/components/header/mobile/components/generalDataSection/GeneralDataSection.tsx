'use client'

import Image from "next/image";
import logo from "@/assets/logo.svg";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import menu from "@/assets/frame.svg"

import './GeneralDataSection.css'

export function GeneralDataSection() {
    return (
        <div className="mobile-header-section">
            <button className="mobile-menu-button">
                <Image src={menu} alt="Frame pages" className="mobile-menu-icon"></Image>
            </button>
            <Image
                src={logo}
                alt="Luria by PX"
                className="mobile-logo-img"></Image>
            <button className="mobile-user-button">
                <UserCircleIcon className="mobile-user-icon" />
            </button>
        </div>
    )
}