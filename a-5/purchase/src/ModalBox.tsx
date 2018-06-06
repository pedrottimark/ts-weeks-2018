import * as React from 'react'

type Child = JSX.Element | React.Component
type Props = {
    children: Child | Child[]
}

const ModalBox = ({ children }: Props) => <div className="modalBox">{children}</div>

export default ModalBox
