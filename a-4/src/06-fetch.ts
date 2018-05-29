interface Doer {
    id: string
    name: string
}

interface ItemWithPatchableProps {
    completed?: boolean
    text?: string
}

interface ItemWithoutId {
    completed: boolean
    doerId: string
    text: string
}

export interface Item extends ItemWithoutId {
    id: number
}

export const getDoer = (doerId: string): Promise<Doer> =>
    fetch(`/doers/${doerId}`).then(response => {
        if (!response.ok) {
            throw new Error(`getItems status=${response.status}`)
        }

        return response.json()
    })

export const getItems = (doerId: string): Promise<Item[]> =>
    fetch(`/doers/${doerId}/items`).then(response => {
        if (!response.ok) {
            throw new Error(`getItems status=${response.status}`)
        }

        return response.json()
    })

export const putItem = (item: Item) =>
    fetch(`/items/${item.id}`, {
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT'
    })

export const patchItem = (id, item: ItemWithPatchableProps) =>
    fetch(`/items/${id}`, {
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PATCH'
    })

// Response has id of added item.
export const postItem = (item: ItemWithoutId): Promise<Item> =>
    fetch('/items', {
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    }).then(response => {
        if (!response.ok) {
            throw new Error(`postItem status=${response.status}`)
        }

        return response.json()
    })

export const deleteItem = (id: number) =>
    fetch(`/items/${id}`, {
        method: 'DELETE'
    })
