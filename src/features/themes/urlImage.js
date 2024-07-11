import React from "react";
import { Image } from "react-konva";

class URLImage extends React.Component {
    state = {
      image: null,
    };
    componentDidMount() {
      this.loadImage();
    }
    componentDidUpdate(oldProps) {
      if (oldProps.src !== this.props.src) {
        this.loadImage();
      }
    }
    componentWillUnmount() {
      this.image.removeEventListener('load', this.handleLoad);
    }
    loadImage() {
      // save to "this" to remove "load" handler on unmount
      this.image = new window.Image();
      this.image.src = this.props.src;
      this.image.addEventListener('load', this.handleLoad);
    }
    handleLoad = () => {
      // after setState react-konva will update canvas and redraw the layer
      // because "image" property is changed
      this.setState({
        image: this.image,
      });
      // if you keep same image object during source updates
      // you will have to update layer manually:
      // this.imageNode.getLayer().batchDraw();
    };
    render() {
      return (
        <Image
          x={this.props.x}
          y={this.props.y}
          height={this.props.height}
          width={this.props.width}
          image={this.state.image}
          scale={this.props.scale}
          cornerRadius={this.props.radius}
          stroke={this.props.strokeColor}
          strokeWidth={this.props.strokeWidth}
          ref={(node) => {
            this.imageNode = node;
          }}
        />
      );
    }
  }

  export default URLImage;