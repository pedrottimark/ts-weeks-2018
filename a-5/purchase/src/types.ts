export interface Product {
    description: string
    id: number
    location: string
    unit?: string
}

export interface Purchase {
    id: number
    product: Product
    productId: number
    quantity: number
}

export interface PostablePurchase {
    productId: number
    quantity: number
}
