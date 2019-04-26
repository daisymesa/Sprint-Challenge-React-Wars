 What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React is a JavaScript library that helps us build UI components.  It lets us create a UI made of smaller, reusable components, which make it easier to scale larger applications.  We are also able to write in JSX when using React, which lets us write more readable code, combining some features from both JavaScript and HTML together.


 What does it mean to think in react?

    To think in react means to think about the outcome we want to see, and break it up visually into sections, which will become the different components that will make up our app.  When doing this, we break down the UI into a component hierarchy, which can look sort of like a mind map, which can help us envision how the different componenets of our app will work together to render the desired result on our webpage/app.


 Describe state.

    State is the data that our apps needs to use, which our components need to access at any given point.  State can be changed, usually based off of user events.  Not all components have to have state - when a component has state it can increase complexity and reduce predictability.  However, when do need data in a component to be able to process data, respond to user events, or somehow alter its attributes at some point in time, we should use state inside that component.  State can only be created in class components, not in functional components.


 Describe props.

    Props are read-only - they cannot be changed, but they work as vehicles to transport data (state) from one component to another, and therefore allow for a component to be more reusable.  Props can be used in both functional and class components.