import * as React from 'react'

import { Purchase } from './types'
import FulfillRow from './FulfillRow'

type Props = {
    purchases: Purchase[]
}

const FulfillTable = ({ purchases }: Props) => (
    <table>
        <thead>
            <tr>
                <th scope="col" className="quantity" colSpan={2}>
                    Quantity
                </th>
                <th scope="col" className="description">
                    Description
                </th>
                <th scope="col" className="code">
                    PLU code
                </th>
            </tr>
        </thead>
        <tbody>{purchases.map(purchase => <FulfillRow key={purchase.id} purchase={purchase} />)}</tbody>
    </table>
)

export default FulfillTable
