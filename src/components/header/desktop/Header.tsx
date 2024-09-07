'use client'

import { GeneralDataSection } from "./components/generalDataSection/GeneralDataSection";
import { CardsActions } from "./components/cardsActions/CardsActions";
import { FilterSection } from "./components/filterSection/FilterSection";
import './Header.css'

export function Header() {

    return (
        <header>
            <GeneralDataSection />
            <CardsActions />
            <div className="mycards-div">
                <p className="my-cards">Meus cards</p>
            </div>
            <FilterSection />
        </header>
    )
}