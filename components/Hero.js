import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from './CustomButton';
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';

WebBrowser.maybeCompleteAuthSession();

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const isMobile = screenWidth <= 768; // Change the threshold value as needed

function Hero() {
    const dispatch = useDispatch()
    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: "",
        expoClientId: ""
    })

    useEffect(() => {
        if (response?.type === "success") {
            setToken(response.authentication.accessToken);
            getUserInfo();
        }
    }, [response, token]);

    const getUserInfo = async () => {
        try {
          const response = await fetch(
            "https://www.googleapis.com/userinfo/v2/me",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
    
          const user = await response.json();
          console.log(user);
          dispatch(setUser(user));
          setUserInfo(user);
        } catch (error) {
          // Add your own error handler here
        }
      };
    

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
                onPress={() => {
                    promptAsync();
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
