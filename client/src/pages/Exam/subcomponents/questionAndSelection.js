import React from 'react'
import { RadioGroup, ReversedRadioButton, RadioButton } from "react-radio-buttons";

class questionAndSelection extends React.Component {

    state = {inputValue: ""}

    returnValue = () => {
        this.props.answerChange(this.state.inputValue, this.props.state)
    }

    render(){
        return( 
            <RadioGroup value={this.state.inputValue} onChange={e => this.setState({inputValue: e}, () => this.returnValue())} vertical>
                <h3>{this.props.question}</h3>
                  
                  <RadioButton value={this.props.ans1} iconSize={20}>
                  <p class="buttonText">{this.props.ans1}</p>
                  </RadioButton>
            
                  <RadioButton value={this.props.ans2} iconSize={20}>
                  <p class="buttonText">{this.props.ans2}</p>
                  </RadioButton>
                  
                  <RadioButton value={this.props.ans3} iconSize={20}>
                  <p class="buttonText">{this.props.ans3}</p>
                  </RadioButton>
                  
                  <RadioButton value={this.props.ans4} iconSize={20}>
                  <p class="buttonText">{this.props.ans4}</p>
                  </RadioButton>            
              </RadioGroup>
        )
    }
}

export default questionAndSelection