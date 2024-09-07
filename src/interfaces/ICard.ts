export interface ICard {
    id: number
    title: string
    description: string
    image?: string
    tags?: Array<string>
    content: Array<ICardContent>
}

export interface ICardContent {
    id: number
    title: string
    isNew: boolean
}

export interface ICreateCard extends Omit<ICard, 'id' | 'content'>{
    content: Array <Omit<ICardContent, 'id'>>
}