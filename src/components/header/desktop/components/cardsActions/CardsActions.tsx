import { PlusIcon, QuestionMarkCircleIcon, StarIcon } from "@heroicons/react/24/outline";

import './CardsActions.css'
import { Constants } from '@/Utils/Constants';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCard } from "@/hooks/Card";

export function CardsActions() {
    const router = useRouter()

    const { filterFavorites, filterCards } = useCard()

    const [isFilteringForFavorites, setIsFilteringForFavorites] = useState(false)

    function handleShowFavorites() {
        isFilteringForFavorites ? filterCards('') : filterFavorites()
        setIsFilteringForFavorites(!isFilteringForFavorites)
    }

    return (
        <div className="cards-section">
            <div className="title-div">
                <p className="title">Portals</p>
                <QuestionMarkCircleIcon className="portals-icon" />
            </div>
            <div className="cards-div">
                <button className={`${isFilteringForFavorites ? 'active-btn' : ''} savedcards-button`} onClick={handleShowFavorites}>
                    <StarIcon className="savedcards-icon" />
                    Cards salvos
                </button>
                <button className="newcards-button" onClick={() => router.push(Constants.Routes.newCard)}>
                    <PlusIcon className="newcards-icon" />
                    Novo card</button>
            </div>
        </div>
    )
}