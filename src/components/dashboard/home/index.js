import React, {useEffect, useState} from 'react'

import {View, Text, SafeAreaView, ScrollView} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import MenuIcon from 'react-native-vector-icons/Entypo'

import {Styles} from './styles'

const dashboard = () => {

  const [value, setValue] = useState('')

  const onSubmit = () => {
    console.log('Searching', value)
  }

  return(
    <SafeAreaView style={{backgroundColor: '#99c2ff'}}>
      <View style={Styles.header}>
        <MenuIcon name='menu' style={Styles.menuIcon}/>
        <Text style={Styles.heading}>Home</Text>
        <Text style={{marginRight: 34}}></Text>
      </View>

      <ScrollView style={{backgroundColor: '#F2F2F2'}}>
        <View style={Styles.container}> 
          <View style={{marginTop: 30}}>
          
            <TextInput
              style={Styles.searchBar}
              placeholder='search'
              value={value}
              onChangeText={v => {setValue(v)}}
              onSubmitEditing={onSubmit}
            />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default dashboard