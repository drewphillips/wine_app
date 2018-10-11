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
import "./WineTasting.css";
import winetasting0 from "../../assets/images/winetasting0.png";
import winetasting1 from "../../assets/images/winetasting1.png";
import winetasting2 from "../../assets/images/winetasting2.png";
import winetasting3 from "../../assets/images/winetasting3.png";
import afterwinetasting3 from "../../assets/images/afterwinetasting3.png";
// import berries from "../../assets/images/berries.png";
// import winetasting4 from "../../assets/images/winetasting4.png";
import winetasting5 from "../../assets/images/winetasting5.png";
import winetasting6 from "../../assets/images/winetasting6.png";
import winegrapes from "../../assets/images/winegrapes-shutterstock.jpg";



class WineTasting extends Component {
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
                  className="winetasting0"
                  src={winetasting0}
                  alt="First slide"
                />
              </View>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img
                  className="winetasting1"
                  src={winetasting1}
                  alt="2nd slide"
                />{" "}
              </View>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img
                  className="winetasting2"
                  src={winetasting2}
                  alt="3rd slide"
                />{" "}
                <Mask overlay="black-wineslight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img
                  className="winetasting3"
                  src={winetasting3}
                  alt="4th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="5">
              <View>
                <img
                  className="afterwinetasting3"
                  src={afterwinetasting3}
                  alt="5th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            {/* <CarouselItem itemId="6">
              <View>
                <img className="berries" src={berries} alt="6th slide" />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem> */}
            {/* <CarouselItem itemId="7">
              <View>
                <img
                  className="winetasting4"
                  src={winetasting4}
                  alt="7th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem> */}
            <CarouselItem itemId="6">
              <View>
                <img
                  className="winetasting5"
                  src={winetasting5}
                  alt="9th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="7">
              <View>
                <img
                  className="winetasting5"
                  src={winetasting6}
                  alt="9th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="8">
              <View>
                <img
                  className="winegrapes"
                  src={winegrapes}
                  alt="9th slide"
                />{" "}
                <Mask overlay="black-slight" />
              </View>
           
              <CarouselCaption>
                <h1 className="h1-responsive">Congratulations on Completing Our Wine Tasting Course!</h1>
                <a className="a-responsive" href="/coursenav" >Choose Another Course | </a>
                <a className="a-responsive" href="/winetasting">Restart Course</a>

              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
      </Wrapper>
    );
  }
}

export default WineTasting;












