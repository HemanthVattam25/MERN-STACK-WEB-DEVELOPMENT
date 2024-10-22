# DOM-2

Previously, we have learned

- getElementsById ( targeting html elements with Id)
- innerText, innerHTML ( To get the content inside the html elements)
- input tag ---> .value to get the value given by the user.
- onclick events

## Other ways of Targeting html elements

1. getElementsByClassName():
   Targets the elements with the same class and gives them in an array list
2. getElementsByTagName():
   Targets the elements with the Tag name and gives them in an array list

If there is only one class or one Tag. To target them directly we should specify it in index [0] as the elements are stored in arrays

## Alternative ways of targeting html elements

1. querySelector():
   This SelectQuery selects elements based on the type as per the CSS notations. This method returns only single and the first element of the specified target.

   - querySelector(".class")
   - querySelector("#id")
   - querySelector("TagName")

2. querySelectorAll()
   This method selects all elements of the mentioned target.

## Event Listeners

These are the events/methods that comes into play when it called for an element.

Generally, Event listeners should not be mentioned in inline style. It should be declared and defined in the javascript part.

- <button onClick = "likeMe()"> like </button>
  This event handled (onClick) can be improvised using a method called **addEventListener()**

### Syntax of event Listener

addEventListener(arg1, arg2)

- arg1: eventName - click ( No need to use on before it)
- arg2: function that describes the action for the click event. This will run when the event is called
