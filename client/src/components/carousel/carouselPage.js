import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';
import "./carousel.css"
class CarouselPage extends Component {
  render(){
    return(
      <Container>
        <h4 className="mt-5 mb-2">Basic example</h4>
        <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NCA0NDQ8NDQcNFREWFhURFRMYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLjcBCgoKDQ0NDw0NDisZFRkrKzc3KystNysrKystLSsrKy0rKysrKysrKysrKystKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAjEAEBAAICAQQCAwAAAAAAAAAAAQIRAzEhElFxsUHBYYGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7aACgAKhAUABUAUAAEBQAEVAAAEqoAAAzWkBhplYDOURrJmAzfDpjWMomNVHVWNqitgAKigAAoigAAAAqAAAAAACAUAAAEABMmWqyCsNsZgMXxW2eRUJRkQekAUWIAoAAAKIAoAAgCiKACAAAAAIAAADFbYoLGc1hl0DEMuhQclZoqPWIqKAAKgChsAAAAA2bADYAAAAACAAAACbAZrSUEW9VIt6ByajLUUcsu6Ln3QR6AEVREtBVAAAFEAURQAAAQFEAXaAAAACAqAAmSpkCQy6DPoHNrFmNxUcc+6rGV81QeoBFSkS1YDQgCgAAAAAAAAAAAAACbAAAAAGaqARnkbjnl2CRpIZ3UoOACo9ZaJUVG2Me2wAAAANqgCiAKJs2CiAKbQA2AAAACbBUACpCrAK5tZ1iA1HPmvUdY8+d3QAFR6qzWqxkiri0zg1QIqQBQAAAAAAAAAAAAABAAAAAEW0YyoM9tRJGgY5ctT5cYvJlu/RjFRZBvSA7VmtVjJFawarGFbAgkUAAAAFEAUQBdiAAAAAAAAACCWgWs6GpAJHPmy/E/trkz18/hwEHTGM4xeTLU/m9KJlyao5APbWK3WMkUx7bc46UEjTKgsEAUDYAAAAAAAGwBNgKIAAloFrK6XQEiZ5a+Uz5Ndd/TjQLdkiyNyKh1NuFu7teTPfx9pIC6GtAPTWK3WKisuk6c61x0GqQQGgSgoIChAAAAAAAAAA2aAQ0WydsZcvsDdsnblnyb68fti7qzFRGpi1MVtk7ENacOTk34nX2nJncvhJAJHSRMY6YwEmKt6EVus1pKDnSeFyjKjqiYX8KgsqsNSgKiAtiTL3XaWA0Od3FnJ7wGzaTKALs2mk0C7nunrielPSC3kZudrXpPSDnpZi6aS2TuiJMV055c0/E/wBcss7e6o6580nXn9ONtvaNTEEkdMcVmLUgEjchIqKCgAoDFZoKhj26AipUgKjSUEUaAGaxkgDNa46Co7AIolUBFAHDmt93EFQQAbxdIoCrAQVYoKAA/9k=" alt="First slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">wine</h3>
                <p>WINEWINEWINE</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src="https://image.freepik.com/free-vector/abstract-white-background-vector-illustration_1407-419.jpg" alt="Second slide" />
                <Mask overlay="black-strong"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">wine</h3>
                <p>some wine education</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NCA0NDQ8NDQcNFREWFhURFRMYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLjcBCgoKDQ0NDw0NDisZFRkrKzc3KystNysrKystLSsrKy0rKysrKysrKysrKystKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAjEAEBAAICAQQCAwAAAAAAAAAAAQIRAzEhElFxsUHBYYGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7aACgAKhAUABUAUAAEBQAEVAAAEqoAAAzWkBhplYDOURrJmAzfDpjWMomNVHVWNqitgAKigAAoigAAAAqAAAAAACAUAAAEABMmWqyCsNsZgMXxW2eRUJRkQekAUWIAoAAAKIAoAAgCiKACAAAAAIAAADFbYoLGc1hl0DEMuhQclZoqPWIqKAAKgChsAAAAA2bADYAAAAACAAAACbAZrSUEW9VIt6ByajLUUcsu6Ln3QR6AEVREtBVAAAFEAURQAAAQFEAXaAAAACAqAAmSpkCQy6DPoHNrFmNxUcc+6rGV81QeoBFSkS1YDQgCgAAAAAAAAAAAAACbAAAAAGaqARnkbjnl2CRpIZ3UoOACo9ZaJUVG2Me2wAAAANqgCiAKJs2CiAKbQA2AAAACbBUACpCrAK5tZ1iA1HPmvUdY8+d3QAFR6qzWqxkiri0zg1QIqQBQAAAAAAAAAAAAABAAAAAEW0YyoM9tRJGgY5ctT5cYvJlu/RjFRZBvSA7VmtVjJFawarGFbAgkUAAAAFEAUQBdiAAAAAAAAACCWgWs6GpAJHPmy/E/trkz18/hwEHTGM4xeTLU/m9KJlyao5APbWK3WMkUx7bc46UEjTKgsEAUDYAAAAAAAGwBNgKIAAloFrK6XQEiZ5a+Uz5Ndd/TjQLdkiyNyKh1NuFu7teTPfx9pIC6GtAPTWK3WKisuk6c61x0GqQQGgSgoIChAAAAAAAAAA2aAQ0WydsZcvsDdsnblnyb68fti7qzFRGpi1MVtk7ENacOTk34nX2nJncvhJAJHSRMY6YwEmKt6EVus1pKDnSeFyjKjqiYX8KgsqsNSgKiAtiTL3XaWA0Od3FnJ7wGzaTKALs2mk0C7nunrielPSC3kZudrXpPSDnpZi6aS2TuiJMV055c0/E/wBcss7e6o6580nXn9ONtvaNTEEkdMcVmLUgEjchIqKCgAoDFZoKhj26AipUgKjSUEUaAGaxkgDNa46Co7AIolUBFAHDmt93EFQQAbxdIoCrAQVYoKAA/9k=" alt="Third slide" />
                <Mask overlay="black-slight"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">WINE</h3>
                <p>more wine education</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="d-block w-100" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NCA0NDQ8NDQcNFREWFhURFRMYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLjcBCgoKDQ0NDw0NDisZFRkrKzc3KystNysrKystLSsrKy0rKysrKysrKysrKystKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAjEAEBAAICAQQCAwAAAAAAAAAAAQIRAzEhElFxsUHBYYGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7aACgAKhAUABUAUAAEBQAEVAAAEqoAAAzWkBhplYDOURrJmAzfDpjWMomNVHVWNqitgAKigAAoigAAAAqAAAAAACAUAAAEABMmWqyCsNsZgMXxW2eRUJRkQekAUWIAoAAAKIAoAAgCiKACAAAAAIAAADFbYoLGc1hl0DEMuhQclZoqPWIqKAAKgChsAAAAA2bADYAAAAACAAAACbAZrSUEW9VIt6ByajLUUcsu6Ln3QR6AEVREtBVAAAFEAURQAAAQFEAXaAAAACAqAAmSpkCQy6DPoHNrFmNxUcc+6rGV81QeoBFSkS1YDQgCgAAAAAAAAAAAAACbAAAAAGaqARnkbjnl2CRpIZ3UoOACo9ZaJUVG2Me2wAAAANqgCiAKJs2CiAKbQA2AAAACbBUACpCrAK5tZ1iA1HPmvUdY8+d3QAFR6qzWqxkiri0zg1QIqQBQAAAAAAAAAAAAABAAAAAEW0YyoM9tRJGgY5ctT5cYvJlu/RjFRZBvSA7VmtVjJFawarGFbAgkUAAAAFEAUQBdiAAAAAAAAACCWgWs6GpAJHPmy/E/trkz18/hwEHTGM4xeTLU/m9KJlyao5APbWK3WMkUx7bc46UEjTKgsEAUDYAAAAAAAGwBNgKIAAloFrK6XQEiZ5a+Uz5Ndd/TjQLdkiyNyKh1NuFu7teTPfx9pIC6GtAPTWK3WKisuk6c61x0GqQQGgSgoIChAAAAAAAAAA2aAQ0WydsZcvsDdsnblnyb68fti7qzFRGpi1MVtk7ENacOTk34nX2nJncvhJAJHSRMY6YwEmKt6EVus1pKDnSeFyjKjqiYX8KgsqsNSgKiAtiTL3XaWA0Od3FnJ7wGzaTKALs2mk0C7nunrielPSC3kZudrXpPSDnpZi6aS2TuiJMV055c0/E/wBcss7e6o6580nXn9ONtvaNTEEkdMcVmLUgEjchIqKCgAoDFZoKhj26AipUgKjSUEUaAGaxkgDNa46Co7AIolUBFAHDmt93EFQQAbxdIoCrAQVYoKAA/9k=" alt = "fourth slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">WINE</h3>
                <p>SOME CONTENT</p>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselPage;



// import React from "react";
// import "./carousel.css";
// // import "./carouselContainer.js";

// const Carousel=({children})=>

// (
// <div id = "carouselExampleFade" className = "carousel slide carousel-fade" data-ride = "carousel">
//   <div className ="carousel-inner">
//     <div className ="carousel-item active">
//       <img className = "d-block w-100" src = "data:image/jpeg;base64,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" alt = "First slide" />
//     </div>
//     <div className = "carousel-item">
//       <img className = "d-block w-100" src = "data:image/jpeg;base64,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" alt = "Second slide" />
//     </div>
//     <div className = "carousel-item">
//       <img className = "d-block w-100" src = ".../800x400?auto=yes&bg=555&fg=333&text=Third slide" alt = "Third slide" />
//     </div>
//   </div>
//   <a className = "carousel-control-prev" href = "#carouselExampleFade" role = "button" data-slide = "prev">
//     <span className = "carousel-control-prev-icon" aria-hidden = "true"></span>
//     <span className = "sr-only">Previous</span>
//   </a>
//   <a className ="carousel-control-next" href = "#carouselExampleFade" role = "button" data-slide = "next">
//     <span className = "carousel-control-next-icon" aria-hidden = "true"></span>
//     <span className = "sr-only">Next</span>
//   </a>
// </div>
// );

// export default Carousel; 