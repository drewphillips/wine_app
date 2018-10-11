
import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";


import {
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Mask,
  Container
} from "mdbreact";
import "./Chardonnay.css";
import chardonnay1 from "../../assets/images/chardonnay1.png";
import chardonnay2 from "../../assets/images/chardonnay2.png";
import chardonnay3 from "../../assets/images/chardonnay3.png";
import chardonnay4 from "../../assets/images/chardonnay4.png";
import chardonnay5 from "../../assets/images/chardonnay5.png";
import chardonnay6 from "../../assets/images/chardonnay6.png";
import chardonnay7 from "../../assets/images/chardonnay7.png";
import chardonnay8 from "../../assets/images/chardonnay8.png";
import chardonnay9 from "../../assets/images/chardonnay9.png";
import chardonnay10 from "../../assets/images/chardonnay10.png";
import chardonnays from "../../assets/images/chardonnays.png";
import champagne from "../../assets/images/champagne.png";
import coolclimate from "../../assets/images/coolclimate.png";
import taittinger from "../../assets/images/taittinger.jpg";
import blancdeblancs from "../../assets/images/blancdeblancs.png";
import chablis from "../../assets/images/chablis.png";
import mersault from "../../assets/images/mersault.png";
import mersaultbottle from "../../assets/images/mersaultbottle.png";
import malo from "../../assets/images/malo.png";
import burgundy from "../../assets/images/Burgundy-map.png";
import winegrapes from "../../assets/images/winegrapes-shutterstock.jpg";


class Chardonnay extends Component {
  render() {
    return (
      <Wrapper>
      <Container>
        <h4 className="mt-5 mb-2" />
        <Carousel
          activeItem={1}
          showControls={true}
          showIndicators={false}
          interval={false}
          className="z-depth-1"
        >
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img
                  className="chardonnay1"
                  src={chardonnay1}
                  alt="First slide"
                />
              </View>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img
                  className="chardonnay2"
                  src={chardonnay2}
                  alt="2nd slide"
                />{" "}
              </View>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img
                  className="chardonnay3"
                  src={chardonnay3}
                  alt="3rd slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img
                  className="chardonnay5"
                  src={chardonnay5}
                  alt="4th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="5">
              <View>
                <img
                  className="chardonnay4"
                  src={chardonnay4}
                  alt="5th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="6">
              <View>
                <img className="burgundy" src={burgundy} alt="6th slide" />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="7">
              <View>
                <img
                  className="chardonnay6"
                  src={chardonnay6}
                  alt="7th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="8">
              <View>
                <img
                  className="chardonnay7"
                  src={chardonnay7}
                  alt="9th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="9">
              <View>
                <img
                  className="chablis"
                  src={chablis}
                  alt="9th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="10">
              <View>
                <img
                  className="mersault"
                  src={mersault}
                  alt="10th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            
            <CarouselItem itemId="11">
              <View>
                <img
                  className="chardonnay8"
                  src={chardonnay8}
                  alt="10th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="12">
              <View>
                <img
                  className="chardonnays"
                  src={chardonnays}
                  alt="10th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="13">
              <View>
                <img
                  className="chardonnay9"
                  src={chardonnay9}
                  alt="10th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="14">
              <View>
                <img
                  className="chardonnay10"
                  src={chardonnay10}
                  alt="10th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="15">
              <View>
                <img className="chardonnay12" src={malo} alt="10th slide" />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="16">
              <View>
                <img className="champagne" src={champagne} alt="10th slide" />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="17">
              <View>
                <img className="taittinger" src={taittinger} alt="10th slide" />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="18">
              <View>
                <img className="blancdeblancs" src={blancdeblancs} alt="10th slide" />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="19">
              <View>
                <img className="coolclimate" src={coolclimate} alt="10th slide" />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="20">
              <View>
                <img className="winegrapes" src={winegrapes}  alt="10th slide" />{" "}
                <Mask overlay="black-slight" />
              </View>
              <CarouselCaption>
                <h1 className="h1-responsive">Congratulations on Completing Our Chardonnay Course!</h1>
                <a className="a-responsive">Review Flash Cards | </a>
                <a className="a-responsive" href="/exam">Take Exam | </a>
                <a className="a-responsive" href="/chardonnay">Retake Course</a>

              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
      </Wrapper>
    );
  }
}

export default Chardonnay;


























