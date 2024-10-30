// Lesson 6: Let's use state to build a calculator


// We will build a simple calculator that can add, subtract, multiply, and divide numbers.
// The calculator will have a display that shows the current number.
// The calculator will have buttons for the numbers 0-9, the decimal point, and the operations +, -, *, and /.
// The calculator will have a button to calculate the result.
function CalckNumberButton({number}) {
    return <button onClick={ () => handleNumberClick (number)} > {number} </button>}

function Calculatron() {
    
    // Task 1:
    // We will use state to keep track of the current number and operation. How will we do this?
    const [current, setCurrent] = useState(0);
    const [operation, setOperation] = useState(null);
    const [result, setResult] = 
    // Task 2:
    // We will create a function to handle button clicks. How will we do this?
   
   /* const handleNumberClick = (number) => {
       
        currentNumber = currentNumber * 10 + number;
    }*/

    const handelOperationClick = (operation) => {
        setOperation(operation)
        if(operation ==="+"){
            setResult
        }
        setPreviousNumber(currentNumber)
        setCurrentNumber(0)

    }
    // Task 3:
    // We will create a function to calculate the result. How will we do this?
    // Notice that we don't keep track of the previous number. How will we handle this?

    
    // Task 4:
    // We will create a component to simplify the buttons. How will we do this?
    const handleResultClick = () => {
        console.log("ongoing result");
        SpeechRecognitionResult(currentNumber);
    }


    // Task 5:
    // We will create a function and a button to clear the calculator. How will we do this?

    // Task 6:
    // We will show the current operation in a small display above the result. How will we do this?

    // Task 7:
    // We will handle some error cases. What will happen if the user tries to divide by zero?

    return <div className="calculatron">
        <div className="result"></div>
        <div>
            <button>7</button>
            <button onClick={}>8</button>
            <button>9</button>
        <button className="operation">/</button>
        </div>
        <div>
            <CalckNumberButton/> number={7} handleNumberClick={ handleNumberClick}/>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="operation">*</button>
         </div>
        <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="operation">-</button>
        </div>
        <div>
            <button>.</button>
            <button>0</button>
            <button className="result">=</button>
            <button className="operation">+</button>
        </div>
    </div>;
}

export default Calculatron;