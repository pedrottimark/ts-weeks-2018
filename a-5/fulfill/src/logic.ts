import { Purchase } from './types'

// Given purchases and id, return fulfilled property.
export const getFulfilled = (purchases: Purchase[], id: number): boolean => {
    const purchase = purchases.find(({id: purchaseId}) => purchaseId === id) as Purchase
    return purchase.fulfilled
}

// Given purchases and id, return a new array with the same purchase objects,
// except a new object which has id,
// in which the fulfilled property has opposite boolean value.
// export const toggleFulfilled = (purchases: Purchase[], id: number): Purchase[] =>
// TODO
