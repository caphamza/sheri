import {StyleSheet, Dimensions, Platform} from 'react-native'

const {height, width} = Dimensions.get('screen');


export const Styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 22,
    marginRight: 23,
    flex:1,
  },
  heading: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold'

  },
  text1:{
    marginLeft: 2,
    marginTop: 9,
    fontSize: 14,
    fontFamily: 'verdana'
  },
  inputBox: {
    marginTop: 14,
    marginLeft: 3
  },
  inputIconBox:{
    flexDirection: "row",
    flexWrap: 'wrap',
    flex: 1,
    marginTop: 44,
  },
  icon:{
    marginTop: Platform.OS === 'ios' ? -4 : 12,
    fontSize: 22,
  },
  eyeIcon:{
    position: "absolute",
    marginTop: Platform.OS === 'ios' ? -2 : 12,
    right: 0,
    paddingBottom: 5,
    fontSize: 22
  },
  input: {
    fontSize: 16,
    marginLeft: 2,
    paddingBottom: 2,
    paddingLeft: 8,    
    fontFamily: 'verdana'
  },
  passwordInput:{
    width: '100%',
    fontSize: 16,
    marginLeft: 2,
    paddingBottom: 5,
    paddingLeft: 8,
  },
  passwordIcon:{
    color: 'red',
  },
  passwordContainer:{
    flexDirection: "row",
    flexWrap: 'wrap',
    flex: 1,
  },
  forgot:{
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  forgotText:{
    fontSize: 12,
    color: '#4d94ff',
    textDecorationLine: 'underline',
    fontFamily: 'verdana'
  },
  termsBox:{
    marginTop: 41,
    marginLeft: 5,
    borderRadius: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkbox: {
    margin: -3,
  },
  checked: {
    backgroundColor: 'white',
    color: 'red'
  },
  unChecked: {
    backgroundColor: 'white'
  },
  text2:{
    marginLeft: 10,
    color: '#4d94ff',
  },
  text2Sub:{
    color: '#4d94ff',
  },
  btnBox:{
    alignItems: 'center',
  },
  btn:{
    marginTop: 35,
    width: width/1.6,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#4d94ff',
    shadowColor: '#4d94ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 3,
  },
  btnText: {
    fontSize: 16,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  continueBox:{
    marginTop: 32,
  },
  line:{
    borderBottomWidth: 1, 
    borderColor: '#E6E6E6', 
    width: width/4, 
    // paddingHorizontal: 5,   
  },
  text3:{
    color: '#707070',
    fontSize: 12,
    paddingHorizontal: 5,
    alignSelf: 'center',
    fontFamily: 'verdana'
  },
  footerContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer:{
    marginTop: 45,
    marginBottom: 16,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text3: {
    fontSize: 12
  },
  text3Sub:{
    color: '#4d94ff',
    textDecorationLine: 'underline',
    fontFamily: Platform.OS === 'ios' ? 'verdana-Bold' : 'verdanaBold',
  }
})