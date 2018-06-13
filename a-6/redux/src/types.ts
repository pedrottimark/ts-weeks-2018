export interface Visibility {
    maxOrder: number
    maxOrderVisible: number
}

export interface MaxOrderVisible {
    maxOrderVisible: number
}

export interface Theme {
    className: string
}

export interface AppState {
    theme: Theme
    visibility: Visibility
}

export type Child = JSX.Element | React.Component
