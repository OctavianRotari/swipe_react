# Create React Native App

1. by installing the react native cli as shown on the official documentation
2. Expo XDE
3. Create React Native App
4. Sketch

## Why Expo XDE?

Expo makes it easier to run the applications that we create on an actual device rather than a simulator.
Expo has a bunch of added functionality.
 - Everything React Native does
	- Basic Components
	- Basic Device Api's
	- Nasty setup on Simulators
 - Extra Device API's (as camera and others)
 - Easy push Notifications
 - Easy On Device Testing
 - Common Extra Components

# Swipe

## Animation systems in React Native

 1. LayoutAnimation
	- easy to setup
	- Not much control
	- Some things might get animated that we don't want to be
 2. Animated
	- Far more complicated to set up
	- complicated animations
	- good for handling gesture animations

## Questions to ask yourself when thinking about creating a navigation

	1. Where is the item right now? Exact X,Y position on the screen
	2. Where is the element moving to?
	3. Which element are moving? What element we are trying to animate on the screen?

## Properties that sit inside the Animated Module

- Values: value, valueXY... : What's the current position of the element being animated?
- Types: Spring, Decay, Timing... : How is the animation changing?
- Components: View, Text Image... : Apply the animation's current to an actual component.

##  Animation life cycle
	- Component + Animated.View rendered
	- Animated.View inspects its props, finds animated value
	- ValueXY starts changing
	- Animated.View sees updated value from ValueXY
	- Animated.View updates its styling

## Notes for tinder card
	- Before starting coding is good practice to start thinking about the methods and the props that we will pass 
	down to the component, form the parent component.

# Difference between Animated module and PanResponder

	- PanRensponder handles the user input, handles the input.
	- The actual movement of the Component on the screen is handled by the Animation Module, handles the output.

## Questions to ask before using PanResponder
	1. What are we touching ?
	2. What component handles touch ? Because it may be that the user touches a specific component but we want the animation to be executed by a different component.
	3. How is the gesture changing ?

## Pan responder
	- onStartShouldSetPandResponder: any time a user taps on the screen this function will be called, if we return true from this function we want that the componennt that this function is placed in to respond to the user interraction.
	- onPanResponderMove: this is a callback and is called anytime a user drags the finger on the screen. onPanResponderRelease: this is callback called when the user releases the finger.

	- The gesture object from pan responder can be accessed only when the onPanResponderMove is executing and then is set back to 0 as soon as it finishes unless we save that object manually.

### Gesture Object
	- dx and dy: are the total distances that the user has moved their finger in a single gesture, total life cycle.
	- moveX and moveY: is where the user has clicked on the screen.
	- vx and vy: are units on how quickly the use has moved the object.
	- numberActiveTouches: is the number of of fingers that the user uses to touch the screen.

## Interpolation system in react native

When building an app we usually want to tie a property to another to create a certain effect or animation. Example: as the user moves the card on the screen 
I also want to to change the rotation as well.
The purpose of the interpolation system is to link two different scales one input one and an output one, it takes an input value and as that value changes it will output another unrelated value that is proportional to the input value.
We should pass, when possible dynamic values to the interpolation system for example if we want to pass the with as an input value we should consider using dimension.get.width so even if the width of the screen changes dramatically the proportion will still be correct.

## Difference between Animated.spring and Animated.timing.

	- Spring: gives a bouncy feeling.
	- Timing: is more linear.

## defaultProps

When the component is created the component will look at the props that is provided and if is not provided with the props that are listed inside defaultProps{} it will automatically assign the properties inside defaultProps{}.

## Flashing images

When an image container is promoted from a View to a Animate.View, react native re-fetches the image so this causes that flashing image. A solution to this problem is to make the container equal to Animated.View in both cases.


## LayoutAnimation

``` javascript
    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true); //android
        LayoutAnimation.spring();
    }
``` 

It tells the component to animate whatever changes are made to the component when the component will re-render.

## DeckWrapUp

### Animation systems in react native

|LayoutAnimation|Animated|
|---------------|--------|
| Easy to setup | Far more complicated to set up |
| Not much control | Allows for more complicated animations |
| Some things might get animated that we don't want them to be| You Probably need this if you want to handle gesture animations PanResponder|

### The Animated Module

||||
|-|-|-|
| Values| Value, ValueXY | What's the current position of the element being animated |
| Types | Spring, Decay, Timing | How is the animation changing |
| Components | View, Text, Image | Apply the animation's current position to an actual component |


### PanResponder

||||
|-|-|-|
| onStartShoulSetPanResponder | this is a function that is being called when the user preses the finger on the screen | It gives us the chance to say that we want this component to be responsible for this gesture () => true |
| onPanResponderMove | this function is being called when the user moves the finger on the screen | we can use this to move the component on the screen by following the finger |
| onPanResponderRelease | is called when the user lifts the finger from the screen | this gives us the possibility to decide what to do with the component when the user releases |
