'use client'

import { ICard } from "@/interfaces/ICard"
import { Card } from "../card/Card"
import { useCard } from "@/hooks/Card"

import './CardsContainer.css'

export function CardsContainer() {
    const { cards, favorites, isGridView } = useCard()

    return (
        <section className={`${!isGridView ? 'list-view-container' : ''} card-container`}>
            {
                cards.map(d =>
                    <Card
                        cardData={d}
                        isFavorite={favorites && favorites.includes(d.id)}
                        key={d.id} />
                )
            }
        </section>
    )
}