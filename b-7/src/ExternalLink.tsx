import * as React from 'react'

type Child = React.Component | JSX.Element | string
type Props = {
    children: Child | Child[]
    to: string
}

const ExternalLink = ({ children, to }: Props) => (
    <a href={to} rel="noopener noreferrer" target="_blank">
        {children}
    </a>
)

export default ExternalLink
