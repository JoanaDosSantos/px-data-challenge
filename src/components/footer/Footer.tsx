import Image from "next/image";
import home from "@/assets/home.svg";
import component from "@/assets/component.svg";
import frame from "@/assets/frame.svg";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

import './Footer.css'

export function Footer() {
    return (
        <section className="main-section">
            <div className="main-footer">
                <button className="menu-icons">
                    <Image src={home} alt="Home page"></Image>
                </button>
                <button className="menu-icons">
                    <Image src={component} alt="Components page"></Image>
                </button>
                <button className="menu-icons-selected"><Squares2X2Icon /></button>
                <button className="menu-icons">
                    <Image src={frame} alt="Frame pages" className="item-selected"></Image>
                </button>
            </div>
        </section>
    )
}