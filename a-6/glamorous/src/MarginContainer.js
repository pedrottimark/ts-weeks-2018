/*
import React from 'react'

const MarginContainer = ({ children }) => <div className="margin">{children}</div>
*/

import glamorous from 'glamorous'

const MarginContainer = glamorous.div({
    margin: '1.5rem'
})

export default MarginContainer
