import * as React from 'react'

import { Child } from './types'

type Props = {
    children: Child | Child[]
}

const ColumnContainer = ({ children }: Props) => <div className="column">{children}</div>

export default ColumnContainer
