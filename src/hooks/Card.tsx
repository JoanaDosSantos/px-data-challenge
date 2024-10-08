'use client'

import { ICard, ICreateCard } from '@/interfaces/ICard';
import { CardService } from '@/services/CardService';
import { _fake_cardData } from '@/Utils/_fakeCardData';
import { Constants } from '@/Utils/Constants';
import { LocalStorage, splitWords } from '@/Utils/Utils';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

interface CardProps {
    children: ReactNode;
}

interface ICardContextData {
    cards: Array<ICard>
    favorites: Array<number>
    favoriteCard: (cardId: number) => void
    unFavoriteCard: (cardId: number) => void
    isGridView: boolean
    setIsGridView: Dispatch<SetStateAction<boolean>>
    filterCards: (searchText: string) => void
    loadMockedData: () => void
    filterFavorites: () => void
    saveNewCard: (card: ICreateCard) => void
    deleteCard: (cardId: number) => void
    filterByTag: (tag: string) => void
    getAllTags: () => Array<string>
}

const CardContextData = createContext<ICardContextData>({} as ICardContextData);

export function CardContextProvider({ children }: CardProps) {
    const [cards, setCards] = useState<Array<ICard>>([])
    const [favorites, setFavorites] = useState<Array<number>>([])
    const [isGridView, setIsGridView] = useState<boolean>(false)

    useEffect(() => {
        getFavoritesFromCache()
        setCards(new CardService().getCards())
    }, [])

    function filterByTag(tag: string) {
        setCards(new CardService().getCards().filter(card => card.tags?.includes(tag)))
    }

    function deleteCard(cardId: number) {
        const newCardsArray = new CardService().getCards().filter(card => card.id != cardId)

        new CardService().setCards(newCardsArray)

        setCards(prev => prev.filter(card => card.id != cardId))
    }

    function filterCards(searchText: string) {
        if (searchText == '') {
            setCards(new CardService().getCards())
            return
        }

        setCards(
            new CardService().getCards().filter(card => card.title.toLowerCase().includes(searchText.toLowerCase())
                || card.content.filter(content => splitWords(content.title).map(each => each.toLowerCase()).includes(searchText.toLowerCase())).length > 0)
        )
    }

    function filterFavorites() {
        setCards(cards.filter(c => favorites.includes(c.id)))
    }

    function saveNewCard(card: ICreateCard) {
        const service = new CardService()
        const currentCards = service.getCards()

        const greaterCardId = currentCards.sort((a, b) => a.id < b.id ? 1 : -1)[0]?.id ?? 1
        const greaterContentId = currentCards.sort((a, b) => a.id < b.id ? 1 : -1)[0]?.content.sort((a, b) => a.id < b.id ? 1 : -1)[0]?.id ?? 1

        const _builtedCard: ICard = {
            ...card,
            id: greaterCardId + 1,
            content: card.content.map((c, index) => ({ ...c, id: greaterContentId + (index + 1) }))
        }

        service.setCards([...currentCards, _builtedCard])
        filterCards('')
    }

    function loadMockedData() {
        new CardService().setCards(_fake_cardData)
        setCards(_fake_cardData)
    }

    function getFavoritesFromCache() {
        const _fav = new LocalStorage().get<Array<number>>(Constants.LocalStorageKeys.FavoriteCardsIds)
        setFavorites(_fav)
    }

    function setFavoritesOnCache(newFavorites: Array<number>) {
        new LocalStorage().set<Array<number>>({ key: Constants.LocalStorageKeys.FavoriteCardsIds, data: newFavorites })
    }

    function favoriteCard(cardId: number) {
        const _newFav = [...favorites, cardId]
        setFavorites(_newFav)

        setFavoritesOnCache(_newFav)
    }

    function unFavoriteCard(cardId: number) {
        const _newFav = favorites.filter(f => f != cardId)
        setFavorites(_newFav)

        setFavoritesOnCache(_newFav)
    }

    function getAllTags() {
        const tags: Array<string> = []
        cards.map(card => {
            if (card.tags && card.tags.length > 0) tags.push(...card.tags)
        })

        return tags
    }

    return (
        <CardContextData.Provider value={{
            cards,
            favorites,
            favoriteCard,
            unFavoriteCard,
            isGridView,
            setIsGridView,
            filterCards,
            loadMockedData,
            filterFavorites,
            saveNewCard,
            deleteCard,
            filterByTag,
            getAllTags
        }}>
            {children}
        </CardContextData.Provider>
    )
}

export function useCard() {
    const context = useContext(CardContextData);

    return context;
}