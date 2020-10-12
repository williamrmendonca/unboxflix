import React, {Component} from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Animated } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';


export default class FabButton extends Component{
  animation = new Animated.Value(0);
  interval = 0

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1
    let cont = 0
    clearInterval(this.interval);

    Animated.spring(this.animation, {
      toValue,
      friction: 4,
      useNativeDriver: true,
    }).start();

    this.open = !this.open;

    console.log('Open', this.open)
    if (this.open) {
      console.log('Cont: ',cont)
      this.interval = setInterval(() => {
        cont++
        if (cont > 2) {
          clearInterval(this.interval);
          this.toggleMenu()
          return;
        }
      }, 1000);
    }
  }

  displayAlert = (mens) => {
    alert(mens)
    this.toggleMenu()
  }

  render(){
    const btn1Style = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -60]
          })
        },
        {
          translateX: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -30]
          })
        }
      ]
    }

    const btn2Style = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -120]
          })
        },
        {
          translateX: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -30]
          })
        }
      ]
    }

    const btn3Style = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -180]
          })
        },
        {
          translateX: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -30]
          })
        }
      ]
    }

    const btn4Style = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -240]
          })
        },
        {
          translateX: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -30]
          })
        }
      ]
    }


    const menuStyle ={
      transform:[
        {
          translateX: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -24]
          })
        }
      ]
    }
    
    return (
      <View style={[styles.container, this.props.style]}>

        <TouchableWithoutFeedback onPress={()=> this.displayAlert('Home')}>
          <Animated.View style={[styles.button, styles.secondary, btn4Style, this.props.bgColor]}>
            <AntDesign name="home" size={20} color={this.props.iconColor} />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=> this.displayAlert('Filmes')}>
          <Animated.View style={[styles.button, styles.secondary, btn3Style, this.props.bgColor]}>
            <MaterialIcons name="local-movies" size={20} color={this.props.iconColor} />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=> this.displayAlert('Séries')}>
          <Animated.View style={[styles.button, styles.secondary, btn2Style, this.props.bgColor]}>
            <MaterialIcons name="live-tv" size={20} color={this.props.iconColor} />
          </Animated.View>
        </TouchableWithoutFeedback>
  
        <TouchableWithoutFeedback onPress={ ()=> this.displayAlert('Procurar')}>
          <Animated.View style={[styles.button, styles.secondary, btn1Style, this.props.bgColor]}>
            <AntDesign name="search1" size={20} color={this.props.iconColor} />
          </Animated.View>
        </TouchableWithoutFeedback>
  
        <TouchableWithoutFeedback onPress={this.toggleMenu} style={{zIndex: 10, elevation: 50,position: 'absolute' }} >
          <Animated.View style={[styles.button, styles.menu, menuStyle, {alignItems: 'flex-start', paddingLeft: 15}, this.props.bgColor ]}>
            <AntDesign name="swap" size={24} color={this.props.iconColor} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
        );
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    elevation: 1
  },
  button:{
    position: 'absolute',
    width: 120,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#00213B',
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
    zIndex: 1,
    elevation: 5
  },
  menu:{
    // backgroundColor: '#00213B'
  },
  secondary:{
    right: -10,
    width: 48,
    height: 48,
    borderRadius: 48 / 2 ,
    zIndex: 1,
    elevation: 5
  },
  primary:{
    width: 0,
    height: 0,
    borderRadius: 48 / 2 ,
    zIndex: 1,
    elevation: 5
  }

});

