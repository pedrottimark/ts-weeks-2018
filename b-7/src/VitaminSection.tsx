import * as React from 'react'
import { Link } from 'react-router-dom'

import { Vitamin } from './types'

type Props = {
    vitamin: Vitamin
}

const VitaminSection = ({ vitamin: { id, name, solubility, examples } }: Props) => (
    <section>
        <h2>vitamin {id}</h2>
        <p>
            <label>name:</label>
            <span>{name}</span>
        </p>
        <p>
            <label>solubility:</label>
            <span>{solubility}</span>
        </p>
        {examples.length === 0 ? (
            <br />
        ) : (
            <p>
                <label>example foods:</label>
                <span>{examples.join(', ').replace(/_/g, ' ')}</span>
            </p>
        )}
        <br />
        <p>
            All <Link to="/vitamins">vitamins</Link>
        </p>
    </section>
)

export default VitaminSection
