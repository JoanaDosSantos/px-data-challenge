export class LocalStorage {
    get<T>(dataKey: string) {
        return JSON.parse(localStorage.getItem(dataKey) ?? '[]') as T
    }

    set<T>(body: { key: string, data: T }) {
        localStorage.setItem(body.key, JSON.stringify(body.data))
    }
}

export function splitWords(word: string, splitChar: string = ' '): Array<string>{
    return word.split(splitChar)
}