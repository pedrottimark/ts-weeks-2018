import { Food, Mineral, Vitamin } from './types'

const convertFromJSON = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response.json()
}

export const fetchGetFoods = (): Promise<Food[]> => fetch(`/api/foods`).then(convertFromJSON)

export const fetchGetMinerals = (): Promise<Mineral[]> => fetch(`/api/minerals`).then(convertFromJSON)

export const fetchGetVitamins = (): Promise<Vitamin[]> => fetch(`/api/vitamins`).then(convertFromJSON)
