import { Purchase } from './types'

export const deletePurchase = (purchases: Purchase[], id: number): Purchase[] =>
    purchases.filter(purchase => purchase.id !== id)
