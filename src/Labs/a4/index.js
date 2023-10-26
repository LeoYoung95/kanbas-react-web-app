import React from "react";
import ReduxExamples from "./ReduxExamples";
import Add from "./Add";
import PassingFunctions from "./PassingFunctions";
import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
function Assignment4() {
    function sayHello() {
        alert("Hello");
    }

    return (
        <div>
            <h1>Assignment 4</h1>
            <ReduxExamples />
            <ParentStateComponent />
            <ArrayStateVariable />
            <ObjectStateVariable />
            <DateStateVariable />
            <StringStateVariables />
            <BooleanStateVariables />
            <Counter />
            <EventObject />
            <PassingFunctions theFunction={sayHello} />
            <ClickEvent />
            <Add a={1} b={2} />

        </div>
    );
}
export default Assignment4;