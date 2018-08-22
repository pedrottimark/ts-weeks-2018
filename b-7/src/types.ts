type Category = 'vegetables' | 'fruits' | 'grains' | 'protein' | 'oils' | 'fluids'
type Recommendation = -1 | 0 | 1

export type Food = {
    id: string
    category: Category
    recommendation: Recommendation
}

export type Mineral = {
    id: string
    name: string
    description: string
    examples: string[]
}

export type Vitamin = {
    id: string
    name: string
    solubility: string
    examples: string[]
}
