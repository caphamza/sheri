import React, {useState, useEffect} from 'react'

import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, ActivityIndicator, Dimensions} from 'react-native'

import Hr from "react-native-hr-component";

import Icon from 'react-native-vector-icons/Feather';
import LockIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EyeIcon from "react-native-vector-icons/MaterialCommunityIcons";

const {height, width} = Dimensions.get('screen');
import {Styles} from './styles'

const SignIn = ({navigation}) => {

  const [formSubmitEnabled, setFormSubmitEnabled] = useState(true);
  const [didUpdate, setDidUpdate] = useState(true)

  const [colorEmail, setColorEmail] = useState({borderBottomColor: '#707070', borderBottomWidth: 1,})
  const [colorEmailIcon, setColorEmailIcon] = useState({color: '#707070'})
  const [colorPassword, setColorPassword] = useState({borderBottomWidth: 1, borderBottomColor: '#707070'})
  const [colorPasswordIcon, setColorPasswordIcon] = useState({color: '#707070'})
  const [eyeColor, setEyeColor] = useState({color: '#707070'})

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('');
  const [showEye, setShowEye] = useState(true)

  const [errorMsg, setErrorMsg] = useState('');


  return(
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#FAFAFA'}}>
      <ActivityIndicator size="large" color="white" animating={!formSubmitEnabled} style={{ height: formSubmitEnabled ? 0 :height, width: formSubmitEnabled ? 0 : width, position: 'absolute', zIndex: 1, backgroundColor: 'black', opacity: 0.7 }} />
        <View style={Styles.container}>
          <Text style={Styles.heading}>Welcome back</Text>
          <Text style={Styles.text1}>Sign in to continue</Text>
          <View style={Styles.inputBox}>
            
            <View style={[Styles.inputIconBox, colorEmail]}>
              <Icon name='user' style={[Styles.icon, colorEmailIcon ]}/>
              <TextInput
                autoCapitalize='none'
                style={[Styles.input]}
                placeholder='Email'
                value={email}
                onChangeText={(e) => {setEmail(e)}}
                onFocus={() => {setColorEmail({borderColor: '#4d94ff', borderBottomWidth: 2 }), setColorEmailIcon({color: '#4d94ff',})}}
                onBlur={() => {if(email.length==0){setColorEmail({borderColor: '#707070', borderBottomWidth: 1}), setColorEmailIcon({color: '#707070'})}}}
              />
            </View>
            {<Text style={{ color: '#FF1500' }}>{emailError}</Text>}

            <View style={[Styles.inputIconBox, colorPassword]}>
              <LockIcon name='lock-outline' style={[Styles.icon, colorPasswordIcon ]}/>
                <TextInput
                  autoCapitalize='none'
                  style={[Styles.input]}
                  placeholder="Password"
                  value={password}
                  onChangeText={ p => setPassword(p)}
                  secureTextEntry={showEye}
                  onFocus={() =>{setColorPassword({borderBottomWidth: 2, borderColor: '#4d94ff',}), setColorPasswordIcon({color:'#4d94ff',})}}
                  onBlur={() =>{if(password.length===0){setColorPassword({borderBottomWidth: 1, borderColor: '#707070'}), setColorPasswordIcon({color: '#707070'})}}}
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
                    }

                  }}
                />
            </View>
            {<Text style={{ color: '#FF1500' }}>{passwordError}</Text>}
            {!!errorMsg && <Text style={{ color: 'red' }}>{errorMsg}</Text>}
          </View>
          <View style={Styles.forgot}>
            <Text style={Styles.forgotText} onPress={() => {navigation.navigate('ForgotPassword')
            setDidUpdate(false)}}>Forgot Password?</Text>
          </View>

          <View style={Styles.btnBox}>
            <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('DashBoard')}> 
              <Text style={Styles.btnText}>sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.continueBox}>
            <Hr lineColor="#E6E6E6" thickness={1} textPadding={20} text="Or continue with" textStyles={{color: '#707070', fontFamily: 'verdana'}}/>
          </View>
          <View style={Styles.footer}>
            <Text style={Styles.text3}>Don't have an account? <Text style={Styles.text3Sub} onPress={() => {navigation.navigate('SignUp')}}>Sign up</Text></Text>
          </View>
        </View>    
    </ScrollView>
  )
}

export default SignIn