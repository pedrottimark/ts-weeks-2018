import createElement from './00-createElement.js'

const inputRegExp = /\S+/

type Props = {
    onAddItem: (text: string) => void
}

const renderAdder = ({ onAddItem }: Props) => {
    const button = createElement(
        'button',
        {
            disabled: true,
            type: 'submit'
        },
        'Add'
    ) as HTMLButtonElement

    const input = createElement('input', {
        name: 'text',
        onKeyUp: () => {
            button.disabled = !inputRegExp.test(input.value)
        },
        placeholder: 'text of new item',
        type: 'text'
    }) as HTMLInputElement

    return createElement(
        'form',
        {
            name: 'adder',
            onSubmit: event => {
                event.preventDefault()
                onAddItem(input.value)
                input.value = ''
                button.disabled = true
            }
        },
        input,
        button
    )
}

export default renderAdder
