import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from './Header';
import Hero from './Hero';
import ValueProps from './ValueProps';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header />
        <Hero />
        <ValueProps />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
  },
});

 