import * as React from 'react'
import { Route } from 'react-router-dom'

import { Mineral, Vitamin } from './types'

type Props = {
    minerals: Mineral[]
    vitamins: Vitamin[]
}

// If there are at least two items from which to select a mineral or vitamin,
// render a button to go to a random page, unless it is the current page.
const HealthyButton = ({ minerals, vitamins }: Props) => {
    const n = minerals.length + vitamins.length
    if (n < 2) {
        return null
    }
    return (
        <Route
            render={({ history }) => (
                <button
                    onClick={() => {
                        const i = Math.floor(Math.random() * n)
                        const length = minerals.length
                        const pathname =
                            i < length ? `/minerals/${minerals[i].id}` : `/vitamins/${vitamins[i - length].id}`
                        if (pathname !== history.location.pathname) {
                            history.push(pathname)
                        }
                    }}
                >
                    I’m Feeling Healthy
                </button>
            )}
        />
    )
}

export default HealthyButton
