import * as React from 'react'

import './App.css'
import { fetchGetPurchases } from './fetch'
import FulfillTable from './FulfillTable'
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

    public onFulfill = (id: number) => {
        /*
        this.setState(
            ({ purchases }) => ({
                purchases: toggleFulfilled(purchases, id)
            }),
            () => {
                fetchPatchFulfilled(id, getFulfilled(this.state.purchases, id))
            }
        )
        */
    }

    public render() {
        const { purchases } = this.state
        return <FulfillTable purchases={purchases} />
    }
}

export default App
