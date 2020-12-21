import React,{useEffect} from 'react'

import {View, Text, SafeAreaView} from 'react-native'

const splash = ({navigation}) => {

  useEffect(() => {
    navigation.navigate('SignIn')
  },[])
  
  return (
    <SafeAreaView>
      <View>
        <Text>Splash Screen</Text>
      </View>
    </SafeAreaView>  
  )
}

export default splash