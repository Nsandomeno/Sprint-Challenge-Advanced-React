- [ ] Why would you use class component over function components (removing hooks from the question)?

Extra functionality regarding the status of the component and what is stored on the DOM. CDM, CDU, and CDUM give us added flexibility to deal with side effects, update the component during its life, and removing logic from the DOM when the component is unmounted.

- [ ] Name three lifecycle methods and their purposes.

CDM - gives a set of instructions once a component mounts.
CDU - allows us to manipulate the component during its life based on the value of something (often state). This works similarly to how we would use useEffect()

- [ ] What is the purpose of a custom hook?

Custom hooks allow you to simplify logic in JSX files and make code more 'dry'. They help make functions modular to be reused in many components, applied in slightly different ways.

- [ ] Why is it important to test our apps?

Testing helps us think of use cases that we may not have. It helps us think about how our app will be used and what could possible go wrong while using. By running tests over each of these use cases we can increase our confidence in our code and help make refactoring not such a daunting task.