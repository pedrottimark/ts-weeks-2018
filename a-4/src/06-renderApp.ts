import createElement from './00-createElement.js'
import { Item, deleteItem, getDoer, getItems, patchItem, postItem } from './06-fetch.js'
import renderAdder from './06-renderAdder.js'
import renderItem from './06-renderItem.js'

type State = {
    doerId: string
    doerName: string
    items: Item[]
}

const renderApp = () => {
    // The callback functions mutate the state and update the interface directly.
    const state: State = {
        doerId: 'larry', // hard code because no interface to log on
        doerName: '',
        items: []
    }

    const h1 = createElement('h1', null, 'Todo List')
    const ul = createElement('ul')

    const onAddItem = (text: string) => {
        postItem({ completed: false, doerId: state.doerId, text })
            .then((item: Item) => {
                state.items.push(item)
                const li = renderItem({ item, onDeleteItem, onToggleCompleted })
                ul.appendChild(li)
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    const formAdder = renderAdder({ onAddItem })

    const onDeleteItem = (id: number) => {
        deleteItem(id)
            .then(() => {
                const index = state.items.findIndex(item => item.id === id)
                state.items.splice(index, 1)
                ul.removeChild(ul.children[index])
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    const onToggleCompleted = (id: number) => {
        const index = state.items.findIndex(item => item.id === id)
        const completed = !state.items[index].completed
        patchItem(id, {completed})
            .then(() => {
                const item = state.items[index]
                item.completed = completed
                const li = renderItem({ item, onDeleteItem, onToggleCompleted })
                ul.replaceChild(li, ul.children[index])
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    // When promise resolves, update heading and ul.
    Promise.all([getDoer(state.doerId), getItems(state.doerId)])
        .then(([doer, items]) => {
            state.doerName = doer.name
            state.items = items
            h1.innerText = `Todo List for ${state.doerName}`
            state.items.forEach(item => {
                ul.appendChild(renderItem({ item, onDeleteItem, onToggleCompleted }))
            })
        })
        .catch(error => console.error(error.message))

    return createElement('div', { className: 'TodoList' }, createElement('header', null, h1, formAdder), ul)
}

export default renderApp
