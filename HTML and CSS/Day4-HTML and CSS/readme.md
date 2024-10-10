## Some More Tags

# iframe Tag

- To display another webpage in a specific webpage. It needs some permissions for some copy of other webpages
- Attributes
  - width
  - height
  - src: for source url
  - allowfullscreen: especially for videos on youtube etc..

# favicons (icons on the page title)

- inside head tag
- <link>
  - rel = "icon"
  - href (img source)

# Media tags

1. Audio Tag

- attributes
  - controls: gives controls (play, pause, increase, decrease volume,speed)
  - src: source path

2. Video tag

- attributes
  - controls: gives controls (play, pause, increase, decrease volume,speed)
  - src: source path

# Semantic Tags: Tags with meaning

- header: top of the page
- nav: Top row for navigating links
- main: main content
- section: for separate sections within main content
- footer: bottom of the page
- article: small part of webpage

## CSS: Cascading Style Sheets

# 3 ways of Styling

- inline styling: within the tags using style attribute
  syntax: <h1 style="color:yellow background-color: black">
- internal styling: within the head tag using style tag
  syntax:
  <head>
  <style>
    h1{
        font-size: 10px;
    }
  </style>
   </head>

- external styling: from separate file
syntax:
<head>
<link rel="stylesheet" href="./path">
</head>

# CSS selectors

- Element selectors
  h1{

}

- class selectors
  .section{

}

- id selectors
  #item{

}

- universal selectors
  \*{

}

# color notation

- color name (red)
- hex code (#9g331)
- rgb (144,43,53)

# box-model

- text area
- padding: area between text and border
- border: area around the text (boundary)
- margin: area around the border
