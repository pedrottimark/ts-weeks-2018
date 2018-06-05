import * as React from 'react'

import './App.css'
import { fetchDeletePurchase, fetchGetPurchases } from './fetch'
import { logicDeletePurchase } from './logic'
import PurchaseTable from './PurchaseTable'
import { Purchase } from './types'

type Props = {}

type State = {
    isGettingPurchases: boolean
    purchases: Purchase[]
}

class App extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props)
        this.state = {
            isGettingPurchases: false,
            purchases: []
        }
    }

    public componentDidMount() {
        this.setState({ isGettingPurchases: true })
        fetchGetPurchases()
            .then(purchases => {
                this.setState({ purchases, isGettingPurchases: false })
            })
            .catch(() => {
                this.setState({ isGettingPurchases: false })
            })
    }

    public onRemove = (id: number) => {
        fetchDeletePurchase(id)
        this.setState(({ purchases }) => ({
            purchases: deletePurchase(purchases, id)
        }))
    }

    public render() {
        const { isGettingPurchases, purchases } = this.state
        return <PurchaseTable purchases={purchases} waiting={isGettingPurchases} />
    }
}

export default App
