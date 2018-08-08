import { Product, Purchase } from './types'

export const fetchDeletePurchase = (id: number) =>
    fetch(`/purchases/${id}`, {
        method: 'DELETE'
    })

export const fetchGetProduct = (productId: number): Promise<Product> =>
    fetch(`/products/${productId}`).then(response => {
        if (!response.ok) {
            throw new Error(`getProduct status=${response.status}`)
        }

        return response.json()
    })

export const fetchGetPurchases = (): Promise<Purchase[]> =>
    fetch(`/purchases?_expand=product`).then(response => {
        if (!response.ok) {
            throw new Error(`getPurchases status=${response.status}`)
        }

        return response.json()
    })
