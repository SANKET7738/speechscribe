import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function CustomButton({ color, title, onPress, textColor, style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    // minWidth: 120,
    width: 120,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomButton;
