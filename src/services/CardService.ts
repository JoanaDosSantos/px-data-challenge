import { ICard } from "@/interfaces/ICard";
import { Constants } from "@/Utils/Constants";
import { LocalStorage } from "@/Utils/Utils";

export class CardService {
    private localStorage = new LocalStorage()

    getCards() {
        return this.localStorage.get<Array<ICard>>(Constants.LocalStorageKeys.cardsData)
    }

    setCards(cards: Array<ICard>) {
        this.localStorage.set<Array<ICard>>({ key: Constants.LocalStorageKeys.cardsData, data: cards })
    }
}