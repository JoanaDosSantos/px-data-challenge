'use client'

import empty from "@/assets/emptyicon.svg";
import Image from "next/image";
import './NoCards.css'
import { PlusIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { Constants } from "@/Utils/Constants";

export default function NoCardsPage() {
    const router = useRouter();
    return (
        <section className="emptypage-section">
            <div className="emptypage-div">
                <Image src={empty} alt="Empty icon" className="emptypage-icon"></Image>
                <p className="emptypage-title">Não há cards criados</p>
                <p className="emptypage-description">Os cards que criar vão aparecer aqui.</p>
                <button className="emptypage-button" onClick={() => router.push(Constants.Routes.newCard)}>
                    <PlusIcon className="p-icon" />
                    Novo card
                </button>
            </div>
        </section>
    )
}