export interface Product {
    description: string
    id: number
    location: string
    unit?: string
}

export interface Purchase {
    fulfilled: boolean
    id: number
    product: Product
    productId: number
    quantity: number
}

export interface IsPatchingFulfilled {
    [key: string]: boolean
}
