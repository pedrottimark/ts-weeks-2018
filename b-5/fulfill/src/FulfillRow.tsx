import * as React from 'react'

import { Purchase } from './types'

type Props = {
    purchase: Purchase
}

const FulfillRow = ({
    purchase: {
        product: { description, unit },
        productId,
        quantity
    }
}: Props) => (
    <tr>
        <td className="quantity">{quantity}</td>
        <td className="unit">{unit}</td>
        <td className="description">{description}</td>
        <td className="code">{productId}</td>
    </tr>
)

export default FulfillRow
