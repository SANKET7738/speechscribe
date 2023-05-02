import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import CustomButton from './CustomButton';
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';

WebBrowser.maybeCompleteAuthSession();

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const isMobile = screenWidth <= 768;

function Header() {
    const dispatch = useDispatch();
    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        // TODO: read from .env files
        webClientId: "",
        expoClientId: "",
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
            onPress={() => {
                promptAsync();
            }}
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