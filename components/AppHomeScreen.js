import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


function AppHomeScreen() {
  return (
    <View style={styles.container}>
        <Text>App Screen</Text>
    </View>
  )
}

export default AppHomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})