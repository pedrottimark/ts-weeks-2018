import * as React from 'react'

const MineralForm = () => (
    <form
        name="mineral"
        onSubmit={() => {
            console.info(`onSubmit`)
        }}
    >
        <fieldset>
            <label>id:</label>
            <input type="text" name="id" value="Mn" />
        </fieldset>
        <fieldset>
            <label>name:</label>
            <input type="text" name="name" value="manganese" />
        </fieldset>
        <fieldset>
            <label>description:</label>
            <input type="text" name="description" value="a cofactor in enzyme functions" />
        </fieldset>
        <fieldset>
            <label>example foods:</label>
            <input type="text" name="example_foods" value="beans, prune, nuts, seeds, fish, poultry, beef, pork" />
        </fieldset>
        <fieldset>
            <button type="submit">Add mineral</button>
        </fieldset>
    </form>
)

export default MineralForm
