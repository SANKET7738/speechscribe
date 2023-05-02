import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import CustomButton from './CustomButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const isMobile = screenWidth <= 768;

function Header() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, isMobile && styles.mobileTitle]}>SpeechScribe</Text>
      <View style={styles.buttonsContainer}>
        {/* <CustomButton 
            color = "black"
            title = "Login"
            textColor= "white"
        /> */}
        <CustomButton 
            color = "#0F11B8"
            title = "Sign In"
            textColor = "white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
    paddingHorizontal: '5%',
    paddingTop: '3%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white",
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  mobileTitle: {
    fontSize: 18
  }
});

export default Header;