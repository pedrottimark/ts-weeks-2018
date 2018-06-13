import * as React from 'react'

import ColumnContainer from './ColumnContainer'
import MarginContainer from './MarginContainer'
import PlainContainer from './PlainContainer'
import RowContainer from './RowContainer'
import VisibilityContainer from './VisibilityContainer'

type Props = {
    className: string
}

const Main = ({ className }: Props) => (
    <main className={className}>
        <h1>Biscuits</h1>
        <VisibilityContainer order={1}>
            <p>Preheat oven to 450 degrees F (230 degrees C).</p>
        </VisibilityContainer>
        <MarginContainer>
            <RowContainer>
                <ColumnContainer>
                    <VisibilityContainer order={2}>
                        <h2>Dry ingredients</h2>
                    </VisibilityContainer>
                    <RowContainer>
                        <VisibilityContainer order={2}>
                            <ul>
                                <li>2 cups all-purpose flour</li>
                                <li>1 tablespoon baking powder</li>
                                <li>1/2 teaspoon salt</li>
                            </ul>
                        </VisibilityContainer>
                        <VisibilityContainer order={3}>
                            <p>In a large mixing bowl sift together flour, baking powder and salt.</p>
                        </VisibilityContainer>
                    </RowContainer>
                </ColumnContainer>
                <ColumnContainer>
                    <VisibilityContainer order={4}>
                        <h2>Wet ingredients</h2>
                    </VisibilityContainer>
                    <RowContainer>
                        <VisibilityContainer order={4}>
                            <ul>
                                <li>1/2 cup shortening</li>
                                <li>3/4 cup milk</li>
                            </ul>
                        </VisibilityContainer>
                        <PlainContainer>
                            <VisibilityContainer order={5}>
                                <p>
                                    Cut in shortening with fork or pastry blender until mixture resembles coarse crumbs.
                                </p>
                            </VisibilityContainer>
                            <VisibilityContainer order={6}>
                                <p>Pour milk into flour mixture while stirring with a fork.</p>
                                <p>Mix in milk until dough is soft, moist and pulls away from the side of the bowl.</p>
                            </VisibilityContainer>
                        </PlainContainer>
                    </RowContainer>
                </ColumnContainer>
            </RowContainer>
        </MarginContainer>
        <VisibilityContainer order={7}>
            <p>Turn dough out onto a lightly floured surface and toss with flour until no longer sticky.</p>
            <p>Roll dough out into a 1/2 inch thick sheet and cut with a floured biscuit or cookie cutter.</p>
            <p>Press together unused dough and repeat rolling and cutting procedure.</p>
        </VisibilityContainer>
        <VisibilityContainer order={8}>
            <p>Place biscuits on ungreased baking sheets.</p>
            <p>bake in preheated oven until golden brown, about 10 minutes.</p>
        </VisibilityContainer>
    </main>
)

export default Main
