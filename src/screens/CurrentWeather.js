import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name={weatherType['Thunderstorm'].icon} size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Gefühlt wie 5</Text>
        <RowText
          messageOne={'Höchst: 8'}
          messageTwo={'Niedrigste: 4'}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>

      <RowText
        messageOne={'Es ist sonnig'}
        messageTwo={weatherType['Thunderstorm'].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather