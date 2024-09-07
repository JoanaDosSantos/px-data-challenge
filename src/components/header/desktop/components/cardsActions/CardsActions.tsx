import { PlusIcon, QuestionMarkCircleIcon, StarIcon } from "@heroicons/react/24/outline";
import './CardsActions.css'

export function CardsActions() {

    return (
        <div className="cards-section">
            <div className="title-div">
                <p className="title">Portals</p>
                <QuestionMarkCircleIcon className="portals-icon" />
            </div>
            <div className="cards-div">
                <button className="savedcards-button">
                    <StarIcon className="savedcards-icon" />
                    Cards salvos</button>
                <button className="newcards-button">
                    <PlusIcon className="newcards-icon" />
                    Novo card</button>
            </div>
        </div>
    )
}