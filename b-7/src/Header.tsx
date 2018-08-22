import * as React from 'react'

/*
import HealthyButton from './HealthyButton'

import { Mineral, Vitamin } from './types'
*/

import { categories } from './content'

/*
type Props = {
    minerals: Mineral[]
    vitamins: Vitamin[]
}
*/

const Header = (/* { minerals, vitamins }: Props */) => (
    <header>
        <h1>
            <a href="/">Healthy Eating</a>
        </h1>
        <nav>
            {categories.map(category => (
                <a key={category} href={`/categories/${category}`} className={category}>
                    {category}
                </a>
            ))}
        </nav>
        {/*
        <HealthyButton minerals={minerals} vitamins={vitamins} />
        */}
    </header>
)

export default Header
