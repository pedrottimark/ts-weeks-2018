import * as React from 'react'

import { Purchase } from './types'

type Props = {
    purchase: Purchase
}

const PurchaseRow = ({
    purchase: {
        product: { description, unit },
        quantity
    }
}: Props) => (
    <tr>
        <td className="quantity">{quantity}</td>
        <td className="unit">{unit}</td>
        <td className="description">{description}</td>
    </tr>
)

export default PurchaseRow
