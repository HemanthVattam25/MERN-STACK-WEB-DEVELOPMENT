# CSS Positioning

- It defines the position of html elements inside the browser's viewport (the screen what we see )

- By default, all html elements follows the default order (the order we give)

- we can use CSS position to manipulate the position of html element inside the view port (top, bottom, left, right)

By default, the browser renders the html elements one after the other in the viewport. The order can be horizontal or vertical depending on the element type.

- block elements (vertical alignment)
- in-lin elements (horizontal alignment)

## CSS positioning types:

1. Static positioning:
   - It is the default position of elements which follows the order we have given, we cannot use left, right, bottom, top positions.
2. Relative positioning:
   - Here, we can change the elements position in left, right, bottom, top and the new position of the element will br changed but the old space remains left unused.
3. Fixed positioning:
   - Here the position of the element is fixed along the page even if we scroll, left, right, top, bottom can be applied.
4. Absolute positioning:
   - Here the new position of the element is changed and the old space will be lost and can be occupied by next elements
5. Sticky positioning:
   - Here the element by default will be static and when we scroll, it becomes absolute and other elements occupying the sticky element space.
