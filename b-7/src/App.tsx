import * as React from 'react'

import './App.css'

import Header from './Header'
import Switch from './Switch'

import { categories } from './content'
import { fetchGetFoods, fetchGetMinerals, fetchGetVitamins } from './fetch'
import { Food, Mineral, Vitamin } from './types'

type Props = {}
type State = {
    foods: Food[][]
    isWaiting: boolean
    message: string
    minerals: Mineral[]
    vitamins: Vitamin[]
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            foods: categories.map(() => []),
            isWaiting: true,
            message: '',
            minerals: [],
            vitamins: []
        }
    }

    public componentDidMount() {
        Promise.all([fetchGetFoods(), fetchGetMinerals(), fetchGetVitamins()])
            .then(([foods, minerals, vitamins]) => {
                // Separate foods by category.
                this.setState({
                    foods: categories.map(category => foods.filter(food => food.category === category)),
                    minerals,
                    vitamins,
                    isWaiting: false
                })
            })
            .catch(error => {
                this.setState({
                    message: error.message,
                    isWaiting: false
                })
            })
    }

    public render() {
        const { foods, isWaiting, message, minerals, vitamins } = this.state
        return (
            <React.Fragment>
                <Header />
                <Switch
                    foods={foods}
                    isWaiting={isWaiting}
                    hasError={message.length !== 0}
                    minerals={minerals}
                    vitamins={vitamins}
                />
            </React.Fragment>
        )
    }
}

export default App
