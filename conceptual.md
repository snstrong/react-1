### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a front-end JavaScript framework. It allows one to build a modular front-end using components.

- What is Babel?
Babel is a transpiler that translates JSX into something JavaScript can parse.

- What is JSX?
JSX allows us to write HTML-like code in JavaScript to be used for rendering HTML elements.

- How is a Component created in React?
A component can be created in React either as a JavaScript class or as a function. The latter returns JSX that will be used to render an element in the DOM.

- What are some difference between state and props?
Props are immutable and are used for data that will not need to change frequently. State, on the other hand, is used for data that needs to be changeable without necessarily refreshing the page, like form data. Props are passed in when rendering a component, whereas state is set in the component itself. Unlike props, state is dealt with differently depending on whether the component is class-based or function-based.

- What does "downward data flow" refer to in React?
In React, state for child components is often handled by a parent component, so data flows "downward" from parent to child.

- What is a controlled component?

- What is an uncontrolled component?

- What is the purpose of the `key` prop when rendering a list of components?
The key prop is used as a unique identifier for a component in a list of components.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
If the array changes, the index of a component might change, and therefore its key would change. This could cause issues and is best avoided.

- Describe useEffect.  What use cases is it used for in React components?

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

- When would you use a ref? When wouldn't you use one?

- What is a custom hook in React? When would you want to write one?
