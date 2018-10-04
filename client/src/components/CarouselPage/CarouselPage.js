import React, { Component } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Mask,
  Container
} from "mdbreact";
import "./CarouselPage.css";
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
import malo from "../../assets/images/malo.png";
import burgundy from "../../assets/images/Burgundy-map.png";

class CarouselPage extends Component {
  render() {
    return (
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
                  className="chardonnay8"
                  src={chardonnay8}
                  alt="10th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="10">
              <View>
                <img
                  className="chardonnay9"
                  src={chardonnay9}
                  alt="10th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="11">
              <View>
                <img
                  className="chardonnay10"
                  src={chardonnay10}
                  alt="10th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="12">
              <View>
                <img className="chardonnay12" src={malo} alt="10th slide" />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselPage;
