import * as React from 'react'

import { Child } from './types'

type Props = {
    children: Child | Child[]
}

const RowContainer = ({ children }: Props) => <div className="row">{children}</div>

export default RowContainer
