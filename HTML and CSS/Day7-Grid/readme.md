# GRID

Grid is a layout display which arranges elements into rows and columns into grids as per the conditions

- It is a 2-Dimensional layout change.

## Grid Properties

1. grid-template-columns: 100px 100px

It gives 2 cols of 100px each

2. grid-template-rows: 50px 50px

It gives 2 rows of 50px each

3. grid-row-gap: 20px

It gives gap of 20px between the rows

4. gap: 20px 30px (rows cols)

It gives gap for rows and columns

5. grid-template-columns:repeat (2 50px)

It repeats the given size to all columns

### Units of grid

- pixels
- percentages
- 1fr: each col/row will take 1 fr width reference to its parent

## Line-base-placement

6. grid-area: 1/1/2/2 (row start,column start, row end, column end)

It is given to the child elements to change the order

7. grid-template-area:

When specified to 3 cols, 2 rows and each one is given some grid-area name/id. The id's order will be used to mention the changes in order or placement
"a b c"
"d e f"

8. grid-column-start(col-number)
