## Selectors and Combinators

# Selectors

- Types of selectors

1. Element Tag Selector ( p{})
2. Class Selector (.class{})
3. Id selector (#id{})
4. Universal Selector (\*{})

- Priority of Styling

Inline Styling > (Internal Styling ~ External Styling based on which file (html/css) is saved last)

- Priority of Selector Styling

Inline > id(#) > class (.) > Element (Tag name) > Universal (\*)

# Combinators

Combinators are used to style elements to shorten the no.of usages of
class and id references.

- Types of Combinators

1. Descendent combinator () space notation:
   This combinator applies style to the all the specified tags (p) inside the entire parent tag (div)

   - Syntax:
     div p{
     property: "value";
     }

2. Child combinator (>):
   This combinator applies styling to all the immediate childs inside the entire parent tag without any internal sub-parent tag.
   - Syntax:
     div > p{
     property: "value";
     }
3. general/subsequent sibling combinator (~) tilta:
   This combinator applies styling to all the tags that are below the specified tag under the parent tag
   - Syntax:
     div ~ p{
     property: "value";
     }
4. adjacent sibling combinator (+):
   This combinator applies styling to only the next immediate sibling
   - Syntax:
     div + p{
     property:"value;
     }

# Complex selectors or Compound selectors

1. Descendant Combinator (space) + Child Combinator (>):

- example:
  div > section p {
  color: red;
  }

2. Adjacent Sibling Combinator (+) + Descendant Combinator (space):

- example:
  div + p span {
  color: blue;
  }

3. Multiple Child Combinators (>):

- example:
  ul > li > a {
  text-decoration: none;
  }

4. Grouped Selectors (, multiple selectors):

- example:
  div > h1, div > h2 {
  color: green;
  }

# Attribute selectors

- example:
  input[type="text"] {
  background-color: lightblue;
  }

# Pseudo Classes

pseudo classes are special pre-defined properties that can be styled to the tags with single colon (:)

- example:
  button:hover{
  color: red;
  }

# Pseduo Elements

pseudo classes are special pre-defined properties that can be styled to the tags with double colon (::)

- example:
  p::first-line{
  color:red;
  }
