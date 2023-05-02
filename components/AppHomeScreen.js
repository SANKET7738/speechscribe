import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Alert, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { processFontFamily } from 'expo-font';
import { Audio } from 'expo-av';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const isMobile = screenWidth <= 768;

function AppHomeScreen() {
  const user = useSelector(state => state.userState.currentUser);
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [countdown, setCountdown] = useState(180);
  const [timer, setTimer] = useState(null);

  console.log(user);

  const startRecording = async () => {
    const { status } = await Audio.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission not granted', 'You must enable audio recording permission in settings');
      return;
    }
  
    // Check if the recording is already in progress
    if (isRecording) {
      console.log('Recording is already in progress.');
      return;
    }
  
    const newRecording = new Audio.Recording();
    try {
      await newRecording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await newRecording.startAsync();
      setIsRecording(true);
      setRecording(newRecording);
    } catch (error) {
      console.error('Failed to start recording:', error);
      setIsRecording(false);
      setRecording(null);
    }
  };

  const stopRecording = async () => {
    setIsRecording(false);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
    setRecording(null);
  }

  const handleFloatingButtonPress = async () => {
    if (!isRecording) {
      setCountdown(3 * 60); // Reset the countdown to 3 minutes
      await startRecording();
      setModalVisible(true);
    } else {
      clearTimeout(timer);
      await stopRecording();
      setModalVisible(false);
    }
  };

  useEffect(() => {
    if (isRecording && countdown > 0) {
      const timerId = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      setTimer(timerId);
    } else if (isRecording && countdown === 0) {
      clearTimeout(timer);
      stopRecording();
      setModalVisible(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isRecording, countdown]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>SpeechScribe</Text>
        <Text style={styles.subTitle}>Transform your speech into structured insights</Text>
        <View style={styles.titleBorder}></View>
      </View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{Math.floor(countdown / 60)}:{countdown % 60 < 10 ? '0' + (countdown % 60) : countdown % 60}</Text>
            <TouchableOpacity
              style={styles.floatingButton}
              onPress={handleFloatingButtonPress}
            >
              <MaterialIcons name={ "pause"} size={34} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {
        !modalVisible ? (
          <TouchableOpacity
            style={styles.floatingButton}
            onPress={handleFloatingButtonPress}
          >
            <MaterialIcons name={isRecording ? "mic-off" : "mic"} size={34} color="white" />
          </TouchableOpacity> 
        ) : <></>
      }
      {/* <TouchableOpacity
        style={styles.floatingButton}
        onPress={handleFloatingButtonPress}
      >
        <MaterialIcons name={isRecording ? "mic-off" : "mic"} size={34} color="white" />
      </TouchableOpacity> */}
    </View>
  );
}

// ... (rest of the code)


export default AppHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '10%',
  },
  floatingButtonText: {
    fontSize: 30,
    color: 'white',
  },
  title : {
    fontSize: isMobile ? 36 : 48,
    fontWeight: 'bold',
    // fontFamily: 'Inter_900Black'
    textAlign: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: isMobile ? '8%' : '5%',
    textAlign: 'center',
    alignItems: 'center'
  }, 
  subTitle: {
    fontSize : isMobile ? 16 : 24,
    textAlign: 'center',
    marginTop: isMobile ? 10 : 20,
    color: 'grey',
  },
  titleBorder: {
    height: isMobile ? 5 : 6,
    width: "30%",
    marginTop: isMobile ? 6 : 10,
    borderRadius: 20,
    backgroundColor: '#0F11B8',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: isMobile ? 350: 450,
    height: isMobile ? 250 : 300,
    borderRadius: 20,
    padding: 20,
  },
  modalText: {
    fontSize: 42,
    fontWeight: 'bold',
    paddingBottom: 40,
  },
  pauseButton: {
    position: 'absolute',
    bottom: '5%',
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  pauseButtonText: {
    fontSize: 18,
    color: 'white',
  },

});