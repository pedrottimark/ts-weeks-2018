import * as React from 'react'
import DocumentTitle from 'react-document-title'

import ImageBrokenPlate from './ImageBrokenPlate'
import ImageSpinningPlate from './ImageSpinningPlate'

type Props = {
    className: string
    hasError: boolean
    isWaiting: boolean
    title: string
}
type State = {
    hasCaughtError: boolean
}

class MainErrorBoundary extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props)
        this.state = { hasCaughtError: false }
    }

    public componentDidCatch(error: Error) {
        console.error(error.message)
        this.setState({ hasCaughtError: true })
    }

    public render() {
        const { title, className, isWaiting, hasError } = this.props
        const { hasCaughtError } = this.state
        return (
            <DocumentTitle title={title}>
                <main className={className}>
                    {isWaiting ? (
                        <ImageSpinningPlate />
                    ) : hasError || hasCaughtError ? (
                        <ImageBrokenPlate />
                    ) : (
                        this.props.children
                    )}
                </main>
            </DocumentTitle>
        )
    }
}

export default MainErrorBoundary
