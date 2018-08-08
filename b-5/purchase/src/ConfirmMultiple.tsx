import * as React from 'react'

type Props = {
    onAddBoth: () => void
    onKeepPrevious: () => void
    onKeepNew: () => void
    description: string
    quantityPrevious: number
    quantityNew: number
}

const ConfirmMultiple = ({ onAddBoth, onKeepPrevious, onKeepNew, description, quantityPrevious, quantityNew }: Props) => (
    <div className="confirmMultiple">
        <p>{`Your order already has some ${description}`}</p>
        <table>
            <tbody>
            <tr><td><button onClick={onAddBoth}>Add both quantities</button></td><td>{`${quantityPrevious + quantityNew}`}</td></tr>
            <tr><td><button onClick={onKeepPrevious}>Keep only the previous quantity</button></td><td>{`${quantityPrevious}`}</td></tr>
            <tr><td><button onClick={onKeepNew}>Keep only the new quantity</button></td><td>{`${quantityNew}`}</td></tr>
            </tbody>
        </table>
    </div>
)

export default ConfirmMultiple
