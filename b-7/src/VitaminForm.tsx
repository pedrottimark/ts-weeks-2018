import * as React from 'react'

const MineralForm = () => (
    <form
        name="vitamin"
        onSubmit={event => {
            event.preventDefault()
            console.info(`onSubmit`)
        }}
    >
        <fieldset>
            <label>id:</label>
            <input type="text" name="id" value="K1" />
        </fieldset>
        <fieldset>
            <label>name:</label>
            <input type="text" name="name" value="phylloquinone" />
        </fieldset>
        <fieldset>
            <label>solubility:</label>
            <label>
                <input type="radio" name="solubility" value="water" />
                water
            </label>
            <label>
                <input type="radio" name="solubility" value="fat" />
                fat
            </label>
        </fieldset>
        <fieldset>
            <label>example foods:</label>
            <input type="text" name="example_foods" value="broccoli, cabbage, collard_greens, spinach, grape, plum" />
        </fieldset>
        <fieldset>
            <button type="submit">Add vitamin</button>
        </fieldset>
    </form>
)

export default MineralForm
