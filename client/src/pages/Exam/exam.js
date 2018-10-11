import React, { Component } from "react";
import Questions from "../../components/QuestionBlock/Questions";
import Wrapper from "../../components/Wrapper";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col, Input, Button } from "mdbreact";
import { RadioGroup, ReversedRadioButton, RadioButton } from "react-radio-buttons";
import QuestionAndSelection from "./subcomponents/questionAndSelection.js";
import "./Exam.css";

class Exam extends React.Component {

  constructor(props) {
    super(props);
    this.state = { inputValue: "", inputValue1: "", inputValue2:"", inputValue3:"", inputValue4:"", inputValue5:"", inputValue6:"",inputValue7:"",inputValue8:"",inputValue9:""};
}

answerChange = (value, state) => {
    this.setState({[state]: value})
}

render() {
    return (
        <div>
            <Wrapper>
                <Container>
                    <Jumbotron />
                    {/* <h3>Whats your Favorite Fruit?</h3>
                    <RadioGroup onChange={(tunababy) => this.setState({inputValue: tunababy})} value={this.state.inputValue} vertical>
                        <RadioButton value="apple" iconSize={20}>
                            <p class="buttonText">Apple</p>
                        </RadioButton>
                        <RadioButton value="orange" iconSize={20}>
                            <p class="buttonText">Orange</p>
                        </RadioButton>
                        <RadioButton value="mango" iconSize={20}>
                            <p class="buttonText">Mango</p>
                        </RadioButton>
                        <RadioButton value="peach" iconSize={20}>
                            <p class="buttonText">Peach</p>
                        </RadioButton>
                        <Button color="elegant" type="Submit" onClick={(e) => console.log(this.state)}>
                            Submit
                        </Button>
                    </RadioGroup> */}
                    {/* Question 1 */}
                    < QuestionAndSelection
                        question={"What is the most popular white grape in the world?"}
                        ans1={"Riesling"}
                        ans2={"Pinot Grigio"}
                        ans3={"Sauvignon Blanc"}
                        ans4={"Chardonnay"}
                        state = {"inputValue"}
                        answerChange={this.answerChange} 
                    />

                    < QuestionAndSelection
                        question={"Where is the Moscato D’Asti DOCG located?"}
                        ans1={"Piedmont"}
                        ans2={"Tuscany"}
                        ans3={"Napa"}
                        ans4={"Sicily"}
                        state = {"inputValue1"}
                        answerChange={this.answerChange}
                    />

                    < QuestionAndSelection
                        question={"Where is Mâconnais located?"}
                        ans1={"Bordeaux"}
                        ans2={"Burgundy"}
                        ans3={"Provence"}
                        ans4={"Piedmont"}
                        state = {"inputValue2"}
                        answerChange={this.answerChange}
                    />

                    < QuestionAndSelection
                        question={"What type of wine is produced using the charmat method?"}
                        ans1={"Red"}
                        ans2={"White"}
                        ans3={"Dessert"}
                        ans4={"Sparkling"}
                        state = {"inputValue3"}
                        answerChange={this.answerChange}
                    />

                    < QuestionAndSelection
                        question={"What is the French name for the method of gradually tilting a Champagne bottle from its horizontal position to a vertical one, neck-down, so as to bring the sediment in the neck of the bottle?"}
                        ans1={"Oscillation"}
                        ans2={"Agitation"}
                        ans3={"Remuage"}
                        ans4={"Sauvage"}
                        state = {"inputValue4"}
                        answerChange={this.answerChange}
                    />

                    < QuestionAndSelection
                        question={"What is the least sweet category of Riesling?"}
                        ans1={"Kabinett"}
                        ans2={"Eiswein"}
                        ans3={"Trockenbeerenauslese"}
                        ans4={"Trocken"}
                        state = {"inputValue5"}
                        answerChange={this.answerChange}
                    />

                    < QuestionAndSelection
                        question={"What does “blanc de noir” refer to?"}
                        ans1={"Wines made from grapes harvested at night."}
                        ans2={"Red wine."}
                        ans3={"White wines made from red grapes."}
                        ans4={"It’s another term for Sauvignon Blanc."}
                        state = {"inputValue6"}
                        answerChange={this.answerChange}
                    />

                    < QuestionAndSelection
                        question={"Which grapes are the Graves region of Bordeaux most famous for?"}
                        ans1={"Sauvignon Blanc and Sémillon."}
                        ans2={"Ugni Blanc and Pinot Meunier."}
                        ans3={"Chenin Blanc and Viognier.."}
                        ans4={"Chardonnay and Pinot Noir."}
                        state = {"inputValue7"}
                        answerChange={this.answerChange}
                    />

                    < QuestionAndSelection
                        question={"What causes the phenomenon known as “noble rot”?"}
                        ans1={"Phylloxera."}
                        ans2={"Volatile acidity."}
                        ans3={"Brettanomyces."}
                        ans4={"Bortytis"}
                        state = {"inputValue8"}
                        answerChange={this.answerChange}
                    />

                    < QuestionAndSelection
                        question={"What white grape is blended into some Northern Rhône Syrah-based wines to soften them?"}
                        ans1={"Pinot Gris."}
                        ans2={"Marsanne"}
                        ans3={"Trebbiano."}
                        ans4={"Viognier"}
                        state = {"inputValue9"}
                        answerChange={this.answerChange}
                    />
              <Button color="elegant" type="Submit" onClick={(e) => console.log(this.state)}>
                            Submit
                </Button>        
                </Container>
            </Wrapper>
        </div>
    );
}
}

export default Exam;