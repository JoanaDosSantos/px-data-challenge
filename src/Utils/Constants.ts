import { Theme } from "react-select";

export const Constants = {
    LocalStorageKeys: {
        FavoriteCardsIds: "FavoriteCardsIds",
        isFirstAccess: "isFirstAccess",
        cardsData: "cardsData"
    },
    HeaderSelectTheme: (theme: Theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary75: '#eeeeee',
            primary50: '#eeeeee',
            primary25: '#eeeeee',
            primary: '#e5cdec',
        },
    }),
    Routes:{
        root: '/',
        newCard: '/CreateCard',
        errorPage: '/ErrorPage',
        noCardsContent: '/NoCardsContent',
    }
}