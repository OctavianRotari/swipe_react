import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component {
  componentWillMount() {
    // Where is the current position of the object? 0, 0 is the top left corner of the screen;
    this.position = new Animated.ValueXY(0, 0);
    // Where is the object moving/animating to ?
    // modify this.position to x: 200 and y: 500
    // the spring changes the values of the object over an amount of time
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start();
  }

  render() {
    //What is the element that we are attempting to modify over time? Animated.View style={this.position.getLayout()}
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={ styles.ball }/>
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 40,
    borderColor: 'black'
  }
}

export default Ball;


/*
 * Get Initial State
 * Render Component
 * Update State
 * Components rerenders
 * The animations Works completely different than this process is not hanndling by modifying the state
 * it runs completely outside of the state and setState, so the component will not re-render
 */
