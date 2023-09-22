import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const City = () => {
   const { container, imageLayout, cityName, countryName, cityText, populationWrapper, populationText, riseSetWrapper, riseSetText } = styles
   return (
      <SafeAreaView style={container}>
         <ImageBackground source={require('../../assets/city-background.jpg')} style={imageLayout} >
            <Text style={[cityName, cityText]} >London</Text>
            <Text style={[countryName, cityText]} >UK</Text>
            <View style={populationWrapper}>
               <Feather name={'user'} size={50} color={'red'} />
               <Text style={populationText}>80000</Text>
            </View>
            <View style={riseSetWrapper}>
               <Feather name={'sunrise'} size={50} color={'white'} />
               <Text style={riseSetText}>6:30</Text>
               <Feather name={'sunset'} size={50} color={'white'} />
               <Text style={riseSetText}>20:45</Text>
            </View>
         </ImageBackground>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0
   },
   imageLayout: {
      flex: 1
   },
   cityName: {
      fontSize: 40,
   },
   countryName: {
      fontSize: 30,
   },
   cityText: {
      justifyContent: 'center',
      alignSelf: 'center',
      fontWeight: 'bold',
      color: 'white'
   },
   populationWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30
   },
   populationText: {
      fontSize: 25,
      marginLeft: 7.5,
      color: 'red',
      fontWeight: 'bold'
   },
   riseSetWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: 30
   },
   riseSetText: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold'
   }
})

export default City