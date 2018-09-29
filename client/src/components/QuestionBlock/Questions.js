import React from 'react';
import RadioField from "./RadioField";

const Questions = ({q, q1, q2, q3, q4 }) => (
    <div>
    <div class="row">
        <h3>{q}</h3>
    </div>
    <div class="row">
        <div class="input-group">
            <div class="col-lg-12">
                <RadioField question={q1} />
            </div>
            <div class="col-lg-12">
                <RadioField question={q2} />
            </div>
            <div class="col-lg-12">
                <RadioField question={q3} />
            </div>
            <div class="col-lg-12">
                <RadioField question={q4} />
            </div>
                <button class="btn btn-default" type="button">Submit</button>
            </div>
        </div>
    </div>
);

export default Questions