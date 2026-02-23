1. getElemenById uses id to find elements. getElementsByClassName uses class name of elements to find element. querySelector / querySelectorAll uses CSS selector.
   
2. To create a new element at first have to use document.createElement() to create an element and have to add content like div/text,then i can write anything using innerHTML/innerTEXT in the created element
and finally have to insert it into the page using append().

3. Event bubbling means when i click on an element, the event doesn’t stop there. it also moves up to its parent elements.
if a button is inside a div and i click the button, the click event runs on the button first, then on the div, then on the body, and keeps going upward.
So basically, the event starts from the target element and bubbles up through its parents unless you stop it using event.stopPropagation().

4. Event delegation is a technique in JavaScript where i add an event listener to a parent element instead of adding separate listeners to each child element.
When i click on a child element, the event moves up to the parent because of event bubbling. The parent can then check which child was clicked and take action.
It is useful because it reduces the number of event listeners, makes the code cleaner, and also works for new elements that are added to the page later.

5. preventDefault() stops the browser from doing its normal action.
For example, if i click a link, it usually opens another page. If i use preventDefault(), the link will not open.
stopPropagation() stops the event from moving to parent elements.
For example, if i click a button inside a div, the click event normally goes to the div too. If i use stopPropagation(), the event will stop at the button and will not go up.
So, preventDefault() stops the default behavior, and stopPropagation() stops the event from spreading to other elements.




