import { Text, View, Image } from 'react-native'
import React, { useState } from "react";
import { styles } from './navigation-button.style'
//{item.icon} marche pas pcq il ne prend pas en compte les svg
const NavigationButton = ({ navigation, item }) => {
  return (
    <View 
      style={styles.buttonContainer}
      onTouchEnd={() => navigation.navigate(item.to)}
    >
      <Image source={item.icon} />
      <Text style={styles.buttonText}>
        {item.label}
      </Text>
    </View>
  )
}

export default NavigationButton