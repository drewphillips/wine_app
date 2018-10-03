import React from "react";

const RadioField = (props) => {
    return (<div><span class="input-group-addon">
        <input type="radio" aria-label="..." name="testQ"/>
    </span>
        <span type="text">{props.question}</span></div>)
}
export default RadioField;