import { Product, Purchase } from './types'

export const fetchGetProduct = (productId: number): Promise<Product> =>
    fetch(`/products/${productId}`).then(response => {
        if (!response.ok) {
            throw new Error(`getProducts status=${response.status}`)
        }

        return response.json()
    })

export const fetchGetPurchases = (): Promise<Purchase[]> =>
    fetch(`/purchases?_expand=product`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`getPurchases status=${response.status}`)
            }

            return response.json()
        })
        .then((purchases: Purchase[]) =>
            purchases.sort((purchaseA: Purchase, purchaseB: Purchase) => {
                const locationA = purchaseA.product.location
                const locationB = purchaseB.product.location
                return locationA === locationB ? 0 : locationA < locationB ? -1 : 1
            })
        )

// Given a purchase object, make a PATCH request
// to update on server just the fulfilled property.
// export const fetchPatchFulfilled = (id: number, fulfilled: boolean) =>
// TODO
