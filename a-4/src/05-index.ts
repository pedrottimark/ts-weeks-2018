import createElement from './00-createElement.js'

const inputCodePattern = '\\d*'
const inputCodeRegexp = /\d\d\d\d/
const inputQuantityPattern = '\\d*'
const inputQuantityRegexp = /\d+/

let inputCode
let buttonCode

let inputDescription
let fieldsetDescription

let inputQuantity
let buttonQuantityOK
let fieldsetQuantity

let tbody

const stateDefault = {
    isCodeReady: false,
    isFetchingItem: false,
    isQuantityReady: false,
    item: {
        id: 0,
        count: false,
        description: ''
    }
}
let state = { ...stateDefault }

// Given information about item, return tr element which has 3 td elements
// 1 td has empty string as text, if quantity is undefined; otherwise quantity
// 2 td has description as text
// 3 td has code as text
const renderRow = (description: string, code: number, quantity?: number) =>
    createElement(
        'tr',
        null,
        createElement('td', null, quantity === undefined ? '' : quantity),
        createElement('td', null, description),
        createElement('td', null, code)
    )

// Given state, update properties of elements in user interface.
const update = ({ isCodeReady, isFetchingItem, isQuantityReady, item: { count, description } }) => {
    inputCode.disabled = isFetchingItem || count
    buttonCode.disabled = !isCodeReady || isFetchingItem || count

    inputDescription.value = description
    fieldsetDescription.className = description ? '' : 'hidden'

    buttonQuantityOK.disabled = !isQuantityReady
    fieldsetQuantity.className = count ? '' : 'hidden'

    if (count) {
        inputQuantity.focus()
    } else if (!isFetchingItem) {
        inputCode.focus()
    }
}

const onKeyDownCode = () => {
    state.item.description = ''
    update(state)
}

const onKeyUpCode = () => {
    state.isCodeReady = inputCodeRegexp.test(inputCode.value)
    update(state)
}

const onKeyUpQuantity = () => {
    const value = inputQuantity.value
    state.isQuantityReady = inputQuantityRegexp.test(value) && parseInt(value, 10) !== 0
    update(state)
}

const onSubmitCode = event => {
    event.preventDefault()
    state.isFetchingItem = true
    inputCode.disabled = true
    buttonCode.disabled = true
    const id = inputCode.value
    fetch(`/items/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw response.statusText
            }
        })
        .then(item => {
            if (!item.count) {
                inputCode.value = ''
                state = { ...stateDefault }
                tbody.appendChild(renderRow(item.description, item.id))
            }
            state.item = item
            update(state)
        })
        .catch(error => {
            state.isFetchingItem = false
            if (typeof error === 'string') {
                inputCode.value = ''
                state.item.id = 0
                state.item.description = `${id} ${error}` // especially Not Found
            } else {
                state.item.description = `Not Connected`
            }
            update(state)
        })
}

const onSubmitQuantity = event => {
    event.preventDefault()
    const { description, id } = state.item
    tbody.appendChild(renderRow(description, id, parseInt(inputQuantity.value, 10)))
    inputCode.value = ''
    inputQuantity.value = ''
    state = { ...stateDefault }
    update(state)
}

const onResetQuantity = event => {
    event.preventDefault()
    inputCode.value = ''
    inputQuantity.value = ''
    state = { ...stateDefault }
    update(state)
}

inputCode = createElement('input', {
    name: 'code',
    onKeyDown: onKeyDownCode,
    onKeyUp: onKeyUpCode,
    pattern: inputCodePattern,
    placeholder: 'at least 4 digits',
    type: 'text'
})

buttonCode = createElement('button', { type: 'submit' }, 'GET')

inputDescription = createElement('input', {
    name: 'description',
    readonly: true
})

inputQuantity = createElement('input', {
    name: 'quantity',
    onKeyUp: onKeyUpQuantity,
    pattern: inputQuantityPattern,
    placeholder: 'at least 1 digit',
    type: 'text'
})

fieldsetDescription = createElement('fieldset', null, createElement('label', null, 'Description:'), inputDescription)

const formItem = createElement(
    'form',
    {
        name: 'item',
        onSubmit: onSubmitCode
    },
    createElement('fieldset', null, createElement('label', null, 'PLU code:'), inputCode, buttonCode),
    fieldsetDescription
)

buttonQuantityOK = createElement('button', { type: 'submit' }, 'OK')

fieldsetQuantity = createElement(
    'fieldset',
    null,
    createElement('label', null, 'Quantity:'),
    inputQuantity,
    buttonQuantityOK,
    createElement('button', { type: 'reset' }, 'Cancel')
)

const formQuantity = createElement(
    'form',
    {
        name: 'quantity',
        onReset: onResetQuantity,
        onSubmit: onSubmitQuantity
    },
    fieldsetQuantity
)

tbody = createElement('tbody')

const table = createElement(
    'table',
    null,
    createElement(
        'thead',
        null,
        createElement(
            'tr',
            null,
            createElement('th', null, 'Quantity'),
            createElement('th', null, 'Description'),
            createElement('th', null, 'PLU code')
        )
    ),
    tbody
)

const root = document.querySelector('#root')
root.appendChild(formItem)
root.appendChild(formQuantity)
root.appendChild(table)
update(state) // initialize properties of elements in user interface
