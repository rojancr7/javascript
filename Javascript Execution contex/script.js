// ================================================================
// JAVASCRIPT EXECUTION CONTEXT VISUALIZER
// ================================================================
//
// This program visually demonstrates:
//
// 1. Global Execution Context
// 2. Memory Creation Phase
// 3. Execution Phase
// 4. Function Execution Context
// 5. Call Stack
// 6. LIFO
//
// The idea is to click "Next Step" and watch JavaScript execute
// the program step by step.
// ================================================================


// ================================================================
// STEP DATA
// ================================================================
//
// Each object represents one stage of JavaScript execution.
//
// "node" tells us which graph node should become active.
//
// "explanation" tells the learner what is happening.
//
// "stack" represents the current Call Stack.
//
// "memory" represents values currently prepared/executed.
// ================================================================

const steps = [

    {
        node: "node-start",

        explanation:
            "JavaScript starts running the program. Before executing the code, JavaScript creates the Global Execution Context.",

        stack: [
            "Global Execution Context"
        ],

        memory: {
            first: "?",
            second: "?",
            function: "?",
            result: "?"
        }
    },


    {
        node: "node-global",

        explanation:
            "The Global Execution Context is now created. Code outside functions belongs to the Global Execution Context.",

        stack: [
            "Global Execution Context"
        ],

        memory: {
            first: "?",
            second: "?",
            function: "addNumbers()",
            result: "?"
        }
    },


    {
        node: "node-memory",

        explanation:
            "Memory Creation Phase: JavaScript prepares memory for variables and functions. In this simplified learning model, firstNumber and secondNumber are prepared, and the function declaration is stored.",

        stack: [
            "Global Execution Context"
        ],

        memory: {
            first: "undefined",
            second: "undefined",
            function: "function",
            result: "?"
        }
    },


    {
        node: "node-execution",

        explanation:
            "Execution Phase begins. JavaScript executes the code. firstNumber becomes 10 and secondNumber becomes 20.",

        stack: [
            "Global Execution Context"
        ],

        memory: {
            first: "10",
            second: "20",
            function: "function",
            result: "?"
        }
    },


    {
        node: "node-function",

        explanation:
            "addNumbers() is called. JavaScript creates a new Function Execution Context and places it on top of the Call Stack.",

        stack: [
            "Global Execution Context",
            "addNumbers()"
        ],

        memory: {
            first: "10",
            second: "20",
            function: "function",
            result: "?"
        }
    },


    {
        node: "node-function",

        explanation:
            "Inside the Function Execution Context, result is calculated. firstNumber + secondNumber = 10 + 20 = 30.",

        stack: [
            "Global Execution Context",
            "addNumbers()"
        ],

        memory: {
            first: "10",
            second: "20",
            function: "function",
            result: "30"
        }
    },


    {
        node: "node-finish",

        explanation:
            "The function finishes. Its Function Execution Context is removed from the Call Stack. This demonstrates LIFO: the last context added is the first context removed.",

        stack: [
            "Global Execution Context"
        ],

        memory: {
            first: "10",
            second: "20",
            function: "function",
            result: "30"
        }
    },


    {
        node: "node-continue",

        explanation:
            "The Global Execution Context remains. JavaScript continues executing the remaining global code.",

        stack: [
            "Global Execution Context"
        ],

        memory: {
            first: "10",
            second: "20",
            function: "function",
            result: "30"
        }
    }

];


// ================================================================
// CURRENT STEP
// ================================================================

let currentStep = 0;


// ================================================================
// DOM ELEMENTS
// ================================================================

const nextBtn =
    document.getElementById("nextBtn");

const previousBtn =
    document.getElementById("previousBtn");

const resetBtn =
    document.getElementById("resetBtn");

const explanation =
    document.getElementById("explanation");

const callStack =
    document.getElementById("callStack");

const stepNumber =
    document.getElementById("stepNumber");

const totalSteps =
    document.getElementById("totalSteps");


// ================================================================
// MEMORY ELEMENTS
// ================================================================

const firstValue =
    document.getElementById("firstValue");

const secondValue =
    document.getElementById("secondValue");

const functionValue =
    document.getElementById("functionValue");

const resultValue =
    document.getElementById("resultValue");


// ================================================================
// GRAPH NODES
// ================================================================
//
// We collect every graph node so that we can change its
// active/completed state.
// ================================================================

const nodes = document.querySelectorAll(".flow-node");


// ================================================================
// TOTAL STEP DISPLAY
// ================================================================

totalSteps.textContent = steps.length;


// ================================================================
// UPDATE VISUALIZATION
// ================================================================
//
// This function is responsible for updating:
//
// - Graph
// - Call Stack
// - Memory
// - Explanation
// - Step counter
// ================================================================

function updateVisualization() {

    const step = steps[currentStep];


    // ============================================================
    // UPDATE STEP NUMBER
    // ============================================================

    stepNumber.textContent = currentStep + 1;


    // ============================================================
    // UPDATE GRAPH
    // ============================================================

    nodes.forEach(node => {

        node.classList.remove("active");

        node.classList.remove("completed");

    });


    nodes.forEach(node => {

        const nodeId = node.id;

        const activeNode =
            document.getElementById(step.node);


        if (node === activeNode) {

            node.classList.add("active");

        }

    });


    // ============================================================
    // UPDATE CALL STACK
    // ============================================================

    callStack.innerHTML = "";


    step.stack.forEach(context => {

        const stackItem =
            document.createElement("div");

        stackItem.className =
            "stack-item";

        stackItem.textContent =
            context;

        callStack.appendChild(stackItem);

    });


    // ============================================================
    // UPDATE MEMORY
    // ============================================================

    firstValue.textContent =
        step.memory.first;

    secondValue.textContent =
        step.memory.second;

    functionValue.textContent =
        step.memory.function;

    resultValue.textContent =
        step.memory.result;


    // ============================================================
    // UPDATE EXPLANATION
    // ============================================================

    explanation.textContent =
        step.explanation;


    // ============================================================
    // BUTTON STATE
    // ============================================================

    previousBtn.disabled =
        currentStep === 0;

    nextBtn.disabled =
        currentStep === steps.length - 1;

}


// ================================================================
// NEXT BUTTON
// ================================================================
//
// Move forward one execution step.
// ================================================================

nextBtn.addEventListener("click", function () {

    if (currentStep < steps.length - 1) {

        currentStep++;

        updateVisualization();

    }

});


// ================================================================
// PREVIOUS BUTTON
// ================================================================
//
// Move backward one execution step.
// ================================================================

previousBtn.addEventListener("click", function () {

    if (currentStep > 0) {

        currentStep--;

        updateVisualization();

    }

});


// ================================================================
// RESET BUTTON
// ================================================================
//
// Return the visualization to the first step.
// ================================================================

resetBtn.addEventListener("click", function () {

    currentStep = 0;

    updateVisualization();

});


// ================================================================
// INITIALIZE
// ================================================================
//
// Display the first execution step when the page loads.
// ================================================================

updateVisualization();