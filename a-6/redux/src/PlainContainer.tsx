import * as React from 'react'

import { Child } from './types'

type Props = {
    children: Child | Child[]
}

const PlainContainer = ({ children }: Props) => <div>{children}</div>

export default PlainContainer
