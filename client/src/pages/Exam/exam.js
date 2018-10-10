import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col, Input, Button } from "mdbreact";
import { RadioGroup, ReversedRadioButton, RadioButton } from "react-radio-buttons";
import "./exam.css";

class Exam extends React.Component {

  handleChange = event => { };

  render() {
    return (
      <div>
        <Wrapper>
          <Container>
            <Jumbotron />
            {/* Question 1 */}
            <RadioGroup onChange={this.onChange} vertical>
              <h3>What is the most popular white grape in the world?</h3>
                
                <RadioButton value="Riesling" iconSize={20}>
                <p class="buttonText">Riesling</p>
                </RadioButton>

                <RadioButton value="Pinot Grigio" iconSize={20}>
                <p class="buttonText">Pinot Grigio</p>
                </RadioButton>
                
                <RadioButton value="Sauvignon Blanc" iconSize={20}>
                <p class="buttonText">Sauvignon Blanc</p>
                </RadioButton>
                
                <RadioButton value="Chardonnay" iconSize={20}>
                <p class="buttonText">Chardonnay</p>
                </RadioButton>            
            </RadioGroup>
            {/* Question 2 */}
            <RadioGroup onChange={this.onChange} vertical>
              <h3>Where is the Moscato D’Asti DOCG located?</h3>
              
              <RadioButton value="Piedmont" iconSize={20}>
              <p class="buttonText">Piedmont</p>
              </RadioButton>
              
              <RadioButton value="Tuscany" iconSize={20}>
              <p class="buttonText">Tuscany</p>
              </RadioButton>
              
              <RadioButton value="Napa" iconSize={20}>
              <p class="buttonText">Napa</p>
              </RadioButton>
              
              <RadioButton value="Sicily" iconSize={20}>
              <p class="buttonText">Sicily</p>
              </RadioButton>
            </RadioGroup>         
            {/* Question 3 */}
            <RadioGroup onChange={this.onChange} vertical>
              <h3>Where is Mâconnais located?</h3>
              
              <RadioButton value="Bordeaux" iconSize={20}>
              <p class="buttonText">Bordeaux</p>
              </RadioButton>
              
              <RadioButton value="Burgundy" iconSize={20}>
              <p class="buttonText">Burgundy</p>
              </RadioButton>
              
              <RadioButton value="Provence" iconSize={20}>
              <p class="buttonText">Provence</p>
              </RadioButton>
              
              <RadioButton value="Piedmont" iconSize={20}>
              <p class="buttonText">Piedmont</p>
              </RadioButton>
            </RadioGroup>
            {/* Question 4 */}
            <RadioGroup onChange={this.onChange} vertical>
              <h3>What type of wine is produced using the charmat method?</h3>
              
              <RadioButton value="Red" iconSize={20}>
              <p class="buttonText">Red</p>
              </RadioButton>
              
              <RadioButton value="White" iconSize={20}>
              <p class="buttonText">White</p>
              </RadioButton>
              
              <RadioButton value="Dessert" iconSize={20}>
              <p class="buttonText">Dessert</p>
              </RadioButton>
              
              <RadioButton value="Sparkling" iconSize={20}>
              <p class="buttonText">Sparkling</p>
              </RadioButton>
            </RadioGroup>
            {/* Question 5 */}
            <RadioGroup onChange={this.onChange} vertical>
              <h3>What is the French name for the method of gradually tilting a Champagne bottle from its horizontal position to a vertical one, neck-down, so as to bring the sediment in the neck of the bottle?</h3>
              
              <RadioButton value="Oscillation" iconSize={20}>
              <p class="buttonText">Oscillation</p>
              </RadioButton>
              
              <RadioButton value="Agitation" iconSize={20}>
              <p class="buttonText">Agitation</p>
              </RadioButton>
              
              <RadioButton value="Remuage" iconSize={20}>
              <p class="buttonText">Remuage</p>
              </RadioButton>
              
              <RadioButton value="Sauvage" iconSize={20}>
              <p class="buttonText">Sauvage</p>
              </RadioButton>
            </RadioGroup>
            {/* Question 6 */}
            <RadioGroup onChange={this.onChange} vertical>
              <h3>What is the least sweet category of Riesling?</h3>
              
              <RadioButton value="Kabinett" iconSize={20}>
              <p class="buttonText">Kabinett</p>
              </RadioButton>
              
              <RadioButton value="Eiswein" iconSize={20}>
              <p class="buttonText">Eiswein</p>
              </RadioButton>
              
              <RadioButton value="Trockenbeerenauslese" iconSize={20}>
              <p class="buttonText">Trockenbeerenauslese</p>
              </RadioButton>
              
              <RadioButton value="Trocken" iconSize={20}>
              <p class="buttonText">Trocken</p>
              </RadioButton>
            </RadioGroup>
            {/* Question 7 */}
            <RadioGroup onChange={this.onChange} vertical>
              <h3>What does “blanc de noir” refer to?</h3>
              
              <RadioButton value="Wines made from grapes harvested at night" iconSize={20}>
              <p class="buttonText">Wines made from grapes harvested at night.</p>
              </RadioButton>
              
              <RadioButton value="Red wine" iconSize={20}>
              <p class="buttonText">Red wine.</p>
              </RadioButton>
              
              <RadioButton value="White wines made from red grapes" iconSize={20}>
              <p class="buttonText">White wines made from red grapes.</p>
              </RadioButton>
              
              <RadioButton value="It’s another term for Sauvignon Blanc" iconSize={20}>
              <p class="buttonText">It’s another term for Sauvignon Blanc.</p>
              </RadioButton>
            </RadioGroup>
            {/* Question 8 */}
            <RadioGroup onChange={this.onChange} vertical>
              <h3>Which grapes are the Graves region of Bordeaux most famous for?</h3>
              
              <RadioButton value="Sauvignon Blanc and Sémillon" iconSize={20}>
              <p class="buttonText">Sauvignon Blanc and Sémillon.</p>
              </RadioButton>
              
              <RadioButton value="Ugni Blanc and Pinot Meunier" iconSize={20}>
              <p class="buttonText">Ugni Blanc and Pinot Meunier.</p>
              </RadioButton>
              
              <RadioButton value="Chenin Blanc and Viognier" iconSize={20}>
              <p class="buttonText">Chenin Blanc and Viognier.</p>
              </RadioButton>
              
              <RadioButton value="Chardonnay and Pinot Noir" iconSize={20}>
              <p class="buttonText">Chardonnay and Pinot Noir.</p>
              </RadioButton>
            </RadioGroup>                                               
            {/* Question 9 */}
            <RadioGroup onChange={this.onChange} vertical>
              <h3>What causes the phenomenon known as “noble rot”?</h3>
              
              <RadioButton value="Phylloxera" iconSize={20}>
              <p class="buttonText">Phylloxera.</p>
              </RadioButton>
              
              <RadioButton value="Volatile acidity" iconSize={20}>
              <p class="buttonText">Volatile acidity.</p>
              </RadioButton>
              
              <RadioButton value="Brettanomyces" iconSize={20}>
              <p class="buttonText">Brettanomyces.</p>
              </RadioButton>
              
              <RadioButton value="Bortytis" iconSize={20}>
              <p class="buttonText">Bortytis.</p>
              </RadioButton>
            </RadioGroup>
            {/* Question 10 */}
            <RadioGroup onChange={this.onChange} vertical>
              <h3>What white grape is blended into some Northern Rhône Syrah-based wines to soften them?</h3>
              
              <RadioButton value="Pinot Gris" iconSize={20}>
              <p class="buttonText">Pinot Gris.</p>
              </RadioButton>
              
              <RadioButton value="Marsanne" iconSize={20}>
              <p class="buttonText">Marsanne.</p>
              </RadioButton>
              
              <RadioButton value="Trebbiano" iconSize={20}>
              <p class="buttonText">Trebbiano.</p>
              </RadioButton>
              
              <RadioButton value="Viognier" iconSize={20}>
              <p class="buttonText">Viognier.</p>
              </RadioButton>
            </RadioGroup>                             
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Exam;
