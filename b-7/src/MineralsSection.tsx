import * as React from 'react'
import { Link } from 'react-router-dom'

/*
import MineralForm from './MineralForm'
*/

import { Mineral } from './types'

type Props = {
    minerals: Mineral[]
}

const MineralsSection = ({ minerals }: Props) => (
    <section>
        <h2>minerals</h2>
        <div>
            <div>
                <table>
                    <tbody>
                        {minerals.map(({ id, name }) => (
                            <tr key={id}>
                                <th scope="row">
                                    <Link to={`/minerals/${id}`}>{id}</Link>
                                </th>
                                <td>{name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <p>
                    All <a href="/vitamins">vitamins</a>
                </p>
            </div>
            {/* <MineralForm /> */}
        </div>
    </section>
)

export default MineralsSection
