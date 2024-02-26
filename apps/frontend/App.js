import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); // Get the screen height

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Welcome to PropelPixel</Text>
        <Text style={styles.subheading}>Ready to change the world?</Text>
        <TouchableOpacity style={styles.button} onPress={() => alert('Start Pressed!')}>
         <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonSpacing]}
          onPress={() => navigation.navigate('CameraScreen')}>
          <Text style={styles.buttonText}>Go to Camera</Text>
        </TouchableOpacity>
        </View>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/Guideline-illus.png')} style={styles.windmill} />
      </View>
    </SafeAreaView>
  );
};
 


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#141416', // Black background
 },
 content: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   paddingBottom: height * 0.35, // Pushes the content up by 20%
 },
 heading: {
   color: '#fff', // White color for the heading
   fontSize: 50,
   fontWeight: 'bold',
   textAlign: 'center',
   marginBottom: 15, // Margin between the heading and subheading
 },
 subheading: {
   color: '#fff', // White color for the subheading
   fontSize: 17,
   fontWeight: 'bold',
   textAlign: 'center',
   marginBottom: 32, // Margin between the subheading and button
 },
 button: {
   paddingHorizontal: 34, // Horizontal padding
   paddingVertical: 23, // Vertical padding
   backgroundColor: '#3AB041', // Green background
   borderRadius: 30, // Border radius
   elevation: 3, // Drop shadow for Android
   shadowColor: '#000', // For iOS shadow
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
 },
buttonSpacing: {
  marginTop: 16, // Adds spacing between buttons
},
 buttonText: {
   color: '#fff', // White text for the button
   fontSize: 15,
   fontWeight: 'bold',
 },
 imageContainer: {
   position: 'absolute',
   bottom: 0,
   width: '100%',
 },
 windmill: {
   flex: 1,
   width: '100%',
   resizeMode: 'contain',
 },
});


export default HomeScreen;

