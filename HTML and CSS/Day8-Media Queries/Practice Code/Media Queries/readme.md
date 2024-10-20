# Media Queries, CSS positioning , Basic DOM

## Media Queries

This is a feature of CSS where we can create responsive designs for different screen sizes or devices

### Syntax of Media Query

- @media screen (min-width:320px) and (max-width:760px)
  - @media: specifies media query declaration.

### media types:

It specifies what type of media are we trying to target.

- screen: values used here that indicated many of the media types we are trying to match our devices. (matches devices with screens)
- all : matches all devices
- print: it matches documents that are viewed in a print preview or any media that breaks the content up into pages intent to print.

### media features:

- Desktop: (min-width:1024px);
- Tablet: (min-width:728px) and (max-width:1023px);
- Smartphone: (min-width:340px) and (max-width:767px);

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

## DOM (Basics)

DOM: Document-Object-Model

In general, Browser is created using C/C++ languages.

HTML --> Markup Language
JavaScript --> Programming Language

- Browser uses DOM when we run an HTML page. This DOM acts as mediator or connection between HTML and JavaScript.
- DOM helps the browser for HTML to use JavaScript code (Object) as document and HTML document as Objects for JavaScript and share the data between them.
