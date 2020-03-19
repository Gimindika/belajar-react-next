import React, { Component } from "react";
import Arrow from "../Arrow";
import ImageSlide from "../ImageSlide";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };
  }

  data = this.props.data;
  timer = this.props.timer;

  previousSlide = () => {
    const lastIndex = this.data.length - 1;
    const { currentIndex: currentIndex } = this.state;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;

    this.setState({
      currentIndex: index
    });
  };

  nextSlide = () => {
    const lastIndex = this.data.length - 1;
    const { currentIndex: currentIndex } = this.state;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    this.setState({
      currentIndex: index
    });
  };

  componentDidMount = () => {
    setInterval(() => this.nextSlide(), this.timer);
  };

  render() {
    return (
      <div className="carousel">
        <ImageSlide data={this.data[this.state.currentIndex]} />
        <div className="container-direction">
          <Arrow
            direction="left"
            clickFunction={this.previousSlide}
            glyph="&#9664;"
          />

          <Arrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;"
          />
        </div>
        <style jsx>{`
          .container-direction {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #e9efef;
          }
        `}</style>
      </div>
    );
  }
}

export default Carousel;
