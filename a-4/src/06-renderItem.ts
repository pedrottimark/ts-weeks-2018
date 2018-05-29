import createElement from './00-createElement.js'
import { Item } from './06-fetch.js'

type Props = {
    item: Item
    onDeleteItem: (id: number) => void
    onToggleCompleted: (id: number) => void
}

const renderItem = ({ item: { completed, id, text }, onDeleteItem, onToggleCompleted }: Props) =>
    createElement(
        'li',
        { className: completed ? 'completed' : 'uncompleted' },
        createElement(
            'div',
            null,
            createElement('p', { onClick: onToggleCompleted.bind(null, id) }, text),
            createElement('button', { onClick: onDeleteItem.bind(null, id) }, 'Delete')
        )
    )

export default renderItem
