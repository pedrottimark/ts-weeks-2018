import * as React from 'react'

import { Child } from './types'

type Props = {
    children: Child | Child[]
}

const MarginContainer = ({ children }: Props) => <div className="margin">{children}</div>

export default MarginContainer
