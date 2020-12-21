import {StyleSheet, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('screen');

export const Styles = StyleSheet.create({
  backArrow: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 18,
    marginBottom: 10,
    color: 'black'
  },
  constainer: {
    marginTop: 18,
    marginLeft: 22,
    marginRight: 23
  },
  heading: {
    fontSize: 24,
    textTransform: 'uppercase',
    // fontFamily: 'Beckman',
    fontWeight: 'bold'
  },
  text1:{
    marginLeft: 2,
    marginTop: 9,
    fontSize: 14,
    fontFamily: 'verdana'
  },
  inputBox: {
    marginTop: 34,
    marginLeft: 3
  },
  input: {
    fontSize: 16,
    marginTop: 25,
    paddingBottom: 6,
    paddingLeft: 3,
    fontFamily: 'verdana'
    // borderBottomWidth: 1,
    // borderColor: '#707070',
  },
  inputIconBox:{
    flexDirection: "row",
    flexWrap: 'wrap',
    flex: 1,
    // marginTop: 5,
  },
  passwordContainer:{
    flexDirection: "row",
    flexWrap: 'wrap',
    flex: 1,
  },
  passwordInput:{
    width: '100%',
    fontSize: 16,
    marginLeft: 2,
    paddingBottom: 5,
    paddingLeft: 3,
  },
  eyeIcon:{
    position: "absolute",
    marginTop: Platform.OS === 'ios' ? 26 : 42,
    right: 0,
    paddingBottom: 5,
    fontSize: 22
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
    // color: colors.primary.color
  },
  unChecked: {
    backgroundColor: 'white'
  },
  text2:{
    marginLeft: 10,
    color: '#707070',
    fontFamily: 'verdana'
  },
  text2Sub:{
    color: '#4d94ff',
    fontFamily: Platform.OS === 'ios' ? 'verdana-Bold' : 'verdanaBold',
  },
  btnBox:{
    alignItems: 'center',
  },
  btn:{
    marginTop: 40,
    width: width/1.6,
    height: 40,
    borderRadius: 50,
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
    // fontFamily: 'Beckman',
    fontWeight: 'bold'
  },
  continueBox:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 32,
  },
  text3:{
    color: '#707070',
    fontSize: 12,
    fontFamily: 'verdana'
  },
  buttonsBox:{
    marginTop: 28,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 50
  },
})