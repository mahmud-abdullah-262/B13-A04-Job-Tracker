1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: "getElementById, getElementsByClassName, and querySelector / querySelectorAll" these for selecting anything from HTML document page in javascript. 
    a.getElementById: It is select a element by it's id Name. it returns the element itself.
    b.getElementsByClassName: It is select elements by theres Class Name. its returns an array like HTML object. 
    c.querySelector: Is is vary powerful element selector toll in javascript. it is select a element with there CSS selector. it returns FIRST match of the element. 
    d.querySelectorAll: It is another powerful selector. it is select a element or elements with there CSS selector. it returns a array like Nodelist. 


2. How do you create and insert a new element into the DOM?

Ans: For create and inserting a element into DOM, there is some steps. I writing it below -
    step 1: create a element with document.createElement() function;
    step 2: give a element as a parameter of this function.
    step 3: accese this element innerHTML and write HTML Code in it;
    step 4. take the parent element by any method like getElementById();
    setp 5. insert new element in this element using appendChild() method. 


3. What is Event Bubbling? And how does it work?

Ans: Even Bubbling is a term that use in javascript. when we add a event listener in any element, it will return that element. for that, browser firstly take whole the document and try to find out where the user clicked (or any other action). secondly browser try to specify this action and find the parent element, where action has happened. thirdly browser specify the actual place where the action happened, and returned it. So after a action, returning its place, then its parent element, then main parent element, it is called event bubbling. 

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a advance technique of event bubbling. we already know that, event can bubble, and returning the main element. so that we can add a event in the parent element, and returning the actual place of action. such as, let we have a button in a div, we can add a event in the div and returning the button by add a parameter in the event function. it is called event delegation in javascript. 

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() is a method that prevented to the Browser of its default behavior. 
     stopPropagation() is a method that stop event bubbling in event listener. in any step of event is is used, event bubbling will stop in this step, and do not bubbled the even in further step.