import Image from "next/image";
import logo from "@/assets/logo.svg";
import display from "@/assets/display.svg";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Constants } from '@/Utils/Constants';

import './GeneralDataSection.css'


export function GeneralDataSection() {
    const router = useRouter()

    return (
        <div className="header-div">
            <Image
                src={logo}
                alt="Luria by PX"
                className="logo-img"
                onClick={() => router.push(Constants.Routes.root)}
                />
            <div className="options-div">
                <button className="wksp-button">
                    <Image
                        src={display}
                        alt="Display icon"
                        className="wksp-icon"></Image>
                    Workspace PX Lab
                </button>
                <div className="lenguages">
                    <button className="lenguage-pt">PT</button>
                    <button className="lenguage-en">EN</button>
                </div>
                <button className="user-button">
                    <UserCircleIcon className="user-icon" />
                    Arthur Melo
                </button>
            </div>
        </div>
    )
}