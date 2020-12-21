import React, {useState} from 'react'

import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, ActivityIndicator, Dimensions, SafeAreaView, KeyboardAvoidingView, Alert} from 'react-native'

import EyeIcon from "react-native-vector-icons/MaterialCommunityIcons";
import BackArrow from 'react-native-vector-icons/Fontisto'

const {height, width} = Dimensions.get('screen');
import {Styles} from './styles'

const signUp = ({navigation}) => {
  const [formSubmitEnabled, setFormSubmitEnabled] = useState(true);

  const [colorEmail, setColorEmail] = useState({ borderBottomColor: '#707070', borderBottomWidth: 1})
  const [colorFirstName, setColorFirstName] = useState({borderBottomColor: '#707070', borderBottomWidth: 1})
  const [colorLastName, setColorLastName] = useState({borderBottomColor: '#707070', borderBottomWidth: 1})
  const [colorPassword, setColorPassword] = useState({borderBottomColor: '#707070', borderBottomWidth: 1})
  const [colorConfirmPassword, setColorConfirmPassword] = useState({borderBottomColor: '#707070', borderBottomWidth: 1})
  const [eyeColor, setEyeColor] = useState({color: '#707070'})
  const [cEyeColor, setCEyeColor] = useState({color: '#707070'})

  const [term, setTerm] = useState(false)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('');
  const [firstName, setFirstName] = useState('')
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('')
  const [lastNameError, setLastNameError] = useState('');
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termError, setTermError] = useState('');

  const [showEye, setShowEye] = useState(true)
  const [cShowEye, setCShowEye] = useState(true)

  const [errorMsg, setErrorMsg] = useState('');


  return(
    <SafeAreaView style={{flex:1, backgroundColor: '#FAFAFA'}}>
      <KeyboardAvoidingView>
        <ActivityIndicator size="large" color="white" animating={!formSubmitEnabled} style={{ height: formSubmitEnabled ? 0 :height, width: formSubmitEnabled ? 0 : width, position: 'absolute', zIndex: 1, backgroundColor: 'black', opacity: 0.7 }} />
        <View>
          <BackArrow name='angle-left' style={Styles.backArrow} onPress={() => {navigation.goBack()}}/>
        </View>
        <View style={{height: height/1.2}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <View style={Styles.constainer}>
                <Text style={Styles.heading}>Create Account</Text>
                <Text style={Styles.text1}>Sign up to continue</Text>
                <View style={Styles.inputBox}>
                  
                  <TextInput
                    autoCapitalize='none'
                    style={[Styles.input, colorEmail]}
                    placeholder='Email address'
                    value={email}
                    onChangeText={(e) => {setEmail(e)}}
                    onFocus={() => {setColorEmail({borderColor: '#4d94ff', borderBottomWidth: 2 })}}
                    onBlur={() => {if(email.length==0){setColorEmail({borderColor: '#707070', borderBottomWidth: 1})}}}
                  />
                  {<Text style={{ color: '#FF1500' }}>{emailError}</Text>}

                  <TextInput
                    autoCapitalize='words'
                    style={[Styles.input, colorFirstName]}
                    placeholder='First name'
                    value={firstName}
                    onChangeText={(f) => {setFirstName(f)}}
                    onFocus={() => {setColorFirstName({borderColor: '#4d94ff', borderBottomWidth: 2 })}}
                    onBlur={() => {if(firstName.length==0){setColorFirstName({borderColor: '#707070', borderBottomWidth: 1})}}}
                  />
                  {<Text style={{ color: '#FF1500' }}>{firstNameError}</Text>}

                  <TextInput
                    autoCapitalize='words'
                    style={[Styles.input, colorLastName]}
                    placeholder='Last name'
                    value={lastName}
                    onChangeText={(l) =>{setLastName(l)}}
                    onFocus={() => {setColorLastName({borderColor: '#4d94ff', borderBottomWidth: 2 })}}
                    onBlur={() => {if(lastName.length==0){setColorLastName({borderColor: '#707070', borderBottomWidth: 1})}}}
                  />
                  {<Text style={{ color: '#FF1500' }}>{lastNameError}</Text>}

                  <View style={[Styles.inputIconBox, colorPassword]}>
                  {/* <View> */}
                    <TextInput
                      autoCapitalize='none'
                      style={[Styles.input, ]}
                      placeholder="Password"
                      value={password}
                      onChangeText={ p => setPassword(p)}
                      secureTextEntry={showEye}
                      onFocus={() => {setColorPassword({borderColor: '#4d94ff', borderBottomWidth: 2})}}
                      onBlur={() => {if(password.length===0){setColorPassword({borderColor: '#707070', borderBottomWidth: 1})}}}
                    />
                    <EyeIcon 
                      name={showEye ? "eye-off" : "eye"}
                      style={[Styles.eyeIcon, eyeColor]}
                      onPress={() => {
                        if (showEye === true) {
                          setShowEye(false) 
                          setEyeColor({color: '#4d94ff',})
                        }else{
                          setShowEye(true) 
                          setEyeColor({color: '#707070'})
                        }}}
                      />
                  </View>
                  {<Text style={{ color: '#FF1500' }}>{passwordError}</Text>}

                  <View style={[Styles.inputIconBox, colorConfirmPassword]}>
                    <TextInput
                      autoCapitalize='none'
                      style={[Styles.input, ]}
                      placeholder="Password"
                      value={confirmPassword}
                      onChangeText={ p => setConfirmPassword(p)}
                      secureTextEntry={cShowEye}
                      onFocus={() => {setColorConfirmPassword({borderColor: '#4d94ff', borderBottomWidth: 2})}}
                      onBlur={() => {if(password.length===0){setColorConfirmPassword({borderColor: '#707070', borderBottomWidth: 1})}}}
                    />
                    <EyeIcon 
                      name={cShowEye ? "eye-off" : "eye"}
                      style={[Styles.eyeIcon, cEyeColor]}
                      onPress={() => {
                        if (cShowEye === true) {
                          setCShowEye(false) 
                          setCEyeColor({color: '#4d94ff',})
                        }else{
                          setCShowEye(true) 
                          setCEyeColor({color: '#707070'})
                        }}}
                      />
                  </View>
                  {<Text style={{ color: '#FF1500' }}>{confirmPasswordError}</Text>}
                </View>
                <View style={Styles.termsBox}>
          
                  <Text style={Styles.text2}>I accept the <Text style={Styles.text2Sub} onPress={() => navigation.navigate('Terms')}>terms and conditions</Text></Text>
                </View>
                {<Text style={{ color: '#FF1500' }}>{termError}</Text>}
                {!!errorMsg && <Text style={{ color: 'red' , marginTop: 10}}>{errorMsg}</Text>}
                <View style={Styles.btnBox}>
                  <TouchableOpacity style={Styles.btn} > 
                    <Text style={Styles.btnText}>sign up</Text>
                  </TouchableOpacity>
                </View>
              </View>   
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default signUp