# Forms in JavaScript

- Forms contain input tags. When we want to take input from the user, we use forms.

## Rules in Forms

- Wrap all the required input tags in the form tag
- Always use input submit instead of button.
- Assign eventListener to the form tag.
- Event name should be submit
- Forms, by default tries to send data to the backend whenever we click on submit button, To change this, we need to use a method:
  **event.preventDefault()**

## Creating HTML elements using JavaScript

- createElement()
- ex: document.createElement("h1");
- **InnerText** can also be written as **textContent**
- append the tags to body tag by: document.querySelector("body").append("h1");

## Setting Attributes using JavaScript

- let image = document.createElement("img");
- image.setAttribute("src", 'url');
