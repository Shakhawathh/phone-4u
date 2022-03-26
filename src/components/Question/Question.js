import React from 'react';

const Question = () => {
    return (
        <div>
            <h2>How to react works?</h2>
            <h3>And:Firstly browser render engine recieves HTML file & CSS file then parse them and creates a DOM tree & a CSSOM tree. After creating both, browser engine creates a Render tree which goes through a layout phase which decides where every element should be placed. After that getting all things engine paints everything to output. So when we manupulate DOM everytime and change the data to the UI. Render tree re calculate the hole process again which is very inefficient. Here React uses Virtual DOM. When any state is changed Virtual DOM creates a replica of real DOM and compares through diff algorithm. After finding the changes it simply paint that particular changed element or data effeciently.</h3>

            <h2>Difference between props & state?</h2>
            <h3>Ans:1. props are immutable but states are mutable. 2. props are read-only but the states changes 3. props helps to pass the data from a component to another component but state holds the data.</h3>
        </div>
    );
};

export default Question;