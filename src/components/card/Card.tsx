'use client'

import { useState } from "react"
import Image from "next/image"
import { ICard } from "@/interfaces/ICard"
import { ChevronDownIcon, StarIcon as StarIconOutline } from "@heroicons/react/24/outline"
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid"
import dotsIcon from "@/assets/threedots.svg"
import fileIcon from "@/assets/file.svg"
import chainIcon from "@/assets/anex.svg"
import newIcon from "@/assets/newanex.svg"

import './Card.css'
import { CardContent } from "./components/cardContent/CardContent"
import { CardTags } from "./components/cardTags/CardTags"
import { useCard } from "@/hooks/Card"

interface IProps {
    cardData: ICard
    isFavorite: boolean
}
export function Card({ cardData, isFavorite }: IProps) {
    const { favoriteCard, unFavoriteCard, isGridView } = useCard()

    const [isDataExpanded, setIsDataExpanded] = useState(false)

    const showTags: boolean = isDataExpanded && !!cardData.tags && cardData.tags.length > 0

    function handleFavoriteClick() {
        isFavorite
            ? unFavoriteCard(cardData.id)
            : favoriteCard(cardData.id)
    }

    return (
        <div className={`${!isGridView ? 'card-list-view' : ''} card`}>
            <div className="card-data-container">
                <div className="image-placeholder">
                    <span className="favorite" onClick={handleFavoriteClick}>{isFavorite ? <StarIconSolid fill="#f5f5f5" /> : <StarIconOutline />}</span>
                </div>

                <div className="text-container">
                    {
                        showTags
                            ? <CardTags tags={cardData.tags!} />
                            : null
                    }

                    <div className="title-container">
                        <h3>{cardData.title}</h3>
                        <span><Image src={dotsIcon} alt="Options" /></span>
                    </div>
                    <span>{cardData.description}</span>
                </div>

                <div className={`content-resume ${showTags && 'hasTags'}`} onClick={() => setIsDataExpanded(!isDataExpanded)}>
                    <div>
                        <Image src={fileIcon} alt="File" />
                        <span>{cardData.content.length} conteúdos</span>
                    </div>
                    <ChevronDownIcon className={`${isDataExpanded ? 'expanded' : ''}`} />
                </div>
            </div>
            {
                isDataExpanded
                    ? <div className="content-container">
                        <div className="contents">
                            {
                                cardData.content.map((c, index) =>
                                    <CardContent contentData={c} isLastItem={!((index + 1) != cardData.content.length)} />
                                )
                            }
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}