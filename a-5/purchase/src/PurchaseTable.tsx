import * as React from 'react'

import { Purchase } from './types'
import PurchaseRow from './PurchaseRow'

type Props = {
    purchases: Purchase[]
    waiting: boolean
}

const PurchaseTable = ({ purchases, waiting }: Props) => (
    <table className={waiting ? 'waiting' : ''}>
        <thead>
            <tr>
                <th scope="col" className="quantity" colSpan={2}>
                    Quantity
                </th>
                <th scope="col" className="description">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>{purchases.map(purchase => <PurchaseRow key={purchase.id} purchase={purchase} />)}</tbody>
    </table>
)

export default PurchaseTable
