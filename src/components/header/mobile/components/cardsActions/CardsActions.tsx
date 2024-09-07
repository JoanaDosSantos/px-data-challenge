'use client'

import { PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import './CardsActions.css'

export function CardsActions() {
    return (
        
        <div className="mobile-cards-section">
            <div className="mobile-title-div">
                <p className="mobile-title">Portals</p>
                <QuestionMarkCircleIcon className="mobile-portals-icon" />
            </div>
            <div className="mobile-cards-div">
                <button className="mobile-savedcards-button">
                    <StarIcon className="mobile-savedcards-icon" />
                    Cards salvos</button>
                <button className="mobile-newcards-button">
                    <PlusIcon className="mobile-newcards-icon" />
                    Novo card</button>
            </div>
        </div>
    )
}
