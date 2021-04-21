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
Props are immutable and are used for data that will not need to change frequently. State, on the other hand, is mutable and is used for data that needs to be changeable, like form data. Props are passed in when rendering a component, whereas state is set in the component itself. Unlike props, state is dealt with differently depending on whether the component is class-based or function-based.

- What does "downward data flow" refer to in React?
In React, state for child components is often handled by a parent component, so data flows "downward" from parent to child.

- What is a controlled component?
A controlled component is one in which the state is controlled by React. In the case of forms, this means React, rather than the DOM, controls what happens when there is user input

- What is an uncontrolled component?
An uncontrolled element is one in which the DOM controls input rather than React. For instance, file inputs are uncontrolled because their values are read-only (i.e., can only be set by the user rather than programmatically).

- What is the purpose of the `key` prop when rendering a list of components?
The key prop is used as a unique identifier for a component in a list of components.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
If the array changes, the index of a component might change, and therefore its key would change. This could cause issues and is best avoided.

- Describe useEffect.  What use cases is it used for in React components?
useEffect is used in cases where something will have "side effects" in the DOM, and is called after render. Use cases include fetching data from an API, setting up a subscription, and manually changing the DOM.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef is a kind of box for holding a mutable value in its `.current` property that persists across renders, kind of like an instance variable. A change to a ref value does not cause a re-render.

- When would you use a ref? When wouldn't you use one?
A ref is useful for something like a timer, where data needs to be mutable and will be used in an update to the DOM without re-rendering. It
is also useful for accessing and manipulating existing DOM elements. However, if something can be accomplished using state instead, it most likely should be done that way instead of using a ref.

- What is a custom hook in React? When would you want to write one?
A custom hook is a JavaScript function that uses built-in React hooks, and should always start with. Custom hooks are useful for abstracting logic that can then be used by multiple components.
