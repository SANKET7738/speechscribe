import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from './CustomButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const isMobile = screenWidth <= 768; // Change the threshold value as needed

function Hero() {
  return (
    <LinearGradient
      colors={['black', '#A03333', '#23135A']}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 0.5, 1]}
    >
      <View style={styles.container}>
        <Text style={[styles.title, isMobile && styles.mobileTitle]}>
          Harness the power of speech for limitless productivity and creativity
        </Text>
        <Text style={styles.subtitle}>Empower your voice, streamline your workflow, ignite your productivity</Text>
        <View style={styles.buttonRow}>
            <CustomButton 
                color = "white"
                title = "Get a Demo"
                textColor = "black"
                style={{
                    marginRight: 10,
                }}
            />
            <CustomButton 
                color = "#0F11B8"
                title = "Sign Up"
                textColor = "white"
                style = {{
                    marginLeft: 10,
                }}
            />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    height: screenHeight * 0.6,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  mobileTitle: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection : 'row',
    marginVertical: 30,
    justifyContent: 'space-between',
  }
});

export default Hero;
