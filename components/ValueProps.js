import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const isMobile = screenWidth <= 768;

function ValueProps() {
  return (
    <View style={styles.container}>
        <Text style={[styles.title, isMobile && styles.mobileTitle]}>Voice-driven efficiency for work, life and beyond</Text>
        <View style = {styles.tableView}>
            <View style={styles.tableColumn}>
                <View style={styles.tableRow}>
                    <Image 
                        source={{ uri: 'https://assets-global.website-files.com/60e5f2de011b86acebc30db7/6349bbf26532b970c01f028e_Icon%20-%20click.svg'}}
                        style={styles.valueImage}
                    />
                    <View style={styles.valueText}>
                        <Text style={styles.valueTitle}>Speak your thoughts</Text>
                        <Text style={styles.valueSubtitle}>Transform unstructured voice notes into clearly summarized text</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <Image 
                        source={{ uri: 'https://assets-global.website-files.com/60e5f2de011b86acebc30db7/6349bbf26532b970c01f028e_Icon%20-%20click.svg'}}
                        style={{ width: 40, height: 40}}
                    />
                    <View style={styles.valueText}>
                        <Text style={styles.valueTitle}>Speak your thoughts</Text>
                        <Text style={styles.valueSubtitle}>Transform unstructured voice notes into clearly summarized text</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <Image 
                        source={{ uri: 'https://assets-global.website-files.com/60e5f2de011b86acebc30db7/6349bbf26532b970c01f028e_Icon%20-%20click.svg'}}
                        style={{ width: 40, height: 40}}
                    />
                    <View style={styles.valueText}>
                        <Text style={styles.valueTitle}>Speak your thoughts</Text>
                        <Text style={styles.valueSubtitle}>Transform unstructured voice notes into clearly summarized text</Text>
                    </View>
                </View> 
            </View>
            <View style={styles.tableColumn}>
                <View style={styles.tableRow}>
                    <Image 
                        source={{ uri: 'https://assets-global.website-files.com/60e5f2de011b86acebc30db7/6349bbf26532b970c01f028e_Icon%20-%20click.svg'}}
                        style={{ width: 40, height: 40}}
                    />
                    <View style={styles.valueText}>
                        <Text style={styles.valueTitle}>Speak your thoughts</Text>
                        <Text style={styles.valueSubtitle}>Transform unstructured voice notes into clearly summarized text</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <Image 
                        source={{ uri: 'https://assets-global.website-files.com/60e5f2de011b86acebc30db7/6349bbf26532b970c01f028e_Icon%20-%20click.svg'}}
                        style={{ width: 40, height: 40}}
                    />
                    <View style={styles.valueText}>
                        <Text style={styles.valueTitle}>Speak your thoughts</Text>
                        <Text style={styles.valueSubtitle}>Transform unstructured voice notes into clearly summarized text</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <Image 
                        source={{ uri: 'https://assets-global.website-files.com/60e5f2de011b86acebc30db7/6349bbf26532b970c01f028e_Icon%20-%20click.svg'}}
                        style={{ width: 40, height: 40}}
                    />
                    <View style={styles.valueText}>
                        <Text style={styles.valueTitle}>Speak your thoughts</Text>
                        <Text style={styles.valueSubtitle}>Transform unstructured voice notes into clearly summarized text</Text>
                    </View>
                </View> 
            </View>
        </View>
    </View>
  )
}

export default ValueProps

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '2%',
      paddingHorizontal: '5%',
    },
    title: {
      fontSize: isMobile ? 18 : 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    tableView: {
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tableColumn: {
      flexDirection: 'column',
      marginHorizontal: isMobile ? 0 : 20,
      marginBottom: isMobile ? 20 : 0,
    },
    tableRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '100%',
      paddingVertical: 20,
    },
    valueText: {
      flexDirection: 'column',
      marginLeft: 30,
    },
    valueTitle: {
      fontWeight: 'bold',
      fontSize: isMobile ? 14 : 18,
    },
    valueSubtitle: {
      fontSize: isMobile ? 12 : 18,
      paddingVertical: 10,
    },
    valueImage: {
        height: isMobile ? 40 : 40,
        width: isMobile ? 40 : 40,
    }
  });