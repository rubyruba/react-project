const Lesson11EventHandlersExercises = () => {
  const onChangeHandler = () =>{
    console.log("div changed");
  }
  const onSubmitHandler = (event)=>{
    event.preventDefault();
    console.log("form submitted");

  }
  const onFocusHandler = () => {
    console.log("Input focused");
  }
  return (
    <div>
      <h1>Event Handlers</h1>
      {/**
       * Task 1: [ ] Add an onClick event handler to the button element that logs a message to the console when clicked.
       * Task 2: [X] Add an onChange event handler to the input element that logs a message to the console when the value changes.
       * Task 3: [x ] Add an onSubmit event handler to the form element that logs a message to the console when the form is submitted.
       * Task 4: [ ] Add an onFocus event handler to the input element that logs a message to the console when the element receives focus.
       * Task 5: [ ] Add an onBlur event handler to the input element that logs a message to the console when the element loses focus.
       * Task 6: [ ] Add an onKeyPress event handler to the input element that logs a message to the console when a key is pressed.
       * Task 7: [ ] Add an onKeyUp event handler to the input element that logs a message to the console when a key is released.
       * Task 8: [ ] Add an onKeyDown event handler to the input element that logs a message to the console when a key is pressed down.
       * Task 9: [ ] Add an onMouseOver event handler to the button element that logs a message to the console when the mouse pointer moves over the element.
       * Task 10: [ ] Add an onMouseOut event handler to the button element that logs a message to the console when the mouse pointer moves out of the element.
       */}
      <form action="" onSubmit={onSubmitHandler}>
        <fieldset>
          <div className="input-group">
            <input
             onChange={onChangeHandler}
             onFocus={onFocusHandler} 
            type="text" />
          </div>
          <button onSubmit={onSubmitHandler}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Lesson11EventHandlersExercises;
