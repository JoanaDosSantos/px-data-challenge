'use client'

import { GeneralDataSection } from "./components/generalDataSection/GeneralDataSection";
import { CardsActions } from "./components/cardsActions/CardsActions";
import './Header.css'
import { FilterSection } from "./components/filterSection/FilterSection";

export function Header() {

    return (
        <header>
            <GeneralDataSection />
            <CardsActions />
            <div className="mobile-description-my-cards">
                <a className="mobile-my-cards">Meus cards</a>
            </div>
            <FilterSection />
        </header>
    )
}